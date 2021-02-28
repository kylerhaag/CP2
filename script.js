document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=7d9519f8ee790f7bc9923c333c0dc445";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let results = "";
            results += '<h1>Weather in ' + json.name + "</h1>";
            for (let i = 0; i < json.weather.length; i++) {
                results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"
            for (let i = 0; i < json.weather.length; i++) {
                results += json.weather[i].description
                if (i !== json.weather.length - 1)
                    results += ", "
            }
            results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;
        });
    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=7d9519f8ee790f7bc9923c333c0dc445";
    fetch(url2)
        .then(function(response) {
            // console.log(response.json())

            return response.json();
        }).then(function(json) {
            let forecast = "";
            for (let i = 0; i < json.list.length; i++) {
                forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
                forecast += "<h3> Temperature: " + json.list[i].main.temp + " F</h3>";
                forecast += "<p> Humidity: " + json.list[i].main.humidity + "</p>";
                forecast += "<p> Wind Speed: " + json.list[i].wind.speed + " MPH </p>";
                forecast += "<p> Feels Like: " + json.list[i].main.feels_like + " </p> \n";

            }
            document.getElementById("forecastResults").innerHTML = forecast;
            // document.getElementById("forecastResults").innerHTML = forecast;
        });
});

// api key = d7a27a5e3092eef11596d153c373dea4b08e1065