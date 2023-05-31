const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container_signup_signin');


let signinform = document.getElementById("sign-in-form");
signinform.addEventListener("submit", (e) => {
	e.preventDefault();
	signInValidateForm();
});


let logemail = document.getElementById("log_email");
let logpsw = document.getElementById("log_psw");

async function logIn() {

	let resp = await fetch("http://localhost:9000/getuser/" + logemail.value);

	if (resp.status == 200) {
		let userstatus="Deactive";
		let user = await resp.json();
		console.log(user);
		if (user.upsw == logpsw.value) {
			userstatus="Active";
			localStorage.setItem("userid",user.uid);
			localStorage.setItem("userstatus",userstatus);
			sessionStorage.setItem("email", logemail.value);
			sessionStorage.setItem("fname", user.uname);
			sessionStorage.setItem("password", logpsw.value);
			if (user.isAdmin) {
				alert(`Admin Logged in successfully!...`);
				setTimeout(() => location.href = ("adminhome.html"));
			}
			else {
				alert(`Hello ${user.uname}!. You've Logged in successfully!...`);
				setTimeout(() => location.href = ("userhome.html"));
			}
		} else {
			alert("Invalid Email or Password!...");
		}
	}
}



function signInValidateForm() {

	x = document.forms["sign-in-form"]["sign-in-email"].value;
	if (x == "") {
		alert("'Email' can not be empty!!");
	}
	x = document.forms["sign-in-form"]["sign-in-passwd"].value;
	if (x == "") {
		alert("'Password' can not be empty!!");
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









