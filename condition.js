// CONDITIONAL STATEMENT
let num = 6;

if(num % 2 == 0){
    console.log(num, "even");
} 
else{
    console.log(num, "odd");
}

// CONDITIONAL STATEMENT
let AGE = 40;

if(AGE > 18 && AGE < 60){
    console.log(AGE, "you are ELIGIBLE to vote");
}
else if(AGE > 18 || AGE > 60){
    console.log(AGE, "you are  eligible to vote");
}
else{
    console.log(AGE, "you are not ELIGIBLET TO VOTE");
}

// TURNARY OPERATORS
let UMAR = 16;
let RESULT = UMAR >= 18 ? "adult" : "not adult";
console.log(RESULT);

// prompt INPUT FROM USER
let NUMBER = prompt("PLEASE ENTER A NUMBER!");
if(NUMBER % 5 ==0){
    console.log(NUMBER, "IS MULTIPLE OF 5");
}
else{
    console.log(NUMBER, "IS NOT A MULTIPLE OF 5 PLEASE RE-ENTER A NUMBER");
}

// CONDITIONAL STATEMENT
let score = prompt("PLEASE ENTER NUMBER FOR GRADE 0 - 100");
if(score >= 90 && score <= 100){
    grade = "A";
}
else if(score >= 80 && score < 90){
    grade = "B";
}
else if(score >= 70 && score < 80){
    grade = "C";
}
else if(score >= 60 && score < 70){
    grade = "D";
}
else if(score >= 50 && score < 60){
    grade = "E";
}
else {
    grade = "F Poor grade";
}
console.log("your grade is", grade);

