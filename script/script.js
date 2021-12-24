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

    }
}



//HTML CSS

const minDv = document.getElementById('photogallery')

function imgcreator(testnm) {
    var imgsrc = "./img/picture"

    for (let i = 1; i < testnm+1; i++) {
        var imgSrcTag = `<div class="col-sm m-2"><a href=""> <img src="./img/picture${i}.jpg" alt="" class="img-fluid"> </a></div>`;
        minDv.innerHTML += imgSrcTag
    }  
    return testnm;
}

imgcreator(5)






