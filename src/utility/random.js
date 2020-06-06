export function generateRandomIntBetween(num1, num2, numsToExclude = []) {
  // return an integer between num1 and num2,
  // INCLUDING BOTH num1 and num2.
  // numsToExclude is an array of undesired numbers

  const lowNum = Math.min(num1, num2);
  const highNum = Math.max(num1, num2) + 1;

  let random;
  while (typeof random === 'undefined' || numsToExclude.includes(random)) {
    random = Math.floor(Math.random() * (highNum - lowNum) + lowNum);
  }
  return random;
}

export function randomIntBetween(num1, num2, n = 1, numsToExclude = []) {
  // return an integer between num1 and num2,
  // INCLUDING BOTH num1 and num2.
  // n is the number of integers to generate
  if (n < 1) {
    throw new Error('Generate less than 1 random integer?');
  } else if (n === 1) {
    return generateRandomIntBetween(num1, num2, numsToExclude);
  } else {
    const intArr = [];
    while (intArr.length < n) {
      intArr.push(generateRandomIntBetween(num1, num2, numsToExclude));
    }
    return intArr;
  }
}

export function randomNonZeroIntBetween(num1, num2, n = 1) {
  if (num1 === 0 && num2 === 0) {
    throw new Error('Both nums are 0 in randomNonZeroIntBetween');
  }
  return randomIntBetween(num1, num2, n, [0]);
}

export function coinFlip() {
  return !!randomIntBetween(0, 1);
}

export function rollD(n) {
  return randomIntBetween(1, n);
}

export function chooseRandomArrayElement(arr) {
  return arr[randomIntBetween(0, arr.length - 1)];
}

export function chooseSomeRandomArrayElements(arr, n) {
  // TODO: improve this method
  if (n > arr.length) {
    throw new Error('Elements  to pick are larger than array length');
  }
  const elements = new Set();
  while (elements.size < n) {
    elements.add(chooseRandomArrayElement(arr));
  }
  return [...elements];
}

export function shuffle(array) {
  // from https://bost.ocks.org/mike/shuffle/
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
