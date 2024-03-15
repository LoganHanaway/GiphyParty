// api key 1tRxIpVB1wcaQmqPHwrOlSlxFlL97g14
const token = "1tRxIpVB1wcaQmqPHwrOlSlxFlL97g14";
const $search = $("#search");
const $remove = $("#remove");
const $resultsContainer = $("#resultsContainer");

// function to get the search term
function getSearchTerm() {
  const query = $("#userInput").val();
  return query;
}

// function to submit the search
async function submitSearch() {
  const res = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=1tRxIpVB1wcaQmqPHwrOlSlxFlL97g14&q=${query}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );
  console.log(res);
  const url = res.data.data[0].embed_url;
  const card = document.createElement("div");
  $(card).attr("class", "card");
  const gif = document.createElement("img");
  $(gif).attr("src", url);
  $(gif).appendTo(card).appendTo($resultsContainer);
}

// function to apend search result to container

function appendResults() {}

// adding event listeners

$search.on("click", function (e) {
  e.preventDefault();
  submitSearch();
});

$remove.on("click", function (e) {
  e.preventDefault();
});
