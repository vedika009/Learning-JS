const clock = document.querySelector('#clock')


// continuously run the function after a set interval

setInterval(() => {
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
}, 1000); // 1000 ms - 1 sec