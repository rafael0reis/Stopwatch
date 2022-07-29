const counter = document.querySelector('#stopwatch-counter')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')

let sec = 0
let min = 0
let hrs = 0 

let auxCounter

const start = () => {
    auxCounter = setInterval(stopwatch, 1000)
    startBtn.style.display = 'none'
    stopBtn.style.display = 'inline-block'

}

const stop = () => {
    clearInterval(auxCounter)
    stopBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
}

const restart = () => {
    clearInterval(auxCounter)
    sec = min = hrs = 0
    counter.textContent='00:00:00'
    startBtn.style.display = 'inline-block'
    stopBtn.style.display = 'inline-block'
}

const stopwatch = () => {
    sec++
    if(sec>59){
        sec=0
        min++
    }
    if(min>59){
        min=0
        hrs++
    }
    counter.textContent = 
    (hrs<10?'0'+hrs:hrs)
    +':'+
    (min<10?'0'+min:min)
    +':'+
    (sec<10?'0'+sec:sec)
}

document.querySelector('.start-btn').addEventListener('click', start)
document.querySelector('.stop-btn').addEventListener('click', stop)
document.querySelector('.restart-btn').addEventListener('click', restart)