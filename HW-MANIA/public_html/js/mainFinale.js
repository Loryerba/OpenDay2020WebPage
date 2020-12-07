/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function calcola() {
    
    var scelte = JSON.parse(sessionStorage.getItem("sceltePrec"));

    var contenuto = document.getElementById("contenutoP");

    var string = "";

    var prezzo = [];
    for (var i = 0; i < scelte.length; i++) {

        switch (i) {

            case 0:
                contenuto.innerHTML = "<p style= 'color: #ffb3ff; text-align: center'> Processore: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + scelte[0] +
                        " </span> </p>";
                prezzo.push(parseInt(scelte[0].split(":")[1]));
                break;
            case 1:
                contenuto.innerHTML += "<p style= 'color: #ffb3ff; text-align: center'> Scheda Madre: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + scelte[1] +
                        " </span> </p>";
                prezzo.push(parseInt(scelte[1].split(":")[1]));
                break;
            case 2:
                contenuto.innerHTML += "<p style= 'color: #ffb3ff; text-align: center'> Dissipatore: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + scelte[2] +
                        " </span> </p>";
                prezzo.push(parseInt(scelte[2].split(":")[1]));
                break;
            case 3:
                contenuto.innerHTML += "<p style= 'color: #ffb3ff; text-align: center'> RAM: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + scelte[3] +
                        " </span> </p>";
                prezzo.push(parseInt(scelte[3].split(":")[1]));
                break;
            case 4:
                contenuto.innerHTML += "<p style= 'color: #ffb3ff; text-align: center'> Scheda Video: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + scelte[4] +
                        " </span> </p>";
                prezzo.push(parseInt(scelte[4].split(":")[1]));
                break;
            case 5:
                contenuto.innerHTML += "<p style= 'color: #ffb3ff; text-align: center'> Hard Disk: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + scelte[5] +
                        " </span> </p>";
                prezzo.push(parseInt(scelte[5].split(":")[1]));
                break;

            case 6:
                contenuto.innerHTML += "<p style= 'color: #ffb3ff; text-align: center'> SSD: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + scelte[6] +
                        " </span> </p>";
                prezzo.push(parseInt(scelte[6].split(":")[1]));
                break;

            case 7:
                contenuto.innerHTML += "<p style= 'color: #ffb3ff; text-align: center'> Alimentatore: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + scelte[7] +
                        " </span> </p>";
                prezzo.push(parseInt(scelte[7].split(":")[1]));
                break;
            case 8:
                contenuto.innerHTML += "<p style= 'color: #ffb3ff; text-align: center'> Case: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + scelte[8] +
                        " </span> </p>";
                prezzo.push(parseInt(scelte[8].split(":")[1]));
                break;

            case 9:
                contenuto.innerHTML += "<p style= 'color: #ffb3ff; text-align: center'> Ventole: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + scelte[9] +
                        " </span> </p>";
                prezzo.push(parseInt(scelte[9].split(":")[1]));
                break;
        }

    }

    var prezzoSum = 0;

    for (var i = 0; i < prezzo.length; i++) {

        prezzoSum += prezzo[i];
    }
    document.getElementById("prezzoFinale").innerHTML += prezzoSum + "€";

}
