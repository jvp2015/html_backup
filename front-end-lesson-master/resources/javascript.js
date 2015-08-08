
  function replaceWeather() {
    var myNewName = window.prompt('Pick weather!');
    document.getElementById('weather').innerHTML = myNewName;
  }

  document.onclick = replaceWeather;

$(document).ready(function() {

});