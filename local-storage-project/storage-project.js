window.addEventListener("DOMContentLoaded", (event) => {
  const addToCart = document.getElementById('add-to-cart');
  addToCart.addEventListener('click', event => {
    const storedItems = document.getElementById('items')
    const item = storedItems.value
    const quantity = document.getElementById('quantity') 
    localStorage.setItem(item, quantity.value) 
  })
  
  
  const list = document.getElementById('cartItems')
  const showCart = () => {
   for(let i = 0; i < localStorage.length; i++){
     let key = localStorage.key(i)
     const listItem = document.createElement('li')
     listItem.innerHTML = key + ': ' + localStorage.getItem(key)
     const remove = document.createElement('button');
     remove.innerHTML = 'Remove'
     remove.setAttribute('class', 'removeButton')
     remove.setAttribute('type', 'submit')
     remove.id = key
     listItem.appendChild(remove)
     list.appendChild(listItem)
     console.log()
   }
  };
showCart()
  // const storeItem = () => {


  // };
  const removeItem = () => {
    const button = document.querySelectorAll('.removeButton');
    console.log(button)
    button.forEach(function(ele){
      ele.addEventListener('click', event => {
        localStorage.removeItem(event.target.id)
        location.reload()
      })
    })
  }
  /* list.addEventListener('click', event => {
    console.log(event.target)
    event.preventDefault()
  }) */
 

removeItem() 
});




/*  console.log(removeButton)
  removeButton.forEach(function(element){
    element.addEventListener('submit', event => {
    })
  }) */ 