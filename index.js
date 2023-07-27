// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world"
// Example Output: "dlrow olleh"

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}
// Test the function
const input = "hello world";
const output = reverseString(input);
console.log(output);





// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
// Test the function
const inputArray = [2, -5, 10, -3, 7];
const output1 = sumOfPositiveNumbers(inputArray);
console.log(output1);






// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function findMostFrequentElement(arr) {
  const elementFrequency = {};

  for (const element of arr) {
    elementFrequency[element] = (elementFrequency[element] || 0) + 1;
  }

  let mostFrequentElement;
  let maxFrequency = 0;

  for (const element in elementFrequency) {
    if (elementFrequency[element] > maxFrequency) {
      maxFrequency = elementFrequency[element];
      mostFrequentElement = element;
    }
  }

  return parseInt(mostFrequentElement);
}

// Test the function
const inputArray1 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output2 = findMostFrequentElement(inputArray1);
console.log(output2); // Output: 3





// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

// Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; // If no such pair is found
}

// Test the function
const inputArray2 = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const output3 = findTwoNumbersWithSum(inputArray2, targetValue);
console.log(output3);





// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

// Test the calculator function
console.log(calculator(5, "+", 3)); // Output: 8
console.log(calculator(10, "-", 4)); // Output: 6
console.log(calculator(6, "*", 7)); // Output: 42
console.log(calculator(15, "/", 5)); // Output: 3
console.log(calculator(10, "/", 0)); // Output: "Cannot divide by zero"
console.log(calculator(3, "%", 2)); // Output: "Invalid operator"





// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=<>?/{}[]";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}

// Test the function
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);




// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumeral) {
  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integerValue = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentSymbolValue = romanSymbols[romanNumeral[i]];
    const nextSymbolValue = romanSymbols[romanNumeral[i + 1]];

    if (nextSymbolValue > currentSymbolValue) {
      integerValue += nextSymbolValue - currentSymbolValue;
      i++;
    } else {
      integerValue += currentSymbolValue;
    }
  }

  return integerValue;
}

// Test the function
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("XXI")); // Output: 21
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("XC")); // Output: 90
console.log(romanToInt("CM")); // Output: 900
console.log(romanToInt("MCMXCIV")); // Output: 1994



// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two elements";
  }

  arr.sort((a, b) => a - b);
  return arr[1];
}

// Test the function
const inputArray3 = [5, 3, 9, 2, 8, 2, 7];
const result = findSecondSmallest(inputArray3);
console.log(result);
