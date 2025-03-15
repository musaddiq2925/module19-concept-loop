
//------ Countdown from 81 to 56 Practice Task -----//
// Countdown from 81 to 56
for (let i = 81; i >= 56; i--) {
    console.log(i);
}

// Countdown from 81 to 56
function countdown(start, end) {
    let current = start;
    const timer = setInterval(() => {
        console.log(current);
        if (current === end) {
            clearInterval(timer);
            console.log("Countdown complete!");
        }
        current--;
    }, 1000); // 1000ms = 1 second delay
}

countdown(81, 56);