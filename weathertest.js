simply.vibe('short');
simply.title("Welcome to Weather"); 

simply.on('singleClick', function(e) {
  
  navigator.geolocation.getCurrentPosition(function(pos) {
     var coords = pos.coords;
     var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
      'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
     ajax({ url: weatherUrl, type: 'json' }, function(data) {
      simply.text({ title: "Weather for " + data.name + " is ", subtitle: Math.round(data.main.temp) + "C," + " outlook " + data.weather[0].description});
  });
  
});

simply.vibe('long');
  
}); 



