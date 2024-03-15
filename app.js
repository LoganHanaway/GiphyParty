// api key 1tRxIpVB1wcaQmqPHwrOlSlxFlL97g14
const token = "1tRxIpVB1wcaQmqPHwrOlSlxFlL97g14";
const $search = $("#search");
const $remove = $("#remove");
const $resultsContainer = $("#resultsContainer");

// function to submit the search and append to the results container
async function submitSearch() {
  const query = $("#userInput").val();
  const res = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=1tRxIpVB1wcaQmqPHwrOlSlxFlL97g14&q=${query}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );
  console.log(res);

  // appending each gif to the resultsContainer
  const url = res.data.data[0].images.fixed_height.url;
  const card = document.createElement("div");
  $(card).attr("class", "card").attr("class", "col");
  const gif = document.createElement("img");
  $(gif).attr("src", url);
  $(gif).css({ width: "200px", height: "200px" });
  $(card).append(gif);
  $resultsContainer.append(card);

  // add events to each gif for removal on click of remove btn

  $(document).on("click", "#remove", function () {
    gif.remove();
  });
}

$search.on("click", function (e) {
  e.preventDefault();
  submitSearch();
});
