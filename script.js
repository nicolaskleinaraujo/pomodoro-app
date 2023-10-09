var countdown = document.querySelector('#countdown')
var duration = 0

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
        var timer = duration, min, sec
        setInterval(() => {
            min = parseInt(timer / 60, 10)
            sec = parseInt(timer % 60, 10)
            min = min < 10 ? "0" + min : min
            sec = sec < 10 ? "0" + sec : sec

            countdown.textContent = min + ':' + sec

            if (--timer < 0) {
                timeShort()
            }
        }, 1000)
    }
}