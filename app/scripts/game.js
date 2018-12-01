var lastUpdate = new Date().getTime();
var darkMatter = 0

function updateGame(modifier) {
  var increment = 0.1
  modifier = modifier || 1;

  var diyCount = 0
  var diyMultiplyer = 0.1
  increment = increment + (diyCount * diyMultiplyer)

  darkMatter += increment * modifier;
  document.getElementById('darkMatter').innerText = Math.floor(darkMatter)
}

setInterval(function(){
  var thisUpdate = new Date().getTime();
  var diff = (thisUpdate - lastUpdate);
  diff = Math.round(diff / 100);
  updateGame(diff);
  lastUpdate = thisUpdate;
}, 100);
