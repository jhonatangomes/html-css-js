function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagens')
    var data = new Date()
    var hora = data.getHours()

   //var hora = 19 // colocar a hr


    msg.innerHTML = `Agora são ${hora} hora.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.scr = ' imagens/manhã.png'
        document.body.style.background = '#ece2d0ff'
        foto.innerHTML += 'Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#fdcea6ff'
        foto.innerHTML += 'Boa tarde!'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = '#14201cff'
        foto.innerHTML += 'Boa noite!'
    }
}

