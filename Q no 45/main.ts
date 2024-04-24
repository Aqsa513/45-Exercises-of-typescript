 //Define mfunction to creat a car object with optional option.
function creat_car(manufacturer, model, ...options){
    // Intialize a carobject with manufacturer and model
    let car = {
        manufacturer:manufacturer,
        model:model,
    };
    // Add additional options to the car object.
    options.forEach(Option => {
        let[key, value] = Option.split(":");
        car[key.trim()] = value.trim();
    })

    return car;
}

// Call the functionto creat  a car object.
let my_car = creat_car("Toyota","Corolla","color: Black","Sunroof: True","year: 2024");

// Print the variable to ensure all the information is stored correctly in the car object.
console.log(my_car);

