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


let arr = [10, 9, 8, 4, 2, 5, 3, 1];

const bubbly = (inputArray) => {
  let len = inputArray.length;
  let swap = true;

  while(swap) {
    swap = false;
    for (let i = 0; i < len; i++) {
      if (inputArray[i] > inputArray[i + 1]) {
        let temp = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i + 1] = temp;
        swap = true
      }
    } 
    len -= 1
  }
  return inputArray

}

console.log(bubbly(arr))
console.log(10 < undefined)