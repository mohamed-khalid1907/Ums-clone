let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let back = document.querySelector(".main_page .head_bottom .back");
let bullets = document.querySelectorAll(
  ".main_page .head_bottom .bullets .bullet",
);
let stats = document.querySelectorAll(".stats .container .stat .percentage");
console.log(stats);
let statsParent = document.querySelector(".stats ");
let circles = document.querySelectorAll(".stats .stat svg circle ");
prev.onclick = function () {
  if (back.style.right === "10vw") {
    bullets.forEach((e) => e.classList.remove("active"));
    bullets[2].classList.add("active");
    back.style.right = "240vw";
  } else if (back.style.right === "240vw") {
    bullets.forEach((e) => e.classList.remove("active"));
    bullets[1].classList.add("active");
    back.style.right = "120vw";
  } else {
    bullets.forEach((e) => e.classList.remove("active"));
    bullets[0].classList.add("active");
    back.style.right = "10vw";
  }
};
next.onclick = function () {
  if (back.style.right === "10vw") {
    bullets.forEach((e) => e.classList.remove("active"));
    bullets[1].classList.add("active");
    back.style.right = "120vw";
  } else if (back.style.right === "120vw") {
    bullets.forEach((e) => e.classList.remove("active"));
    bullets[2].classList.add("active");
    back.style.right = "240vw";
  } else {
    bullets.forEach((e) => e.classList.remove("active"));
    bullets[0].classList.add("active");
    back.style.right = "10vw";
  }
};
bullets[0].onclick = function () {
  bullets.forEach((e) => e.classList.remove("active"));
  bullets[0].classList.add("active");
  back.style.right = "10vw";
};
bullets[1].onclick = function () {
  bullets.forEach((e) => e.classList.remove("active"));
  bullets[1].classList.add("active");
  back.style.right = "120vw";
};
bullets[2].onclick = function () {
  bullets.forEach((e) => e.classList.remove("active"));
  bullets[2].classList.add("active");
  back.style.right = "240vw";
};
setInterval(function () {
  if (back.style.right === "10vw") {
    bullets.forEach((e) => e.classList.remove("active"));
    bullets[1].classList.add("active");
    back.style.right = "120vw";
  } else if (back.style.right === "120vw") {
    bullets.forEach((e) => e.classList.remove("active"));
    bullets[2].classList.add("active");
    back.style.right = "240vw";
  } else {
    bullets.forEach((e) => e.classList.remove("active"));
    bullets[0].classList.add("active");
    back.style.right = "10vw";
  }
}, 3000);
let started = false;
window.onscroll = function () {
  if (window.scrollY >= statsParent.offsetTop - 600) {
    if (!started) {
      stats.forEach((e) => counter(e));
      circles.forEach((ele) => circle(ele));
    }
    started = true;
  }
};
function counter(ele) {
  let per = ele.dataset.percentage;
  let count = setInterval(function () {
    ele.textContent++;
    if (ele.textContent == per) {
      clearInterval(count);
    }
  }, 2000 / per);
}
function circle(ele) {
  let per = ele.dataset.num;
  let x = 450;
  ele.style.cssText = `
      stroke-dashoffset: ${450 - (per / 100) * 450};
    `;
}

//
