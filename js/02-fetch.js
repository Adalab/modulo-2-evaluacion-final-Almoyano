let globaldata = [];

if (localStorage.getItem("data") === null) {
  fetch("http://api.tvmaze.com/shows")
    .then((response) => response.json())
    .then((data) => {
      globalData = data;
      localStorage.setItem("show", JSON.stringify(globalData));
      renderPalettes(globalData);
    });
} else {
  globalData = JSON.parse(localStorage.getItem("show"));
  renderPalettes(globalData);
}

function renderPalettes(data) {
  paletteList.innerHTML = "";

  for (const show of data) {
    paletteList.innerHTML += `<li class="palette-list-item js-card favorite">
          <h2 class="item-name">${show.name}</h2>
          <img class="item-imagen-box" src="${show.image.medium}" alt="${show.name}"
          />
          </li>
          `;
  }
  addListenersToCards();
}
