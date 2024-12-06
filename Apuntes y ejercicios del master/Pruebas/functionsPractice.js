// Calculate the average of all the numbers
function average(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        // Sum all numbers in the array
        total += numbers[i];
    }
    // Return the average by dividing the total sum by the number
    return total / numbers.length;
}

let result = average(10, 50, 40);
console.log(`The result to average is: ${result}`);