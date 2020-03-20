
import Utils from '/utils.js';

let CONST = {
    DEFAULT_SECONDS: 30,
    BACKGROUND_START: 121 // we use HSLA this is equivalent to GREEN
}

let seconds_left = Utils.getId('remain');
let goal_remain            = Utils.getId('goal_remain');
let interval_made          = Utils.getId('intervals_made');
let right_panel            = document.getElementsByClassName('right-panel')[0]
let times_executed         = 0;
let counter;
let timerInterval;

window.startTimer = function(duration, display) {
    var timer = duration, minutes, seconds;
        timerInterval = setInterval( () => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = minutes + ":" + seconds;
        
        if ( --timer < 0 ) {
            clearInterval(timerInterval)
        }
    }, 1000);
}

window.calculate = function() {

    let minutes_input          = Utils.minutesToSecondsConverter( Number(Utils.getId('goal').value) );
    let seconds_input          = Number(Utils.getId('interval').value) || CONST.DEFAULT_SECONDS; // we are changing this value 
    let initial_interval       = Number(Utils.getId('interval').value);
    let background_ticks       = Math.floor( (CONST.BACKGROUND_START / seconds_input) ) // 
    let tick = 0;

    startTimer(minutes_input, goal_remain)

    counter = setInterval( () => {
        tick += background_ticks
        seconds_left.innerHTML = seconds_input--
        right_panel.style.background = `hsla(${CONST.BACKGROUND_START - tick}, 100%, 50%, 0.6)`

       if ( seconds_input == 0 ) {
          times_executed++;
          seconds_input = initial_interval || CONST.DEFAULT_SECONDS
          tick = 0;
       }
       interval_made.innerHTML = times_executed

       if ( --minutes_input == 0 ) {
          clearInterval(counter);
       }

    }, 1000);
 }
  
 window.stop = function() {
    clearInterval(counter);
    clearInterval(timerInterval);
 }

 window.reset = function() {

 }
