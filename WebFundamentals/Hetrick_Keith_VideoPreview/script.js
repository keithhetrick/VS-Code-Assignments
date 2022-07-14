console.log("mic check 1 2 1 2...");

document.getElementById("myVid").addEventListener("mouseover", function() {
	this.play();
    console.log("is this thing on?");
});

document.getElementById("myVid").addEventListener("mouseleave", function() {
	this.pause();
    console.log("is this thing off?");
})