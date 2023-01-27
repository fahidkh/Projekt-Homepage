const htmlBtn = document.querySelector("#html-btn");
const cssBtn = document.querySelector("#css-btn");
const jsBtn = document.querySelector("#js-btn");
const subMenu = document.querySelector("#sub-menu");
const docContainer = document.querySelector("#documentation");
const refContainer = document.querySelector("#references");

fetch("content.json")
  .then(response => response.json())
  .then(data => {
    htmlBtn.addEventListener("click", () => {
      displaySubMenu("html", data);
    });
    cssBtn.addEventListener("click", () => {
      displaySubMenu("css", data);
    });
    jsBtn.addEventListener("click", () => {
      displaySubMenu("javascript", data);
    });
  })
  .catch(error => console.log(error));

function displaySubMenu(topic, data) {
  while (subMenu.firstChild) {
    subMenu.removeChild(subMenu.firstChild);
  }

  const terms = Object.keys(data[topic]);
  for (let i = 0; i < terms.length; i++) {
    const term = terms[i];
    const li = document.createElement("li");
    li.innerHTML = term;
    li.addEventListener("click", () => {
      displayDocumentation(topic, term, data);
    });
    subMenu.appendChild(li);
  }

subMenu.style.display = "block";
displayDocumentation(topic, terms[0], data);
}

function displayDocumentation(topic, term, data) {
docContainer.innerHTML = data[topic][term]["content"];
refContainer.innerHTML = "";
for (let i = 0; i < data[topic][term]["references"].length; i++) {
const ref = data[topic][term]["references"][i];
refContainer.innerHTML += '<a href="' + ref + '" target="_blank">' + ref + '</a>';
}
}
