var quoteTextElement = document.getElementById("quote-text");
var quoteAuthorElement = document.getElementById("quote-author");
var newQuoteButton = document.getElementById("new-quote");
var title = document.getElementById("hea");

// Get day or night greeting
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Let's start our night with a new quote";
} else if (hourNow > 12) {
  greeting = "Let's start our afternoon with a new quote";
} else if (hourNow > 0) {
  greeting = "Let's start our morning with a new quote";
} else {
  greeting = "Let's start our day with a new quote";
}

title.innerHTML = greeting;

//collection of colors
var colors = [
  { bg: "rgb(92, 112, 238)", text: "white", contrast: "rgb(92, 112, 238)" },
  { bg: "rgb(205, 212, 248)", text: "black", contrast: "rgb(205, 212, 248)" },
  { bg: "rgb(255, 165, 0)", text: "black", contrast: "rgb(255, 165, 0)" },
  { bg: "rgb(255, 192, 203)", text: "black", contrast: "rgb(255, 192, 203)" },
  { bg: "rgb(0, 128, 0)", text: "white", contrast: "rgb(0, 128, 0)" },
  { bg: "rgb(255, 0, 0)", text: "white", contrast: "rgb(255, 0, 0)" },
  { bg: "rgb(255, 255, 0)", text: "black", contrast: "rgb(255, 255, 0)" },
  { bg: "rgb(0, 255, 255)", text: "black", contrast: "rgb(0, 255, 255)" },
  { bg: "rgb(128, 0, 128)", text: "white", contrast: "rgb(128, 0, 128)" },
  { bg: "rgb(255, 105, 180)", text: "white", contrast: "rgb(255, 105, 180)" },
];

function changeUIColors() {
  // Get a random color object from the collection
  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Apply the random color to the body background
  document.body.style.backgroundColor = randomColor.bg;

  // Apply the random color to the button background
  newQuoteButton.style.backgroundColor = randomColor.bg;

  // Apply the random color to the button text
  newQuoteButton.style.color = randomColor.text;

  // Apply the random color to the quote text
  quoteTextElement.style.color = randomColor.bg;

  // Apply the random color to the quote author text
  quoteAuthorElement.style.color = randomColor.bg;

  // Apply the random color to the quote icon
  var quoteIcons = document.querySelectorAll(".quote-icons i");
  quoteIcons.forEach(function (quoteIcon) {
    quoteIcon.style.color = randomColor.text;
  });

  // Apply the contrast color to the container
  var container = document.querySelector(".container");
  container.style.backgroundColor = randomColor.text;
  container.style.opacity = 0.4; // Adjust the opacity value
}

function fetchRandomQuote() {
  fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand") // API fetching
    .then((response) => response.json())
    .then((data) => {
      var randomIndex = Math.floor(Math.random() * data.length); // Pick a random quote
      var randomQuote = data[randomIndex];
      quoteTextElement.innerHTML = randomQuote.content.rendered;
      quoteAuthorElement.innerHTML = `- ${randomQuote.title.rendered} `;
    })
    .catch((error) => console.log(error));
}

newQuoteButton.addEventListener("click", function () {
  fetchRandomQuote();
  changeUIColors(); // Change UI colors on new quote request
});

// Generate the first random quote and apply initial UI colors
fetchRandomQuote();
changeUIColors();
