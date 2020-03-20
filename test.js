// Napravi vsichki id-ta koito sa ot HTML i sa sustaveni ot 2 dumi da sa s '-' v sluchaq imame samo 1 'interval-span'
// Promenlivite koito deklarirash i sa ot 2 dumi '_' primer 'get_interval'
// Metodite da sa s Camelcase v sluchaq nqmash takuv no po princip primerno ako metoda start() beshe nesho ot 2 dumi da stane startCount()

// Gornite style guides sa varirashti za vsqka firma no e hubavo da se spazvat nqkakvi za po lesno chetene na koda

//Ot sega ti vrushtam koda ako ne e po style guidovete


// let getInterval = document.getElementById("interval").value; 

// Tova za sega raboti no ako mahnem ot inputa attributa value i ovisva za da imame dostup do valuoto koeto vuvejdame v inputa trqbva da e deklarirano vuv funkciq
// let getGoal = document.getElementById("goal").value; 

// Tova sushto 
let intervalSpan = document.getElementById("intervalSpan");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

let startButtonPressed; // tova e izlishno 
let timerFinished; // tova e izlishno

startButton.onclick = function() {
    //    interval = setInterval(start, 1000); 
    start()
    startButton.disabled = true;
    stopButton.disabled = false;
}
let currentInterval = getInterval;
let initialGoal = getGoal;
let getGoalSeconds = getGoal * 60;
let getGoalMinutes = getGoal;
let interval;


function start() {

    let getInterval = document.getElementById("interval").value; 
    let getGoal = document.getElementById("goal").value; 

    interval = setInterval(() => {
    // currentInterval = currentInterval - 1; 
    // intervalSpan.innerHTML = currentInterval;

   // Gornite 2 reda mojesh da gi izpishesh s 1 red
   intervalSpan.innerHTML = currentInterval--;

        if ( currentInterval == 0 ) {
            getGoalSeconds = getGoalSeconds - getInterval;
            getGoalMinutes = getGoalSeconds / 60;
            document.getElementById("goal").value = Math.floor(getGoalMinutes); 
            currentInterval = getInterval;
            if (getGoalMinutes <= 0 ) {
                clearInterval(interval);
                console.log("Timer has finished!"); 
                startButton.disabled = false;
                getGoal = initialGoal;
                getGoalSeconds = getGoal * 60;
                getGoalMinutes = getGoal;
                document.getElementById("goal").value = getGoal;
                timerFinished = true;
                stopButton.disabled = true;
            }

        }
    }, 1000)
}
function stop() {
    clearInterval(interval);
}