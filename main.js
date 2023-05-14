const hambur_icon = document.getElementById("hambur-icon");
const close_icon = document.getElementById("close-icon");
const navres = document.querySelector(".nav-res");
const navlef = document.querySelector(".navbar__left");
const navreslis = document.querySelectorAll(".nav-res li");

hambur_icon.addEventListener("click", () => {
  navres.style.display = "flex";
  hambur_icon.style.display = "none";
  close_icon.style.display = "flex";
  navlef.style.display = "none";
});

close_icon.addEventListener("click", () => {
  navres.style.display = "none";
  hambur_icon.style.display = "block";
  close_icon.style.display = "none";
  navlef.style.display = "block";
});

navreslis.forEach((element) => {
  element.addEventListener("click", () => {
    navres.style.display = "none";
    close_icon.style.display = "none";
    hambur_icon.style.display = "block";
    navlef.style.display = "block";
  });
});
