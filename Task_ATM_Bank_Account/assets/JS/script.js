
const amount = 20000;
const balanceElement = document.querySelector('.Balance-display');
balanceElement.addEventListener('click', function(event) {
  
  event.preventDefault();
 
  const container = document.querySelector('.container');
  const tittle = document.querySelector('.tittle')
  const displayBalance = document.querySelector('.Balance-none')
  displayBalance.style.display = 'flex';
  tittle.style.display = 'none';
  container.style.display = 'none';
  const currencyLists = document.querySelectorAll(".Balance-none ul li h1")
  currencyLists.forEach((liElements) => {
    let content = liElements.textContent;
    if(content === "azn"){
      content = currencyRates(amount, "manat");
      
      liElements.innerHTML = content
    }
    if(content === "lira"){
      content = currencyRates(amount, "lira")
      liElements.innerHTML = content
    }
    if(content === "rubl"){
      content = currencyRates(amount, "rubl")
      liElements.innerHTML = content
    }
    if(content === "dollar"){
      content = currencyRates(amount, "dollar")
      liElements.innerHTML = content
    }
    if(content === "sterling"){
      content = currencyRates(amount, "sterling")
      liElements.innerHTML = content
    }
    if(content === "euro"){
      content = currencyRates(amount, "avro")
      liElements.innerHTML = content
    }
  })
});


function currencyRates(amount, monetary){
   if(monetary === "manat"){
     return amount;
   }
   if(monetary === "lira"){
     let balance = amount / 0.0874;
     return balance;
   }
   if(monetary === "rubl"){
    let balance = amount / 0.0209;
    return balance;
   }
   if(monetary === "dollar"){
    let balance = amount / 1.7;
    return balance;
   }
   if(monetary === "sterling"){
    let balance = amount / 2.1223;
    return balance;
   }
   if(monetary === "avro"){
    let balance = amount / 1.8726;
    return balance
   }
}

