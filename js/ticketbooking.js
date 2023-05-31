

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



async function gentc()
{
 let tcid = localStorage.getItem("tcid");
 let resp = await fetch("http://localhost:9000/getonebooking/"+tcid);
if(resp.status=200)
{
  let bookdata = await resp.json();


   let tdnode=document.getElementById("tdnode");
   let datenode = document.createElement("td");
   let seatnode = document.createElement("td");
   let pricenode = document.createElement("td");
   datenode.append(bookdata.tcdate);
   seatnode.append(bookdata.tcquan);
   pricenode.append(bookdata.tcprice);
   tdnode.append(datenode);
   tdnode.append(seatnode);
   tdnode.append(pricenode);
   
}
}