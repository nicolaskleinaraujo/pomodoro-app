var countdown = document.querySelector('#countdown')
var audio = new Audio('external/files/timer-end-sound.mp3')
var duration = 0
var active = false
var pause = false
var list = document.querySelector('#todo-ul')

function timeFocus() {
    countdown.innerHTML = '25:00'
    duration = 25 * 60
}

function timeShort() {
    countdown.innerHTML = '05:00'
    duration = 5 * 60
}

function timeLong() {
    countdown.innerHTML = '15:00'
    duration = 15 * 60
}

function startTimer() {
    if (duration == 0) {
        window.alert('[ERRO] SELECIONE UMA DAS OPÇÕES ABAIXO ANTES DE INICIAR O TIMER!')
    } else {
        if (active == false) {
            active = true
            pause = false
            var timer = duration, min, sec
            var refreshTimer = setInterval(() => {
                if (pause == false) {
                    min = parseInt(timer / 60, 10)
                    sec = parseInt(timer % 60, 10)
                    min = min < 10 ? "0" + min : min
                    sec = sec < 10 ? "0" + sec : sec

                    countdown.textContent = min + ':' + sec

                    if (--timer < 0) {
                        clearInterval(refreshTimer)
                        audio.play()
                        duration = 0
                    }
                } else {
                    duration = timer
                }
            }, 1000)
        }
    }
}

function pauseTimer() {
    if (pause == false) {
        pause = true
        active = false
    } else {
        pause = false
    }
}

function addTask() {
    let inputTask = document.querySelector('#tasktxt')
    if (inputTask.value === '') {
        document.alert('[ERRO] Primeiro digite uma tarefa!')
    } else {
        let li = document.createElement('li')
        li.innerText = inputTask.value
        list.appendChild(li)
        inputTask.value = ''
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
}

list.addEventListener('click', function(d){
    if (d.target.tagName === 'SPAN') {
        d.target.parentElement.remove()
    }
})