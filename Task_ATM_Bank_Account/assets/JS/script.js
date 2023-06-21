// Add a click event handler to the Balance element
const balanceElement = document.querySelector('.Balance');
balanceElement.addEventListener('click', function(event) {
  // Prevent the default behavior of the click event
  event.preventDefault();
  // Add your custom logic here to handle the click event
  // For example, you can hide all elements within the .container class
  const container = document.querySelector('.container');
  const tittle = document.querySelector('.tittle')
  tittle.style.display = 'none';
  container.style.display = 'none';
});