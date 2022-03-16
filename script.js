const numbernine = document.querySelector(".number9");

let counter = 0;

setTimeout(function () {
  setInterval(() => {
    if (counter <= 8) {
      counter++;
      numbernine.setAttribute("data-fake", counter);
    }
  }, 1000);
}, 5000);
