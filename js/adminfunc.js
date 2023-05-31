let thform = document.getElementById("thForm");


thform.addEventListener("submit",(e)=>{
  e.preventDefault();
   settheater();
});




async function settheater() {

  let thid = Math.floor(Math.random() * 100);
  let thname = document.getElementById("thname").value;
  let thcity = document.getElementById("thcity").value;
  let thtype = document.getElementById("thtype").value;
  let thsc = document.getElementById("thsc").value;
  let thadd = document.getElementById("thadd").value;
  let thimg = document.getElementById("thimg").value;
  let thdata,movid,movname,movcity,movimg,movcast,movdir,movdes;
  let thmovies={
    movid: movid,
    movname: movname,
    movcity: movcity,
    movimg: movimg,
    movcast: movcast,
    movdir: movdir,
    movdes: movdes
  }

  thdata = {
    thid: thid,
    thname: thname,
    thcity: thcity,
    thtype: thtype,
    thsc: thsc,
    thadd: thadd,
    thimg: thimg,
  };

  let resp = await fetch('http://localhost:9000/addtheater', {
    method: 'POST',
    body: JSON.stringify(thdata),
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
  });
  alert("Theater Added successfully...");
  setTimeout(() => location.href = ("theaterlist.html"), 1000);


}

async function thview() {

  let resp = await fetch("http://localhost:9000/gettheater");
if(resp.status=200)
{
  let thdata = await resp.json();
  for (let check of thdata) {
    const thtable = document.getElementById("thtable");
    const thtr = document.createElement("tr");
    const thtd = document.createElement("td");
    thtd.append(check.thid);
    const thtd1 = document.createElement("td");
    thtd1.append(check.thname);
    const thtd2 = document.createElement("td");
    thtd2.append(check.thcity);
    const thtd3 = document.createElement("td");
    thtd3.append(check.thtype);
    const thtd4 = document.createElement("td");
    thtd4.append(check.thsc);
    const thtd5 = document.createElement("td");
    thtd5.append(check.thadd);
    const thtd6 = document.createElement("td");
    thtd6.append(check.thimg);
    const thtd7 = document.createElement("td");
    const movlink = document.createElement("a");
    thtd7.append(movlink);
    movlink.append(document.createTextNode("Add"));
    const thtd8 = document.createElement("td");
    const editlink = document.createElement("a");
    const dellink = document.createElement("a");
    editlink.append(document.createTextNode("Edit "));
    dellink.append(document.createTextNode("Delete"));
    thtd8.append(editlink);
    thtd8.append(dellink);
    thtr.append(thtd);
    thtr.append(thtd1);
    thtr.append(thtd2);
    thtr.append(thtd3);
    thtr.append(thtd4);
    thtr.append(thtd5);
    thtr.append(thtd6);
    thtr.append(thtd7);
    thtr.append(thtd8);
    thtable.append(thtr);

    movlink.addEventListener("click",function()
    {
        localStorage.setItem("theater",JSON.stringify(check));
        location.href="addthmovie.html";
    });

    editlink.addEventListener("click", function () {
      localStorage.setItem("theater",JSON.stringify(check));
      location.href = "updatetheater.html";
    
    });


    dellink.addEventListener("click", function () {
      localStorage.setItem("theater",JSON.stringify(check));
      deltheater(check);
    });


  }
  }


}

function edittheater() {

  let checkdata = JSON.parse(localStorage.getItem("theater"));
  spanid=checkdata.thid;
  localStorage.setItem("spanid",spanid);
  document.getElementById("spanid").append(spanid);  

  document.getElementById("thupname").value = checkdata.thname;
  document.getElementById("thupcity").value = checkdata.thcity;
  document.getElementById("thuptype").value = checkdata.thtype;
  document.getElementById("thupsc").value = checkdata.thsc;
  document.getElementById("thupadd").value = checkdata.thadd;
}


async function uptheater() {
  let thid= localStorage.getItem("spanid");
  let thname = document.getElementById("thupname").value;
  let thcity = document.getElementById("thupcity").value;
  let thtype = document.getElementById("thuptype").value;
  let thsc = document.getElementById("thupsc").value;
  let thadd = document.getElementById("thupadd").value;
  let thimg = document.getElementById("thupimg").value;

  let thdata,movid,movname,movcity,movimg,movcast,movdir,movdes;

  let thmovies={
        movid: movid,
    movname: movname,
    movcity: movcity,
    movimg: movimg,
    movcast: movcast,
    movdir: movdir,
    movdes: movdes
  }
  
  thdata = {
    thid:thid,
    thname: thname,
    thcity: thcity,
    thtype: thtype,
    thsc: thsc,
    thadd: thadd,
    thimg: thimg,
  };

  let resp = await fetch('http://localhost:9000/updatetheater', {
    method: 'POST',
    body: JSON.stringify(thdata),
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
  });
  alert("Theater Updated successfully...");


}

async function deltheater(check) {
  
  let resp = await fetch("http://localhost:9000/deletetheater/"+check.thid,{
        method : "DELETE"
}
  );
let msg = await resp.text();
alert(msg);
location.reload();
}



async function setmovie() {

  
  let movid = Math.floor(Math.random() * 1000);
  let movname = document.getElementById("movname").value;
  let movcity = document.getElementById("movcity").value;
  let movimg = document.getElementById("movimg").value;
  let movcast = document.getElementById("movcast").value;
  let movdir = document.getElementById("movdir").value;
  let movdes = document.getElementById("movdes").value;
  var movdata= {
    movid: movid,
    movname: movname,
    movcity: movcity,
    movimg: movimg,
    movcast: movcast,
    movdir: movdir,
    movdes: movdes
  };

  
  let resp = await fetch('http://localhost:9000/addmovie', {
    method: 'POST',
    body: JSON.stringify(movdata),
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
  });
  alert("Movie Added successfully...");
  setTimeout(() => location.href = ("movielist.html"), 1000);


  

}



async function moview() {


  let resp = await fetch("http://localhost:9000/getmovie");
  
   if(resp.status==200)
  {
    let movdata = await resp.json();
   for (let check of movdata) {
    const movtable = document.getElementById("movtable");
    const movtr = document.createElement("tr");
    const movtd = document.createElement("td");
    movtd.append(check.movid);
    const movtd1 = document.createElement("td");
    movtd1.append(check.movname);
    const movtd2 = document.createElement("td");
    movtd2.append(check.movcity);
    const movtd3 = document.createElement("td");
    movtd3.append(check.movimg);
    const movtd6 = document.createElement("td");
    movtd6.append(check.movcast);
    const movtd7 = document.createElement("td");
    movtd7.append(check.movdir);
    const movtd8 = document.createElement("td");
    movtd8.append(check.movdes);
    const movtd9 = document.createElement("td");
    const editmlink = document.createElement("a");
    const delmlink = document.createElement("a");
    editmlink.append(document.createTextNode("Edit "));
    delmlink.append(document.createTextNode("Delete"));
    movtd9.append(editmlink);
    movtd9.append(delmlink);
    movtr.append(movtd);
    movtr.append(movtd1);
    movtr.append(movtd2);
    movtr.append(movtd3);
    movtr.append(movtd6);
    movtr.append(movtd7);
    movtr.append(movtd8);
    movtr.append(movtd9);
    movtable.append(movtr);

    editmlink.addEventListener("click", function () {
      
      localStorage.setItem("movie",JSON.stringify(check));
      location.href="updatemovie.html";
    });

    delmlink.addEventListener("click", function () {
      delmovie(check);
    });

  }
}
}
async function delmovie(check) {
  let resp = await fetch("http://localhost:9000/deletemovie/"+check.movid,{
        method : "DELETE"
}
  );
let msg = await resp.text();
alert(msg);
location.reload();
}

function editmovie() {
   
  let check = JSON.parse(localStorage.getItem("movie"));
  let spanid=check.movid;
  localStorage.setItem("spanid",spanid);
  document.getElementById("spanmovid").append(spanid);

    document.getElementById("movupname").value = check.movname;
    document.getElementById("movupcity").value = check.movcity;
    document.getElementById("movupcast").value = check.movcast;
    document.getElementById("movupdir").value = check.movdir;
    document.getElementById("movupdes").value = check.movdes;
  }

async function upmovie() {

  let movid = JSON.parse(localStorage.getItem("spanid"));
  let movname = document.getElementById("movupname").value;
  let movcity = document.getElementById("movupcity").value;
  let movimg = document.getElementById("movupimg").value;
  let movcast = document.getElementById("movupcast").value;
  let movdir = document.getElementById("movupdir").value;
  let movdes = document.getElementById("movupdes").value;

  var movdata= {
    movid: movid,
    movname: movname,
    movcity: movcity,
    movimg: movimg,
    movcast: movcast,
    movdir: movdir,
    movdes: movdes
  };
  let resp = await fetch('http://localhost:9000/updatemovie', {
    method: 'POST',
    body: JSON.stringify(movdata),
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
  });
  alert("Movie Updated successfully...");
  setTimeout(() => location.href = ("movielist.html"), 1000);


}



async function thmovview()
{

  let theater = JSON.parse(localStorage.getItem("theater"));
  let thtitle = theater.thname+","+theater.thcity;
   document.getElementById("thtitle").innerHTML=thtitle;
   let res = await fetch("http://localhost:9000/getmovie");
 let movdata = await res.json();
 for (let check of movdata) {

   const theamov = document.getElementById("theamov");
   const tcnode1 = document.createElement("option");
   tcnode1.value = check.movid;
   tcnode1.append(check.movname);
   theamov.append(tcnode1);
 }


  let resp = await fetch("http://localhost:9000/getthmovie/"+theater.thid);
  
   if(resp.status==200)
  {
    let movdata = await resp.json();
   for (let check of movdata) {
    const thmovtable = document.getElementById("thmovtable");
    const thmovtr = document.createElement("tr");
    const thmovtd = document.createElement("td");
    thmovtd.append(check.movid);
    const thmovtd1 = document.createElement("td");
    thmovtd1.append(check.movname);
    const thmovtd2 = document.createElement("td");
    thmovtd2.append(check.movcity);
    const thmovtd3 = document.createElement("td");
    thmovtd3.append(check.movimg);
    const thmovtd5 = document.createElement("td");
    thmovtd5.append(check.movthea);
    const thmovtd6 = document.createElement("td");
    thmovtd6.append(check.movcast);
    const thmovtd7 = document.createElement("td");
    thmovtd7.append(check.movdir);
    const thmovtd8 = document.createElement("td");
    thmovtd8.append(check.movdes);
    const thmovtd9 = document.createElement("td");
    const delthlink = document.createElement("a");
    delthlink.append(document.createTextNode("Delete"));
    thmovtd9.append(delthlink);
    thmovtr.append(thmovtd);
    thmovtr.append(thmovtd1);
    thmovtr.append(thmovtd2);
    thmovtr.append(thmovtd5);
    thmovtr.append(thmovtd6);
    thmovtr.append(thmovtd7);
    thmovtr.append(thmovtd8);
    thmovtr.append(thmovtd9);
    thmovtable.append(thmovtr);

    delthlink.addEventListener("click", function () {
      delthmovie(check);
    });

  }
}

  

 

}


async function addthmov()
{
  let movid = document.getElementById("theamov").value;
  let theater = JSON.parse(localStorage.getItem("theater"));


 
let resp = await fetch("http://localhost:9000/addthmovie/"+theater.thid+"/"+movid,{
  method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
});

alert("Movie Added successfully to "+ theater.thname);

setTimeout(() => location.href = ("addthmovie.html"), 1000);
 


}
async function delthmovie(check)
{

  let resp = await fetch("http://localhost:9000/deletethmovie/"+check.movid,{
    method : "DELETE"
}
);
let msg = await resp.text();
alert(msg);
location.reload();

}