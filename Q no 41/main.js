"use strict";
// Define  a function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
// Define an array containing magicians name
let magician_names = ["Harry poter", "Aqsa", "Fiza"];
// call the function to print each magician  name 
show_magicians(magician_names);
