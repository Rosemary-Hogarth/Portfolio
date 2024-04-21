const weather= document.getElementById("weather");
let imageIndex = 0;
const images = ["images/weather.jpeg", "images/weather1.png", "images/weather2.png"];

function changeWeatherPic() {
  weather.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
}

weather.addEventListener("click", changeWeatherPic);




const icecream = document.getElementById("icecream");
const iceImages = ["images/icecream2.jpeg", "images/icecream2.png", "images/icecream1.png"];

function changeIcePic() {
  icecream.src = iceImages[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
}

icecream.addEventListener("click", changeIcePic);
