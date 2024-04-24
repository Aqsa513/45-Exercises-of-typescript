// Making a Function

function make_shirt (size: string = "Large", printMessage:string = "I Love Typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}
// calling a function with by -defult  values
make_shirt();

// calling a function now with Medium size  and default message
make_shirt("Medium")

// calling a function with small size and also Diffrent  print Message
make_shirt("small","I love Javascript")




