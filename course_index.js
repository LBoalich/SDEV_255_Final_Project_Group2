// Get courses from database
/*
addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("") //replace with backend url
    const courses = await response.json
})
*/

// create courses for testing purposes
const courses = [
    {
        name: "Website Development", 
        subject: "Computer Science", 
        credits: 3, 
        description: "Full-stack website development class using HTML, CSS, Javascript, Bootstrapt, React, Node.js with server deployment."
    },
    {
        name: "Content Management Systems", 
        subject: "Computer Science", 
        credits: 3, 
        description: "Use Wordpress and Webflow to understand Content Management Systems."
    }
]

// instantiate blank html
let html = ""

// Add courses to html courses
for (let course of courses) {
    html += `<div id="course">
        <p><strong>Name:</strong> ${course.name}</p>
        <p><strong>Subject Area:</strong> ${course.subject}</p>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Descritpion:</strong> ${course.description}</p>   
    </div>`
}

// add html to document
document.querySelector("#courseList").innerHTML = html
