

let resetform = document.getElementById("resetform");
resetform.addEventListener("submit", (e) => {
	e.preventDefault();
	check();
});


let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_]).{8,}$/;
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$ 


    let remail = document.getElementById("remail");
	let roldpsw = document.getElementById("roldpsw");
	let rnewpsw = document.getElementById("rnewpsw");
	let rnewcpsw = document.getElementById("rnewcpsw");
  
function check()
{


    if(!remail.value.match(emailPattern)) {
        message("Please enter a valid email address!...");
    }
    else if(roldpsw.value.match(rnewpsw.value))
    {
        message("New Password & Old Password  Should not be Same")
    }
    else if(rnewpsw.value.length<8) {
        message("New Password should be atleast 8 characters long!...");
    }
    else if(!rnewpsw.value.match(passPattern)) {
      message("Password should be strong!...");
    }
    else if(!rnewcpsw.value.match(rnewpsw.value)) {
        message("Password and confirm password should match!...");
    }
    else{
        resetpswd();
    }
}



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


async function resetpswd()
{
   
    let reset = {
        remail : remail.value,
        roldpsw : roldpsw.value,
        rnewpsw : rnewpsw.value
    };

    let resp = await fetch("http://localhost:9000/resetpsw",{
        method: 'POST',
			body: JSON.stringify(reset),
			headers: {
				"Accept": "application/json",
				"Content-type": "application/json"
			},
    }

    );
   
        let msg = await resp.text();
        if(msg.match("Password Reset Successfully"))
        {
            message(msg,true);
            setTimeout(()=>location.href="sign_in.html",1000);
        }
         message(msg);

}
