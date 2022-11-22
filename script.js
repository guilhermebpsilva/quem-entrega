const submitBtn = document.querySelector('.submit');
const trackingCode = document.querySelector('#codeInsert')

let track = ""
const regexCorreios = /^[A-Z]{2}[0-9]{9}BR$/i

function showUp() {
    track = trackingCode.value
    if(regexCorreios.test(track) === true) {
        console.log("É Correios!");
    } else {
        console.log("Não é Correios!")
    }
}

submitBtn.addEventListener("click", showUp);