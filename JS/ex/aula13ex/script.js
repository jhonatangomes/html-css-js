function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = '' //string vazia
        var img = window.document.createElement('img')//colocando imagem
        img.setAttribute('id', 'foto') //criando id para ft


        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagem/criançaa.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/adulto.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem/idoso.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagem/criança.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/idosa.png')
            }
            
        }

        res.style.textAlign = 'center' //centralizar texto noi js
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}