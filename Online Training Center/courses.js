document.addEventListener("DOMContentLoaded" , function()
    {
    getCourses();
    })
var  coursesList= [
    {
    coursePic:".\\courses\\ds.jpg",
    courseName: "Data Science",
    coursedescription: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge from data across a broad range of application domains.",
    },
    {
        coursePic:".\\slider\\code.jpg",
        courseName: "Web Designing",
        coursedescription: "The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.",
    },

    {
        coursePic:".\\courses\\sd.png",
        courseName: "Software Development",
        coursedescription: "Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software. Software itself is the set of instructions or programs that tell a computer what to do.",
    },
    {
    coursePic:".\\slider\\mbdd.jpg",
    courseName: "Networking",
    coursedescription: "The practice of transporting and exchanging data between nodes over a shared medium in an information system.",
    },
    {
        coursePic:".\\courses\\cs.jpg",
        courseName: "CyberSecurity",
        coursedescription: "Cyber security is how individuals and organisations reduce the risk of cyber attack. Cyber security's core function is to protect the devices we all use.",
    },

    {
        coursePic:".\\imgs\\IT.jpg",
        courseName: "BioInformatics",
        coursedescription:"Bioinformatics is defined as the application of tools of computation and analysis to the capture and interpretation of biological data. ",
    },
    
 ]

 function getCourses(){
    var courses =  document.querySelector('#tble')
    for (let i = 0; i < coursesList.length; i++) {
    var course = `
    
        <div class="col-lg-4">
                    <img class="bd-placeholder-img rounded-circle"  src=${coursesList[i].coursePic} alt="it" width="140"
                        height="140">

                    <h2 class="fw-normal"> ${coursesList[i].courseName} </h2>
                    <p>  ${coursesList[i].coursedescription}</p>
                    <button class="btn btn-secondary" onclick="location.href='./Course Page.html' ">View details &raquo; </button>
        </div>
     `
    courses.insertAdjacentHTML('beforeend',course);
    
 }
 
}
