// api key 1tRxIpVB1wcaQmqPHwrOlSlxFlL97g14
const token = "1tRxIpVB1wcaQmqPHwrOlSlxFlL97g14";
const $search = $("#search");
const $remove = $("#remove");

// function to get the search term
const q = function getSearchTerm() {
  return $("#userInput").val();
};

// function to submit the search
async function submitSearch(q) {
  const res = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=1tRxIpVB1wcaQmqPHwrOlSlxFlL97g14&q=${q}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );
  console.log(res);
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
