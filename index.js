function updateTime() {
  //Rome
  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeElementDate = romeElement.querySelector(".date");
    let romeElementTime = romeElement.querySelector(".time");
    let romeTime = moment().tz("Europe/Rome");
    romeElementDate.innerHTML = romeTime.format("MMM Do YY");
    romeElementTime.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");
  }

  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonElementDate = londonElement.querySelector(".date");
    let londonElementTime = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonElementDate.innerHTML = londonTime.format("MMM Do YY");
    londonElementTime.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citySectionElement = document.querySelector("#citySection");
  citySectionElement.innerHTML = `
  <div class="cityDisplay" id="rome">
          <div class="blockOne">
            <h2>${cityName}</h2>
            <p class="date">${cityTime.format("MMM Do YY")}</p>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small>
        </div>
        </div>
  `;
}

updateTime();
/// setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#citySelection");
citySelectElement.addEventListener("change", updateCity);
