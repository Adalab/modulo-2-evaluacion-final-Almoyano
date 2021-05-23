function addListenersToCards() {
  const allCards = document.querySelectorAll(".js-card");

  for (const card of allCards) {
    card.addEventListener("click", handleClickCard);
  }
}

function handleClickCard(event) {
  event.currentTarget.classList.toggle("favorite");
}
