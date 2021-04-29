window.addEventListener("DOMContentLoaded", (event) => {
  const addToCart = document.getElementById('add-to-cart');
  addToCart.addEventListener('click', event => {
    const storedItems = document.getElementById('items')
    const item = storedItems.value
    const quantity = document.getElementById('quantity') 
    localStorage.setItem(item, quantity.value)
  })
  
const showCart = () => {
 const list = document.getElementById('cartItems')
   for(let key in localStorage) {
     const listItem = document.createElement('li')
     listItem.innerHTML = key + ': ' + localStorage.getItem(key)
     list.appendChild(listItem)
   }
  };

  // const storeItem = () => {

  // };

  // const removeItem = () => {

  // };

});
