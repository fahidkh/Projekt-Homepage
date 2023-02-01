const data = {
    "Federal State Data": [
      {
        "State": "Baden-Wuerttemberg",
        "Electronically Submitted Cases": 5000730,
        "Difference to the Previous Day": 986,
        "Cases in the Last 7 Days": 5756,
        "7-Day Incidence": 51.7,
        "Deaths": 18917
      },
      {
        "State": "Bavaria",
        "Electronically Submitted Cases": 6653746,
        "Difference to the Previous Day": 1966,
        "Cases in the Last 7 Days": 10425,
        "7-Day Incidence": 79.1,
        "Deaths": 28031
      },
      {
        "State": "Berlin",
        "Electronically Submitted Cases": 1416412,
        "Difference to the Previous Day": 470,
        "Cases in the Last 7 Days": 2135,
        "7-Day Incidence": 58.1,
        "Deaths": 5421
      },
      {
        "State": "Brandenburg",
        "Electronically Submitted Cases": 1102783,
        "Difference to the Previous Day": 324,
        "Cases in the Last 7 Days": 1438,
        "7-Day Incidence": 56.7,
        "Deaths": 6424
      },
      {
        "State": "North Rhine-Westphalia",
        "Electronically Submitted Cases": 7895101,
        "Difference to the Previous Day": 4349,
        "Cases in the Last 7 Days": 19070,
        "7-Day Incidence": 106.4,
        "Deaths": 30730
      }
    ]
  };
  
  const xCategories = data["Federal State Data"].map(d => d["State"]);
  const yData = data["Federal State Data"].map(d => d["Electronically Submitted Cases"]);
  
  const chart = Highcharts.chart('chartContainer', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'COVID-19 Cases in Germany',
      align: 'left'
    },
    xAxis: {
      categories: xCategories
    },
    yAxis: {
    min: 100,
      title: {
        text: 'Number of Cases'
      }
    },
    series: [{
      name: 'Electronically Submitted Cases',
      data: yData
    }],
    plotOptions: {
      series: {
        animation: {
          duration: 2000
        }
      }
    }
  });

  const squares = document.querySelectorAll(".square");
      let currentPlayer = "X";
      squares.forEach(square => {
        square.addEventListener("click", function() {
          if (!square.innerHTML) {
            square.innerHTML = currentPlayer;
            if (checkWin(currentPlayer)) {
              alert(currentPlayer + " wins!");
            } else {
              currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
          }
        });
      });

      function checkWin(player) {
        const winConditions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < winConditions.length; i++) {
          const [a, b, c] = winConditions[i];
          if (
            squares[a].innerHTML === player &&
            squares[b].innerHTML === player &&
            squares[c].innerHTML === player
          ) {
            return true;
          }
        }
        return false;
      }

      fetch('/header.html')
      .then(response => response.text())
      .then(headerHtml => {
        document.querySelector('#header-container').innerHTML = headerHtml;
      });