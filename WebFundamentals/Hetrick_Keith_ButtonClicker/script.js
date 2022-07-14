console.log("mic check 1, 2, 1, 2");

function myFunction() {
    document.getElementById("demo").style.cursor = "pointer";
  }

function example(element) {
    alert("Ninja was liked!");
    console.log("Ninja was liked!");
}

function login(element) {
    if(element.innerText == "Sign In") {
        element.innerText = "Log Out";
    } else {
        element.innerText = "Sign in";
    }
    console.log("clickity click click", element)
}

function hide(element) {
    element.remove();
    console.log("hide & go seek", element)
}
