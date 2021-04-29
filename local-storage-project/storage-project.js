window.addEventListener("DOMContentLoaded", (event) => {
  const addToCart = document.getElementById('add-to-cart');
  addToCart.addEventListener('click', event => {
    const storedItems = document.getElementById('items')
    const item = storedItems.value
    const quantity = document.getElementById('quantity') 
    localStorage.setItem(item, quantity.value)
  })

  // const showCart = () => {

  // };

  // const storeItem = () => {

  // };

  // const removeItem = () => {

  // };

});
