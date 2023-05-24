

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
  let movdt = sessionStorage.getItem("movdt");
  let quan = sessionStorage.getItem("quan");
  let price = sessionStorage.getItem("invoice");


   let tdnode=document.getElementById("tdnode");
   let datenode = document.createElement("td");
   let seatnode = document.createElement("td");
   let pricenode = document.createElement("td");
   datenode.append(movdt);
   seatnode.append(quan);
   pricenode.append(price);
   tdnode.append(datenode);
   tdnode.append(seatnode);
   tdnode.append(pricenode);
   
}