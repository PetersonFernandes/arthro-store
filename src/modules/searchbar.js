const searchInput = document.querySelector(".pesquisa");
searchInput.addEventListener("input", searchBar);

export function searchBar() {
  const valueInput = formatar(searchInput.value);

  const items = document.querySelectorAll(".card");

  //
  items.forEach((book) => {
    if (
      valueInput === "" ||
      formatar(book.textContent).indexOf(valueInput) !== -1
    ) {
      book.style.display = "";
      book.style.animation = "none";
    } else {
      book.style.display = "none";
      book.style.animation = "none";
    }
  });
}

function formatar(x) {
  return x.toLowerCase().trim();
}
