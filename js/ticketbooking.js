function bookticket()
{
    const tcdate= document.getElementById("tcdate");
    const tcth= document.getElementById("tcth");
    const tctype= document.getElementById("tctype");
    const tcseat= document.getElementById("tcseat");

      


     let price;

    if(tctype=="Second")
    {
      price=30*tcseat;
    }
    else if(tctype=="Dress Circle")
    {
        price=60*tcseat;
    }
    if(tctype=="Balcony")
    {
        price=100*tcseat;
    }
    else (tctype=="Box")
    {
        price=120*tcseat;
    }
   
   var tcdetails=[{
   tcdate : tcdate,
   tcth:tcth,
   tctype:tctype,
   tcseat:tcseat,
   price: price
   }];

  localStorage.setItem("tcdetails",JSON.stringify(tcdetails));


}

function disth()
{
    const thdata = JSON.parse(localStorage.getItem("thdata"));
      
     for(let check of thdata)
     {
        var cnt=1;
        if(cnt==1)
        {
       const tcth= document.getElementById("tcth");
       const tcnode1 = document.createElement("option");
        tcnode1.append(check.thname);
         tcth.append(tcnode1);
        }
        cnt++;
     }
}



function gentc()
{
   const tcdate = localStorage.getItem("tcdate",tcdate);
   const tcth = localStorage.getItem("tcth",tcth);
   const tctype =localStorage.getItem("tctype",tctype);
   const tcseat = localStorage.getItem("tcseat",tcseat);
   const price =  localStorage.getItem("price",price);   

   const tdnode=document.getElementById("tdnode");
   const pricenode = document.createElement("td");
   const datenode = document.createElement("td");
   pricenode.append(price);
   datenode.append(tcdate);
   tdnode.append(pricenode);
   tdnode.append(datenode);
}