console.log("mic check 1, 2, 1, 2"); 

function edit(){
    document.getElementById("name").innerText = "Mike Tyson";
    console.log("yea boi");
};

function removeElementsByClass(persons, Accept){
    persons.parentElement.parentElement.remove();
    document.getElementById("requests").innerHTML--;

    if (Accept) {
        document.getElementById("connections").innerHTML++;
    };
    console.log(Accept);
};







// document.getElementsByClassName("add class name")




// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.innerHTML === "Jane Doe") {
//       x.innerHTML = "Swapped text!";
//     } else {
//       x.innerHTML = "Hello";
//     }
//   }





// document.getElementsByClass("persons.box3")













// var picImg = document.querySelector("#small-world");

// console.log(picImg);

// function pickPic1(element){
//     element.remove()
//     picImg.src = "images/pic1.jpg"
// }

// function pickPic2(element){
//     console.log(element.classList);
//     element.classList.add("btn")
//     picImg.src = "images/pic2.jpg"
// } 



// var likes = [9, 12, 9];
// var spans = [
//     document.querySelector(".graphic1"),
//     document.querySelector(".graphic2"),
// ];

// console.log(likes);

// function accept(el){
//     likes[el]++
//     spans[el].innerHTML = likes[count] + "like(s)"
//     console.log(likes[el] + " yea boi!");
// };








// var requestSpan = document.querySelector("#clicks");
// var connectionsSpan = document.querySelector("#connections");
// var username = document.querySelector("#username");

// function accept(clicks) {
//     var el = document.querySelector(clicks);
//     el.remove();
//     clicksSpan.innerText--;
//     connectionSpan.innerText++;
// }

// function ignore(clicks) {
//     var el = document.querySelector(clicks);
//     el.remove();
//     clicksSpan.innerText--;
// }

// function edit() {
//     username.innerText = "Dan Akrod";
// }
















// var h2 = "name"

// console.log("name");


// const element = document.getElementById("name");
// element.innerHTML = "New Heading";





// function setActive(el) {
//     if(el.classList.includes("dark-mode")) {
//         el.innerText = "Switch to light mode";
//         el.classList.remove("dark-mode");
//     } else {
//         el.innerText = "Switch to dark mode";
//         el.classList.add("dark-mode");
//     }
// }




// document.getElementById(id).innerHTML = ("whats good my dude!");


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

// var likes = [9, 12, 9];
// var spans = [
//     document.querySelector(".count1"),
//     document.querySelector(".count2"),
//     document.querySelector(".count3")
// ];

// console.log(likes);

// function add1(count){
//     likes[count]++
//     spans[count].innerHTML = likes[count] + "like(s)"
//     console.log(likes[count] + " yea boi!");
// };