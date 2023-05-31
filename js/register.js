
let uname = document.getElementById("uname");
let uemail = document.getElementById("uemail");
let upsw = document.getElementById("upsw");
let ucpsw = document.getElementById("ucpsw");
let umob = document.getElementById("umob");

let phPattern = /^[6-9]\d{9}$/;
let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_]).{8,}$/;
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$ 

let signupform = document.getElementById("sign-up-form");
signupform.addEventListener("submit",(e)=>{
    e.preventDefault();
	check();
});

function check()
{

    if(!umob.value.match(phPattern)) {
        alert("Please enter a valid mobile number!...");
    }
    else if(!uemail.value.match(emailPattern)) {
        alert("Please enter a valid email address!...");
    }
    else if((upsw.value).length<8) {
        alert("Password should be atleast 8 characters long!...");
    }
    else if(!upsw.value.match(passPattern)) {
        alert("Password should be strong!...");
    }
    else if(!ucpsw.value.match(upsw.value)) {
       alert("Password and confirm password should match!...");
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
		alert("Registered successfully...");
		setTimeout(() => location.href = ("sign_in.html"), 1000);
	}