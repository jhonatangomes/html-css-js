function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var hora = new Date()
    var h = hora.getHours()

    //var h = 1
    msg.innerHTML = `Agora são ${h} horas`
    if(h < 12) {
        img.src = 'foto/manhã.png'
        document.body.style.background = '#C6B98E'
    } else if (h <= 18) {
        img.src= 'foto/tarde.png'
        document.body.style.background = '#9C6859'
    } else {
        img.src = 'foto/noite.png'
        document.body.style.background = '#1A2626'
    }
}