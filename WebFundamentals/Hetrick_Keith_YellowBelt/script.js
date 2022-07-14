console.log('mic check 1, 2, 1, 2');

// Functions for Exam //


// function for 'Remove Subscribe' button


function hide(element) {
    element.remove();
    console.log('hide & go seek')
}

// style for 'Timer" alert


setTimeout(function() { 
    alert('The Ninjas have won!'); 
}, 13000);


// function for 'Score' buttons


let score = [314, 159];
let btn = [
    document.querySelector('#team1'),
    document.querySelector('#team2'),
];

function add1(count){
    score[count]++
    btn[count].innerHTML = score[count]
};



//------------------------------------------------------------------------//





// Bonus - just for fun 



// styling for 'Sign In' button 


function signIn(element) {
    if(element.innerText == 'Sign In') {
        element.innerText = 'Logout';
    } else {
        element.innerText = 'Sign In';
    }
}


// styling for 'Sign Up' button 


function over(element) {
    document.querySelector('#btn2').style.backgroundColor = 'green' 
    console.log('If I were green I would die...');
}

function out(element) {
    document.querySelector('#btn2').style.backgroundColor = 'white'
    console.log('Have we been here before?'); 
}

function signUp(element) {
    alert('Oh no! Cannot sign up at this time.');
    console.log('Ha, nice');
}

