function exibirValor() {
    const valores = document.getElementById("inputValor2") // Obtém o valor do input
    const valor = document.getElementById("inputValor").value; // Obtém o valor do input
    n = Number(valores.value)
    m = Number(valor)
    soma = (n + m) / 2
    //somad = n + m
    document.getElementById("saida").textContent = soma; // Exibe no parágrafo
    
}