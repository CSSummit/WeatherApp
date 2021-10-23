(() => {
    const MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  
    const DAYS = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
  
    const todayWidget = document.getElementById('widget_todayis');
    //const timeWidget = document.getElementById('widget_hours');
  
    const currentDate = new Date();
    const monthText = MONTHS[currentDate.getMonth()];
    const dayText = DAYS[currentDate.getDay()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    todayWidget.innerText = `${dayText} | ${monthText} ${date}, ${year}`;
  
    /*setInterval(() => {
      let timeTracker = new Date();
      let hours = timeTracker.getHours().toString().padStart(2, '0');
      let minutes = timeTracker.getMinutes().toString().padStart(2, '0');
      let seconds = timeTracker.getSeconds().toString().padStart(2, '0');
  
      timeWidget.innerText = `${hours}:${minutes}:${seconds}`;
    }, 1000);*/
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23     
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
    if(h == 0){
        h = 12;
    }
      
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
      
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
      
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("newclock").innerText = time;
    document.getElementById("newclock").textContent = time;
    
    setTimeout(showTime, 1000);      
}
showTime();      
    ////////////////////////////////////////////////////////////////////////////////////////// 
  const iconElement = document.querySelector(".weather-icon");
  const weather = {};
  const api =`https://api.openweathermap.org/data/2.5/weather?lat=14.8872&lon=120.8572&appid=473175a60740e528b5d029f84f3e6992`;
  
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".degree");
  let locationTimezone = document.querySelector(".location-timezone");

    fetch(api)
      .then(response => {
        return response.json(); })
      .then(data => {
        console.log(data.weather[0].icon)
        const {temp} = data.main;
        const {description} = data.weather[0]; 
        temperatureDescription.textContent = description;
        temperatureDegree.textContent = Math.floor(temp - 273.15);
        locationTimezone.textContent = data.name;
        weather.iconID = data.weather[0].icon;
      })
      .then(function(){
        displayWeather();
      });
})();

function displayWeather(){
  iconElement.innerHTML = `<img src="icons/${weather.iconID}.png/">`;
}