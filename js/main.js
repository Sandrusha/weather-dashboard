const weatherDay = [
    {day: "1", overall: "sunny", morning: {temp: "24", hum: "36", wind: "6"}, noon: {temp: "23", hum: "28", wind: "8"}, evening: {temp: "18", hum: "25", wind: "8"}},
    {day: "2", overall: "cloudy", morning: {temp: "20", hum: "73", wind: "19"}, noon: {temp: "22", hum: "71", wind: "15"}, evening: {temp: "18", hum: "68", wind: "15"}},
    {day: "3", overall: "mostly cloudy", morning: {temp: "22", hum: "70", wind: "14"}, noon: {temp: "25", hum: "73", wind: "16"}, evening: {temp: "18", hum: "70", wind: "13"}},
    {day: "4", overall: "showers", morning: {temp: "24", hum: "70", wind: "11"}, noon: {temp: "24", hum: "73", wind: "10"}, evening: {temp: "21", hum: "68", wind: "13"}},
    {day: "5", overall: "scattered showers", morning: {temp: "22", hum: "66", wind: "14"}, noon: {temp: "24", hum: "71", wind: "16"}, evening: {temp: "18", hum: "67", wind: "17"}},
    {day: "6", overall: "partly cloudy", morning: {temp: "22", hum: "53", wind: "13"}, noon: {temp: "23", hum: "58", wind: "14"}, evening: {temp: "20", hum: "55", wind: "10"}},
    {day: "7", overall: "partly cloudy", morning: {temp: "24", hum: "51", wind: "11"}, noon: {temp: "24", hum: "50", wind: "12"}, evening: {temp: "19", hum: "53", wind: "16"}}
]

document.addEventListener("DOMContentLoaded", function(){
    for (i = 0; i < weatherDay.length; i++) {
        var weather = weatherDay[i];

        addWeatherDay(weather);
    }
})

function addWeatherDay(weather){
    var weatherTable = document.getElementById("weatherTable");
    //Weather Box:
    var weatherDayBox = document.createElement("div");
    var weatherDayTitle = document.createElement("span");
    weatherDayTitle.innerHTML = "Day" + " " + weather.day;
    var weatherDayThumbnail = document.createElement("img");
    switch(weather.overall) {
        case "sunny":
            // src = './images/sunny.png';
            src = 'http://wip.2mo.ro/sandra/homework01/images/sunny.png';
            break;
        case "cloudy":
            // src = './images/cloudy.png';
            src = 'http://wip.2mo.ro/sandra/homework01/images/cloudy.png'
            break;
        case "mostly cloudy":
            // src = './images/mostly-cloudy.png';
            src = 'http://wip.2mo.ro/sandra/homework01/images/mostly-cloudy.png'
            break;
        case "showers":
            // src = './images/showers.png';
            src = 'http://wip.2mo.ro/sandra/homework01/images/showers.png';
            break;
        case "scattered showers":
            // src = './images/scattered-showers.png';
            src = 'http://wip.2mo.ro/sandra/homework01/images/scattered-showers.png';
            break;
        case "partly cloudy":
            // src = './images/partly-cloudy.png';
            src = 'http://wip.2mo.ro/sandra/homework01/images/partly-cloudy.png';
            break;
        default:
            src = './images/sunny.png';
    }
    weatherDayThumbnail.setAttribute('src', src);
    weatherDayBox.appendChild(weatherDayTitle);
    weatherDayBox.appendChild(weatherDayThumbnail);
    //Details Box for Morning, Noon and Evening
    weatherDetailsBox = document.createElement("div");
    weatherDayBox.appendChild(weatherDetailsBox);
    //Morning:
    var morningWeather = document.createElement("div");
    var morningWeatherTitle = document.createElement("span");
    morningWeatherTitle.innerHTML = "Morning";
    morningWeather.appendChild(morningWeatherTitle);
    weatherDetailsBox.appendChild(morningWeather);
    var morningWeatherDetails = document.createElement("div");
    morningWeatherDetails.innerHTML = "Temperature: " + weather.morning.temp + " &#176" + "C" + "<br />" + "Humidity: " + weather.morning.hum + " %" + "<br/>" + "Wind: " + weather.morning.wind + " km/h";
    morningWeather.appendChild(morningWeatherDetails);
    //Noon
    var noonWeather = document.createElement("div");
    var noonWeatherTitle = document.createElement("span");
    noonWeatherTitle.innerHTML = "Noon";
    noonWeather.appendChild(noonWeatherTitle);
    weatherDetailsBox.appendChild(noonWeather);
    var noonWeatherDetails = document.createElement("div");
    noonWeatherDetails.innerHTML = "Temperature: " + weather.noon.temp + " &#176" + "C" + "<br />" + "Humidity: " + weather.noon.hum + " %" + "<br/>" + "Wind: " + weather.noon.wind + " km/h";
    noonWeather.appendChild(noonWeatherDetails);
    //Evening
    var eveningWeather = document.createElement("div");
    var eveningWeatherTitle = document.createElement("span");
    eveningWeatherTitle.innerHTML = "Evening";
    eveningWeather.appendChild(eveningWeatherTitle);
    weatherDetailsBox.appendChild(eveningWeather);
    var eveningWeatherDetails = document.createElement("div");
    eveningWeatherDetails.innerHTML = "Temperature: " + weather.evening.temp + " &#176" + "C" + "<br />" + "Humidity: " + weather.evening.hum + " %" + "<br/>" + "Wind: " + weather.evening.wind + " km/h";
    eveningWeather.appendChild(eveningWeatherDetails);



    weatherTable.appendChild(weatherDayBox);
}