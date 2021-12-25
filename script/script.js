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

//header
document.getElementById("headerTitlebox").innerHTML = "Bring everything together" ;
document.getElementById("headerTextBox").innerHTML = "Bring everything together Java Script : Event listener, For loop, and Function" ;


//photo gallery by JS - Loop _ Function

function imgcreator(testnm) {

    for (let i = 1; i < testnm+1; i++) {
        let imgSrcTag = `<div class="col-sm m-2"><a href=""> <img src="./img/picture${i}.jpg" alt="" class="img-fluid"> </a></div>`;
        document.getElementById("photogallery").innerHTML += imgSrcTag;

    }  
    return testnm;
}

imgcreator(5);


//More Button:Event listener

document.getElementById("moreInfo").innerHTML += "More Information";
var btnInfo = document.getElementById("moreInfo");

btnInfo.addEventListener("click" , displayMoreInformation);

let informationText = "Adres: Huisartsenpraktijk De Hoven. Schoolstraat 2 , Postcode: 7205BP , Zutphen , Nederland " + "<hr>" + " Als u de schilder wilt ontmoeten en een beschrijving van de schilderijen wilt ontvangen, kunt u dit van tevoren per e-mail afstemmen.";

function displayMoreInformation(){
    document.getElementById("boxMoreDisplay").innerHTML = informationText;
}











