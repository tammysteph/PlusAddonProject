function updateTime() {
  //Rome
  let romeElement = document.querySelector("#rome");
  let romeElementDate = romeElement.querySelector(".date");
  let romeElementTime = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");
  romeElementDate.innerHTML = romeTime.format("MMM Do YY");
  romeElementTime.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");

  //London
  let londonElement = document.querySelector("#london");
  let londonElementDate = londonElement.querySelector(".date");
  let londonElementTime = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonElementDate.innerHTML = londonTime.format("MMM Do YY");
  londonElementTime.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
