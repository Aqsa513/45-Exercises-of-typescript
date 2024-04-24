// Define  a function to print each magician name from an array

function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}

// function to make magicians  great through .map() it will modify array
function make_great(magician: string[]){
    return magician.map(name => `The Great ${name}`);
}
// Define an array containing magicians name
let magician_names = ["Harry poter","Aqsa","Fiza"]

// Making  a copy of orignal array through .slice() function 
 let copy_magician_names = magician_names.slice()

//Modify the copied array to includ " The Great" with their  names
 let  copy_great_magicians = make_great(copy_magician_names);

// show both  array orignal and copied

// orignal

show_magicians(magician_names);

// copied
show_magicians(copy_great_magicians);