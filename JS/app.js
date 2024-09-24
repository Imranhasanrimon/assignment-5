//Donation at Noakhali
document.getElementById('noakhali-btn').addEventListener('click', function () {
    const inputValueString = inputValue('noakhali-amount');
    const myBalance = parseFloat(innerTextValue('my-balance'));
    const noakhaliBalance = parseFloat(innerTextValue('noakhali-balance'))
    const donateAmount = parseFloat(inputValueString)

    //input validation
    if (isNaN(inputValueString) || inputValueString === "" || donateAmount <= 0) {
        alert('Invalid Donation Amount')
        return
    }

    document.getElementById('my-balance').innerText = myBalance - donateAmount;
    document.getElementById('noakhali-balance').innerText = noakhaliBalance + donateAmount;
    document.getElementById('noakhali-amount').value = '';
})

//Donation at Feni
document.getElementById('feni-btn').addEventListener('click', function () {
    const inputValueString = inputValue('feni-amount');
    const myBalance = parseFloat(innerTextValue('my-balance'));
    const noakhaliBalance = parseFloat(innerTextValue('feni-balance'))
    const donateAmount = parseFloat(inputValueString)

    //input validation
    if (isNaN(inputValueString) || inputValueString === "" || donateAmount <= 0) {
        alert('Invalid Donation Amount')
        return
    }

    document.getElementById('my-balance').innerText = myBalance - donateAmount;
    document.getElementById('feni-balance').innerText = noakhaliBalance + donateAmount;
    document.getElementById('feni-amount').value = '';
})

//Donation at Quota Movement
document.getElementById('quota-btn').addEventListener('click', function () {
    const inputValueString = inputValue('quota-amount');
    const myBalance = parseFloat(innerTextValue('my-balance'));
    const noakhaliBalance = parseFloat(innerTextValue('quota-balance'))
    const donateAmount = parseFloat(inputValueString)

    //input validation
    if (isNaN(inputValueString) || inputValueString === "" || donateAmount <= 0) {
        alert('Invalid Donation Amount')
        return
    }

    document.getElementById('my-balance').innerText = myBalance - donateAmount;
    document.getElementById('quota-balance').innerText = noakhaliBalance + donateAmount;
    document.getElementById('quota-amount').value = '';
})