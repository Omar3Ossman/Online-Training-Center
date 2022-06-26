var  SignUpList= [
    {
    userMail:"1111@gmail.com",
    password: "12345",
    Address:"St.2-City-3",
    MobilePhone:"012345678",
    Country:"Egypt",
    ZIP:"3030",
    }  
 ]
 function getSignUp(){
    
    if(!((SignUpList[0].userMail ==document.getElementById("inputEmail4").value) && (SignUpList[0].password ==document.getElementById("inputPassword4").value) ) && (SignUpList[0].Address ==document.getElementById("inputAddress").value) && (SignUpList[0].Country ==document.getElementById("country").value) && (SignUpList[0].MobilePhone ==document.getElementById("mobile").value) && (SignUpList[0].ZIP ==document.getElementById("inputZip").value))
        {

        alert("Complete your sign up data!");
        
        }
        
        window.location.assign("ProfilePage.html");
    }