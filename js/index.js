const coursesGrid = document.querySelector('#courses-grid')
let courses = [
    {
        title: "Java",
        description: "Java ☕ course showcasing the basics of the language and how to use it to build real life projects.",
        class: "java",
        youtubeLink: "https://www.youtube.com/playlist?list=PLQ458rlhpsURhfJcAczIcvVBMbzbJ-Gfd"
    },
    {
        title: "JavaFX",
        description: "Java FX Playlist showcasing the basics of the language and how to use it to build real life projects.",
        class: "javafx",
        youtubeLink: "https://www.youtube.com/playlist?list=PLQ458rlhpsUTYrcTKcTWT1JhGSyJ1RO2W"
    },
    {
        title: "C Basics",
        description: "The basics of C: Variables, Data Types, Functions, Pointers, etc...",
        class: "c",
        youtubeLink: "https://www.youtube.com/playlist?list=PLQ458rlhpsUQVPTLbxMIguTddtanKi7eE"
    },
    {
        title: "Netlify",
        description: "How to use Netlify to deploy your websites using drag & drop, GitHub 🐱🦑 and the CLI tool.",
        class: "netlify",
        youtubeLink: "https://www.youtube.com/playlist?list=PLQ458rlhpsUTvGO1-zy8UHFpmN8eTKe_m"
    },
    {
        title: "CSS Grid",
        description: "CSS grid 🔗 as simple as it gets along with step by step project tutorials.",
        class: "css",
        youtubeLink: "https://www.youtube.com/playlist?list=PLQ458rlhpsUQewvD-N25L2J-xATtqiVd0"
    },
]

courses.map(course =>{
    coursesGrid.innerHTML += `
    <div class="card ${course.class}">
        <div class="card-title">
            <h3>
                <a href="${course.youtubeLink}" target="_blank">
                    ${course.title}
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </h3>
        </div>
        <div class="card-body">
            <p>${course.description}</p>
        </div>
    </div>`
})
