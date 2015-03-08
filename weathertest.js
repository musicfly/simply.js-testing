simply.vibe('short');
simply.title("Today's temperature"); 


navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
      'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
  ajax({ url: weatherUrl, type: 'json' }, function(data) {
    simply.text({ title: "The temp for " + data.name + " is " +  data.main.temp, subtitle: " degrees"});
  });
});
