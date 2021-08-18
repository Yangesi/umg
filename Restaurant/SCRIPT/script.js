const addToShoppingCartButtons = document.querySelectorAll('#btncomprar');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', () => console.log(`click`));
});