const eventSelect = document.getElementById('event');
const groupSizeContainer = document.getElementById('group-size-container');
const groupSizeInput = document.getElementById('group-size');
const paymentInput = document.getElementById('payment');

function getQueryParam(name) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(name);
}
function redirectToQR() {
    window.location.href = 'qr.html';
}


document.addEventListener('DOMContentLoaded', () => {
    const selectedEvent = getQueryParam('selectedEvent');

    const eventPayments = {
        'ctf': 250,
        'hackathon': 350,
        'Gaming Tournament': 300,
        'Coding Competition':250,
        'dancing-competition':100,
        'singing-competition':100,
        'selfie-competition':100,
        't-shirt-painting-competition':100

        
    };

    if (eventPayments.hasOwnProperty(selectedEvent)) {
        paymentInput.value = eventPayments[selectedEvent];
    } else {
        paymentInput.value = 0;
    }

   
    eventSelect.value = selectedEvent;


    const groupCompetitions = ['ctf', 'hackathon','Gaming Tournament'];


    if (groupCompetitions.includes(selectedEvent)) {

        groupSizeContainer.style.display = 'block';
    } else {

        groupSizeContainer.style.display = 'none';
    }
});
