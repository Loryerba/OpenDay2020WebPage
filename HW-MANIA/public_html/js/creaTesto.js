/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function WriteToFile() {

    var scelte = JSON.parse(sessionStorage.getItem("sceltePrec"));
    var testo = "";

    for (var i = 0; i < scelte.length; i++) {

        testo += scelte[i] + "\n";

    }

    testo += "------ Made by HW Mania ------";

    var blob = new Blob([testo], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "Configurazione.txt");

}

