// Define a function that takes two parameters
function sumNumbers (a, b) {
    // Calculate the sum of the parameters
    const result = a + b;
    return result; // Return the result
}

// Call the function and store the result in a variable
const totalSum = sumNumbers(3, 5)
console.log(`Total number is: ${totalSum}`); // Log the result to the console

// Define a function that calculates the total price with an optional discount
function calculateTotalPrice (pricePerItem, quantity, discount = 0) {
    // calculate the total price by multiplying the price per item by the quantity, then subtracting the discount
    const totalPrice = (pricePerItem * quantity) - discount;
    return totalPrice; // Return the result
}

// Call the function and store the result in a variable
const result = calculateTotalPrice(50, 3, 20);
console.log(`The total price is: ${result}`); // Log the result to the console


function getProductPrice (price = null) {

}

// Define a function that takes two parameters: first name and last name
function getFullName(firstName = "", lastName = "") {
    return { // Return an object containing the first name and last name
        firstName: firstName,
        lastName: lastName,
    }
}

// Invoke the function and store the result in a variable
let resultFullName = getFullName("Marcos", "Giannini");
// Invoke the object properties and log the result to the console
console.log(`Your full name is ${resultFullName.firstName} ${resultFullName.lastName}`); 


const userProfile = {
    address: {
      streetName: "Castellana"
    }
  };

  const fullAddress = `${userProfile?.address?.streetName ?? "Address"}`;
  console.log(fullAddress);
  const noFullAddress = `${userProfile?.address?.streetName ?? "Address not available"}`;
  console.log(noFullAddress); // "Author information not available"

  const book = {
    title: "JavaScript Essentials",
    author: "Marcos Giannini",
    year: 2024
  };
  
const {title, author, year} = book;
console.log(`The book is "${title}" is written by ${author} in ${year}`);

const bookDetails = {
    title: "Mastering JavaScript",
    author: {
      firstName: "John",
      lastName: "Doe"
    },
    publisher: {
      name: "TechBooks",
      location: "Spain"
    }
  };

const { author: { firstName }, publisher: { name } } = bookDetails;
console.log(`Author: ${firstName}, Publisher: ${name}`);
