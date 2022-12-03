// Complete the solution so that the function will break up camel casing,
// using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function breakCamelCase(string) {
    const res = string.split('')
    .map(el =>  el === el.toUpperCase()? el = ' ' + el : el).join('')
    return res;
  };
  