// THIS IS A FUNCTION
function FUNCTION1 (){
    console.log("AELIYA HAIDER");
    console.log("SUTO");
}
//FUNCTION CALLING
FUNCTION1();

//ARROW FUNCTION
const sum = (a,b) =>{
    return a+b;
}

sum(7,8);

//function
function countVOWEL(str) {
    let count = 0;
    for (const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}

countVOWEL("aeliyahaider");