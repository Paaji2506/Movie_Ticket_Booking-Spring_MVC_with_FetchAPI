
let uname = document.getElementById("uname");
let uemail = document.getElementById("uemail");
let upsw = document.getElementById("upsw");
let ucpsw = document.getElementById("ucpsw");
let umob = document.getElementById("umob");

let phPattern = /^[6-9]\d{9}$/;
let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_]).{8,}$/;
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$ 

let signupform = document.getElementById("sign-up-form");
signupform.addEventListener("submit",(e)=>{
    e.preventDefault();
	check();
});


function message(msg,suc=false) {
	document.querySelector(".error").style.display = "block";
	document.querySelector(".error").innerHTML = msg;
	if(suc==true){
	  document.querySelector(".error").style.color = "green";
	}
	document.onclick = () =>{
	  document.querySelector(".error").style.display = "none";
	}
  }
  

function check()
{

    if(!umob.value.match(phPattern)) {
        message("Please enter a valid mobile number!...");
    }
    else if(!uemail.value.match(emailPattern)) {
        message("Please enter a valid email address!...");
    }
    else if((upsw.value).length<8) {
        message("Password should be atleast 8 characters long!...");
    }
    else if(!upsw.value.match(passPattern)) {
      message("Password should be strong!...");
    }
    else if(!ucpsw.value.match(upsw.value)) {
        message("Password and confirm password should match!...");
    }
    else{
        addUser();
    }
}





async function addUser() {

		let users;
		
		let isAdmin = false;
		if (uemail.value == "admin@gmail.com")
			isAdmin = true;

		users = {
			uname: uname.value,
			uemail: uemail.value,
			upsw: upsw.value,
			ucpsw: ucpsw.value,
			umob: umob.value,
			isAdmin: isAdmin
		};

		let resp = await fetch('http://localhost:9000/register', {
			method: 'POST',
			body: JSON.stringify(users),
			headers: {
				"Accept": "application/json",
				"Content-type": "application/json"
			},
		});
	    message("Registered successfully...",true);
		setTimeout(() => location.href = ("sign_in.html"), 1000);
	}