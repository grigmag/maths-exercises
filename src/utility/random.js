export function randomIntBetween(num1, num2) {
  // return an integer between num1 and num2,
  // INCLUDING BOTH num1 and num2.
  const lowNum = Math.min(num1, num2);
  const highNum = Math.max(num1, num2) + 1;
  return Math.floor(Math.random() * (highNum - lowNum) + lowNum);
}

export function randomNonZeroIntBetween(num1, num2) {
  if (num1 === 0 && num2 === 0) {
    throw new Error('Both nums are 0 in randomNonZeroIntBetween');
  }
  let rand;
  while (!rand || rand === 0) {
    rand = randomIntBetween(num1, num2);
  }
  return rand;
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
