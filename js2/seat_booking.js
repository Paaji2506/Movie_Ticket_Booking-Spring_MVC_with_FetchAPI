async function book()
{

    let tcid = Math.floor(Math.random() * 10000);
    localStorage.setItem("tcid",tcid);
    let tcdate = document.getElementById("movdt").value;
    let tcshow = document.getElementById("movshow").value;
    let tcprice = sessionStorage.getItem("invoice");
    let tcquan = tcprice/110;


    let booking={
       tcid : tcid,
       tcdate : tcdate,
       tcshow:tcshow,
       tcquan:tcquan,
       tcprice : tcprice,
      }
     
      let resp = await fetch('http://localhost:9000/addbooking', {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        },
      });
      alert("Booking Done successfully...");
      setTimeout(() => location.href = ("payment.html"), 1000);


}
