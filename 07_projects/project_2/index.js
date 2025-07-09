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
