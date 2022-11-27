const submitForm = document.querySelector('.form');
const trackingCode = document.querySelector('#codeInsert')
const historyList = document.querySelector('.list');

let track = ""
const regexCorreios = /^[A-Z]{2}[0-9]{9}BR$/i

function showUp(e) {
    e.preventDefault();
    track = trackingCode.value;

    if(regexCorreios.test(track) === true) {
        console.log("É Correios!");
        let newItem = document.createElement('li');
        newItem.appendChild(document.createTextNode(track));
        historyList.appendChild(newItem);
    } else {
        console.log("Não é Correios!")
    }
}

submitForm.addEventListener("submit", showUp);