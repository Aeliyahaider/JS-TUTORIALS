// LOOPS
let collage = "apna collage";
for(let i =0; i<5; i++){
    console.log(collage);
}

//loops
let sum = 0;
for(let i = 0; i<=5; i++){
    sum = sum + i;
}
console.log("sum is = ", sum);

//loops
for(let num = 1; num <=100; num++){
    if(num % 2 ==0){
        console.log("even numbers", num);
    }
}

//loops
let NUM = 25;
for(let i = 1; i<=3; i++){
    let user = prompt("please guess a number (hint- multiple of 5) 1-3 option");
    if(user == NUM){
        console.log("you guess right number", NUM);
    }
    else{
        console.log("try again");
    }
}
console.log("loop ended!");
