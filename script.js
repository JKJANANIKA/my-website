const roles = [
  "Shopify Partner",
  "Shopify Developer",
  "WordPress Developer",
  "Custom Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
const typingEl = document.querySelector(".typing");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

typeRole();
