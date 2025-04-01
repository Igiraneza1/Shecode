// function greet(name, callback){
//     console.log(`Hello ${name}`);
//     callback();
// }

// function bye(){
//     console.log('Bye bye');
// }
// greet('Me', bye);



function addition(a, b, callback){
    let sum = a + b;
    console.log(`The sum is ${sum}`);
    callback();
}

function done(){
    console.log('Sum is done');
}
addition(5, 7, done)