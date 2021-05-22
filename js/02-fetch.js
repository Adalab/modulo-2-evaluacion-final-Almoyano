fetch("http://api.tvmaze.com/shows")
  .then((response) => response.json())
  .then((data) => {
    renderPalettes(data);
  });

function renderPalettes(data) {
  for (const show of data) {
    paletteList.innerHTML += `<li class="palette-list-item>
          <h2 class="item-name">${show.name}</h2>
          <img class="item-imagen-box" src="${show.image.medium}" alt="${show.name}"
          />
          </li>
          `;
  }
}
