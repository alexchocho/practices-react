function getTime() {
    let timeNow = new Date()
    let horas = timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours()
    let minutos = timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes()
    let segundos = timeNow.getSeconds().toString().length < 2 ? "0" + timeNow.getSeconds() : timeNow.getSeconds()

    return ({
        horas,
        minutos,
        segundos
    })
}

export default getTime