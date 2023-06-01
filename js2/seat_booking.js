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


var price = 110; //price
				var invoice;
				var quan;
				$(document).ready(function () {
					var $cart = $('#selected-seats'), //Sitting Area
						$counter = $('#counter'), //Votes
						$total = $('#total'); //Total money

					
                        
					var sc = $('#seat-map').seatCharts({
						map: [ //Seating chart
							'aaaaaaaaaa',
							'aaaaaaaaaa',
							'__________',
							'aaaaaaaa__',
							'aaaaaaaaaa',
							'aaaaaaaaaa',
							'aaaaaaaaaa',
							'aaaaaaaaaa',
							'aaaaaaaaaa',
							'__aaaaaa__'
						],
						naming: {
							top: false,
							getLabel: function (character, row, column) {
								return column;
							}
						},
						legend: { //Definition legend
							node: $('#legend'),
							items: [
								['a', 'available', 'Available'],
								['a', 'unavailable', 'Sold'],
								['a', 'selected', 'Selected']
							]
						},
						click: function () { //Click event
							if (this.status() == 'available') { //optional seat
								$('<li>R-' + (this.settings.row + 1) + '	S-' + this.settings.label + '</li>')
									.attr('id', 'cart-item-' + this.settings.id)
									.data('seatId', this.settings.id)
									.appendTo($cart);

						    

								$counter.text(sc.find('selected').length + 1);
								quan = sc.find('selected').length + 1;
								sessionStorage.setItem("quan",quan);
								$total.text(recalculateTotal(sc) + price);
                                invoice = recalculateTotal(sc) + price;
								
							    sessionStorage.setItem("invoice",invoice);
								
								return 'selected';
							} else if (this.status() == 'selected') { //Checked
								//Update Number
								$counter.text(sc.find('selected').length - 1);
								//update totalnum
								$total.text(recalculateTotal(sc) - price);

								//Delete reservation
								$('#cart-item-' + this.settings.id).remove();
								//optional
								return 'available';
							} else if (this.status() == 'unavailable') { //sold
								return 'unavailable';
							} else {
								return this.style();
							}
						}
					});
					//sold seat
					sc.get(['1_2', '4_4', '4_5', '6_6', '6_7', '8_5', '8_6', '8_7', '8_8', '10_1', '10_2']).status(
						'unavailable');

				});
				//sum total money
				function recalculateTotal(sc) {
					var total = 0;
					sc.find('selected').each(function () {
						total += price;
					});
					return total;
				}

        
    /*   async function genseat()
        {
          let res = await fetch("http://localhost:9000/gettheater");
        let thdata = await res.json();
        for (let check of thdata) {
       
          const theat = document.getElementById("theat");
          const tcnode1 = document.createElement("option");
          tcnode1.value = check.thid;
          tcnode1.append(check.thname+" , "+check.thcity);
          theat.append(tcnode1);
        }
        
        
      }
       
      document.getElementById("btnseat").addEventListener("click",()=>{

       let thid =  document.getElementById("theat").value;
             disseat(thid);
      });

      async function disseat(thid)
      {
       
        let response = await fetch("http://localhost:9000/getnoofseats/"+thid);
        if(response.status==200)
        {
         let theater = await response.json();
  
           const seats = theater.thsc;
           let ch=65,cnt=0;
           for(let j=1;j<=10;j++)
           {
            
           let seattable = document.getElementById("seattable");
           let seatrow =document.createElement("tr");
           
           let seatcol =  document.createElement("td");
           let seatbtn =  document.createElement("button");
           seatbtn.append(document.createTextNode(String.fromCharCode(ch)));
           seatcol.append(seatbtn);
            for(let i=1;i<=10;i++)
            {
              seatbtn =  document.createElement("button");
              seatbtn.append(i);
              seatcol.append(seatbtn);
              cnt++;
              seatrow.append(seatcol);
              if(i==10)
              {
                if(j<=cnt)
                {
                seattable.append(seatrow);
              ch++;
                  continue;
                }
              }
            }

          }
       
        }
        document.getElementById("Seatdynam").style.display="block";
      }*/