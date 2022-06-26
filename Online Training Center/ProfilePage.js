document.addEventListener("DOMContentLoaded" , function()
    {
    getProfile();
    })
var  ProfileList= [
    {
    userID:"1111",
    userName: "Angelina Weber",
    userEmail: "1111@gmail.com",
    userphone:  "+90/123456789",
    userprofession: "Web Developer and Designer",
    userexperience: " Expert",
    hourlyRate: "10$/hr",
    totalProjects: "230",
    englishLevel: "Expert",
    Avability: " 6 months",
    }


    
 ]

 function getProfile(){
    var profiles =  document.getElementById('myTabContent');
   
    var profile = `
   
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label> User Id</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p> ${ProfileList[0].userID}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p> ${ProfileList[0].userName}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${ProfileList[0].userEmail} </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${ProfileList[0].userphone}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${ProfileList[0].userprofession}</p>
                                        </div>
                                    </div>
                                    
                                            <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <label>Experience</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>${ProfileList[0].userexperience}</p>
                                                            </div>
                                                        </div>
                                       
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <label>Total Projects</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>${ProfileList[0].totalProjects}</p>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <label>English Level</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>${ProfileList[0].englishLevel}</p>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <label>Availability </label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>${ProfileList[0].Avability}</p>
                                                            </div>
                                                        </div>
                                               
                                            </div>
                    
            
     `
    profiles.insertAdjacentHTML('beforeend',profile);
    



 
}