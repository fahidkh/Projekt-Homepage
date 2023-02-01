let darkModeEnabled = false;
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const body = document.body;

  darkModeBtn.addEventListener("click", function() {
    darkModeEnabled = !darkModeEnabled;

    if (darkModeEnabled) {
      body.style.backgroundColor = "#111";
      body.style.color = "#fff";
    } else {
      body.style.backgroundColor = "#fff";
      body.style.color = "#111";
    }
  });

function hidefooter() {
  document.getElementById("foot").style = 'display: none;';
}