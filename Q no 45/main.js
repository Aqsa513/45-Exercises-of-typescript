//Define mfunction to creat a car object with optional option.
function creat_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Intialize a carobject with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add additional options to the car object.
    options.forEach(function (Option) {
        var _a = Option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the functionto creat  a car object.
var my_car = creat_car("Toyota", "Corolla", "color: Black", "Sunroof: True", "year: 2024");
// Print the variable to ensure all the information is stored correctly in the car object.
console.log(my_car);
