// function(getTicketInput).
function getTicketInput(set) {
    const TicketInput = document.getElementById(set + 'TicketCount');
    const TicketCount = parseInt(TicketInput.value);
    return TicketCount;
};

// Total Calculation of function.
function totalCalculation() {
    const firstClassTicketCount = getTicketInput('firstClass');
    const economyTicketCount = getTicketInput('economy');
    const subTotal = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('subTotal').innerText = subTotal;
    const vat = subTotal / 10;
    document.getElementById('vat').innerText = vat;
    const total = subTotal + vat;
    document.getElementById('total').innerText = total;
    document.getElementById('confirmAmount').innerText = total;
};

// handleTicketQuantity Function
function handleTicketQuantity(set, isAdd) {
    const TicketInput = document.getElementById(set + 'TicketCount');
    const TicketCount = parseInt(TicketInput.value);
    let newTicketCount = TicketCount;
    if (isAdd == true) {
        newTicketCount = TicketCount + 1;
    }
    if (isAdd == false && TicketCount > 0) {
        newTicketCount = TicketCount - 1;
    }
    TicketInput.value = newTicketCount;
    document.getElementById(set + 'TicketCount').innerText = TicketInput.value;
    totalCalculation();
};

// EventListener part of firstClassTicket.
document.getElementById('addFirstClass').addEventListener('click', function () {
    handleTicketQuantity('firstClass', true);
});
document.getElementById('removeFirstClass').addEventListener('click', function () {
    handleTicketQuantity('firstClass', false);
});

// EventListener part of economyTicket. 
document.getElementById('addEconomy').addEventListener('click', function () {
    handleTicketQuantity('economy', true);
});
document.getElementById('removeEconomy').addEventListener('click', function () {
    handleTicketQuantity('economy', false);
});

// EventListener of BookNow Button.
const bookNow = document.getElementById('bookNow').addEventListener('click', function () {
    const mainContent = document.getElementById('firstPage').style.display = "none";
    const bookingContent = document.getElementById('booking-content').style.display = "block";

    // ConfirmTrip EventListener.
    const ticketQuantity = document.getElementById('ticketQuantity');
    const confirmTicketQuantity = parseInt(document.getElementById('firstClassTicketCount').value) + parseInt(document.getElementById('economyTicketCount').value);
    document.getElementById('ticketQuantity').innerText = confirmTicketQuantity;

    // confirm total amount EventListener.
    totalCalculation();
})


// Confirmation of purchase Ticket.
function bookingButtonHandler(button) {
    if (button == 'confirmButton') {
        document.getElementById('firstPage').style.display = 'none';
        document.getElementById('booking-content').style.display = 'none';
        document.getElementById('enjoyTrip').style.display = 'block';

    }
    else if (button == 'cancelButton') {
        document.getElementById('firstPage').style.display = 'block';
        document.getElementById('booking-content').style.display = 'none';
    }
};

// Confirm Button EventListener
const confirmButton = document.getElementById('confirmButton').addEventListener('click', function () {
    bookingButtonHandler('confirmButton');
});

// Cancel Button EventListener
const cancelButton = document.getElementById('cancelButton').addEventListener('click', function () {
    bookingButtonHandler('cancelButton');
});
