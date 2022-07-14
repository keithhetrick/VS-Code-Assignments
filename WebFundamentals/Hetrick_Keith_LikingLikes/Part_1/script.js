console.log("mic check 1, 2, 1, 2"); 

var count = 3;
var countElement = document.querySelector("#count");

console.log(countElement);

function add1(){
    count++
    countElement.innerText = count + " like(s)"
    console.log(count);
};