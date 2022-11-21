const submitBtn = document.querySelector('.submit');
const trackingCode = document.querySelector('#codeInsert')

let track = ""


function showUp() {
    track = trackingCode.value
    return console.log(track);
}

submitBtn.addEventListener("click", showUp);