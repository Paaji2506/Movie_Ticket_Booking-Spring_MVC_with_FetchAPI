const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container_signup_signin');


function message(msg,suc) {
	document.querySelector(".error").style.display = "block";
	document.querySelector(".error").innerHTML = msg;
	if(suc==true){
	  document.querySelector(".error").style.color = "green";
	}
	else{ 
	document.onclick = () =>{
	  document.querySelector(".error").style.display = "none";
	}
    }
}



function logIn() {
	
	
  if(signInValidateForm())
  {
	   let log_email = document.getElementById("log_email");
      let log_psw = document.getElementById("log_psw");
	  
	  let users = JSON.parse(localStorage.getItem("users"));
       let status=false;
		if (log_email.value.match(users.regemail)&& log_psw.value.match(users.regpsw))
	  {
		 status=true;
		sessionStorage.setItem("email", log_email.value);
		sessionStorage.setItem("password", log_psw.value);
		sessionStorage.setItem("status", status);
		if(users.regtype){
			
		 message(`Admin Logged in successfully!...`,true);
		  setTimeout(()=>location.href=("adminhome.html"));
		  return true;
		}
		else{
		 message(`Hello ${users.regname}!. You've Logged in successfully!...`,true);
		  
		  setTimeout(()=>location.href=("userhome.html"));
		  return true;
		}
	  } else {
		message("Invalid Email or Password!...");
		return false;
	}
}
 else
  return false;
}



function signInValidateForm() {

	x = document.forms["sign-in-form"]["sign-in-email"].value;
	if (x == "") {
		//   alert("'Email' can not be empty!!");
		asAlertMsg({
			type: "error",
			title: "Empty Field",
			message: "'E-mail' can not be empty!!",

			button: {
				title: "Close Button",
				bg: "Cancel Button"
			}
		});
		return false;
	}
	x = document.forms["sign-in-form"]["sign-in-passwd"].value;
	if (x == "") {
		//   alert("'Password' can not be empty!!");
		asAlertMsg({
			type: "error",
			title: "Empty Field",
			message: "'Password' can not be empty!!",

			button: {
				title: "Close Button",
				bg: "Cancel Button"
			}
		});
		return false;
	}
  return true;
}

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});









