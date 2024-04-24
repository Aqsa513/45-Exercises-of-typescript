"use strict";
// Define a function with a rest parameter  that accept items arguments  representing our sandwich
function makeSAndwich(...items) {
    console.log("\nMakin a sandwich with the following item: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow enjoy sandwwich");
}
// call the function 3 items with 3 diffrent  nuumber of arguments
makeSAndwich("chicken", "Chese", "Mayo", "Egg");
makeSAndwich("Bread", "Butter");
makeSAndwich("Bread", "Butter", "Mayo", "Egg", "chese", "chicken", "Lettuce", "Tomato");
