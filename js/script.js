//  Clock

setInterval(clock , 3000)

function clock(){
    let data = new Date()
    let hour = data.getHours()
    let minute = data.getMinutes()
    let second = data.getSeconds()
    let millisecond = data.getMilliseconds()
    if (second < 10) {
        second = `0${minute}`
    }
    document.getElementById('clock').innerHTML = `${hour}:${minute}:${second}:${millisecond}`
}