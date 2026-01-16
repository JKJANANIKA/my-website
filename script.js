const words = [
  "Shopify Websites",
  "WordPress Websites",
  "Custom-Coded Websites"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;
const el = document.querySelector(".typing");

function loop() {
  current = words[i];

  if (!isDeleting) {
    el.textContent = current.substring(0, j++);
    if (j === current.length + 1) {
      isDeleting = true;
      setTimeout(loop, 1500);
      return;
    }
  } else {
    el.textContent = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(loop, isDeleting ? 60 : 100);
}

loop();
