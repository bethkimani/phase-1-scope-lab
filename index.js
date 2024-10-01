
// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';  // Declaring a global variable without var/let/const makes it global
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';  // This is the correct value to assign
}

const leastFavoriteCustomer = 'Karen';  // Declare the constant

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'John';  // This will throw an error because constants can't be changed
}
