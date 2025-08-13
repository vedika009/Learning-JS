// generate random colors
const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
};

//console.log(randomcolor())

let intervalId

const startChangingColor = function(){
    if(!intervalId){ // if it's null
        intervalId = setInterval(changebgColor, 1000)
    }

    function changebgColor(){
        document.body.style.backgroundColor = randomcolor()
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    // flushout intervalId
    intervalId = null // to free the memory
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)