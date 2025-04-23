//function to reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}
// or
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello")); // "olleh"

// function to check longest word in string
function longestWord(str) {
  //split string into words
  const words = str.split(" ");
  //sort words by length
  let longest = "";
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  //return longest word
  return longest;
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "jumps"

//function to check if string is palindrome
function isPalindrome(str) {
  //remove all non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  //check if string is equal to its reverse
  return str === reverseString(str);
}
console.log(isPalindrome("Was it a car or a cat I saw?")); // true

//function to remove duplicates from string
function removeDuplicates(str) {
  //create a set to store unique characters
  const uniqueChars = new Set();
  //iterate over the string and add each character to the set
  for (const char of str) {
    uniqueChars.add(char);
  }
  //convert the set back to a string
  return Array.from(uniqueChars).join("");
}
console.log(removeDuplicates("hello world")); // "helo wrd"

//function to remove duplicates from array
function removeDuplicates(arr) {
  //create a set to store unique elements
  const uniqueElements = new Set();
  //iterate over the array and add each element to the set
  for (const element of arr) {
    uniqueElements.add(element);
  }
  //convert the set back to an array
  return Array.from(uniqueElements);
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3])); // [1, 2, 3, 4, 5]
// or
function removeDuplicatesShort(arr) {
  //create a set to store unique elements
  return [...new Set(arr)];
}
console.log(removeDuplicatesShort([1, 2, 3, 4, 5, 1, 2, 3])); // [1, 2, 3, 4, 5]

//function to check if string is a substring of another string
function isSubstring(str1, str2) {
  //check if str1 is a substring of str2
  return str2.includes(str1);
}
console.log(isSubstring("hello", "hello world")); // true

//function to check if string has vowels
function hasVowels(str) {
  //regular expression to check if string has vowels
  const re = /[aeiou]/i;
  //check if string matches the regular expression
  return re.test(str);
}
console.log(hasVowels("hello")); // true

//function to count vowels in string
function countVowels(str) {
  //regular expression to match vowels
  const re = /[aeiou]/gi;
  //match all vowels in the string
  const matches = str.match(re);
  //return the number of matches or 0 if no matches found
  return matches ? matches.length : 0;
}
console.log(countVowels("hello")); // 2

//function to check if number is prime
function isPrime(num) {
  //check if number is less than 2
  if (num < 2) {
    return false;
  }
  //check if number is divisible by any number from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  //if no divisors found, number is prime
  return true;
}
console.log(isPrime(7)); // true

//function to check if string is anagram of another string
function isAnagram(str1, str2) {
  //remove all non-alphanumeric characters and convert to lowercase
  str1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  //sort the characters of both strings and check if they are equal
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(isAnagram("listen", "silent")); // true

//function to check if string is a pangram
function isPangram(str) {
  //remove all non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  //check if string contains all letters of the alphabet
  return new Set(str).size === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true

//function to check if string is a valid JSON
function isValidJSON(str) {
  try {
    //parse string as JSON
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
console.log(isValidJSON('{"name": "John", "age": 30, "city": "New York"}')); // true

//function to check if string is a valid email address
function isValidEmail(email) {
  //regular expression to check if email is valid
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}
console.log(isValidEmail("test@test.com"));

//function to check if string is a valid URL
function isValidURL(url) {
  //regular expression to check if url is valid
  const re = /^(ftp|http|https):\/\/[^ "]+$/;
  return re.test(url);
}
console.log(isValidURL("https://www.google.com")); // true

//function to check if string is a valid phone number
function isValidPhoneNumber(phone) {
  //regular expression to check if phone number is valid
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(phone);
}
console.log(isValidPhoneNumber("+1234567890")); // true

//function to check if string is a valid date
function isValidDate(date) {
  //regular expression to check if date is valid
  const re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[0-2])[- /.](19|20)\d\d$/; //dd-mm-yyyy
  return re.test(date);
}
console.log(isValidDate("31-12-2023")); // true

//function to check if string is a valid time
function isValidTime(time) {
  //regular expression to check if time is valid
  const re = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
  return re.test(time);
}
console.log(isValidTime("23:59")); // true

//function to check if string is a valid credit card number
function isValidCreditCard(card) {
  //regular expression to check if credit card number is valid
  const re =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|6011[0-9]{12}|7[0-9]{15}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  return re.test(card);
}
console.log(isValidCreditCard("4111111111111111")); // true

//function to check if string is a valid password
function isValidPassword(password) {
  //regular expression to check if password is valid
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //at least 8 characters, at least one uppercase letter, one lowercase letter and one number
  return re.test(password);
}
console.log(isValidPassword("Password123")); // true
