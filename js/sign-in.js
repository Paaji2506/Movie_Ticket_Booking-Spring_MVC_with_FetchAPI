const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container_signup_signin');


let signinform = document.getElementById("sign-in-form");
signinform.addEventListener("submit", (e) => {
	e.preventDefault();
	signInValidateForm();
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

let logemail = document.getElementById("log_email");
let logpsw = document.getElementById("log_psw");

async function logIn() {

	let resp = await fetch("http://localhost:9000/getuser/" + logemail.value);

	if (resp.status == 200) {
		let userstatus="Deactive";
		let user = await resp.json();
		if (user.upsw == logpsw.value) {
			userstatus="Active";
			localStorage.setItem("userid",user.uid);
			localStorage.setItem("userstatus",userstatus);
			localStorage.setItem("useremail", logemail.value);
			localStorage.setItem("username", user.uname);
	        localStorage.setItem("userpswd", logpsw.value);
			if (user.uemail=="admin@gmail.com") {
	
				message(`Hello Admin ! . Logged in successfully!...`,true);
				setTimeout(() => location.href = ("adminhome.html"),1000);
			}
			else {
				message(`Hello ${user.uname}!. You've Logged in successfully!...`,true);
				setTimeout(() => location.href = ("userhome.html"),1000);
			}
		} else {
			message("Invalid Email or Password!...");
		}
	}
}



function signInValidateForm() {

	x = document.forms["sign-in-form"]["sign-in-email"].value;
	if (x == "") {
		message("'Email' can not be empty!!");
	}
	x = document.forms["sign-in-form"]["sign-in-passwd"].value;
	if (x == "") {
		message("'Password' can not be empty!!");
	}
	else
		logIn();
}

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});









