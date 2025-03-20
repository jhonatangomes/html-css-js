/*
var a = 2
var b = 3
var c = a + b

// DECLARAÇÃO DE VARIÁVEIS

var a, b, x

//ATRIBUIÇÃO DE VALORES
a = 6
b = 3
c = a + b
let res = document.getElementById('res')

res.innerHTML = `O resultado é ${c}`


var nome, sobreNomes, nomeCompleto;

nome = 'JHON';
sobreNomes = 'Gomes';
nomeCompleto = nome +' ' + sobreNomes;

document.getElementById('res')
res.innerHTML = `Seu nome completo é ${nomeCompleto}`
*/

var nome = document.getElementById('nome')
var sobreN = document.querySelector('input#sobreN')
var res = document.querySelector('div#res')


function salvar() {
    if (nome.value.length == 0 || sobreN.value.length == 0){
        res.innerHTML = `Impossivel salvar`
    } else {
        res.innerHTML = `Arquivo salvo`      
    }
    nome.value = ''
    sobreN.value = '' //limpar arquivo
}


// IF E ELSE

//var interruptor = document.getElementById('interruptor')
var resposta = document.getElementById('resposta')

var interruptor = 'on';

if (interruptor == 'on') {
    resposta.innerHTML = 'A lâmpada está ligada'
}   else {
    resposta.innerHTML = 'A lâmpada está desligada'
}

// IF E ELSE 2

function verificar() {
    var nome = document.getElementById('nomes').value
    var teste = document.getElementById('teste')
    if(nome == '' || nome == null) {
        teste.innerHTML = '*O campo não pode ser vázio'
        teste.style.color = 'red'
    } else {
        teste.innerHTML = '*Parabéns'
        teste.style.color = 'green'
    }

}


//Switch



function verificaCor(){
    let cor = document.getElementById('cor').value
    let txt = document.getElementById('test')
    cor = cor.toLowerCase(); // TRANSFORMANDO LETRAS EM MAIÚSCULO
    switch(cor) {
        case 'azul':
            txt.style.background = 'blue';
            break;
        case 'vermelho':
            txt.style.background = 'red';
            break;
        case 'amarelo':
            txt.style.background = 'yellow';
            break;
            default:
                txt.innerHTML =  "Nenhuma cor disponível para " + cor;
    }
   
}

//Switch Dia da Semana

function diaDaSemana(){
    var dia = new Date().getDay();
    let txte = document.getElementById('testee')
    
    console.log(dia);

    switch(dia) {
        case 0:
            txte.innerHTML = 'Hoje é Domingo'
            break;
        case 1:
            txte.innerHTML = 'Hoje é Segunda'
            break;
        case 2:
            txte.innerHTML = 'Hoje é Terça'
            break;
        case 3:
            txte.innerHTML = 'Hoje é Quarta'
            break;
        case 4:
            txte.innerHTML = 'Hoje é Quinta'
            break;
        case 5:
            txte.innerHTML = 'Hoje é Sexta'
            break;
        case 6:
            txte.innerHTML = 'Hoje é Sábado'
            break;
            default:
                txte.innerHTML =  "Não sei que dia é... ";
    }
   
}


//LACOS DE REPETIÇÕES FOR
/*
for(let i = 0; i< 10; i ++) {
    res.innerHTML += i + ', '
}
*/
var ano = new Date().getFullYear();

for(let i = ano; i > 1900; i --) {
    var ano = document.getElementById("ano");
    ano.innerHTML += "<option value='" + i + "'>" + i + "</option>";
}



//EVENTO DE TEMPO setTimeout

function ativarContagem(){
    //setTimeout

   /* var tempo = document.getElementById('tempo')
    tempo.innerHTML = 'Começou a Contar!'
    //ATIVA A FUNÇÃO APENAS UMA VEZ QUANDO TEMPO FOR ESPECIFICADO
    tempo = setTimeout(function(){
        tempo.innerHTML = 'Executou o setTimeout'
    }, 5000)*/

    //setInterval

    tempo = setInterval(function () {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;

        if (soma === 0) {
            document.getElementById('tempo').innerHTML = "Tempo esgotado";
            pararContagem();
        } else {
            document.getElementById('tempo').innerHTML = soma;
        }

    }, 1000);

}

function pararContagem() {
   /* clearTimeout (tempo)
    tempo.innerHTML = 'Parou a Contagem'*/


    clearInterval (tempo)
}

//JSON OBJETO CARRO

const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2001
}
 //CONVERTEU PARA TEXTO JSON
let texto = JSON.stringify(carro);
//COLOCOU O TEXTO PARA O HTML
document.getElementById('area').innerHTML = texto;

//CONVERTEMOS TEXTO PARA OBJETO
let obj = JSON.parse(texto);
//PEGAMOS UM VALOR DESTE OBJETO
console.log(obj.modelo)

