 function getLogin(){
    
    if(!((LoginList[0].userMail ==document.getElementById("floatingInput").value) && (LoginList[0].password ==document.getElementById("floatingPassword").value) )){

        alert("Wrong Email Or Password - Enter Correct Data!");
        
        }
        
        window.location.assign("ProfilePage.html");
    }
    

var  LoginList= [
    {
    userMail:"1111@gmail.com",
    password: "12345",
    }  
 ]

