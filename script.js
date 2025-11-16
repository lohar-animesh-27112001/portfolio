document.addEventListener("DOMContentLoaded", () => {

const portfolio = document.getElementById("portfolio");
const home = document.getElementById("home");
const projects = document.getElementById("projects");
const education = document.getElementById("education");
const contact = document.getElementById("contact");

const homeSection = document.getElementById("home_section");
const projectsSection = document.getElementById("projects_section");
const educationSection = document.getElementById("education_section");
const contactSection = document.getElementById("contact_section");

portfolio.addEventListener("click", () => {
    if(homeSection.classList.contains("hidden")) {
        homeSection.classList.add("home");
        homeSection.classList.remove("hidden");
        home.classList.add("currbtn");
        if(projectsSection.classList.contains("projects")) {
            projectsSection.classList.remove("projects");
            projectsSection.classList.add("hidden");
            projects.classList.remove("currbtn");
        }
        if(educationSection.classList.contains("education")) {
            educationSection.classList.remove("education");
            educationSection.classList.add("hidden");
            education.classList.remove("currbtn");
        }
        if(contactSection.classList.contains("contact")) {
            contactSection.classList.remove("contact");
            contactSection.classList.add("hidden");
            contact.classList.remove("currbtn");
        }
    }
});

home.addEventListener("click", () => {
    if(homeSection.classList.contains("hidden")) {
        homeSection.classList.add("home");
        homeSection.classList.remove("hidden");
        home.classList.add("currbtn");
        if(projectsSection.classList.contains("projects")) {
            projectsSection.classList.remove("projects");
            projectsSection.classList.add("hidden");
            projects.classList.remove("currbtn");
        }
        if(educationSection.classList.contains("education")) {
            educationSection.classList.remove("education");
            educationSection.classList.add("hidden");
            education.classList.remove("currbtn");
        }
        if(contactSection.classList.contains("contact")) {
            contactSection.classList.remove("contact");
            contactSection.classList.add("hidden");
            contact.classList.remove("currbtn");
        }
    }
});

projects.addEventListener("click", () => {
    if(projectsSection.classList.contains("hidden")) {
        projectsSection.classList.add("projects");
        projectsSection.classList.remove("hidden");
        projects.classList.add("currbtn");
        if(homeSection.classList.contains("home")) {
            homeSection.classList.remove("home");
            homeSection.classList.add("hidden");
            home.classList.remove("currbtn");
        }
        if(educationSection.classList.contains("education")) {
            educationSection.classList.remove("education");
            educationSection.classList.add("hidden");
            education.classList.remove("currbtn");
        }
        if(contactSection.classList.contains("contact")) {
            contactSection.classList.remove("contact");
            contactSection.classList.add("hidden");
            contact.classList.remove("currbtn");
        }
    }
});

education.addEventListener("click", () => {
    if(educationSection.classList.contains("hidden")) {
        educationSection.classList.add("education");
        educationSection.classList.remove("hidden");
        education.classList.add("currbtn");
        if(homeSection.classList.contains("home")) {
            homeSection.classList.remove("home");
            homeSection.classList.add("hidden");
            home.classList.remove("currbtn");
        }
        if(projectsSection.classList.contains("projects")) {
            projectsSection.classList.remove("projects");
            projectsSection.classList.add("hidden");
            projects.classList.remove("currbtn");
        }
        if(contactSection.classList.contains("contact")) {
            contactSection.classList.remove("contact");
            contactSection.classList.add("hidden");
            contact.classList.remove("currbtn");
        }
    }
});

contact.addEventListener("click", () => {
    if(contactSection.classList.contains("hidden")) {
        contactSection.classList.add("contact");
        contactSection.classList.remove("hidden");
        contact.classList.add("currbtn");
        if(homeSection.classList.contains("home")) {
            homeSection.classList.remove("home");
            homeSection.classList.add("hidden");
            home.classList.remove("currbtn");
        }
        if(projectsSection.classList.contains("projects")) {
            projectsSection.classList.remove("projects");
            projectsSection.classList.add("hidden");
            projects.classList.remove("currbtn");
        }
        if(educationSection.classList.contains("education")) {
            educationSection.classList.remove("education");
            educationSection.classList.add("hidden");
            education.classList.remove("currbtn");
        }
    }
});

document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // let res = await fetch("/save-message", {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(data)
    // });

    // let result = await res.text();
    document.getElementById("responseMsg").innerText = "Message saved";

    document.getElementById("name").value = ""; 
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});

});