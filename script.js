//variables

let seconds = 0;
let minutes = 0;
let hours = 0;

//display value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//interval function
let interval = null;

//var stopwatch status
let status = "stopped";

//function, increment logic

function stopWatch(){

    seconds ++;

    //increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }  

//leading 0
if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
}
else {
    displaySeconds = seconds;
}

if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
}
else {
    displayMinutes = minutes;
}

if (hours < 10) {
    displayHours = "0" + hours.toString();
}
else {
    displayHours = hours;
}


    //display updated time values
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}



function startStop() {

    if(status === "stopped") {

        //start by calling setintervalfunction
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    } else {

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
    
}

//reset function
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}