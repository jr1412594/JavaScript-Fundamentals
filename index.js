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
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / (markHeight ** 2)
johnBMI = johnWeight / (johnHeight ** 2)

let markHigherBmi = markBMI > johnBMI
// console.log(markHigherBmi, 'test 2')

if(markBMI > johnBMI){
  console.log(true)
} else {
  console.log(false)
}