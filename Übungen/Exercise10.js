fetch('/header.html')
.then(response => response.text())
.then(headerHtml => {
  document.querySelector('#header-container').innerHTML = headerHtml;
});
