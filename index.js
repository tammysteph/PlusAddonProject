function updateTime() {
  // Local Time
  let localTimeElement = document.querySelector("#localTime");
  if (localTimeElement) {
    let localTimeElementDate = localTimeElement.querySelector(".date");
    let localTimeElementTime = localTimeElement.querySelector(".time");
    let localTimeZone = moment.tz.guess();
    let localTimeTime = moment().tz(localTimeZone);
    localTimeElementDate.innerHTML = localTimeTime.format("MMM Do YY");
    localTimeElementTime.innerHTML = localTimeTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoElementDate = tokyoElement.querySelector(".date");
    let tokyoElementTime = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoElementDate.innerHTML = tokyoTime.format("MMM Do YY");
    tokyoElementTime.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
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
  <div class="cityDisplay" id="cityDisplay">
          <div class="blockOne">
            <h2>${cityName}</h2>
            <p class="date">${cityTime.format("MMM Do YY")}</p>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small>
        </div>
        </div>
    <a href="index.html" class="backLink">Back to All Cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#citySelection");
citySelectElement.addEventListener("change", updateCity);
