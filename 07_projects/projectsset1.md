# Projects Related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e)
    console.log(e.target) // where it's coming from
    if(e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'white') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'purple') {
      body.style.backgroundColor = e.target.id
    }
  })
} )

```

## Project 2

```javascript

// select the form first
const form = document.querySelector('form')

// this usecase will give you emoty value
//const height = parseInt(document.querySelector('#height').value)

// stop the deafult action of forms i.e. get or post, data going to the server
// callback ke andar event milega, e
form.addEventListener('submit', function(e) {
    e.preventDefault()

    // get the value of form in integer, we want these values AFTER the submit button is clicked, not before
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height == '' || height < 0 || isNaN(height)) {
       results.innerHTML = `Please give a valid height ${height}`  
    } else if(weight == '' || weight < 0 || isNaN(weight)) {
       results.innerHTML = `Please give a valid w   eight ${weight}`  
    } else {
        // calculate BMI
        const bmi = (weight / ((height * height)/10000)).toFixed(2) // upto 2 decimal places
        console.log(weight)
        console.log(height)
        console.log(bmi)
        //show the result
        if(bmi <= 18.6){
            results.innerHTML = `<span> ${bmi} You are underweight </span>`
        } else if (bmi > 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span> ${bmi} You are normal </span>`
        } else{
            results.innerHTML = `<span> ${bmi} You are overweight </span>`
        }
    }
})


```

## Project 3

```javascript

const clock = document.querySelector('#clock')


// continuously run the function after a set interval

setInterval(() => {
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
}, 1000); // 1000 ms - 1 sec

```

## Project 4

```javascript

let randomNumber = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')// .value
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
    submit.addEventListener('click',  (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    } )
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if (guess < 1) {
        alert("Please enter a number more than 1")
    } else if (guess > 100) {
        alert("Please enter a number less than 100")
    } else { // if it's valid
        prevGuess.push(guess)
        if(numGuess == 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // if it's the guessed number or not, low or high
    if(guess == randomNumber) {
        displayMessage(`You guessed it right!`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage(`Number is too low!`)
    } else if(guess > randomNumber) {
        displayMessage(`Number is too high!`)
    } 
}

function displayGuess(guess) { //cleanup method
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    //clear all the input fields
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    // start button
    p.classList.add('button')
    p.innerHTML = `<h2 id= "newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        // reset variables
        randomNumber = (parseInt(Math.random() * 100 + 1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}


```