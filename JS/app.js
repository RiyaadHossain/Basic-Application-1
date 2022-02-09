let count = 0;

// ################### General Code ###################
/* document.getElementById("add").addEventListener("click", function(e){
    count++;
    document.getElementById("count").innerText = count;
})

document.getElementById("minus").addEventListener("click", function(e){
    count--;
    document.getElementById("count").innerText = count;
}) */


// ################### Shorten The Code ###################

function add(){
    count++;
    control("count");
}

function sub(e){
    count--;
    if(count < 1){
        count = 0;
    }
    control("count");
}

// Function: Add or Minus Value 
function control(value){
    document.getElementById(value).innerText = count;
}