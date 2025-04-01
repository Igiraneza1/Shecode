// const arrowFunction = (a,b) => a+b;
// // // console.log(arrowFunction(2,3))

// const greet = () => {
//     console.log("Hello, world!");
//   };

  
// //   Area of rectangle

// const rectArea = (length, width) => {
//     const area = length * width;
//     console.log(`The area of the rectangle is ${area}`);
//   };
  



// Avarage of scores
let a = 30;
let b = 34;
let c = 42;
let d = 26;
const scoresAverage = (a, b, c, d) => {
    
    let average = (a + b + c + d) / 4;

    console.log(`The average of scores is ${average}`);

    
    if (average > 50) {
        console.log('Performance is good');
    } else {
        console.log('Improvement needed');
    }
};



scoresAverage(a, b, c, d);



