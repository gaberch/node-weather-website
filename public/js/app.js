console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchLocation = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`http://localhost:3000/weather?address=${searchLocation}`).then ((response) => {
        response.json().then(({location, forecast, error} = {}) => {
            if (error){
                return messageOne.textContent = error;
            }
            messageOne.textContent = location;
            messageTwo.textContent = forecast;
        })
    })
})