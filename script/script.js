//Form Validator

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();
    console.log(nameInput.value);

    if(nameInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'please insert Your Name';

        setTimeout(() => msg.remove(), 5000)

    }else if(emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'please insert Your Email';

        setTimeout(() => msg.remove(), 5000)

    }else {
        msg.classList.add('true');
        msg.innerHTML = 'Success';


        //clear fields
        nameInput.value = "";
        emailInput.value = ""
    }
}




