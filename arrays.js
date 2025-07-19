// ARRAY IS A COLLECTION OF DATA OR ITEMS 
// COLLECTION OF SAME TYPE OF DATA
// ARRAY IS MUTEABLE IN JS WE CAN CHANGE VALUE OF AN ARRAY 

let arr = [49, 89, 78, 89, 76, 56, 46, 77, 73, 64]; // SYNTAX OF AN ARRAY
console.log(arr);

//  for loops in an array
let names = [ "AELIYA HAIDER", "FATIMA", "FAIZA", "NADIA", "FARHAN", "ALI", "WARIS", "SAQELAIN"];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// FOR OF loop
let cities = ["KAEACHI", "ISLAMABAD", "PINDI", "GILGIT BALTISTAN", "SKARDU"];
for(let city of cities){
    console.log(city);
}

// PRATICES QUESTIONS
// FIND AVERAGE MARKS OF STUDENTS USING FOR LOOP IN AN ARRAY
let students = [90, 80, 14, 50, 20, 45, 99, 56];
let sum = 0;
for( let val of students){
    sum = sum + val;  
}
let avg = sum / students.length;
console.log("the average marks od students is :", avg);

// PRATICES QUESTIONS
// APPLY 10% OFFER FOR GIVEN VALUES AND THEN PRINT FINAL VALUES 
let items = [240, 890, 900, 879, 456, 789, 700];
console.log("values before apply offer", items);

for(let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log("values after apply offer ", items);

//METHODS IN AN ARAY
let foodItems = ["APPLE", "BNANA", "BLUE BARRY"];
foodItems.push("papaya", "orange", "mango");  // to add new values to an array
console.log(foodItems);

