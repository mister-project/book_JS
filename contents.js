console.log("скрипт в работе");

const hTwo = document.querySelectorAll("h2, h3, h4");
const contents = document.querySelector("#contents");
const openModalBtn = document.querySelector("#openModal"); // Кнопка открытия модального окна
const toc = document.getElementById("modal");
let modalDisplay = toc.style.display;

let arr = [];

// ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ ВИДИМОСТИ МОДАЛЬНОГО ОКНА СОДЕРЖАНИЯ
const compareStyleDisplay = () => {
  if (document.getElementById("modal").style.display != "block") {
    toc.style.display = "block";
  } else {
    toc.style.display = "none";
  }
};

openModalBtn.addEventListener("click", () => {
  compareStyleDisplay();
});

//формируем массив
hTwo.forEach((e, index) => {
  e.setAttribute("id", index);
});

const headings = document.querySelectorAll("h2, h3, h4");

headings.forEach((heading) => {
  const link = document.createElement("a");
  link.textContent = heading.textContent;
  link.setAttribute("href", `#${heading.id}`);

  const listItem = document.createElement("li");
  listItem.appendChild(link);

  toc.appendChild(listItem);
});

toc.querySelectorAll("li").forEach((elem) => {
  elem.addEventListener("click", () => {
    compareStyleDisplay();
  });
});
