
let cartItems = [];
let totalCost = 0;

function addItem(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  totalCost += itemPrice;
  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  
  cartElement.innerHTML = "";
  cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    cartElement.appendChild(listItem);
  });
  
  totalElement.textContent = totalCost;
}
