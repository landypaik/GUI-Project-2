/* 
 * Project 2 - {Landon Paik}
 */
"use strict";
var canvas = document.getElementById("mainCanvas");

window.addEventListener("mousedown", alertInfo);
window.addEventListener("onmouseout");

function colorChange() {
    var color2 = document.getElementById("hexCode").value;
    document.getElementById("colorIcon").style.color = color2;
    return false;
}

var getCoordinates = function() {
    var rect = canvasContainer.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    document.getElementById("coordinates").innerHTML = "x:" +x+  " y:" +y;
}

var mouseOutCanvas = function() {
    document.getElementById("coordinates").innerHTML = "x:" +"?"+  " y:" +"?";
}

var alertInfo = function() {
    var size = document.getElementById("brushSize").value;
    var style = document.getElementById("brushType").value;
    var color = document.getElementById("hexCode").value;
    var x = event.clientX;
    var y = event.clientY;
    alert('Paint:' + '\n' + 'size - ' + size + '\n' + 'style - ' + style + '\n' + 'color - ' + color +'\n'+ 'At - ' + '('+x+','+y+')')
 }