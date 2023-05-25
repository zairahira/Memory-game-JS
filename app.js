const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',

    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },

    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',

    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },

    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]

// randomly shuffle an array 
cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);
const resultDisplay = document.querySelector('#result');
const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createboard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);   // only when you click on the car so not using flipCard()
        console.log(card, i);
        gridDisplay.appendChild(card);
    }

}

createboard();

function checkMatch(){
    const cards = document.querySelectorAll('img');
    
    const OptionOneId = cardsChosenIds[0];
    const OptionTwoId = cardsChosenIds[1];
    
    if(OptionTwoId === OptionOneId){
        alert("you clicked the same card");
        
        cards[OptionOneId].setAttribute('src', 'images/blank.png');
        cards[OptionTwoId].setAttribute('src', 'images/blank.png');
    }

    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match');
        cards[OptionOneId].setAttribute('src', 'images/white.png');
        cards[OptionTwoId].setAttribute('src', 'images/white.png');
        cards[OptionOneId].removeEventListener('click', flipCard);
        cards[OptionTwoId].removeEventListener('click', flipCard);

        cardsWon.push(cardsChosen);
//console.log("cards won array"+cardsWon);
    }

    else {
        cards[OptionOneId].setAttribute('src', 'images/blank.png');
        cards[OptionTwoId].setAttribute('src', 'images/blank.png');
alert("Sorry, try again");

    }

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'You found them all';
    }
resultDisplay.innerHTML =cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
}

function flipCard(){
    
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }


}