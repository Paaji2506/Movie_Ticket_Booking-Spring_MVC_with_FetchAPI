function book()
{
    
    var movdt = document.getElementById("movdt").value;
    var movshow = document.getElementById("movshow").value;
    sessionStorage.setItem("movdt",movdt);
    sessionStorage.setItem("movshow",movshow);
    location.href="payment.html";

}

function loadprice()
{
    var price = sessionStorage.getItem("invoice");
    var billmsg= document.getElementById("billmsg");
    billmsg.append(document.createTextNode("Pay ${} by credit card"))
}