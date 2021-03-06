/**
 * @file: main.js
 * @author: Cristiano Francesco Finotto
 * Project-esports
 *
 * Validate form
 */

/**
 * Function add error mark input class
 * @param {object} - element node 
 */

function errorMarkAdder(element){
    element.classList.add('input-error');
    element.value = '';
}

/**
 * Function remove error mark input class
 * @param {object} - element node 
 */

function errorMarkRemover(element){
    element.classList.remove('input-error');
}

/**
 * Function hide error message removing text error
 * @param {object} - element node 
 */

function hideMessage(element){
    element.textContent = '';
}

const firstName = document.querySelector('#contact-form #name');
const secondName = document.querySelector('#contact-form #second-name');
const surname = document.querySelector('#contact-form #surname');
const age = document.querySelector('#contact-form #age');
const email = document.querySelector('#contact-form #email');
const phone = document.querySelector('#contact-form #phone');
const addressVia = document.querySelector('#contact-form #address-via');
const addressNumber = document.querySelector('#contact-form #address-number');
const postalCode = document.querySelector('#contact-form #postal-code');
const game_1 = document.querySelector('#contact-form #game-1');
const game_2 = document.querySelector('#contact-form #game-2');
const game_3 = document.querySelector('#contact-form #game-3');
const otherGame = document.querySelector('#contact-form #other-game');
const biography = document.querySelector('#contact-form #bio');
const submit = document.querySelector('#contact-form #submit');

let inputs = [
    firstName, secondName, surname, age, email, phone, addressVia, addressNumber, postalCode, 
    otherGame, biography
];

/* not permit Enter key to avoid html5 validation */

for (const iterator of inputs) {
    iterator.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
        }
    });
}

firstName.addEventListener('blur', () => {
    if (firstName.value.match(/\d|\W/gi)){
        document.querySelector('#contact-form div:nth-of-type(1) h6').textContent = 'ONLY letter allowed!';
        errorMarkAdder(firstName);
    }

    else if (firstName.value.length < 1){
        document.querySelector('#contact-form div:nth-of-type(1) h6').textContent = 'length must be > 0';
        errorMarkAdder(firstName);
    }

    else if (firstName.value.length > 20){
        document.querySelector('#contact-form div:nth-of-type(1) h6').textContent = 'length must be < 20';
        errorMarkAdder(firstName);
    }

    else {
        hideMessage(document.querySelector('#contact-form div:nth-of-type(1) h6'));
        errorMarkRemover(firstName);
    }
});

secondName.addEventListener('blur', () => {
    if (secondName.value.match(/\d|\W/gi)){
        document.querySelector('#contact-form div:nth-of-type(2) h6').textContent = 'ONLY letter allowed!';
        errorMarkAdder(secondName);
    }

    else if (secondName.value.length > 20){
        document.querySelector('#contact-form div:nth-of-type(2) h6').textContent = 'length must be < 20';
        errorMarkAdder(secondName);
    }

    else {
        hideMessage(document.querySelector('#contact-form div:nth-of-type(2) h6'));
        errorMarkRemover(secondName);
    }
});

surname.addEventListener('blur', () => {
    if (surname.value.match(/\d|\W/gi)){
        document.querySelector('#contact-form div:nth-of-type(3) h6').textContent = 'ONLY letter allowed!';
        errorMarkAdder(surname);
    }

    else if (surname.value.length < 1){
        document.querySelector('#contact-form div:nth-of-type(3) h6').textContent = 'length must be > 0';
        errorMarkAdder(surname);
    }

    else if (surname.value.length > 20){
        document.querySelector('#contact-form div:nth-of-type(3) h6').textContent = 'length must be < 20';
        errorMarkAdder(surname);
    }

    else {
        hideMessage(document.querySelector('#contact-form div:nth-of-type(3) h6'));
        errorMarkRemover(surname);
    }
});

/* input:number permit to insert e-E-+ ecc. but the length of input is 0 */

age.addEventListener('blur', () => {
    if(age.value.match(/\D|^0/gi)) {
        document.querySelector('#contact-form div:nth-of-type(5) h6').textContent = 'NOT letter or special char or start 0!';
        errorMarkAdder(age);
    }

    else if (age.value.length < 1){
        document.querySelector('#contact-form div:nth-of-type(5) h6').textContent = 'NOT letter or special char or start 0!';
        errorMarkAdder(age);
    }

    else if (age.value.length > 2){
        document.querySelector('#contact-form div:nth-of-type(5) h6').textContent = 'number must be < 100';
        errorMarkAdder(age);
    }

    else {
        hideMessage(document.querySelector('#contact-form div:nth-of-type(5) h6'));
        errorMarkRemover(age);
    }
});

email.addEventListener('blur', () => {
    if (!email.value.match(/[a-z.]+@[a-z.]+\.[a-z]{2,3}/gi)){
        
        document.querySelector('#contact-form div:nth-of-type(9) h6').textContent = 'email format!';
        errorMarkAdder(email);
    }

    else {
        hideMessage(document.querySelector('#contact-form div:nth-of-type(9) h6'));
        errorMarkRemover(email);
    }
});

phone.addEventListener('blur', () => {

    if (phone.value.match(/\D/gi)) {
        document.querySelector('#contact-form div:nth-of-type(10) h6').textContent = 'NOT letter or special char!';
        errorMarkAdder(phone);
    }

    else if (phone.value.length < 1){
        document.querySelector('#contact-form div:nth-of-type(10) h6').textContent = 'NOT letter or special char!';
        errorMarkAdder(phone);
    }

    else if (phone.value.length > 10){
        document.querySelector('#contact-form div:nth-of-type(10) h6').textContent = 'ONLY 10 number permitted!';
        errorMarkAdder(phone);
    }

    else if (phone.value.length < 10) {
        document.querySelector('#contact-form div:nth-of-type(10) h6').textContent = 'at LEAST 10 number permitted!';
        errorMarkAdder(phone);
    }

    else {
        hideMessage(document.querySelector('#contact-form div:nth-of-type(10) h6'));
        errorMarkRemover(phone);
    }
});

addressVia.addEventListener('blur', () => {
    if (addressVia.value.match(/[^a-z^\s]+/gi)) {
        document.querySelector('#contact-form div:nth-of-type(11) h6').textContent = 'ONLY letter permitted!';
        errorMarkAdder(addressVia);
    }

    else if (addressVia.value.length < 1) {
        document.querySelector('#contact-form div:nth-of-type(11) h6').textContent = 'address > 1!';
        errorMarkAdder(addressVia);
    }

    else if (addressVia.value.match(/\w+/)[0].length > 20) {
        document.querySelector('#contact-form div:nth-of-type(11) h6').textContent = 'ONLY 20 letter permitted!';
        errorMarkAdder(addressVia);
    }

    else {
        hideMessage(document.querySelector('#contact-form div:nth-of-type(11) h6'));
        errorMarkRemover(addressVia);
    }

});

addressNumber.addEventListener('blur', () => {
    if (addressNumber.value.match(/\D/gi)) {
        document.querySelector('#contact-form div:nth-of-type(12) h6').textContent = 'NOT letter or special char!';
        errorMarkAdder(addressNumber);
    }

    else if (addressNumber.value.length < 1) {
        document.querySelector('#contact-form div:nth-of-type(12) h6').textContent = 'NOT letter or special char!';
        errorMarkAdder(addressNumber);
    }

    else if (addressNumber.value.length > 3){
        document.querySelector('#contact-form div:nth-of-type(12) h6').textContent = 'ONLY 3 number permitted!';
        errorMarkAdder(addressNumber);
    }

    else {
        hideMessage(document.querySelector('#contact-form div:nth-of-type(12) h6'));
        errorMarkRemover(addressNumber);
    }
});

postalCode.addEventListener('blur', () => {
    if (postalCode.value.match(/\D/gi)) {
        document.querySelector('#contact-form div:nth-of-type(13) h6').textContent = 'NOT letter or special char!';
        errorMarkAdder(postalCode);
    }

    else if (postalCode.value.length < 1) {
        document.querySelector('#contact-form div:nth-of-type(13) h6').textContent = 'NOT letter or special char!';
        errorMarkAdder(postalCode);
    }

    else if (postalCode.value.length > 5){
        document.querySelector('#contact-form div:nth-of-type(13) h6').textContent = 'ONLY 5 number permitted!';
        errorMarkAdder(postalCode);
    }

    else {
        hideMessage(document.querySelector('#contact-form div:nth-of-type(13) h6'));
        errorMarkRemover(postalCode);
    }
});

/* 
    managed of checkboxes 
    - if all disabled enable check on other game input
    - if one checkbox is checked disable other game input
*/

for (const iterator of [game_1, game_2, game_3]) {
    iterator.addEventListener('change', () => {
        hideMessage(document.querySelector('#contact-form div:nth-of-type(14) h6'));
        errorMarkRemover(otherGame);
        if(iterator.checked === true)
            otherGame.disabled = true;

        if(![game_1.checked, game_2.checked, game_3.checked].includes(true))
            otherGame.disabled = false;
    });
}

otherGame.addEventListener('blur', () => {

    if(![game_1.checked, game_2.checked, game_3.checked].includes(true)){
        if (otherGame.value.match(/[^\s\w]/gi)){
            document.querySelector('#contact-form div:nth-of-type(14) h6').textContent = 'NOT special char!';
            errorMarkAdder(otherGame);
        }
    
        else if (otherGame.value.length < 1){
            document.querySelector('#contact-form div:nth-of-type(14) h6').textContent = 'length must be > 0';
            errorMarkAdder(otherGame);
        }
    
        else if (otherGame.value.length > 20){
            document.querySelector('#contact-form div:nth-of-type(14) h6').textContent = 'length must be < 20';
            errorMarkAdder(otherGame);
        }

        else {
            hideMessage(document.querySelector('#contact-form div:nth-of-type(14) h6'));
            errorMarkRemover(otherGame);
        }
    }
});

biography.addEventListener('blur', () => {
    if (biography.value.length > 255) {
        document.querySelector('#contact-form div:nth-of-type(15) h6').textContent = 'ONLY 255 char permitted!';
        errorMarkAdder(biography);
    }

    else {
        hideMessage(document.querySelector('#contact-form div:nth-of-type(15) h6'));
        errorMarkRemover(biography);
    }
});

submit.addEventListener('click', (e) => {

    let counterOk = 0;

    e.preventDefault();
    let errors = document.querySelectorAll('#contact-form div h6');

    /* in this way all input may show error into h6 tag */

    for (const iterator of inputs) {
        iterator.focus();
        iterator.blur(); 
    }

    for (const iterator of errors) {
        
        if(iterator.textContent === '')
            counterOk ++;
    }

    if (counterOk === errors.length){
        window.scrollTo({top: 0, behavior: 'smooth'});
        let success = document.querySelector('#success');
        success.appendChild(document.createTextNode('Success!'));
        success.classList.remove('hide');
    }
    
    else
        window.scrollTo({top: 0, behavior: 'smooth'});
});











