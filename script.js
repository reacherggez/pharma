const cart = {};
const maxQuantity = 3;

const updateCartUI = () => {
 const cartList = document.getElementById('cart-list');
 const cartCount = document.getElementById('cart-count');
 cartList.innerHTML = '';

 let totalCount = 0;

 for (let product in cart) {
  const quantity = cart[product];
  const item = document.createElement('li');
  item.className = 'flex justify-between items-center py-1';
  item.innerHTML = `
   <span>${product}</span>
   <span class="text-sm font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">${quantity}</span>
  `;
  cartList.appendChild(item);
  totalCount += quantity;
 }

 cartCount.textContent = totalCount;

 // Show/hide cart count badge
 if (totalCount > 0) {
  cartCount.classList.remove('hidden');
 } else {
  cartCount.classList.add('hidden');
 }
};

document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
 btn.addEventListener('click', () => {
  const product = btn.getAttribute('data-product-id');

  if (!cart[product]) cart[product] = 0;

  if (cart[product] < maxQuantity) {
   cart[product]++;
   updateCartUI();
  } else {
   alert(`❗ You can only add up to ${maxQuantity} "${product}" in your cart.`);
  }
 });
});

// Toggle cart dropdown on cart icon click
document.getElementById('cart').addEventListener('click', () => {
 const cartItems = document.getElementById('cart-items');
 cartItems.classList.toggle('hidden');
});
