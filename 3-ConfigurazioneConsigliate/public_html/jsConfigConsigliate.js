/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//global variable
var checkbottone = true;

function ShowBox() {



    //prendo l'elemento all'id combo1
    var valore = document.getElementById('combo1').selectedIndex;
    //prendo l'elemento all'id combo2
    var valore1 = document.getElementById('combo2').selectedIndex;
    //controllo se tutti e due i campi sono selezionati,se solo 1 dei due non risulta selezionato non compaiono le box
    if (valore == 0 || valore1 == 0) {
        alert("Devi selezionare perforza sia il budget che l'utilizzo");
    } else if (valore == 1 && valore1 == 1) {
        
        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        
        document.getElementById("im1").src = "img/Case/Case1.png";
	
	document.getElementById("im2").src = "img/Case/Case3.png";
        
        im1.onclick = function () {
            window.location.href = 'Build400-600uff.html';
        };
        
        im2.onclick = function () {
            window.location.href = 'Build400-600uff3.html';
        };


    } else if (valore == 1 && valore1 == 2) {
        
       //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        document.getElementById("im1").src = "img/Case/Case12.png";
	
	document.getElementById("im2").src = "img/Case/case13.png";
        
         im1.onclick = function () {
            window.location.href = 'Build400-600game.html';
        };
        
        im2.onclick = function () {
            window.location.href = 'Build400-600game3.html';
        };


    } else if (valore == 2 && valore1 == 1) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        
        document.getElementById("im1").src = "img/Case/Case2.png";
	
	document.getElementById("im2").src = "img/Case/Case2.png";
        
        im1.onclick = function () {
            window.location.href = 'Build600-800uff.html';
        };
        
         im2.onclick = function () {
            window.location.href = 'Build600-800uff3.html';
        };
        
      

    } else if (valore == 2 && valore1 == 2) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        
        document.getElementById("im1").src = "img/Case/Case12.png";
	
	document.getElementById("im2").src = "img/Case/case13.png";
        

        im1.onclick = function () {
            window.location.href = 'Build600-800game.html';
        };
        
         im2.onclick = function () {
            window.location.href = 'Build600-800game3.html';
        };
       
       

    } else if (valore == 3 && valore1 == 1) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        
        document.getElementById("im1").src = "img/Case/Case4.png";
	
	document.getElementById("im2").src = "img/Case/Case5.png";
        
        im1.onclick = function () {
            window.location.href = 'Build800-1000uff.html';
        };
        
        im2.onclick = function () {
            window.location.href = 'Build800-1000uff3.html';
        };
        
        

    } else if (valore == 3 && valore1 == 2) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        
        document.getElementById("im1").src = "img/Case/Case7.png";
	
	document.getElementById("im2").src = "img/Case/Case8.png";
        

        im1.onclick = function () {
            window.location.href = 'Build800-1000game.html';
        };
        
        im2.onclick = function () {
            window.location.href = 'Build800-1000game3.html';
        };
        


    } else if (valore == 4 && valore1 == 1) {

       //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        
        document.getElementById("im1").src = "img/Case/Case5.png";
	
	document.getElementById("im2").src = "img/Case/Case9.png";
        
        im1.onclick = function () {
            window.location.href = 'Build1000-1500uff.html';
        };
        
        im2.onclick = function () {
            window.location.href = 'Build1000-1500uff3.html';
        };
        

    } else if (valore == 4 && valore1 == 2) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        
        document.getElementById("im1").src = "img/Case/Case9.png";
	
	document.getElementById("im2").src = "img/Case/Case10.png";
        

        im1.onclick = function () {
            window.location.href = 'Build1000-1500game.html';
        };
        
        im2.onclick = function () {
            window.location.href = 'Build1000-1500game3.html';
        };

    }


}


