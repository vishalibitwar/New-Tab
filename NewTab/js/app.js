let imageNo;
const h1 = document.getElementById('h1');
imageNo = Math.floor(Math.random() * 11);
const img = document.getElementById('showcase');

console.log(imageNo);
img.style.backgroundImage = `url('/NewTab/img/${imageNo}.jpg')`;


fetch('http://quotes.rest/qod.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    showQuote(data.contents.quotes[0].quote);
  });


function showQuote(quote) {
  let call = setInterval(callQuote, 20);
  let index = 0;

  function callQuote() {
    h1.innerText = quote.slice(0, index);
    index++;
    if (index > quote.length)
      clearInterval(call);
  }

}