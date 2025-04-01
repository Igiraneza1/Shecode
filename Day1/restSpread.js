// rest operator
// Change element into array

function showNames(...names){
    console.log(names);
}
showNames('John', 'Keza', 'Jim');


function sum (...num){
    return num.reduce((add,b) => sum + b, 0);
    console.log(sum(1,2,3,4,5));

}




// // spread operator

// let fruits = ['apple', 'banana', 'orange']
// function  fruits ()