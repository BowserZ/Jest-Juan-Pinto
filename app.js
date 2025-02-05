// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)


// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};


// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 146.23;
    return valueInYen;
};


// We declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.00556;
    return valueInPound;
};

module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen }