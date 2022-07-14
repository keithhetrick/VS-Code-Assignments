let nameSpan = document.querySelector('#name');
let foodToOrder = 'Pizza';

function setName(element) {
    console.log(element.value);
    nameSpan.innerText = element.value;
}

function pickFood(element) {
    console.log('the food is ' + element.value);
    foodToOrder = element.value;
}

function order() {
    alert('Ordering a ' + foodToOrder);
}
