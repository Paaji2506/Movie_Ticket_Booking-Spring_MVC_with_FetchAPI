

let logoutbtn = document.getElementById("logoutbtn");
logoutbtn.addEventListener("click",()=>{
logout();
});


function logout(){

  let status = confirm("Are You Sure ??");
  if(status)
  {
    let useremail = localStorage.getItem("useremail");
    let username = localStorage.getItem("username");
    localStorage.removeItem("userid");
    localStorage.removeItem("userstatus");
    localStorage.removeItem("useremail");
    localStorage.removeItem("username");
    localStorage.removeItem("userpswd");
    if(useremail=="admin@gmail.com")
    {
      alert(`Admin Logged Out Succcessfully`);
    }
    else{
      alert(`${username} Logged Out Successfully`);
    }
  }


 setTimeout(()=>location.href="index.html",1000);

  }

  