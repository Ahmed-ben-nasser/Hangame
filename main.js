// Letters
const letters = "abcdefghijklmnopqrstuxyz";

let letterArr = Array.from(letters);

let letterElem = document.querySelector(".letters");

letterArr.forEach((letter) => {
  let span = document.createElement("span");

  let theLetter = document.createTextNode(letter);

  span.appendChild(theLetter);
  span.className = "letter-box";
  letterElem.append(span);
});

const words = {
  programming: [
    "nodejs",
    "c#",
    "php",
    "python",
    "javascript",
    "kotlen",
    "scala",
    "fortran",
    "R",
    "mysql",
    "mongodb",
  ],
  movies: [
    "Peprestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],

  countries: [
    "Syria",
    "Palestine",
    "Yemen",
    "Egypt",
    "Bahrain",
    "Qata",
    "Oman",
  ],
};

// get random property
let allKeys = Object.keys(words);

let randomPropNo = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNo];
let randomPropVal = words[randomPropName];

let randomValNo = Math.floor(Math.random() * randomPropVal.length);
let randomValName = randomPropVal[randomValNo];
console.log(randomValName);

document.querySelector(".category span").innerHTML = randomPropName;

let letterGuessElem = document.querySelector(".letter-guess");

// Convert Chosen Word To Arr
let wordArr = Array.from(randomValName);
console.log(wordArr);

wordArr.forEach((word) => {
  let span = document.createElement("span");
  if (word === " ") {
    span.className = "has-space";
  }
  letterGuessElem.appendChild(span);
});

let letterGuessSpans = document.querySelectorAll(".letter-guess span");

let hangDrawElem = document.querySelector(".hangman-draw");
let wrongCount = 0;

// Handle Click On Letters
document.addEventListener("click", (e) => {
  let status = false;
  if (e.target.className == "letter-box") {
    e.target.classList.add("clicked");
    wordArr.forEach((w, wIndex) => {
      if (w.toLowerCase() === e.target.innerHTML.toLowerCase()) {
        status = true;
        letterGuessSpans.forEach((s, sIndex) => {
          if (wIndex === sIndex) {
            s.innerHTML = w;
          }
        });
      }
    });

    if (!status) {
      ++wrongCount;
      hangDrawElem.classList.add(`wrong-${wrongCount}`);
      document.getElementById("baad").play();
      if (wrongCount >= 10) {
        document.getElementById("failed").play();
        letterElem.classList.add("end");
        endGame();
      }
    } else {
      document.getElementById("good").play();
    }
  }
});

const endGame = () => {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Game Over The Word is : ${randomValName}`
  );
  div.appendChild(divText);

  div.className = "popEnd";

  document.body.appendChild(div);
};
