$(document).ready(function() {
  var toggleTemp = true;

  
  $.getJSON("http://ip-api.com/json", function(locationData) {
   var latitude = locationData.lat;
   var longitude = locationData.lon;
   var city = locationData.city;
   var regionName = locationData.regionName;
   var apiKey="&APPID=b24f7f2b242079b0de6e01b5b0ec3a05";
    $("#city").html(city + ", " + regionName);
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + apiKey, function(json) {
      var weather = json.weather[0].main;
      var weatherDes = json.weather[0].description;
      var temp = json.main.temp;
      var tempCelsius = Math.round(temp - 273.15);
      var tempFar = Math.round(tempCelsius * 9 / 5 + 32);
      var icon = json.weather[0].icon;

      $("#forecast").html(weather);
      $("#temp").html("<a href = # class='temp-link'>" + tempFar + "&#8457" + "</a>")

      switch (icon) {
        case "01d":
          $('#icon').addClass('wi wi-day-sunny');
          break;
        case "01n":
          $('#icon').addClass('wi wi-night-clear');
          break;
        case "02d":
          $('#icon').addClass('wi wi-day-sunny-overcast');
          break;
        case "02n":
          $('#icon').addClass('wi wi-night-alt-partly-cloudy');
          break;
        case "03d":
        case "03n":
          $('#icon').addClass('wi wi-cloud');
          break;
        case "04d":
        case "04n":
          $('#icon').addClass('wi wi-cloudy');
          break;
        case "09d":
        case "09n":
          $('#icon').addClass('wi wi-rain');
          break;
        case "10d":
          $('#icon').addClass('wi wi-day-sprinkle');
          break;
        case "10n":
          $('#icon').addClass('wi wi-night-alt-sprinkle');
          break;
        case "11d":
        case "11n":
          $('#icon').addClass('wi wi-thunderstorm');
          break;
        case "13d":
        case "13d":
          $('#icon').addClass('wi wi-snow');
          break;
        case "50d":
        case "50d":
          $('#icon').addClass('wi wi-fog');
          break;
        default:
          $('#icon').addClass('wi wi-na');
      }

      $("#temp").click(function() {
        if (toggleTemp) {
          toggleTemp = false;
          $("#temp").html("<a href = # class = 'temp-link'>" + tempCelsius + "&#8451" + "</a>");
        } else {
          toggleTemp = true;
          $("#temp").html("<a href = # class = 'temp-link'>" + tempFar + "&#8457" + "</a>");
        }
      });
    });
  });

});



