// Kelvin is 293 and stays constant
const kelvin = 293;

// Celsius is Kelvin minus 273
var celsius = (kelvin - 273);
console.log(celsius);

// Fahrenheit = Celsius * (9/5) + 32;
var fahrenheit = celsius * (9/5) + 32;

//Round F to lowest number
console.log(Math.floor(fahrenheit));

// Store F as floor
fahrenheit = (Math.floor(fahrenheit));
console.log(fahrenheit);

// String interpolation to get "The temperature is TEMPERATURE degree F"

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// Newton

var newton = celsius * (33/100)
console.log(newton)

var newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees Newton`);
