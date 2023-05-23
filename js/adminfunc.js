
function settheater()
{
    
  

  const thname = document.getElementById("thname").value;
  const thcity = document.getElementById("thcity").value;
  const thtype = document.getElementById("thtype").value;
  const thsc = document.getElementById("thsc").value;
  const thadd = document.getElementById("thadd").value;
  const thimg = document.getElementById("thimg").value;

  thdata =[{thname:thname,
               thcity : thcity,
               thtype : thtype,
               thsc : thsc,
               thadd : thadd,
               thimg : thimg,
 } ];
 
 localStorage.setItem("thdata", JSON.stringify(thdata));
 
}

function thview()
{
  let thdata = JSON.parse(localStorage.getItem("thdata"));

for(let check of thdata)
{
  const thtable = document.getElementById("thtable");
  const thtr = document.createElement("tr");
  const thtd= document.createElement("td");
  thtd.append(document.createTextNode("1"));
  const thtd1= document.createElement("td");
  thtd1.append(check.thname);
  const thtd2= document.createElement("td");
  thtd2.append(check.thcity);
  const thtd3= document.createElement("td");
  thtd3.append(check.thtype);
  const thtd4= document.createElement("td");
  thtd4.append(check.thsc);
  const thtd5= document.createElement("td");
  thtd5.append(check.thadd);
  const thtd6= document.createElement("td");
  thtd6.append(check.thimg);
  const thtd7= document.createElement("td");
  const movlink = document.createElement("a");
  movlink.href="addmovie.html";
  thtd7.append(movlink);
  movlink.append(document.createTextNode("Add"));
  const thtd8= document.createElement("td");
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

  editlink.addEventListener("click",function(){
    location.href="updatetheater.html";
 });

 dellink.addEventListener("click",function(){
  deltheater("thdata");
});

 
}
  

}

function edittheater()
{
  
   
  let thdata = JSON.parse(localStorage.getItem("thdata"));

   for(let check of thdata)
   {

  document.getElementById("thupname").value=check.thname;
  document.getElementById("thupcity").value=check.thcity;
   document.getElementById("thuptype").value=check.thtype;
   document.getElementById("thupsc").value=check.thsc;
   document.getElementById("thupadd").value=check.thadd;
   document.getElementById("thupimg").value=check.thimg;
   }
 
}

function uptheater()
{
  let thdata = JSON.parse(localStorage.getItem("thdata"));

  let thupname = document.getElementById("thupname").value;
  let thupcity = document.getElementById("thupcity").value;
  let thuptype = document.getElementById("thuptype").value;
  let thupsc = document.getElementById("thupsc").value;
  let thupadd = document.getElementById("thupadd").value;
  let thupimg = document.getElementById("thupimg").value;


 

  thdata =[{thname:thupname,
               thcity : thupcity,
               thtype : thuptype,
               thsc : thupsc,
               thadd : thupadd,
               thimg : thupimg,
 } ];
 

 localStorage.setItem("thdata", JSON.stringify(thdata));
}

function deltheater(thdata)
{
   localStorage.removeItem(thdata);
   location.href="theaterlist.html";

}

function setmovie()
{

 
  const movname = document.getElementById("movname").value;
  const movcity = document.getElementById("movcity").value;
  const movimg = document.getElementById("movimg").value;
  
  const movthea = document.getElementById("movthea").value;
  const movcast = document.getElementById("movcast").value;
  const movdir = document.getElementById("movdir").value;
  const movdes = document.getElementById("movdes").value;
  
   var movdata=[{
    movname:movname,
    movcity : movcity,
    movimg : movimg,
    movthea : movthea,
    movcast : movcast,
    movdir : movdir,
    movdes : movdes
} ];

  localStorage.setItem("movdata",JSON.stringify(movdata));

}

function disth()
{
    const thdata = JSON.parse(localStorage.getItem("thdata"));
      
     for(let check of thdata)
     {
        
       const tcth= document.getElementById("movthea");
       const tcnode1 = document.createElement("option");
       tcnode1.value=check.thname;
        tcnode1.append(check.thname);
         tcth.append(tcnode1);
      
     }
}


function moview()
{
  
  let movdata = JSON.parse(localStorage.getItem("movdata"));

  
  for(let check of movdata)
  {
  const movtable = document.getElementById("movtable");
  const movtr = document.createElement("tr");
  const movtd= document.createElement("td");
  movtd.append(document.createTextNode("1"));
  const movtd1= document.createElement("td");
  movtd1.append(check.movname);
  const movtd2= document.createElement("td");
  movtd2.append(check.movcity);
  const movtd3= document.createElement("td");
  movtd3.append(check.movimg);
  const movtd5= document.createElement("td");
  movtd5.append(check.movthea);
  const movtd6= document.createElement("td");
  movtd6.append(check.movcast);
  const movtd7= document.createElement("td");
  movtd7.append(check.movdir);
  const movtd8= document.createElement("td");
  movtd8.append(check.movdes);
  const movtd9= document.createElement("td");
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
  movtr.append(movtd5);
  movtr.append(movtd6);
  movtr.append(movtd7);
  movtr.append(movtd8);
  movtr.append(movtd9);
  movtable.append(movtr);

  editmlink.addEventListener("click",function(){
    location.href="updatemovie.html";
 });

 delmlink.addEventListener("click",function(){
  delmovie("movdata");
});

}
}
function delmovie(movdata)
{
 localStorage.removeItem(movdata);
 location.href="movielist.html";

}

function editmovie()
{
  
   
  let movdata = JSON.parse(localStorage.getItem("movdata"));

   for(let check of movdata)
   {

   document.getElementById("movupname").value=check.movname;
   document.getElementById("movupcity").value=check.movcity;
   //document.getElementById("movupimg").value=check.movimg;
   document.getElementById("movthea").setAttribute('selected',true);
   document.getElementById("movupcast").value=check.movcast;
   document.getElementById("movupdir").value=check.movdir;
   document.getElementById("movupdes").value=check.movdes;
   }
 
}

function upmovie()
{

  let movdata = JSON.parse(localStorage.getItem("movdata"));
 
  let movname = document.getElementById("movupname").value;
 
  let movcity = document.getElementById("movupcity").value;
  let movimg = document.getElementById("movupimg").value;
  let movthea = document.getElementById("movthea").value;
  let movcast = document.getElementById("movupcast").value;
  let movdir = document.getElementById("movupdir").value; 
  let movdes = document.getElementById("movupdes").value;
  

   movdata=[{
    movname:movname,
    movcity : movcity,
    movimg : movimg,
    movthea : movthea,
    movcast : movcast,
    movdir : movdir,
    movdes : movdes
} ];

  localStorage.setItem("movdata",JSON.stringify(movdata));

}




