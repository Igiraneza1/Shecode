// let i;
// for(i = 1; i <= 10;i++ ){
//     console.log(`Hello ${i}`);
// }





// Average of scores using array


let scores = [40, 80, 48, 76];

const average = (score) => {
    let sum = 0;

    for (let i = 0; i < score.length; i++) {
        sum = sum + score[i];
    }

    let average = sum / score.length;

    console.log(`The average of scores is ${average}`);

    // if (average > 50) {
    //     console.log("Performance is good");
    // } else {
    //     console.log("Improvement needed");
    // }


    const result = average > 50 ? 'Perfomance is good' : 'Improvement needed';
    console.log(result);
};

average(scores);

