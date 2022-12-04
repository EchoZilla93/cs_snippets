// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
// assert.strictEqual(findShort("Let's travel abroad shall we"), 2);

function findShort(s){
    const words = s.split(' ');
    let longitudeArr = []
    words.forEach(word => longitudeArr.push(word.length));
    return Math.min(...longitudeArr);
  }