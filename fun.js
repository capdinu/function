function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));

 
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(2));

function toFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}
console.log(toFahrenheit(20));

function max(a, b, c) {
    return Math.max(a, b, c);
}
console.log(max(3, 5, 4));

function factorial(n) {
    if (n < 0) return undefined; 
    if (n === 0) return 1; 
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
 console.log(isPrime(7));

 function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));


function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
 console.log(sumArray([1, 2, 3, 4, 5]));

 function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    words.forEach(word => {
        if (word.length > longest.length) {
            longest = word;
        }
    });
    return longest;
}
 console.log(longestWord("The quick brown fox jumps over the lazy dog"));
 
 function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
 console.log(isPalindrome("racecar"));

 function fibonacci(n) {
    if (n < 0) return undefined; 
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
 console.log(fibonacci(6));

 
 function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
 console.log(countVowels("Hello World"));

 function uniqueElements(arr) {
    return Array.from(new Set(arr));
}
 console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));


function power(base, exponent) {
    return Math.pow(base, exponent);
}
 console.log(power(2, 3));


function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
 console.log(sortArray([5, 3, 8, 1, 2]));

 function findMedian(arr) {
    const sorted = sortArray(arr);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2; 
    } else {
        return sorted[mid];
}
 }
 console.log(findMedian([5, 3, 8, 1, 2]));

 function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
 console.log(capitalizeFirstLetter("hello world"));

 function flattenArray(arr) {
    return arr.flat(Infinity);
}
 console.log(flattenArray([1, [2, [3, 4]], 5]));

 function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 console.log(randomNumber(1, 10));

 function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}
 console.log(countOccurrences([1, 2, 2, 3, 2, 4, 2], 2));

