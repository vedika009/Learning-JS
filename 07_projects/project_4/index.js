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
