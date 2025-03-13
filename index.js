import { projectData } from './data.js'



document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('projects-container');

  projectData.forEach((project, index) => {
    const isReversed = index % 2 !== 0; // alternate the order

    const projectElement = document.createElement("div");
    projectElement.classList.add("card", "mb-4");

    projectElement.innerHTML = `
      <div class="row">
        <!-- IMAGE COLUMN -->
        <div class="col-12 col-lg-6 ${isReversed ? "order-lg-2" : "order-lg-1"} text-center">
          <img src="${project.image}"
          class="img-fluid mt-4 project-img ${project.customClass ? project.customClass : ''}"
          alt="${project.name}"
          width="400"
          draggable="false"/>
        </div>

        <!-- TEXT COLUMN -->
        <div class="col-12 col-lg-6 ${isReversed ? "order-lg-1" : "order-lg-2"}">
          <div class="project-description-${index + 1}  mt-5 mr-5 ml-5">
            <h3 class="font-weight-light mb-3">${project.tools.join(" | ")}</h3>
            <h2 class="mb-4">${project.name}</h2>
            <p class="mb-5 text-muted description">${project.description}</p>
            <div class="mt-5">
              <a href="${project.link}" target="_blank" class="btn ${project.buttonClass}">View Project</a>
            </div>
          </div>
        </div>
      </div>
    `;

    // ✅ Append the project card to the container
    container.appendChild(projectElement);
  });
});


































// const weather = document.getElementById("weather");


// let weatherImageIndex = 0;
// const weatherImages = ["images/weather1.png", "images/weather2.png"];

// function changeWeatherPic() {
//     console.log("weather clicked");
//     weather.src = weatherImages[weatherImageIndex];
//     weatherImageIndex = (weatherImageIndex + 1) % weatherImages.length;
// }

// weather.addEventListener("click", changeWeatherPic);


// const icecream = document.querySelector("#icecream");
// console.log(icecream);

// let icecreamImageIndex = 0;
// const icecreamImages = ["images/icecream1.png", "images/icecream2.png"];

// function changeIcePic() {
//   icecream.src = icecreamImages[icecreamImageIndex];
//   icecreamImageIndex = (icecreamImageIndex + 1) % icecreamImages.length;
// }

// icecream.addEventListener("click", changeIcePic);
