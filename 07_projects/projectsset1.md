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

