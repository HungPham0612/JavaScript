const myCheckBox = document.getElementById("myCheckBox");

const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subcribe`
    }

    else{
        subResult.textContent = `You are not subcribe`
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with visa`
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with mastercard`
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with paypal`
    }
    else{
        paymentResult.textContent = `You must selected payment type`
    }
}