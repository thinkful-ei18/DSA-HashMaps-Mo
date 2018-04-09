'use strict';
const HashMap = require('./hashmap');

function palindrome(string) {
  let oddCharPresent = false;
  let oddCharArray = [];
  let mapChar = new HashMap();
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (mapChar.get(string[i])) {
      count = mapChar.get(string[i]);
      count++;
      mapChar.set(string[i], count);
    } else {
      mapChar.set(string[i], 1);
    }
  }

  for (let i = 0; i < string.length; i++) {
    let value = mapChar.get(string[i]);

    for (let j = 0; j < oddCharArray.length; j++) {
      if (string[i] === oddCharArray[j]) {
        oddCharPresent = true;
      } else {
        oddCharPresent = false;
      }
    }

    if (value % 2 !== 0) {
      oddCharArray.push(string[i]);
    }
  }
  console.log(oddCharArray);
  if (oddCharArray.length > 1) {
    return false;
  } else {
    return true;
  }
}

module.exports = { palindrome };
