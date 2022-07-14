console.log('mic check 1, 2, 1, 2');

// functions on "I Accept" button & Cookie window

let cookieWindow = document.querySelector('#cookie');

function out(e) {
    document.querySelector('#cookie-btn').style.backgroundColor = 'lightskyblue'
    document.querySelector('#cookie-btn').classList.remove('shadow')
    console.log('Have we been here before?'); 
}

function over(e) {
    document.querySelector('#cookie-btn').style.backgroundColor = 'lightgray' 
    document.querySelector('#cookie-btn').classList.add('shadow')
    console.log('If I were green I would die...');
}

function remove(e) {
    cookieWindow.remove();
    console.log(cookieWindow);
}

// function for "Other Cities" section

function otherCities(e) {
    alert('Loading weather report...')
        console.log('Got em');

}

// function for "NeW Degrees" section

function pickDisplay(el){
    const  t = document.getElementsByClassName('current-temp-display')
    if (el.options[el.selectedIndex].value === 'f'){
        for (let index = 0; index < t.length; index++) {
            
            let value = Number(t[index].innerText);
            t[index].innerText = Math.round((value * 1.8) + 32);
            console.log(value);
        }
    }else {
        for (let index = 0; index < t.length; index++) {
            let value = Number(t[index].innerText);
            t[index].innerText = Math.round((value - 32) * 5/9);
            console.log(value);
        }
    }
}


// let currentDegrees = document.getElementsByClassName('current-temp-display');
// let select = document.querySelector('select')

// function pickDisplay(element) {
//     alert("You picked " + element.value);
//     console.log('damn, thats epic')
//     console.log(element.value);
// }

// // let currentDegrees = [['24º, 18º'],['27º, 19º'], ['21º, 16º'], ['26º, 21º']];

// select.addEventListener('click', () =>{
//     currentDegrees.innerText = select.value
// })








// (0°C × 9/5) + 32 = 32°F


// let currentDegrees = document.getElementsByClassName('current-temp-display');
// let select = document.querySelector('select')

// function change() {
//     // console.log(currentDegrees.innerText);
//     for (let i=0; )
// }

// function pickDisplay(element) {
//     alert("You picked " + element.value);
//     console.log('damn, thats epic')
//     console.log(element.value);
//     if (element.value == 'f') {
//         change()
//     }

// }



// let degrees = [
//     document.getElementsByClassName('current-temp-display')
// ];



// function change() {
//     document.getElementById('#current-temp-display1').innerText = '75º',
//     document.getElementById('#current-temp-display1').innerText = '80º, 66º',
//     document.getElementById('#current-temp-display3').innerText = '69º, 61º',
//     document.getElementById('#current-temp-display3').innerText = '78º, 70º'
// };
// petImg.src = [['75º, 65º'],['80º, 66º'], ['69º, 61º'], ['78º, 70º']];  



// function add1(celsius){
//     score[count]++
//     degrees[count].innerHTML = score[count]
// };

// var h3 = document.querySelector("h3");
// h3.innerText = "New Title";






// let score = [314, 159];
// let btn = [
//     document.querySelector('#team1'),
//     document.querySelector('#team2'),
// ];

// function add1(count){
//     score[count]++
//     btn[count].innerHTML = score[count]
// };















// let otherCities = ['Burbank', 'Chicago', 'Dallas'];
// let cities = [
//     document.getElementById('#city1'),
//     document.getElementById('#city2'),
//     document.getElementById('#city2'),
// ];

// function currently(element){
//     otherCities[element]
//     alert('Loading weather report...');
// };






