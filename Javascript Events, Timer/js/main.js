var start = document.querySelector('.start');
start.addEventListener('click',startPause);
var timer = document.querySelector('.timer');
var clear = document.querySelector('.clear');
clear.addEventListener('click',reset);

var running = 0;
var time = 0;
var timerId;

function startPause(){
    if(running == 0){
        timerId = setInterval(function () {
            time++;
            var msec = time%100;
            if(msec<10){msec = '0'+ msec}

            var sec = Math.floor(time/100)%60;
            if(sec<10){sec = '0'+sec}

            var min = Math.floor(time/6000)%60;
            if(min<10){min = '0'+min}

            var hours = Math.floor(time/360000)%24;
            if(hours<10){hours = '0'+hours}

            timer.innerHTML = hours + ":" + min + ":" + sec + ":" + msec;
        },10);
        running = 1;
        start.innerHTML = "Pause";
    }
    else{
        clearInterval(timerId);
        running = 0;
        start.innerHTML = 'Resume';
    }
}
function reset(){
    clearInterval(timerId);
    running = 0;
    time = 0;
    timer.innerHTML = '00:00:00:00';
    start.innerHTML = 'Start';
}
