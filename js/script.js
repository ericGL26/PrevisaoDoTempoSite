var textohumidade = document.getElementById("texto-humidade");
var textopressao = document.getElementById("texto-pressao");
var tempmax = document.getElementById("texto-tempmax");
var tempmin = document.getElementById("texto-tempmin");
var temp = document.getElementById("texto-temp");
var climaseu = document.getElementById("clima-ceu")
var solnas = document.getElementById("sol-nas")
var porsol = document.getElementById("sol-por")
var icontempo = document.getElementById("icon_tempo")
var velocidadevento = document.getElementById("speed-wind")
//parte de cima estou pegando do index.html
var latitude = "";
var longitude = "";
var apikey = "87c6a1998077b4d3c33f269528d3d382";

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  
     fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&units=metric" +
        "&appid=" +
        apikey +
        "&lang=pt_br"
    )
      .then((res) => res.json())
      .then((data) => {
        //humidade
        textohumidade.innerText = data.main.humidity + '%'
        //pressao
        textopressao.innerText = data.main.pressure + ' Pa (pascal)'
        //tempmax
        tempmax.innerText = data.main.temp_max + '°C'
        //tempmin
        tempmin.innerText = data.main.temp_min + '°C'
        //temp
        temp.innerText = data.main.temp + '°C'
        //clima ceu
        climaseu.innerText = data.weather[0].description
        console.log(data.weather[0].description)
        //sol nascer
        var timestamp = data.sys.sunrise
        var date = new Date(timestamp * 1000)
        var horas = date.getHours();
        solnas.innerText = horas + ' horas'
        //solpor
        var timestamp = data.sys.sunset
        var date = new Date(timestamp * 1000)
        var horas = date.getHours();
        porsol.innerText = horas + ' horas'
        //speedwind
        velocidadevento.innerText = data.wind.speed + ' Km/h'
        //icontempo

        var codicon = data.weather[0].icon
        console.log(codicon)
        if (codicon === "01d") {
          icontempo.src = "o1d.png"
        }
        
        if (codicon === "02d") {
          icontempo.src = "o2d.png"
        }

        if (codicon === "03d") {
          icontempo.src = "03d.png"
        }

        if (codicon === "04d") {
          icontempo.src = "04d.png"
        }

        if (codicon === "09d") {
          icontempo.src = "09d.png"
        }

        if (codicon === "10d") {
          icontempo.src = "10d.png"
        }

        if (codicon === "11d") {
          icontempo.src = "11d.png"
        }

        if (codicon === "13d") {
          icontempo.src = "13d.png"
        }

        if (codicon === "50d") {
          icontempo.src = "50d.png"
        }
      });
  }

navigator.geolocation.getCurrentPosition((position) => {
    showPosition(position)
});

//44f99afd88ef38a05b37afac9ee0966e
//-15.95245, -48.28279https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
