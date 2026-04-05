let listacores = ['yellow', 'blue', 'green', 'pink']

function trocarCores(/* Esse parênteses serveria para chamar informações externas, mas como não é o caso, ficará vazio.*/) {
    document.body.style.backgroundColor = listacores[Math.floor (5*Math.random())]
    /*math.floor é a função piso. Assim, aqui estou descrevendo o piso de 5 vezes um número random entre 0 e 1. Logo, o resultado sempre será inteiro e entre 0 e 4.*/
}

setInterval(trocarCores, 5000);
/*Isso daqui vai criar um intervalo. A cada 500ms, ele vai criar um intervalo, porém, como está definido para definir um intervalo para trocarCores, então o trocarCores, que é uma função, vai ser realizada a cada 500ms.*/