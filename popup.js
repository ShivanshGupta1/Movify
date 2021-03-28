submitB.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  fetch(`http://www.omdbapi.com/?apikey=65a67153&t=${movie_name.value}`)
    .then(response => response.json())
    .then(data => {
      details.style.display = "block"
      poster.src = data.Poster
      rating.innerHTML = "Rotten Tomatoes - " + data.Ratings[1].Value
      rating2.innerHTML = "IMDb - " + data.imdbRating
      plot.innerHTML = "Plot - " + data.Plot
      actor.innerHTML = "Actors - " + data.Actors
    });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
  });
});
