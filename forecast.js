
simply.vibe('short');
simply.title("Welcome to Weather"); 

simply.on('singleClick', function(e) {
  
  navigator.geolocation.getCurrentPosition(function(pos) {
     var coords = pos.coords;
     var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
      'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric&cnt=10&mode=json';
     ajax({ url: weatherUrl, type: 'json' }, function(data) {
      simply.text({ title: "Forecast for " + data.name + " is " + data.weather[0].description + ",forecast for " + data.name + " tomorrow is " + data.weather[1].description });
  });
  
});

simply.vibe('long');
  
}); 
