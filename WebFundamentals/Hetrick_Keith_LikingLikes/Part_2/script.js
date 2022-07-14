console.log("mic check 1, 2, 1, 2"); 

// Part 1

// var count = 3;
// var countElement = document.querySelector("#count");

// console.log(countElement);

// function add1(){
//     count++
//     countElement.innerText = count + " like(s)"
//     console.log(count);
// };

// Part 2

var likes = [9, 12, 9];
var spans = [
    document.querySelector(".count1"),
    document.querySelector(".count2"),
    document.querySelector(".count3")
];

console.log(likes);

function add1(count){
    likes[count]++
    spans[count].innerHTML = likes[count] + "like(s)"
    console.log(likes[count] + " yea boi!");
};