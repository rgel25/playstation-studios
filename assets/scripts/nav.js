function openNav() {
  document.getElementById("nav").classList.add("nav-show");
  document.getElementById("nav-open").style.display = "none";
}

function closeNav() {
  document.getElementById("nav").classList.remove("nav-show");
  document.getElementById("nav-open").style.display = "block";
}

document
  .querySelectorAll(".nav-link")
  .forEach((anchor) => anchor.addEventListener("click", closeNav));
