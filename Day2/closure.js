function createCounter() {
    2 let count = 0;
    3
    4 return function counter() {
    5 count++;
    6 console.log(`Count: ${count}`);
    7 };
    8 }
    9
    10 const counter = createCounter();
    11 counter();
    // Count: 1
    12 counter();
    // Count: 2
    13 counter();
    // Count: 3
    