const showBalance = document.querySelector(".container .terminal .container-balans h1");

const withdrawal = document.querySelector(".container .terminal .Withdrawal");
const deposit = document.querySelector(".container .terminal .Deposit");
const balance = document.querySelector(".container .terminal .Balance-info");

const digits = document.querySelectorAll(".digit")
const currencyRates = document.querySelector(".Currency-Rates")

const confirmValue= document.querySelector("#Confirm");
const gancelValue = document.querySelector("#Gancel");
const deleteValue = document.querySelector("#Delete");

const commandList = document.querySelector(".command-list");
const terminal = document.querySelector(".terminal");

const currencies = document.querySelectorAll(".currency");

const input = document.querySelector(".container .command-list .col-12 .row #input");

const currencyList = document.querySelector(".Currency-Rates .TUR h1");
const currencyList1 = document.querySelector(".Currency-Rates .USA h1");
const currencyList2 = document.querySelector(".Currency-Rates .RUS h1");
const currencyList3 = document.querySelector(".Currency-Rates .EUR h1");
const currencyList4 = document.querySelector(".Currency-Rates .ENG h1");
var amount = 0;
class BalanceManagement{
    static balance = 16000;
    static IncreaseBalance(amount){
         BalanceManagement.balance += amount;
         return BalanceManagement.balance;
    }
    static DecreasedBalance(amount){
        BalanceManagement.balance -= amount;
        return BalanceManagement.balance;
    }
    static GetBalanceInfo(amount){
        return BalanceManagement.balance;
    }
}
showBalance.innerHTML = BalanceManagement.balance;
digits.forEach((element) =>{
    
    element.addEventListener('click', function(){
        
        input.value += element.textContent;
    })
})
confirmValue.addEventListener('click', function(){
    amount = parseInt(input.value);
})
withdrawal.addEventListener('click', function(){
    showBalance.innerHTML = BalanceManagement.DecreasedBalance(amount);
})
deposit.addEventListener('click', function(){
    showBalance.innerHTML = BalanceManagement.IncreaseBalance(amount);
})
gancelValue.addEventListener("click", function(){
    input.value = "";
    amount = 0;
})
deleteValue.addEventListener('click', function(){
    var str = input.value;
    var lastChar = str.slice(0, str.length - 1);
    input.value = lastChar;
})

balance.addEventListener('click', function(){
     commandList.style.display = "none";
     terminal.style.display = "none";
     currencyRates.style.display = "flex";
     currencyList.innerHTML = CurrencyRates(BalanceManagement.balance, "TUR");
     currencyList1.innerHTML = CurrencyRates(BalanceManagement.balance, "USD");
     currencyList2.innerHTML = CurrencyRates(BalanceManagement.balance, "RUB");
     currencyList3.innerHTML = CurrencyRates(BalanceManagement.balance, "EUR");
     currencyList4.innerHTML = CurrencyRates(BalanceManagement.balance, "GBP");
})
function CurrencyRates(amount, currency){
    if(currency === "TUR"){
        let result = amount / 0.0674;
        return result;
    }
    if(currency === "RUB"){
        let result = amount / 0.0201;
        return result;
    }
    if(currency === "USD"){
        let result = amount / 1.7;
        return result;
    }
    if(currency === "EUR"){
        let result = amount / 1.8521;
        return result;
    }
    if(currency === "GBP"){
        let result = amount / 2.1613;
        return result;
    }
}
