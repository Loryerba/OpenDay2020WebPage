/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var contatore = 1;
var countPB = 0;
var check1 = false;
var check2 = false;
var check3 = false;
var check4 = false;
var check5 = false;
var check6 = false;
var check7 = false;
var check8 = false;
var check9 = false;
var check10 = false;



function avanti() {


    var check = true;

    // Controllo dell'input

    switch (contatore) {

        case 1:

            var list1 = document.getElementById("lista1");

            if (list1.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            // CONTROLLO PROCESSORI AMD

            if (list1.value >= 1 && list1.value <= 11) {

                var list2 = document.getElementById("lista2");

                for (var i = 11; i < 21; i++) {

                    list2.options[i].style.display = 'none';

                }

            }

            // CONTROLLO PROCESSORI INTEL < 10 GENERAZIONE

            if (list1.value >= 12 && list1.value <= 20) {

                var list2 = document.getElementById("lista2");

                for (var i = 1; i < 11; i++) {

                    list2.options[i].style.display = 'none';

                }

                for (var i = 17; i < 21; i++) {

                    list2.options[i].style.display = 'none';

                }

            }

            // CONTROLLO PROCESSORI INTEL DA 10 GENERAZIONE

            if (list1.value >= 21 && list1.value <= 23) {

                var list2 = document.getElementById("lista2");

                for (var i = 1; i < 11; i++) {

                    list2.options[i].style.display = 'none';

                }

            }

            // CONTROLLO PROCESSORI INTEL DA 10 GENERAZIONE

            if (list1.value >= 12 && list1.value <= 20) {

                var list2 = document.getElementById("lista2");

                for (var i = 1; i < 11; i++) {

                    list2.options[i].style.display = 'none';

                }

                for (var i = 17; i < 21; i++) {

                    list2.options[i].style.display = 'none';

                }

            }


            break;

        case 2:

            var list2 = document.getElementById("lista2");

            if (list2.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 3:

            var list3 = document.getElementById("lista3");

            if (list3.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 4:

            var list4 = document.getElementById("lista4");

            if (list4.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 5:

            var list5 = document.getElementById("lista5");

            if (list5.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 6:

            var list6 = document.getElementById("lista6");

            if (list6.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 7:

            var list7 = document.getElementById("lista7");

            if (list7.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 8:

            var list8 = document.getElementById("lista8");

            if (list8.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 9:

            var list9 = document.getElementById("lista9");

            if (list9.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 10:

            var list10 = document.getElementById("lista10");

            if (list10.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        default:

            alert("Switch case error.");

            break;

    }

    // Se tutto a posto procedo con la function

    if (check) {


        // Gestisco la visibilità del bottone indietro, lo mostro

        document.getElementById("bottoneIndietro").hidden = false;

        // Prendo le varie caratteristiche per incrementare la Progress bar

        var bar = document.getElementById("bar");
        var txt = document.getElementById("text");

        // Se il contatore è minore di 10 vuol dire che ci sono altre form da scorrere

        if (contatore < 10) {

            // Compongo l'id della form
            var form = "form" + (contatore).toString();
            // Nascondo la form corrente
            document.getElementById(form).hidden = true;
            // Nascondo la form della spiegazione corrente
            document.getElementById(form + "-1").hidden = true;
            // Nascondo la form della gallery corrente
            document.getElementById(form + "_M").hidden = true;
            // Incremento il contatore per sapere a che form mi trovo (Vado avanti)
            contatore++;
            // Compongo l'id della form aggiornato a quella successiva
            var form = "form" + (contatore).toString();
            // Mostro la form corrente
            document.getElementById(form).hidden = false;
            // Mostro la form della spiegazione corrente
            document.getElementById(form + "-1").hidden = false;

            // Carico immagini nuove
            caricaImmagini();

            // Mostro la form della gallery corrente
            document.getElementById(form + "_M").hidden = false;

            // Cambio il nome del bottone
            if (contatore == 10) {

                document.getElementById("spanAvanti").innerHTML = "Concludi";

            }


            // Incremento contatore della percentuale della progress bar
            countPB = countPB + 10;

            // Visualizzo l'incremento il "colore" della PB
            bar.style.width = countPB + '%';
            // Visualizzo la percentuale incrementata
            txt.innerHTML = countPB + '%';



        } else {

            // Quando premo conludi richiamo evaluateBuild che mi raccoglie tutte le componenti scelte

            evaluateBuild();

            // Faccio un submit in modo da resettare tutte le form

            document.getElementById("form10").submit();

            // Aptro la pagina risultati

            var win = window.open("risultatoFinale.html", '_blank');
            win.focus();

        }




    }

}


function indietro() {

    // Prendo le varie caratteristiche per incrementare la Progress bar

    var bar = document.getElementById("bar");
    var txt = document.getElementById("text");

    // Controllo se non sono sulla prima form

    if (contatore > 1) {

        // Compongo l'id della form

        var form = "form" + (contatore).toString();

        // Nascondo la form corrente

        document.getElementById(form).hidden = true;

        // Nascondo la form della spiegazione corrente

        document.getElementById(form + "-1").hidden = true;

        // Nascondo la form della gallery corrente

        document.getElementById(form + "_M").hidden = true;

        // Decremento il contatore per sapere a che form mi trovo (Vado indietro)

        contatore--;

        // Compongo l'id della form aggiornato a quella precedente

        var form = "form" + (contatore).toString();

        // Mostro la form corrente

        document.getElementById(form).hidden = false;

        // Mostro la form della spiegazione corrente

        document.getElementById(form + "-1").hidden = false;

        // Mostro la form della gallery corrente

        document.getElementById(form + "_M").hidden = false;

        // Resetto il controllo sulla lista

        resetLista();

        // Se sono alla pagina 1 nascondo il bottone indietro

        if (contatore == 1) {

            // Nascondo il bottone indietro

            document.getElementById("bottoneIndietro").hidden = true;

        }

    }

    // Incremento contatore della percentuale della progress bar
    countPB = countPB - 10;

    // Visualizzo l'incremento il "colore" della PB
    bar.style.width = countPB + '%';
    // Visualizzo la percentuale incrementata
    txt.innerHTML = countPB + '%';

}

function evaluateBuild() {

    // Svuoto il session storage
    sessionStorage.clear();

    // Resetto la lista

    resetLista();

    // Vettore che conterrà le scelte
    var choice = [];

    // Scelta cpu

    var cpu = document.getElementById("lista1");
    cpu = cpu.options[cpu.selectedIndex].text;
    choice.push(cpu);

    // Scelta mobo

    var mobo = document.getElementById("lista2");
    mobo = mobo.options[mobo.selectedIndex].text;
    choice.push(mobo);

    // Scelta cooler

    var cooler = document.getElementById("lista3");
    cooler = cooler.options[cooler.selectedIndex].text;
    choice.push(cooler);

    // Scelta ram

    var ram = document.getElementById("lista4");
    ram = ram.options[ram.selectedIndex].text;
    choice.push(ram);

    // Scelta gpu

    var gpu = document.getElementById("lista5");
    gpu = gpu.options[gpu.selectedIndex].text;
    choice.push(gpu);

    // Scelta hdd

    var hdd = document.getElementById("lista6");
    hdd = hdd.options[hdd.selectedIndex].text;
    choice.push(hdd);

    // Scelta ssd

    var ssd = document.getElementById("lista7");
    ssd = ssd.options[ssd.selectedIndex].text;
    choice.push(ssd);

    // Scelta psu

    var psu = document.getElementById("lista8");
    psu = psu.options[psu.selectedIndex].text;
    choice.push(psu);

    // Scelta Case

    var Case = document.getElementById("lista9");
    Case = Case.options[Case.selectedIndex].text;
    choice.push(Case);

    // Scelta fan

    var fan = document.getElementById("lista10");
    fan = fan.options[fan.selectedIndex].text;
    choice.push(fan);

    // Inserisco il vettore come stringe nel sessionStorage in modo che possa recuperarlo nell'html dei risultati

    sessionStorage.setItem("sceltePrec", JSON.stringify(choice));


}

// Carico le gallery successive

function caricaImmagini() {

    if (check1 == true && contatore == 1 || check2 == true && contatore == 2 || check3 == true && contatore == 3 ||check4 == true && contatore == 4 ||check5 == true && contatore == 5 ||check6 == true && contatore == 6 ||check7 == true && contatore == 7 ||check8 == true && contatore == 8 ||check9 == true && contatore == 9 ||check10 == true && contatore == 10) {



    } else {

        var stage = document.getElementById("stage" + contatore);
        var fadeComplete = function (e) {
            stage.appendChild(arr[0]);
        };
        var arr = stage.getElementsByTagName("a");
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }

        switch (contatore) {

            case 1:

                check1 = true;

                break;

            case 2:
                
                check2 = true;

                break;

            case 3:
                
                check3 = true;

                break;

            case 4:
                
                check4 = true;

                break;

            case 5:
                
                check5 = true;

                break;

            case 6:
                
                check6 = true;

                break;

            case 7:
                
                check17 = true;

                break;

            case 8:
                
                check8 = true;

                break;

            case 9:
                
                check9 = true;

                break;

            case 10:
                
                check10 = true;

                break;
        }

    }

}

// RESET

function resetLista() {

    var list2 = document.getElementById("lista2");

    for (var i = 1; i < 21; i++) {

        list2.options[i].style.display = 'block';

    }

}

// Script per la gallery 1

window.addEventListener("DOMContentLoaded", function (e) {

    var stage = document.getElementById("stage1");
    var fadeComplete = function (e) {
        stage.appendChild(arr[0]);
    };
    var arr = stage.getElementsByTagName("a");
    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
    }

}
, false);

