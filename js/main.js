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
