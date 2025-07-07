function contar(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')
    //var c = inicio
    if (inicio.value.length == 0 || fim.value.length == 0){
        alert ('[ERRO] Faltam dados!')   
    } else {
        res.innerHTML = 'Contando:...<br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p == 0){
            var p = 1
        }
        for(c = i; c <= f; c += p){
            res.innerHTML += `${c} `
        }
        for (c = i; c >= f; c -= p){
            res.innerHTML += `${c} `
        }
        //https://jsfiddle.net/
        // res.innerHTML += 
    }



    /*while(c <= fim){
        res.innerHTML += `${c} `
        c = Number(c) + Number(passo.value)
    }*/
}