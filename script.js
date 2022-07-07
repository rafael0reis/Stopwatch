const counter = document.querySelector('#stopwatch-counter')

let sec = 0
let min = 0
let hrs = 0 

let auxCounter

const start = () => {
    auxCounter = setInterval(stopwatch, 1000)
}

const stop = () => {
    clearInterval(auxCounter)
}

const restart = () => {
    clearInterval(auxCounter)
    sec = min = hrs = 0
    counter.textContent='00:00:00'
}

const stopwatch = () => {
    sec++
    counter.textContent = 
    (hrs<10?'0'+hrs:hrs)
    +':'+
    (min<10?'0'+min:min)
    +':'+
    (sec<10?'0'+sec:sec)

    if(sec===60){
        sec=0
        min++
    }
    if(min===60){
        min=0
        hrs++
    }
}

document.querySelector('.start-btn').addEventListener('click', start)
document.querySelector('.stop-btn').addEventListener('click', stop)
document.querySelector('.restart-btn').addEventListener('click', restart)