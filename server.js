console.log("Running from:", __dirname);
const express = require("express");
const fs = require("fs");
const ExcelJS = require("exceljs");
const app = express();

app.use(express.json());
app.use(express.static("./")); // serve index.html

app.post("/save-message", async (req, res) => {
    let { name, email, message } = req.body;

    // Limit message to max 100 characters
    if (message.length > 100) {
        message = message.substring(0, 100);
    }

    const filePath = "messages.xlsx";
    let workbook;

    if (fs.existsSync(filePath)) {
        workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
    } else {
        workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet("Messages");
        sheet.addRow(["Name", "Email", "Message", "Time"]);
    }

    const sheet = workbook.getWorksheet("Messages");

    // LIMIT TO MAXIMUM 20 ROWS
    // First row is header, so data rows start from row 2.
    while (sheet.rowCount > 21) {
        sheet.spliceRows(2, 1);  // remove OLD row 2 every time
    }

    // Add new message at the bottom
    sheet.addRow([
        name,
        email,
        message,
        new Date().toLocaleString()
    ]);

    await workbook.xlsx.writeFile(filePath);

    res.send("Message saved (max 20 rows kept).");
});


app.listen(3000, () => console.log("Server running on http://localhost:3000"));
