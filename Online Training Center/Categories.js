document.addEventListener("DOMContentLoaded" , function()
    {
    getCategories();
    })
var  categoriesList= [
    {
    categoryName: "Information Technology",
    categoryPic:".\\imgs\\IT.jpg",
    categoryDuration:"180min",
    },
    {
    categoryName: "Accounting & Finance",
    categoryPic:".\\imgs\\finance.jpg",
    categoryDuration:"60 mins",
    },
    {
    categoryName: "Civil Engineering",
    categoryPic:".\\imgs\\civil.jpg",
    categoryDuration:"120 mins",
    },
    {
    categoryName: "Project Management",
    categoryPic:".\\imgs\\project.jpg",
    categoryDuration:"100 mins",
    },
    {
    categoryName: "Sales and Marketing",
    categoryPic:".\\imgs\\sales.jpg",
    categoryDuration:"50 mins",
    },
    {
    categoryName: "Energy & Renewable Energy",
    categoryPic:".\\imgs\\eng.jpeg",
    categoryDuration:"70 mins",
    },
 ]

 function getCategories(){
    var categories =  document.querySelector('#categories')
    for (let i = 0; i < categoriesList.length; i++) {
    var category = `
    <div class="col">
                        <div class="card shadow-sm">
                      
                             <img class="bd-placeholder-img card-img-top" src=${categoriesList[i].categoryPic} alt="it" width="110" height="200">


                            <div class="card-body">
                                <p class="card-text">${categoriesList[i].categoryName}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="location.href='./CategoryCourses.html'">View</button>
                                        
                                    </div>
                                    <small class="text-muted">${categoriesList[i].categoryDuration}</small>
                                </div>
                            </div>
                        </div>
                    </div>`
    categories.insertAdjacentHTML('beforeend',category);
    
 }
 
}

 