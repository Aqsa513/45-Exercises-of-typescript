"use strict";
// Define  a function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
// function to make magicians names
function make_great(magician) {
    return magician.map(name => `The Great ${name}`);
}
// Define an array containing magicians name
let magician_names = ["Harry poter", "Aqsa", "Fiza"];
// call make_great function to modify magicians names
let great_magicians = make_great(magician_names);
// call  show_magicians that show modified list of magicians
show_magicians(great_magicians);
