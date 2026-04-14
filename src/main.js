import "./styles/main.css";
import "./styles/global.css";
import "./styles/header.css";
import "./styles/card.css";
import "./styles/cart.css";
import "./styles/aside.css";
import { searchBar } from "./modules/searchbar.js";
import { MyCart } from "./modules/cart.js";

const finalizarCompra = document.querySelector(".finalizar-compra");

finalizarCompra.addEventListener("click", finalizar);
function finalizar() {
  document.querySelector(".cart-items").textContent = "";
  document.querySelector(".soma-subtotal").textContent = "00.00";
  document.querySelector(".soma-total-compra").textContent = "00.00";
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});
