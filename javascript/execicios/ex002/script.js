function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagem/criança.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagem/adulto.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagem/homem.png')
            } else {
                img.setAttribute('src', 'imagem/idoso.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagem/criançaa.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagem/adulta.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagem/mulher.png')
            } else {
                img.setAttribute('src', 'imagem/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        //res.style.background = 'green'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}