function handleSubmit(event) {
  event.preventDefault();
}

function handleKeySearch() {
  const searchText = searchInput.value;
  console.log(globalData);
  //   console.log("global", globalData);
  //   const filteredSeries = globalData.filter((serie) =>
  //     serie.name.include(searchText)
  //   );
  //   renderPalettes(filteredSeries);
}

form.addEventListener("submit", handleSubmit);
searchInput.addEventListener("keyup", handleKeySearch);
