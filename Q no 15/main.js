"use strict";
let guistList = ["Shereen", "Dua", "Maria", "Hania"];
let dontCome = [0];
console.log(dontCome, "Nahi Ahh Sakti");
guistList.splice(0, 1, "Aqsa");
guistList.forEach(guest => console.log(`Salam ${guest}," would you like to dinner with me?"`));
