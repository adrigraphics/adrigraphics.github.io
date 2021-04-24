//console.log(document);

//document.gentElemtById()

const i = document.querySelector("#navbar i");


console.log(i);

i.onclick = function () {
 document.querySelector("body").style.setProperty("background-color","#1D0E29","important");
 document.querySelector("#navbar").style.setProperty("background-color","#1D0E29","important");
 document.querySelector("#footer").style.setProperty("background-color","#2E143E","important");
 document.querySelector("body").style.setProperty("color","#C8A3E0","important");
 document.querySelector("footer").style.color = "#C8A3E0";
 //document.querySelector("body").style.backgroundColor = "#000";
};