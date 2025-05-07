const nav = document.querySelector("#navbar-sticky");
const icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

const navLinks = document.querySelectorAll("li");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.add("hidden");
  });
});
// npx tailwindcss -i ./src/input.css -o ./src/output,css --watch
