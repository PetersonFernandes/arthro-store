const addButtons = document.querySelectorAll(".add-to-cart");
const cartItems = [];

export function MyCart() {
  document.querySelectorAll("h3").textContent = "hello world";
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => addBook(button));
});

function calcularTotal() {
  let total = 0;
  cartItems.forEach((item) => {
    total += Number(item.price) * item.quantidade;
  });
  return total;
}

function addBook(button) {
  addToCart({
    title: button.dataset.title,
    amount: button.dataset.amount,
    image: button.dataset.image,
    price: button.dataset.price,
    trash: button.dataset.trash,
  });
}

function addToCart(book) {
  const itemExiste = cartItems.find((item) => item.title === book.title);
  if (itemExiste) {
    itemExiste.quantidade += 1;
  } else {
    cartItems.push({ ...book, quantidade: 1 });
  }
  const total = calcularTotal();
  document.querySelector(".soma-subtotal").textContent =
    `$ ${total.toFixed(2)}`;
  document.querySelector(".soma-total-compra").textContent =
    `$ ${total.toFixed(2)}`;
  renderCart();
}

function renderCart() {
  const cartContainer = document.querySelector(".cart-items");

  cartContainer.innerHTML = "";
  cartItems.forEach((item, index) => {
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img class="book-img-cart" src="${item.image}" />
        <div class= "info-item">
        <p class= "title-book">${item.title}</p>
        <p  class= "amount-book">${item.amount} ${item.quantidade}</p>
        <p  class= "price-book">${item.price}<p>
        </div>
        <div  class= "cancel">
          <img class= "cancel-img" data-index="${index}" src="${item.trash}"  />

        </div>
      </div>
    `;
  });

  document.querySelectorAll(".cancel-img").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeItem(btn.dataset.index);
    });
  });
}

function removeItem(index) {
  cartItems.splice(index, 1);
  renderCart();
}
