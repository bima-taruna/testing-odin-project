function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function reverseString(string) {
  const result = [];

  for (let i = string.length - 1; i >= 0; i--) {
    result.push(string[i]);
  }

  return result.join("");
}

const calculator = () => {
  const add = (num1, num2) => {
    return num1 + num2;
  };

  const subtract = (num1, num2) => {
    return num1 - num2;
  };

  const divide = (num1, num2) => {
    return num1 / num2;
  };

  const multiply = (num1, num2) => {
    return num1 * num2;
  };
  return {
    add,
    subtract,
    divide,
    multiply,
  };
};

function caesarCypher(string, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const map = {};
  const result = [];

  for (let i = 0; i < alphabet.length; i++) {
    const wrappedIndex = (key + i) % alphabet.length;
    map[alphabet[i]] = alphabet[wrappedIndex];
  }
  for (let j = 0; j < string.length; j++) {
    const char = string[j];
    if (map[char.toLowerCase()]) {
      const ciphered = map[char.toLowerCase()];
      result.push(
        char === char.toUpperCase() ? ciphered.toUpperCase() : ciphered
      );
    } else {
      result.push(string[j]);
    }
  }
  return result.join("");
}

const analyzeArray = (arr) => {
  let average = 0;
  let sum = 0;
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  average = sum / arr.length;

  return {
    average: average,
    length: arr.length,
    max: max,
    min: min,
  };
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCypher,
  analyzeArray,
};
