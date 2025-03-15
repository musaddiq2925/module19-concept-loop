// Continue -> skip the current iteration
// Break -> i am done with the loop, loop end.

// for (let i = 1; i < 10; i++) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }

let nb = 0;
while (nb < 15) {
    nb++;
    if (nb % 5 !== 0) {
        continue;
    }
    console.log(nb);
}