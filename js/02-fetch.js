if (localStorage.getItem("data") === null) {
  fetch("http://api.tvmaze.com/shows")
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("shows", JSON.stringify(data));
      renderPalettes(data);
    });
} else {
  const data = JSON.parse(localStorage.getItem("shows"));
  renderPalettes(data);
}

function renderPalettes(data) {
  paletteList.innerHTML = "";

  for (const show of data.shows) {
    paletteList.innerHTML += `<li class="palette-list-item js-card favorite">
          <h2 class="item-name">${show.name}</h2>
          <img class="item-imagen-box" src="${show.image.medium}" alt="${show.name}"
          />
          </li>
          `;
  }
  addListenersToCards();
}
