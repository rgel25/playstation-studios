const toStudio = document.getElementById("toStudio");
const toNews = document.getElementById("toNews");
const transition = document.querySelector(".transition");

toStudio.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelectorAll(".cover").forEach((cover) => {
    cover.style.top = "300vh";
  });
  document.getElementById("nav-open").style.color = "#f5f5f5";
  transition.classList.add("slide");
  transition.classList.add("fade-to-black");
  setTimeout(() => {
    window.location = toStudio.href;
  }, 1800);
});

toNews.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelectorAll(".cover").forEach((cover) => {
    cover.style.top = "200vh";
  });
  document.getElementById("nav-open").style.color = "#f5f5f5";
  transition.classList.add("slide");
  transition.classList.add("fade-to-black");
  setTimeout(() => {
    window.location = toNews.href;
  }, 1800);
});

window.addEventListener("load", initializePage);
function initializePage() {
  if (window.location.href.includes("#") === true) {
    document.querySelector(".overlay").classList.add("overlay-mute");
    document.querySelector(".landing").classList.add("landing-show");
    new fullScroll({
      mainElement: "main",
      displayDots: true,
      dotsPosition: "right",
      animateTime: 0.7,
      animateFunction: "ease",
    });
  } else {
    document.getElementsByTagName("nav")[0].style.display = "none";
    let hasRun = false;
    [
      "wheel",
      "mousewheel",
      "keyup",
      "touchstart",
      "touchdown",
      "click",
    ].forEach(function (action) {
      window.addEventListener(action, exectuteOverlay, { once: true });
    });

    function exectuteOverlay(e) {
      if (e.type == "keyup") {
        if (e.key != "ArrowDown") {
          window.addEventListener("keyup", exectuteOverlay, { once: true });
          return;
        }
      }
      console.log("I will only fire once!");
      document.querySelector(".overlay").classList.add("overlay-animate");
      setTimeout(() => {
        new fullScroll({
          mainElement: "main",
          displayDots: true,
          dotsPosition: "right",
          animateTime: 0.7,
          animateFunction: "ease",
        });
      }, 1000);
      document.getElementsByTagName("nav")[0].style.display = "block";
      document.querySelector(".landing").classList.add("landing-show");
      hasRun = true;
      if (hasRun) {
        [
          "wheel",
          "mousewheel",
          "keyup",
          "touchstart",
          "touchdown",
          "click",
        ].forEach(function (action) {
          console.log(`${action} removed!`);
          window.removeEventListener(action, exectuteOverlay);
        });
      }
    }
  }
}

// Grid Click
document.querySelector(".news-grid-container").addEventListener("click", () => {
  document.querySelector(".news-overlay").classList.add("show-news-overlay");
  document.querySelector(".news-overlay").addEventListener("click", () => {
    document
      .querySelector(".news-overlay")
      .classList.remove("show-news-overlay");
  });
});

// Change Nav Icon to black on white background
window.addEventListener("hashchange", () => {
  if (
    window.location.href.includes("#3") === true ||
    window.location.href.includes("#5") === true
  ) {
    document.getElementById("nav-open").style.color = "#0c0d0e";
  } else {
    document.getElementById("nav-open").style.color = "#f5f5f5";
  }
});
