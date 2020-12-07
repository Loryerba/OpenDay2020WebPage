/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//funzione richiamata per la visualizzazione della form2 e validazione della form 1
function evaluateFirst() {

    var Next1 = document.getElementById("Next1");
    var Form2 = document.getElementById("Form2");
    var progress = document.getElementById("progress");

    var list = document.getElementById("slct-cpu");
    var index = list.value;
    if (index == "Selezionare un processore") {
        window.alert("Prima di procedere, selezionare un processore.");
    } else {

        Form1.style.left = "-1200px";
        Form2.style.left = "120px";
        progress.style.width = "240px";
    }


}

//funzione richiamata per la visualizzazione della form1
function BackFirst() {
    var Form1 = document.getElementById("Form1");
    var Form2 = document.getElementById("Form2");
    var progress = document.getElementById("progress");

    Form1.style.left = "120px";
    Form2.style.left = "1200px";
    progress.style.width = "120px";

}

//funzione richiamata per la visualizzazione della form3 e validazione della form 2
function evaluateSecond() {

    var Form2 = document.getElementById("Form2");
    var Form3 = document.getElementById("Form3");
    var progress = document.getElementById("progress");


    var list = document.getElementById("slct-mobo");
    var index = list.value;

    if (index == "Selezionare una scheda madre") {
        window.alert("Prima di procedere, selezionare una scheda madre.");
    } else {
        Form2.style.left = "-1200px";
        Form3.style.left = "120px";
        progress.style.width = "360px";
    }

}

//funzione richiamata per la visualizzazione della form2
function BackSecond() {
    var Form2 = document.getElementById("Form2");
    var Form3 = document.getElementById("Form3");
    var progress = document.getElementById("progress");

    Form2.style.left = "120px";
    Form3.style.left = "1200px";
    progress.style.width = "240px";

}

//funzione richiamata per la visualizzazione della form4 e validazione della form3
function evaluateThird() {
    var Form3 = document.getElementById("Form3");
    var Form4 = document.getElementById("Form4");
    var progress = document.getElementById("progress");

    var list = document.getElementById("slct-cooler");
    var index = list.value;

    if (index == "Selezionare un dissipatore") {
        window.alert("Prima di procedere, selezionare un dissipatore.");
    } else {
        Form3.style.left = "-1200px";
        Form4.style.left = "120px";
        progress.style.width = "480px";
    }
}

//funzione richiamata per la visualizzazione della form3
function BackThird() {

    var Form3 = document.getElementById("Form3");
    var Form4 = document.getElementById("Form4");
    var progress = document.getElementById("progress");

    Form3.style.left = "120px";
    Form4.style.left = "1200px";
    progress.style.width = "360px";

}

//funzione richiamata per la visualizzazione della form5 e validazione della form4
function evaluateFourth() {
    var Form4 = document.getElementById("Form4");
    var Form5 = document.getElementById("Form5");
    var progress = document.getElementById("progress");

    var list = document.getElementById("slct-ram");
    var index = list.value;

    if (index == "Selezionare la memoria ram:") {
        window.alert("Prima di procedere, selezionare la memoria ram.");
    } else {
        Form4.style.left = "-1200px";
        Form5.style.left = "120px";
        progress.style.width = "600px";
    }
}

//funzione richiamata per la visualizzazione della form4
function BackFourth() {

    var Form4 = document.getElementById("Form4");
    var Form5 = document.getElementById("Form5");
    var progress = document.getElementById("progress");

    Form4.style.left = "120px";
    Form5.style.left = "1200px";
    progress.style.width = "480px";

}

//funzione richiamata per la visualizzazione della form6 e validazione della form5
function evaluateFifth() {

    var Form5 = document.getElementById("Form5");
    var Form6 = document.getElementById("Form6");
    var progress = document.getElementById("progress");

    var list = document.getElementById("slct-gpu");
    var index = list.value;

    if (index == "Selezionare una scheda video:") {
        window.alert("Prima di procedere, selezionare la scheda video.");
    } else {
        Form5.style.left = "-1200px";
        Form6.style.left = "120px";
        progress.style.width = "720px";
    }


}

//funzione richiamata per la visualizzazione della form5
function BackFifth() {

    var Form5 = document.getElementById("Form5");
    var Form6 = document.getElementById("Form6");
    var progress = document.getElementById("progress");

    Form5.style.left = "120px";
    Form6.style.left = "1200px";
    progress.style.width = "600px";
}

//funzione richiamata per la visualizzazione della form7 e validazione della form6
function evaluateSixth() {

    var Form7 = document.getElementById("Form7");
    var Form6 = document.getElementById("Form6");
    var progress = document.getElementById("progress");

    var list = document.getElementById("slct-hdd");
    var index = list.value;

    if (index == "Selezionare un Hard Disk:") {
        window.alert("Prima di procedere, selezionare un Hard Disk.");
    } else {
        Form6.style.left = "-1200px";
        Form7.style.left = "120px";
        progress.style.width = "840px";
    }


}

//funzione richiamata per la visualizzazione della form6
function BackSixth() {
    var Form6 = document.getElementById("Form6");
    var Form7 = document.getElementById("Form7");
    var progress = document.getElementById("progress");


    Form6.style.left = "120px";
    Form7.style.left = "1200px";
    progress.style.width = "720px";
}

//funzione richiamata per la visualizzazione della form8 e validazione della form7
function evaluateSeventh() {
    var Form7 = document.getElementById("Form7");
    var Form8 = document.getElementById("Form8");
    var progress = document.getElementById("progress");

    var list = document.getElementById("slct-ssd");
    var index = list.value;

    if (index == "Selezionare un SSD:") {
        window.alert("Prima di procedere, selezionare una SSD.");
    } else {
        Form7.style.left = "-1200px";
        Form8.style.left = "120px";
        progress.style.width = "960px";
    }

}

//funzione richiamata per la visualizzazione della form7
function BackSeventh() {

    var Form8 = document.getElementById("Form8");
    var Form7 = document.getElementById("Form7");
    var progress = document.getElementById("progress");

    Form7.style.left = "120px";
    Form8.style.left = "1200px";
    progress.style.width = "840px";

}

//funzione richiamata per la visualizzazione della form9 e validazione della form8
function evaluateEighth() {
    var Form9 = document.getElementById("Form9");
    var Form8 = document.getElementById("Form8");
    var progress = document.getElementById("progress");

    var list = document.getElementById("slct-psu");
    var index = list.value;

    if (index == "Selezionare un alimentatore:") {
        window.alert("Prima di procedere, selezionare un alimentatore.");
    } else {
        Form8.style.left = "-1200px";
        Form9.style.left = "120px";
        progress.style.width = "1080px";
    }

}

//funzione richiamata per la visualizzazione della form8
function BackEighth() {

    var Form8 = document.getElementById("Form8");
    var Form9 = document.getElementById("Form9");
    var progress = document.getElementById("progress");

    Form8.style.left = "120px";
    Form9.style.left = "1200px";
    progress.style.width = "960px";
}


//funzione richiamata per la visualizzazione della form9 e validazione della form10
function evaluateNinth() {
    var Form9 = document.getElementById("Form9");
    var Form10 = document.getElementById("Form10");
    var progress = document.getElementById("progress");

    var list = document.getElementById("slct-case");
    var index = list.value;

    if (index == "Selezionare un case:") {
        window.alert("Prima di procedere, selezionare un case.");
    } else {
        Form9.style.left = "-1200px";
        Form10.style.left = "120px";
        progress.style.width = "1200px";
    }


}

//funzione richiamata per la visualizzazione della form9
function BackNinth() {
    
    var Form10 = document.getElementById("Form10");
    var Form9 = document.getElementById("Form9");
    var progress = document.getElementById("progress");

    Form9.style.left = "120px";
    Form10.style.left = "1200px";
    progress.style.width = "1080px";
}

//funzione richiamata per la visualizzazione della pagina di resoconto e validazione della form10
function evaluateBuild(){
    
    var list = document.getElementById("slct-fan");
    var index = list.value;
    var Form10 = document.getElementById("Form10");    
    if (index == "Selezionare una ventola:") {
        window.alert("Prima di procedere, selezionare una ventola.");
    }
    else{
        evaluateChoice();
        //azzeramento della form
        Form10.submit();
        //apertura in un'altra tab, della pagina relativa al resconto
        var win = window.open("product.html", '_blank');
        win.focus();
    }
    
}

function evaluateChoice(){
    
    sessionStorage.clear();
    var choice = [];
    
    var cpu = document.getElementById("slct-cpu");
    cpu = cpu.options[cpu.selectedIndex].text;
    choice.push(cpu);
    
     var mobo = document.getElementById("slct-mobo");
    mobo = mobo.options[mobo.selectedIndex].text;
    choice.push(mobo);
    
     var cooler = document.getElementById("slct-cooler");
    cooler = cooler.options[cooler.selectedIndex].text;
    choice.push(cooler);
    
     var ram = document.getElementById("slct-ram");
    ram = ram.options[ram.selectedIndex].text;
    choice.push(ram);
    
     var gpu = document.getElementById("slct-gpu");
    gpu = gpu.options[gpu.selectedIndex].text;
    choice.push(gpu);
    
    var hdd = document.getElementById("slct-hdd");
    hdd = hdd.options[hdd.selectedIndex].text;
    choice.push(hdd);
    
     var ssd = document.getElementById("slct-ssd");
    ssd = ssd.options[ssd.selectedIndex].text;
    choice.push(ssd);
    
     var psu = document.getElementById("slct-psu");
    psu = psu.options[psu.selectedIndex].text;
    choice.push(psu);
    
    var Case = document.getElementById("slct-case");
    Case = Case.options[Case.selectedIndex].text;
    choice.push(Case);
    
     var fan = document.getElementById("slct-fan");
    fan = fan.options[fan.selectedIndex].text;
    choice.push(fan);
    
    sessionStorage.setItem("choice",  JSON.stringify(choice));
    
}