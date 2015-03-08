simply.vibe('short');
simply.title("Welcome to Weather"); 

simply.on('singleClick', function(e) {
  
  navigator.geolocation.getCurrentPosition(function(pos) {
     var coords = pos.coords;
     var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
      'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
     ajax({ url: weatherUrl, type: 'json' }, function(data) {
      simply.text({ title: "The weather for " + data.name + " is ", subtitle:  Math.round(data.main.temp) + "C, expect " + data.weather[0].description});
  });
  
});

simply.vibe('long');
  
}); 



