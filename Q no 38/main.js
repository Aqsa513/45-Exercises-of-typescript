"use strict";
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
// calling the function 
describe_city("karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
