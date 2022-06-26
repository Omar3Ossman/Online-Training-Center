var checkoutList= [
    {
    firstname:"angelina",
    lastname:"webster",
    username:"angelina webster",
    email:"1111@gmail.com",
    Address1:"St.2-City-3",
    Address2:"cairo",
    Country:"Egypt",
    state:"Cairo",
    ZIP:"3030",
    payment:"credit card",
    nameoncredit:"angelina",
    cardnumber:"11223344",
    expiration:"2024",
    cvv:"123",
    }  
 ];

 function getcheckout(){
     var a= checkoutList[0].firstname ==document.getElementById("firstName").value;
     var b =checkoutList[0].lastname ==document.getElementById("lastName").value;
     var c =checkoutList[0].username ==document.getElementById("username").value;
     var d =checkoutList[0].email ==document.getElementById("email").value;
     var e =checkoutList[0].Address1 ==document.getElementById("address").value;
     var f =checkoutList[0].Address2 ==document.getElementById("address2").value;
     var g = checkoutList[0].Country ==document.getElementById("country").value;
     var h =checkoutList[0].state ==document.getElementById("state").value;
     var i = checkoutList[0].ZIP ==document.getElementById("zip").value;
     var m = checkoutList[0].payment ==document.getElementById("credit").value;
     var n = checkoutList[0].nameoncredit ==document.getElementById("cc-name").value;
     var o = checkoutList[0].expiration ==document.getElementById("cc-expiration").value;
     var p = checkoutList[0].cvv ==document.getElementById("cc-cvv").value;
     
    var x = (a && b && c && d && e && f && g && h && i && m && n && o && p);
    
    if(!x)
    {
        return;
    }
    alert("Successful Payment - Thank You For Registration");
}