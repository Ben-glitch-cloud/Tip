'use strict';  

let number = 0 

let tip = 0

let full_price = 0

const percetage_el = 12 

const percetage_go = 10 

const percetage_ok = 8 

const percetage_ba = 5 

const percetage_te = 0

document.querySelector('.number').textContent = number;  

document.querySelector('.tip_amount').textContent = '' 
document.querySelector('.number').textContent = '' 
document.querySelector('.per_person').textContent = ''  

const percentage = (per, meal) => (per / 100) * meal
// have a look at these new funactions  

document.querySelector('#tip').addEventListener('click', function(){ 
    const meal_price = Number(document.querySelector('.meal_price').value) 
    const service = document.querySelector('.service').value 
    const people = Number(document.querySelector('.people').value)  

    if (service === 'exellent') { 
        tip = percentage(percetage_el, meal_price)

    } else if (service === 'good') { 
        tip = percentage(percetage_go, meal_price)

    } else if (service === 'ok') {
        tip = percentage(percetage_ok, meal_price)

    } else if (service === 'bad') {
        tip = percentage(percetage_el, meal_price)

    } else if (service === 'terrible') { 
        tip = percentage(percetage_te, meal_price)
    } 

    full_price = meal_price + tip 

    if (meal_price === 0 && people === 0) {
        
        document.querySelector('.warining').textContent = 'Please add a price'  

        document.querySelector('.warining_two').textContent = 'Please add the number of people'

    } else if (meal_price === 0) {
        
        document.querySelector('.warining').textContent = 'Please add a price' 
        document.querySelector('.warining_two').textContent = '' 

    } else if (people === 0) {
        
        document.querySelector('.warining_two').textContent = 'Please add the number of people' 
        document.querySelector('warining').textContent = ''

    } else {
        document.querySelector('.tip_amount').textContent = `£${Math.trunc(tip)}`
        document.querySelector('.number').textContent = `£${Math.trunc(full_price)}`
        document.querySelector('.per_person').textContent = `£${Math.floor(full_price / people)}` 
        document.querySelector('.warining_two').textContent = '' 
        document.querySelector('.warining').textContent = ''
    }
}); 

