let RunSentimentAnalysis = () => {
  textToAnalyze = document.getElementById("textToAnalyze").ariaValueMax;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("system_response").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open(
    "GET",
    "sentimentAnalyzer?textToAnalyze" + "=" + textToAnalyze,
    true
  );
  xhttp.send();
};