let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let cast = document.getElementById("cast");

let ms = document.getElementById("ms");
let sec = document.getElementById("sec");
let mins = document.getElementById("mins");
let hr = document.getElementById("hr");
let casting = document.getElementById("casting");

let timer = document.getElementById("timer");

start.addEventListener("click", (e) => {
  let millisec = 0;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let res = setInterval(() => {
    if (millisec > 999) {
      ms.innerHTML = `<span id="ms">0 0 0</span>`;
      millisec = 0;
      seconds += 1;
      sec.innerHTML = `<span id="sec">${seconds} </span>`;

      if (seconds > 59) {
        seconds = 0;
        minutes += 1;
        mins.innerHTML = `<span id="mins">${minutes} </span>`;
        sec.innerHTML = `<span id="sec">${seconds} </span>`;
      }

      if (minutes > 59) {
        seconds = 0;
        minutes = 0;
        hours += 1;
        hr.innerHTML = `<span id="mins">${hours} </span>`;
        mins.innerHTML = `<span id="mins">${minutes} </span>`;
        sec.innerHTML = `<span id="sec">${seconds} </span>`;
      }
    }

    millisec += 1;
    ms.innerText = millisec;
  }, 1);

  pause.addEventListener("click", () => {
    clearInterval(res);
  });
});

let click = 0;
cast.addEventListener("click", (e) => {
  let curr_ms = ms.innerText;
  let curr_sec = sec.innerText;
  let curr_mins = mins.innerText;
  let curr_hr = hr.innerText;
  click += 1;

  casting.innerHTML += `
CAST ${click} : <span id="hr" class="w-20 text-center"> ${curr_hr} </span> &nbsp; :
&nbsp; <span id="mins" class="w-20 text-center"> ${curr_mins}</span> &nbsp;:
&nbsp;<span class="w-20 text-center" id="sec"> ${curr_sec} </span>&nbsp; :
&nbsp;<span id="ms" class="w-28 text-center"> ${curr_ms}</span> <br>`;
});

reset.addEventListener("click", () => {
  timer.innerHTML = `
    <span id="hr" class="w-20 text-center"> 0 0 </span> &nbsp; : &nbsp;
      <span id="mins" class="w-20 text-center">0 0</span> &nbsp;: &nbsp;<span
        class="w-20 text-center"
        id="sec"
        >0 0 </span
      >&nbsp; : &nbsp;<span id="ms" class="w-28 text-center">0 0 0</span>`;

  casting.innerHTML = ``;
});
