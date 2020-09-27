//window event list
eventListeners();
function eventListeners() {
  const ui = new UI();
  //hide preloader
  window.addEventListener("load", () => {
    ui.hidePreloader();
  });
  // Nav Btn
  document.querySelector(".navBtn").addEventListener("click", () => {
    ui.showNav();
  });
  //Control video
  document.querySelector(".videoBtn").addEventListener("click", function () {
    ui.videoControl();
  });
}

function UI() {}
//hide preloader
UI.prototype.hidePreloader = function () {
  document.querySelector(".preLoader").style.display = "none";
};
// Nav Btn
UI.prototype.showNav = function () {
  document.querySelector(".nav").classList.toggle("nav--show");
};
//Video Control start/pause
UI.prototype.videoControl = function () {
  let btn = document.querySelector(".videoBtn_switch");
  if (!btn.classList.contains("btnSlide")) {
    btn.classList.add("btnSlide");
    document.querySelector(".video_item").pause();
  } else {
    btn.classList.remove("btnSlide");
    document.querySelector(".video_item").play();
  }
};
