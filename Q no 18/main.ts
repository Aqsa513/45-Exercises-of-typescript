// Making a array of countries and print its orignal order
let countriesToVisit: string[] = ["China", "Demark","Brazil","Argentina"];
console.log("Original Order:", countriesToVisit);

// Print the  Array in Alphabetical order without modifying the actual Array List 
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is still in its Orignal Order
console.log("Still in Orignal Order:",countriesToVisit);

// Print the Array in Reversed Order without modifying the actual Array List 
console.log ("Reverse Order:", [...countriesToVisit].reverse());

// Show that the Array is still in its Orignal Order
console.log("Still in Orignal Order:", countriesToVisit);

// We have changed the Orignal Array Order 
console.log("Orignal Array Reversed:", countriesToVisit.reverse());

// Print the Array the show that it's back to its Orignal  Order
console.log("Back to Orignal Order:",countriesToVisit.reverse());

// Print the Array to show  that its Order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have changed again the Orignal Array Order Now in reverse order again 
console.log("Orignal Array Reversed Again:", countriesToVisit.reverse());











