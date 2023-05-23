


let phPattern = /^[6-9]\d{9}$/;
let emailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,3})$/;
let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_]).{8,}$/;
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$ 



function message(msg,suc=false) {
    document.querySelector(".error").style.display = "block"
    document.querySelector(".error").innerHTML=msg;
    if(suc==true){
        document.querySelector(".error").style.color = "green";
      }
    document.onclick = () =>{
        document.querySelector(".error").style.display = "none";
    }
}



function addUser() {
   
   
    if(signUpValidateForm()) {
	let users;
    let regname = document.getElementById("reg_name");
let regemail = document.getElementById("reg_email");
let regpsw = document.getElementById("reg_psw");
let regcpsw = document.getElementById("reg_cpsw");
let regmob = document.getElementById("reg_mob");
let isAdmin = false;
if(regemail.value=="admin@gmail.com")
  isAdmin=true;
users={
       "regname" : regname.value,
	   "regemail" : regemail.value,
	   "regpsw" : regpsw.value,
	   "regcpsw" : regcpsw.value,
	   "regmob" : regmob.value,
	   "regtype" : isAdmin
};


         localStorage.setItem("users",JSON.stringify(users));
        // message("You've signed up successfully!",true);
          
          setTimeout(()=>location.href=("sign_in.html"),1000);
          return true;
    }
    else
     return false;
}

function check(){

let regemail = document.querySelector("#reg_email");
let regpsw = document.querySelector("#reg_psw");
let regcpsw = document.querySelector("#reg_cpsw");
let regmob = document.querySelector("#reg_mob");

    if(!regmob.value.match(phPattern)) {
        message("Please enter a valid mobile number!...");
        return false;
    }
    else if(!regemail.value.match(emailPattern)) {
        message("Please enter a valid email address!...");
        return false;
    }
    else if((regpsw.value).length<8) {
        message("Password should be atleast 8 characters long!...");
        return false;
    }
    else if(!regpsw.value.match(passPattern)) {
        message("Password should be strong!...");
        return false;
    }
    else if(regcpsw.value.match(regpsw.value)) {
        for(let data of users) {
            if(regemail.value == data.email) {
                message("You already have an account please login!...");
                setTimeout(()=>location.href=("login.html"),2000);
                return false;
            }
        }
    }
    else if(regcpsw.value.match(regpsw.value)){
        message("Password and confirm password should match!...");
        return false;
    }
    else
       return true;
}

function signUpValidateForm() {
	var x = document.forms["sign-up-form"]["sign-up-name"].value;
	if (x == "") {
		//   alert("'Name' can not be empty!!");
		asAlertMsg({
			type: "error",
			title: "Empty Field",
			message: "'Name' can not be empty!!",

			button: {
				title: "Close Button",
				bg: "Cancel Button"
			}
		});
		return false;
	}
	x = document.forms["sign-up-form"]["sign-up-email"].value;
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
	x = document.forms["sign-up-form"]["sign-up-passwd"].value;
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
	x = document.forms["sign-up-form"]["sign-up-cnfpasswd"].value;
	if (x == "") {
		//   alert("'Password' can not be empty!!");
		asAlertMsg({
			type: "error",
			title: "Empty Field",
			message: "'Confirm Password' can not be empty!!",

			button: {
				title: "Close Button",
				bg: "Cancel Button"
			}
		});
		return false;
	}

	x = document.forms["sign-up-form"]["sign-up-mobile"].value;
	if (x == "") {
		//   alert("'Password' can not be empty!!");
		asAlertMsg({
			type: "error",
			title: "Empty Field",
			message: "'Mobile Number' can not be empty!!",

			button: {
				title: "Close Button",
				bg: "Cancel Button"
			}
		});
		return false;
	}
return true;
}