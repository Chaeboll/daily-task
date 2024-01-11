const input = document.querySelector("#input-box");
const list = document.querySelector("#list-container");

const div = document.getElementById("div")
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let berapa = 0;
let kali = 0;
let dbclick = document.getElementById("klik");


// ini gune inline function

// inputBox.addEventListener("keypress", function(event){
//     if (event.key === "Enter") {
//         event.preventDefault();
//         document.getElementById("click").click();
//     }
// });

// kalau open both type akan jadi noty value in input box is 0 

// ini seperate function 

input.addEventListener("keypress", press);

function press(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("click").click()
        // lupe letak () dekat .click()
    }
}

// ini function bagi mase reload tu semua dah siap2

// function check(){
//     if(inputBox.value.trim() === ""){
//         alert("wowowo")
//     }
// }



// ini yaang mouse-click  tu 
function addTask(){
    if(inputBox.value === " "){
        alert("You must write down a Task!!")
    }else if( berapa >= 5){
        kali++
        if(kali === 1 ){
            alert("You must plan your daily task with realistic goals!!");
        kali++;
        }else if(kali >= 2){
            alert("If you really wanted to add more features, please subscript to our plan")
        }
        
    }else{
        let bullet = document.createElement("li");
        bullet.innerHTML = inputBox.value;
        listContainer.appendChild(bullet);
        let pangkah = document.createElement("span");
        pangkah.innerHTML = "\u00d7";
        bullet.appendChild(pangkah);
        berapa++;
        console.log(berapa);
    }
    inputBox.value = " ";
    saveData();
}

// ini nak pangkah, and unchecked

list.addEventListener("click", memangkah ,false);

function memangkah(x){
    // tagName is the <> of the item but in all capital
    if(x.target.tagName === "LI"){
        x.target.classList.toggle("checked");
        saveData();
    }else if(x.target.tagName === "SPAN"){
        x.target.parentElement.remove();
        berapa --;
        kali = 0;
        console.log(berapa);
        input.focus();
        saveData();
    // combo (add, remove , toggle)
    }
}

div.addEventListener("click", focus);

function focus(diy){
    if (diy.target.tagName === "DIV"){
        input.focus();
    }
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML,kali);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}


dbclick.addEventListener("dblclick", reset);

function reset(){
    localStorage.clear();
    alert("your progress has been reset");
    location.reload();
    console.log("dah tekan reset, sedia untuk reload");
}

showTask();

// ini tak function
// window.onload = check;


