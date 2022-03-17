const numbernine = document.querySelector(".number9");
const numberEight = document.querySelector(".number8");
const numberSeven = document.querySelector(".number7");
const numberSix = document.querySelector(".number6");
const numberFive = document.querySelector(".number5");
const numberFour = document.querySelector(".number4");
const numberThree = document.querySelector(".number3");
const numberTwo = document.querySelector(".number2");
const numberOne = document.querySelector(".number1");

const numbersWindos = document.querySelectorAll(".numbers__window__digit");

let countStart = 199389750;
let countEnd = 2500000000;
const counterNumberTwo = document.querySelector(".counterNumber");

setTimeout(function () {
  setInterval(() => {
    if (countStart <= countEnd) {
      let finalcount = countStart++;
      let digits = ("" + finalcount).split("");
      numbernine.setAttribute("data-fake", digits[8]);
      numberEight.setAttribute("data-fake", digits[7]);
      numberSeven.setAttribute("data-fake", digits[6]);
      numberSix.setAttribute("data-fake", digits[5]);
      numberFive.setAttribute("data-fake", digits[4]);
      numberFour.setAttribute("data-fake", digits[3]);
      numberThree.setAttribute("data-fake", digits[2]);
      numberTwo.setAttribute("data-fake", digits[1]);
      numberOne.setAttribute("data-fake", digits[0]);

      console.log(digits[6]);
    }
  }, 1000);
}, 3000);

setTimeout(() => {
  numbersWindos.forEach((x) => x.classList.toggle("remove-animation"));
}, 4000);
