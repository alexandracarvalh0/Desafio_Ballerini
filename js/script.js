/* DESAFIO 1 */

function confirmar(){

    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value
    var skill = document.getElementById('skill').value
    var resultado = document.getElementById('resultado')

    //Caso o campo nao seja preenchido
    if(nome == "" || idade == "" || skill == ""){
        resultado.innerHTML = 'Preencha o campo em falta'
    } else {
        //Escreve o texto
        resultado.innerHTML = `Prazer em conhecer-te ${nome}, tens ${idade} anos, estás a aprender ${skill}. <br> Parabéns pela tua dedicação!`
    }
}

/* DESAFIO 2 */

function calcular(){

    var troco = document.getElementById('troco').value
    var um = 0
    var cinq = 0
    var cinc = 0
    var trocoresto = Number(troco)

    while(trocoresto > 0){
            trocoresto = trocoresto.toFixed(2)
            trocoresto = Number.parseFloat(trocoresto)
        if(trocoresto>=1){
            trocoresto -= trocoresto % 1
            um = trocoresto / 1
            trocoresto = troco - trocoresto
        }else if(trocoresto >= 0.5){
            trocoresto -= trocoresto % 0.5
            cinq = trocoresto / 0.5
            trocoresto = troco-trocoresto-um
        }else{
            var resto = trocoresto%0.05
            trocoresto -= trocoresto % 0.05
            resto >= 0.03 ? trocoresto += 0.05 : trocoresto += 0
            cinc = trocoresto / 0.05
            trocoresto -= cinc
    }
    var res = document.getElementById('res')
    res.innerHTML = `A quantidade minima de moedas a serem recebidas sao ${um+cinq+cinc}, sendo ${um} de 1 real, ${cinq} de 50 centavos e ${cinc} de cinco centavos`
    }
}

/* DESAFIO 3 */

function enviar(){

    var frase = document.getElementById('frase').value
    var fraseFormatada = frase.replace(/[^\w\d]/g,"")
    fraseFormatada = frase.split(" ").length
    var arrayFrase = frase.split(".")

    for(i in arrayFrase){
        if(arrayFrase[i] == ""){
            arrayFrase.splice(i,i)
        }
    }

    arrayFrase = arrayFrase.length
    var letras = frase

    for(i in frase){
        letras = letras.replace(/[^\w]/g,"")
    }
    letras = letras.length
    var res = document.querySelector("#res")
    res.innerHTML = `Esse paragrafo tem ${letras} letras, ${fraseFormatada} palavras, e ${arrayFrase} frases.<br>`

}
