"use strict";

function addListenersToCards() {
  const allCards = document.querySelectorAll(".js-card");

  for (const card of allCards) {
    card.addEventListener("click", handleClickCard);
  }
}

function handleClickCard(event) {
  // modificar favorites
  // llamar a paintShow
  // llamar a paintFavorites
  event.currentTarget.classList.toggle("favorite");
}
