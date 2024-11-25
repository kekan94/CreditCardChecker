// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const mystery6 = [4, 5, 5, 6, 0, 5, 8, 5, 5, 9, 9, 2, 1, 9, 8, 4];
const mystery7 = [6, 0, 1, 1, 6, 9, 7, 8, 1, 5, 6, 3, 8, 2, 7, 2];
const mystery8 = [3, 7, 9, 9, 6, 5, 3, 9, 2, 5, 5, 8, 1, 0, 9];

const mysteryUnknownCompany = [7, 6, 2, 0, 0];

let mysteryLuhnCorrection = [5, 1, 8, 9, 9, 7,	6, 7,	5, 5,3, 5, 6, 1, 5, 8];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6, mystery7, mystery8, mysteryUnknownCompany, mysteryLuhnCorrection];

/*let string = 'string';
console.log(string[2]);*/

// Add your functions below:
const convertStringToArray = string => {
  let array = [];
  //console.log(string.length);
  for (let i = 0; i < string.length; i++) {
    let number = Number(string[i]);
    //console.log(number);
    //console.log(typeof number);
    array.push(number);
  }
  return array;
}

console.log(convertStringToArray('6370868906424592'));

function validateCredit(array) {
    let reversedArray = array.reverse();
    //console.log(reversedArray);
    let arrayEven = [];
    let arrayOdd = [];
    for (let i = 0; i < reversedArray.length; i++) {
      if (Number.isInteger(i / 2)) {
        arrayEven.push(reversedArray[i]);
        //console.log(reversedArray[i]);
      } else {
        arrayOdd.push(reversedArray[i] * 2);
      }
    }
    //console.log(arrayEven);
    //console.log(arrayOdd);
    for (let j = 0; j < arrayOdd.length; j++) {
      if (arrayOdd[j] > 9) {
        arrayOdd[j] = arrayOdd[j] - 9;
      } else {
        arrayOdd[j];
      }
    }
    //console.log(arrayOdd);
    let concatArray = arrayEven.concat(arrayOdd);
    //console.log(concatArray);
    const reducedArray = concatArray.reduce((acc, currVal) => acc + currVal);
    //console.log(reducedArray);
    if (reducedArray % 10 === 0) {
      return true
    } else {
      return false;
    }
}

const findInvalidCards = nestedArray => {
  const invalidCardsArray = nestedArray.filter(array => validateCredit(array) === false);
  //console.log(invalidCardsArray);
  const arrangedInvalidCardsArray = invalidCardsArray.map(array => array.reverse());
  return arrangedInvalidCardsArray;
}

const invalidCardsArray = findInvalidCards(batch);
console.log(invalidCardsArray);

function convertingInvalidCardsIntoValid(card) {
  if (validateCredit(card)) {
    return card;
  } else {
      card.pop();
      //console.log(card);
      let multipliedCard = [];
      for (let i = 0; i < card.length; i++) {
        if (Number.isInteger(i / 2)) {
          multipliedCard.push(card[i] * 2);
          //console.log(multipliedCard[i]);
        } else {
            multipliedCard.push(card[i]);
          }
      }
      //console.log(multipliedCard);
      for (let j = 0; j < multipliedCard.length; j++) {
        if (multipliedCard[j] > 9) {
          multipliedCard[j] = multipliedCard[j] - 9;
        } else {
          multipliedCard[j];
        }
      }
      //console.log(multipliedCard);
      let reducedArray = multipliedCard.reduce((acc, currVal) => acc + currVal);
      //console.log(reducedArray);
      if (reducedArray >= 10) {
        reducedArray = reducedArray / 10;
      } else if (reducedArray >= 100) {
        reducedArray = reducedArray / 100;
      }
      //console.log(reducedArray);
      //console.log(Math.ceil(reducedArray));
      //console.log(Math.round((Math.ceil(reducedArray) - reducedArray) * 10));
      //multipliedCard.push(Math.round(reducedArray) - reducedArray);
      multipliedCard.unshift(Math.round((Math.ceil(reducedArray) - reducedArray) * 10));
      mysteryLuhnCorrection = multipliedCard;
      return mysteryLuhnCorrection;
    }
}

//console.log(convertingInvalidCardsIntoValid(mysteryLuhnCorrection));

console.log(invalidCardsArray);

function idInvalidCardCompanies(invalidCardsNestedArray) {
  let array1 = [];
  for (let i = 0; i < invalidCardsNestedArray.length; i++) {
    //console.log(i);
    array1.push(invalidCardsNestedArray[i][0]);
  }
  //console.log(array1);
  let array2 = [];
  for (let j = 0; j < array1.length; j++) {
    switch (array1[j]) {
      case 3:
        array2.push('Amex (American Express)');
        break;
      case 4:
        array2.push('Visa');
        break;
      case 5:
        array2.push('Mastercard');
        break;
      case 6:
        array2.push('Discover');
        break;
      default:
        array2.push('Company not found. Card number starts with ' + invalidCardsNestedArray[invalidCardsNestedArray.length - 1][0]);
        break;
    }
    for (let m = 0; m < array2.length; m++) {
      if (array2[m] === array2[m - 1] || array2[m] === array2[m - 2] || array2[m] === array2[m - 3] || array2[m] === array2[m - 4]) {
        array2.pop();
      }
    }
  }
  return array2;
}

console.log(idInvalidCardCompanies(invalidCardsArray));






