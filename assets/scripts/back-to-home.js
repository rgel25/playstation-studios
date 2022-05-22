const backToHome = document.querySelectorAll(".back-to-home");
const transition = document.querySelector(".transition");

backToHome.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".cover").forEach((cover) => {
      cover.style.top = "0";
    });
    document.getElementById("nav-open").style.color = "#f5f5f5";
    transition.classList.add("slide");
    transition.classList.add("fade-to-black");
    setTimeout(() => {
      window.location = link.href;
    }, 1800);
  });
});
