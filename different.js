// Odd Numbers

// for (let i = 0; i < 50; i++) {
//     if (i%2===1) {
//         console.log(i);
//     }
// }

// for (let i = 1; i < 50; i++) {
//     if (i%2!==1) {
//         console.log(i);
//     }
// }


// for (let i = 1; i < 50; i+=2) {
//     console.log(i);
// }

// Even Numbers of 1 to 30
// for (let i = 1; i <=30; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <=30; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <=30; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <=50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }

// Give me the sum of numbers form 1 to 20 that are divisible by 3
let sumTotal = 0;
for (let i = 1; i <=20; i++) {
    if (i % 3 === 0) {
        console.log(i);
        sumTotal = sumTotal + i;
        // console.log('sum total:', sumTotal);
    }
}
console.log('Sum total:', sumTotal);