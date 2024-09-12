const weather = document.getElementById("weather");


let weatherImageIndex = 0;
const weatherImages = ["images/weather1.png", "images/weather2.png"];

function changeWeatherPic() {
    console.log("weather clicked");
    weather.src = weatherImages[weatherImageIndex];
    weatherImageIndex = (weatherImageIndex + 1) % weatherImages.length;
}

weather.addEventListener("click", changeWeatherPic);



  const icecream = document.querySelector("#icecream");
  console.log(icecream);

  let icecreamImageIndex = 0;
  const icecreamImages = ["images/icecream1.png", "images/icecream2.png"];

  function changeIcePic() {
    icecream.src = icecreamImages[icecreamImageIndex];
    icecreamImageIndex = (icecreamImageIndex + 1) % icecreamImages.length;
  }

  icecream.addEventListener("click", changeIcePic);
