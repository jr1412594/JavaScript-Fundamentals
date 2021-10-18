// let arr = [6, 2, 1, 10, 8, 9]

// const bubbleSort = (inputArray) => {
//   let len = inputArray.length -1;
//   let swap = true;

//   while(swap) {
//     swap = false;
//     for (let i = 0; i < len; i++) {
//       if (inputArray[i] > inputArray[i + 1]) {
//         let temp = inputArray[i];
//         inputArray[i] = inputArray[i + 1];
//         inputArray[i + 1] = temp;
//         swap = true;
//       }
//     } 
//     len -= 1;
//   }
//   return inputArray
// }
// console.log(bubbleSort(arr))

// //TINKER WITH IF ELSE STATEMENTS

// // const age = 19;
// const age = 16;
// const isOldEnough = age >= 18;
// const yearsLeft = 18 - age

// // if (isOldEnough === true){
// //   console.log(`Sarah can drive ☠️`);
// // } else {
// //   console.log(`You still have ${yearsLeft} years till you can drive`)
// // }

// isOldEnough 
//   ? console.log(`Sarah can drive ☠️`)
//   :  console.log(`You still have ${yearsLeft} till you can drive!`)

// const birthYear = 1991;
// let century;
// if(birthYear < 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century)

// let markWeight = 78;
// let markHeight = 1.69;

// let johnWeight = 92;
// let johnHeight = 1.95;

// let markBMI = markWeight / (markHeight ** 2)
// let johnBMI = johnWeight / (johnHeight ** 2)

// console.log(markBMI, 'mark')
// console.log(johnBMI, 'john')

// let markHigherBmi = markBMI > johnBMI
// console.log(markHigherBmi, "test 1")

//test 2
// markWeight = 95;
// markHeight = 1.88;

// johnWeight = 85;
// johnHeight = 1.76;

// markBMI = markWeight / (markHeight ** 2)
// johnBMI = johnWeight / (johnHeight ** 2)

// let markHigherBmi = markBMI > johnBMI
// // console.log(markHigherBmi, 'test 2')

// if(markBMI > johnBMI){
//   console.log(true)
// } else {
//   console.log(false)
// }

//


 ///BUBBLE SORT

// let arr = [4,2,10,7,1,3];

// const bubbleSort = (arr) => {
//   let len = arr.length
//   let swap = true;

//   while (swap) {
//       swap = false
//     for (let i = 0; i < len; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = temp
//         swap = true;
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort(arr))

// let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < len; i++) {
//             if (inputArr[i] > inputArr[i + 1]) {
//                 let tmp = inputArr[i];
                // inputArr[i] = inputArr[i + 1];
//                 inputArr[i + 1] = tmp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return inputArr;
// };

// console.log(bubbleSort(arr))


// let arr = [10, 9, 8, 4, 2, 5, 3, 1];



//COUNTING STEPS IN NESTED LOOPS

//BELOW WILL PROVE A O(N^2) FUNCTION
  //function "hasDuplicateValues" is a quadratic equation. 
  // 5 values and number of steps is 25.

// const array = [1, 4, 5, 2, 9, 10]

// const hasDuplicateValues = (array) => {
//   let steps = 0; //count of steps

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       steps ++; // Increment number of steps
//       if (i !== j && array[i] === array[j]) {
//         return true;
//       }
//     }
//   }
//   console.log(steps); // print number of steps if no duplicates
//   return false;
// }
// console.log(hasDuplicateValues(array))

//MORE TIME EFFICIENT DUPLICATE CHECK

// const array = [1, 4, 5, 2, 9];

// 

//FIND THE GREATEST VALUE

// const array = [1, 4, 8, 3, 10, 3]
// const greatesValue = (array) => {
//   let biggie = 0;
//   let steps = 0;
//   for (let i = 0; i < array.length; i++) {
//     steps++
//     if (array[i] > biggie) {
//       biggie = array[i]
//     }
//   }
//   console.log(steps)
//   return biggie
// }

// console.log(greatesValue(array))


//LINEAR SORT
// let array = [4, 2, 1, 9, 5];
// let array = [2, 1, 0];
// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// const linearSort = (array) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     let lowestValue = array[i];

//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < lowestValue) {
//         lowestValue = array[j];
//       }
//         if (lowestValue !== array[i]) {
//         let temp = array[i];
//         array[i] = lowestValue;
//         array[j] = temp 
//       }
//     }
//   }
//   return array
// }
// console.log(linearSort(array))

//INSERTION SORT

// let array = [4, 2, 7, 1, 3];
// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// const insertionSort = (array) => {

//   for(let i = 1; i < array.length; i++) {
//     let tempValue = array[i]; //actual value
//     let position = i - 1; //actual index 
    
//     while(position >= 0) {
//       if (array[position] > tempValue) {
//         array[position + 1] = array[position];
//         position--;
//       } else {
//         break;
//       }
//     array[position + 1] = tempValue
//     }
//   }
//   return array
// }

// console.log(insertionSort(array))

//INTERSECTION CHECK
//NESTED LOOPS = TIME COMPLEXITY 0(N^2)
// let firstArray = [3, 1, 4, 2];
// let secondArray = [4, 5, 3, 6];
// let firstArray = [3, 1, 4, 2];
// let secondArray = [3, 1, 4, 2];

// const intersection = (array1, array2) => {
//   let result = [];
//   let step = 0;
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       step++;
//       if(array1[i] === array2[j]) {
//         result.push(array1[i])
//         // break; // without this runs through every element;
//         break; //ends iteration early
//       }
//     }
//   }
//   console.log(step)
//   return result
// }
// console.log(intersection(firstArray, secondArray))

// let array = [2, 1, 5, 10, 3];

// const bub = (array) => {
//   const len = array.length;
//   let swapped = true;

//   while(swapped) {
//     swapped = false;
    
//     for (let i = 0; i < len; i++) {
//       if (array[i] > array[i + 1]) {
//         let temp = array[i + 1];
//         array[i + 1] = array[i];
//         array[i] = temp;
//         swapped = true;
//       }
//     }
//   }
//   return array
// }
// console.log(bub(array))

// const alpha = 'abcdefghijklmnopqrstuvwxyz ';
// // const sentence = 'let there be light'
// const sentence = 'the quick brown fox jumps over the lazy dog';
// DOES THE SENTENCE CONTAIN ALL LETTERS IN THE ALPHABET
// const letterMissingChecker = (alpha, sentence) => {
//   let hashMap = {};

//   for(const letter of sentence) {
//     console.log(letter)
//     hashMap[letter] = true;
//   }
//   for(const letter of alpha) {
    
//     if(!hashMap[letter]) {return false}
//   }
//   return true
// }
// console.log(letterMissingChecker(alpha, sentence))



// WHAT LETTERS ARE MISSING IN THE SENTENCE
// const alpha = 'abcdefghijklmnopqrstuvwxyz ';
// const sentence = 'let there be light';
// const sentence = 'the quick brown box jumps over the lazy dog';

// const frequencyLetters = (alpha, sentence) => {
//   let hashMap = {};
//   let str = '';

//   for(const letter of sentence) {
//     hashMap[letter] = true;
//   }
//   for(const letter of alpha) {
//     if (!hashMap[letter]) { str += letter}
//   }
//   return str.length !== 0 ? str : "All letters accounted for!" 
//   // return str
// }
// console.log(frequencyLetters(alpha, sentence))

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [0, 1, 3, 6, 8]
//return [2, 4]
// const intersection = (array1, array2) => {
//   let hashMap = {};
//   let result = [];

//   for(const value of array1) {
//     hashMap[value] = true;
//   }

//   for(const value of array2) {
//     if(hashMap[value]) {result.push(value)}
//   }
//   return result
// }
// console.log(intersection(array1, array2))

// let array = ['a', 'b', 'c', 'a', 'd', 'c', 'e', 'f'];

// const firstDuplicate = (array) => {
//   let hashMap = {};
//   for (const value of array) {
//     if (hashMap[value]) {
//       return value
//     } else {
//       hashMap[value] = 1
//     }
//   }
//   console.log(hashMap)
// }
// console.log(firstDuplicate(array))

// let str = 'minimum';

// const firstUnique = (str) => {
//   let len = str.length;
//   let hashMap = {};
//   let unq;
//   let steps = 0
//   for(let i = len-1; i >= 0; i--) {
//     steps++
//     hashMap[str[i]] ?   hashMap[str[i]]++ : hashMap[str[i]] = 1
//     if(hashMap[str[i]] === 1) {unq = str[i]} 
//   }
//   console.log('unq :', unq, 'steps :', steps)
// }
// console.log(firstUnique(str))


//COUNT DOWN FUNCTION WITH A LOOP
// const number = 10;
// const countDown = (number) => {
//   for (let i = number; i >= 0; i--) {
//     console.log(i)
//   }
// }

// console.log(countDown(20));

// function countDown(number) {
//   console.log(number)
//     if(number === 0) {
//       return
//     } else {
//       countDown(number - 1)
//     }
// }
// console.log(countDown(15))