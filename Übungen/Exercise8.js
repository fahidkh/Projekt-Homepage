var fetchFileA = fetch('A.txt').then(function(response) {
    return response.text();
  });
  var fetchFileB = fetch('B.txt').then(function(response) {
    return response.text();
  });
  
  Promise.all([fetchFileA, fetchFileB]).then(function(values) {
    var fileA = values[0];
    var fileB = values[1];
  
    var linesA = fileA.split('\n');
    var linesB = fileB.split('\n');
  
    var output = document.getElementById('output');
    for (var i = 0; i < linesA.length; i++) {
      var lineA = linesA[i];
      var lineB = linesB[i];
      var concatenatedLine = lineA + ' ' + lineB;
      output.innerHTML += concatenatedLine + '<br>';
    }
  });

  async function concatenateFiles() {
    var responseA = await fetch('A.txt');
    var responseB = await fetch('B.txt');
    var fileA = await responseA.text();
    var fileB = await responseB.text();
    var linesA = fileA.split('\n');
    var linesB = fileB.split('\n');
    var output = document.getElementById('output2');
    for (var i = 0; i < linesA.length; i++) {
      var lineA = linesA[i];
      var lineB = linesB[i];
      var concatenatedLine = lineA + ' ' + lineB;
      output.innerHTML += concatenatedLine + '<br>';
    }
  }
  concatenateFiles()
  
  