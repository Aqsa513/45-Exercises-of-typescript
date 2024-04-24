"use strict";
// Array of Current Users
let Current_Users = ["Ayesha", "eman", "Fatima", "Amina", "Ayman"];
// Array of New Users
let new_Users = ["Aqsa", "Nawera", "Eman", "Bushra", "sobia"];
// Loop through new user to check  for username availablity
new_Users.forEach(new_one_user => {
    // Making a condition for username already exist and save in our_condition Variable
    let our_condition = Current_Users.some(Current_one_Users => Current_one_Users.toLowerCase() === new_one_user.toLowerCase());
    // Print Diffrent message using If-Else Statment 
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This user ${new_one_user} is available`);
    }
});
