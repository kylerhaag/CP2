document.getElementById("submission").addEventListener("click", function(event) {
    event.preventDefault();

    let country = document.getElementById("countryId").value;
    // if (value === "")
    // return;
    console.log(country, "country")
    let year = document.getElementById("yearDate").value;
    let category = document.getElementById("searchCatergory").value;

    const url = `https://calendarific.com/api/v2/${category}?&api_key=d7a27a5e3092eef11596d153c373dea4b08e1065&country=${country}&year=${year}`;

    if (category === "Languages" || category === "languages") {
        console.log("INSIDE")
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {

                let results = "";
                results += '<h1>Result for popular world ' + category + "</h1>";
                for (let i = 0; i < json.response.languages.length; i++) {
                    results += `<div>${json.response.languages[i].name} \n\n </div>`;
                }

                results += "\n\n";
                document.getElementById("languageResults").innerHTML = results;
            });
    }

    if (category === "Holidays" || category === "holidays") {
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {

                let results = "";
                results += `<h1>Result for ${category} in ${country} </h1>`;
                for (let i = 0; i < json.response.holidays.length; i++) {
                    results += `<div>${json.response.holidays[i].name}  </div>`;
                    results += `<div> Date: ${json.response.holidays[i].date.iso}  </div>`;
                    results += `<div> Description: ${json.response.holidays[i].description} </div> </br>`;
                }

                document.getElementById("languageResults").innerHTML = results;
            });
    }


    if (category === "Holidays" || category === "holidays") {
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {

                let results = "";
                results += `<h1>Result for ${category} in ${country} </h1>`;
                for (let i = 0; i < json.response.holidays.length; i++) {
                    results += `<div>${json.response.holidays[i].name}  </div>`;
                    results += `<div> Date: ${json.response.holidays[i].date.iso}  </div>`;
                    results += `<div> Description: ${json.response.holidays[i].description} </div> </br>`;
                }

                document.getElementById("languageResults").innerHTML = results;
            });
    }


    if (category === "Countries" || category === "countries") {
        console.log("INSIDE")
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log("INSIDE2", json)
                console.log("INSIDE3", json.response)
                console.log("INSIDE4", json.response.holidays)

                let results = "";
                results += `<h1>Countries in the world </h1>`;
                for (let i = 0; i < json.response.countries.length; i++) {
                    results += `<div>${json.response.countries[i].country_name}  </div>`;
                    results += `<div> Supported Languages: ${json.response.countries[i].supported_languages}  </div>`;
                    results += `<div> Total Holidays: ${json.response.countries[i].total_holidays} </div> </br>`;
                }

                document.getElementById("languageResults").innerHTML = results;
            });
    }


    // const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=7d9519f8ee790f7bc9923c333c0dc445";
    // fetch(url2)
    //     .then(function(response) {

    //         return response.json();
    //     }).then(function(json) {
    //         let forecast = "";
    //         for (let i = 0; i < json.list.length; i++) {
    //             forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
    //             forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
    //             forecast += "<h3> Temperature: " + json.list[i].main.temp + " F</h3>";
    //             forecast += "<p> Humidity: " + json.list[i].main.humidity + "</p>";
    //             forecast += "<p> Wind Speed: " + json.list[i].wind.speed + " MPH </p>";
    //             forecast += "<p> Feels Like: " + json.list[i].main.feels_like + " </p> \n";

    //         }
    //         document.getElementById("forecastResults").innerHTML = forecast;
    //         // document.getElementById("forecastResults").innerHTML = forecast;
    //     });
});

// api key = d7a27a5e3092eef11596d153c373dea4b08e1065