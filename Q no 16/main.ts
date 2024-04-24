// creating a Guest List Array 
let guistList = ["Shereen", "Dua","Maria","Hania"];

// Make Variable for those guest who cant come
let dontCome = guistList[0];

// Print the nameof guestwho cant come 
console.log(dontCome,"Nahi Ahh Sakty ha");

// Add or Remove Values from Guest List Array 
guistList.splice(0,1,"Aqsa")

// Message Print for Bigger Table
 console.log("Good News ! we have Found a Bigger Table For Dinner.");

 // Adding a new Value of Starting index of array
guistList.unshift("Kashaf")

// Addind a new Value at ending index of array
guistList.push("Eraj");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guistList.length /2);

// Adding a new guestto middle index of array
guistList.splice(middleIndex, 0,"humaira");

//print Message of updated list
console.log("updated List of our Guests")

// sending a invitation message to our guests one by one names
guistList.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me`));




