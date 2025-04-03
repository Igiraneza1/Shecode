// function createCounter() {
//     let count = 0;

//     return {
//         increment: function () {
//             count++;
//             console.log(count);
//         },
//         decrement: function () {
//             count--;
//             console.log(count);
//         }
//     };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.decrement(); 


function outerFunction() {
    let message = "Hello, Closure!";
      

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}
const myClosure = outerFunction();
myClosure(); 

