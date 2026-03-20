// transition cho img mainconten__box

const boxOfImg = document.querySelector(".maincontent__box");
const listImg = boxOfImg.querySelectorAll(".panel");

boxOfImg.addEventListener("click", function (e) {
  listImg.forEach((item) => {
    item.classList.remove("active");
  });
  const item = e.target;
  item.classList.add("active");
});

// aninmation bong bóng khi click vào phần footer giống mặt nước

const elementFooter = document.querySelector("footer");

elementFooter.addEventListener("click", function (event) {
  const rect = event.currentTarget.getBoundingClientRect();
  // console.log(rect);

  // tọa độ so với viewport
  const x = event.clientX;
  const y = event.clientY;

  const xInside = x - rect.left;
  const yInside = y - rect.top;

  const div = document.createElement("div");
  div.setAttribute("class", "footer__circle");
  div.style.left = xInside + "px";
  div.style.top = yInside + "px";
  elementFooter.appendChild(div);
});

// Animation cho box search trên hero search

const elementBoxSearch = document.querySelector(".hero__search");
const elementButtonSearch = elementBoxSearch.querySelector("i");
const elementInputSearch = elementBoxSearch.querySelector("input");

elementButtonSearch.addEventListener("click", function (event) {
  elementBoxSearch.classList.toggle("zoom");
  elementInputSearch.focus();
});

// Hiệu ứng chuyển thanh trượt
let index = 0;
const elementPrevButton = document.querySelector(".blogs__button-prev");
const elementNextButton = document.querySelector(".blogs__button-next");
const listStep = document
  .querySelector(".blogs__progress-wrapper")
  .querySelectorAll(".blogs__step");
const progress = document.querySelector(".blogs__progress");

function statusForPrevButton(value) {
  if (value === 0) {
    elementPrevButton.disabled = true;
  } else {
    elementPrevButton.disabled = false;
  }
}

function statusForNextButton(value) {
  if (value === 4) {
    elementNextButton.disabled = true;
  } else {
    elementNextButton.disabled = false;
  }
}

function statusForListStep(index) {
  listStep.forEach((item) => {
    item.classList.remove("active");
  });
  listStep[index].classList.add("active");
}

function update(index) {
  statusForPrevButton(index);
  statusForNextButton(index);
  progress.style.width = `${25 * index}%`;
  statusForListStep(index);
}

elementPrevButton.addEventListener("click", function () {
  if (index > 0) {
    index--;
    update(index);
  }
});

elementNextButton.addEventListener("click", function () {
  if (index < 5) {
    index++;
    update(index);
  }
});

statusForPrevButton(0);

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.onclick = () => {
  nav.classList.toggle("active");
};
