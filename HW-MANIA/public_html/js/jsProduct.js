/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getChoice() {

    var choice = JSON.parse(sessionStorage.getItem("choice"));

    var paragraph = document.getElementById("build");

    var string = "";
    
    var prices = [];
    for (var i = 0; i < choice.length; i++) {

        switch (i) {

            case 0:
                paragraph.innerHTML = "<p style= 'color: #e000dd; text-align: center'> Processore: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[0] +
                        " </span> </p>";
                prices.push(parseInt(choice[0].split(":")[1]));
                break;
            case 1:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Scheda Madre: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[1] +
                        " </span> </p>";
                prices.push(parseInt(choice[1].split(":")[1]));
                break;
            case 2:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Dissipatore: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[2] +
                        " </span> </p>";
                prices.push(parseInt(choice[2].split(":")[1]));
                break;            
            case 3:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> RAM: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[3] +
                        " </span> </p>";
                prices.push(parseInt(choice[3].split(":")[1]));
                break;
            case 4:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Scheda Video: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[4] +
                        " </span> </p>";
                prices.push(parseInt(choice[4].split(":")[1]));
                break;
            case 5:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Hard Disk: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[5] +
                        " </span> </p>";
                prices.push(parseInt(choice[5].split(":")[1]));
                break;

            case 6:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> SSD: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[6] +
                        " </span> </p>";
                prices.push(parseInt(choice[6].split(":")[1]));
                break;

            case 7:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Alimentatore: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[7] +
                        " </span> </p>";
                prices.push(parseInt(choice[7].split(":")[1]));
                break;
            case 8:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Case: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[8] +
                        " </span> </p>";
                prices.push(parseInt(choice[8].split(":")[1]));
                break;

            case 9:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Ventole: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[9] +
                        " </span> </p>";
                prices.push(parseInt(choice[9].split(":")[1]));
                break;
        }

    }

   var price = 0;
   
   for(var i=0; i < prices.length; i++){
       
       price+=prices[i];
   }
    document.getElementById("price").innerHTML += price + "€";


}

function writeTxt() {

    var choice = JSON.parse(sessionStorage.getItem("choice"));
    var testo = "";

    for (var i = 0; i < choice.length; i++) {

        testo += choice[i] + "\n";

    }

    testo += "------ Made by HW Mania ------";

    var blob = new Blob([testo], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "Configurazione.txt");

}
