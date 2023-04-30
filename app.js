/*
const api = {
    key: "fd12985ac56760dbc750f0c190ccb314",
    base: "https"//api.openweather.org/data.2.5/*"
}

const searchbox =document.querySelectorAll('search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(any){
    if(any.keyCode == 13){
        getResult(searchbox.value);

    }
}

function getResult (query) {
    fetch($(api.base)weather?q=(query)$units==metric)
}
*/

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    getResult(searchbox.value);
  }
}

function getResult(query) {
  const api = {
    base: 'https://api.openweathermap.org/data/2.5/',
    key: 'fd12985ac56760dbc750f0c190ccb314'
  };

  fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const city = document.querySelector('.city');
      city.textContent = data.name + ', ' + data.sys.country;

      const dataNow = new Date();
      const dataDate = document.querySelector('.data');
      dataDate.textContent = dataNow.toLocaleDateString();

      const temp = document.querySelector('.temp span');
      temp.textContent = data.main.temp;

      const weather = document.querySelector('.weather');
      weather.textContent = data.weather[0].main;

      const hilow = document.querySelector('.hi-low');
      hilow.textContent = data.main.temp_min + 'C / ' + data.main.temp_max + 'C';
    })
    .catch(error => {
      console.error('There was an error:', error);
    });
}
