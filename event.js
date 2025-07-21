let btn = document.querySelector("#btn");
//this is an arrow fucntion in js
btn.onclick = () =>{   
    console.log("button was click ::");
    let a = 25;
    a++;
    console.log(a);
}

let btn1 = document.querySelector("#btn1"); // this is for all function 
//this is an arrow fucntion in js
btn1.onclick = () =>{   
    console.log("button says hello!");
}

btn1.addEventListener("click", (evt)=>{   // object and event
    console.log("button was click sucessfully");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
})

btn1.addEventListener("click", (evt)=>{ // 2nd multiple event 
    console.log("button was click sucessfully - 2nd time");
})

let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () =>{   //this is an arrow fucntion in js
    console.log("button was click 2x time");
}

// let box = document.querySelector("#box");
// box.onmouseover = () =>{
//     console.log("THIS IS A TEXT ON HOVER");
    
// }

// change hover color using mouse pad in js
let box = document.querySelector("#box");
let col = "gray";
box.addEventListener("mouseover", () => {
    if(col === "gray"){
        col = "green";
        document.querySelector("div").style.backgroundColor = "green"; 
    }
    else{
        col = "gray";
        document.querySelector("div").style.backgroundColor = "gray";
    }
    console.log(col);
});


// THIS IS LIGHT AND DARK MODE ARROW FUNCTION USING CSS AND JS
// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currmode = "light";
// modebtn.addEventListener("click", () => {
//     if(currmode === "light"){
        
//         currmode = "dark";
//         body.classList.add("dark");
//          body.classList.remove("light");
//     }
//     else {
//         currmode = "light";
//         body.classList.add("light");
//          body.classList.add("dark");
//     }

//     console.log(currmode);
// });

// THIS IS LIGHT AND DARK MODE ARROW FUNCTION USING ONLY JS
let modebtn1 = document.querySelector("#mode1");
let currmode1 = "light";
modebtn1.addEventListener("click", () => {
    if(currmode1 === "light"){
        
        currmode1 = "dark";
        document.querySelector("body").style.backgroundColor = "black";

    }
    else {
        currmode1 = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currmode1);
});