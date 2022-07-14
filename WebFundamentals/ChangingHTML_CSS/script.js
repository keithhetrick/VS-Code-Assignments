console.log("mic check 1, 2, 1, 2"); 

// Part 1 //


// var picImg = document.querySelector("#small-world");

// console.log(picImg);

// function pickPic1(){
//     picImg.src = "images/pic1.jpg"
//     console.log(picImg.src);
// }

// function pickPic2(){
//     picImg.src = "images/pic2.jpg"
//     console.log(picImg.src);
// }



// Part 2 //


var picImg = document.querySelector("#small-world");

console.log(picImg);

function pickPic1(element){
    // console.log(element.style);
    // element.style.backgroundColor = "goldenrod";
    element.remove()
    picImg.src = "images/pic1.jpg"
}

function pickPic2(element){
    console.log(element.classList);
    element.classList.add("btn")
    picImg.src = "images/pic2.jpg"
} 