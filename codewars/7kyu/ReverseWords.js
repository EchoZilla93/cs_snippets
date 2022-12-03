// Complete the function that accepts a string parameter, and reverses each word in the string.
//  All spaces in the string should be retained.


// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    const wordArr = str.split(" ");
    let result = [];
    wordArr.forEach(word =>  result.push(word.split('').reverse().join("")));
    result = String(result).replace(/,/g," ")
    return result;
   };