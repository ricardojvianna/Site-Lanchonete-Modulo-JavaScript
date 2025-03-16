// PARTE DO MOSTRAR TUDO COM O FOREACH
let list = document.querySelector("ul");
const buttonMostrarTudo = document.querySelector(".button-forEach")
const buttonMapearTudo = document.querySelector(".button-map")
const buttonSomarTudo = document.querySelector(".button-reduce")
const buttonFiltrarTudo = document.querySelector(".button-filter")

// FUNÇÃO QUE FORMATa A MOEDA PARA REAL
function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}


let myList = ''
function mostrarTudo(newArray) {
    myList = '' // tem que esvaziar a variável, antes de add os items na tela, para não ter repetição
    // toda vez que for enviado um novo Array de alguma função, ele vai 
    // receber aqui, aplicar o forEach em cada elemento do Array e mostrar na tela
    // toda vez que ela (function) for chamada, ela " PRECISA ", receber  alguma informação
    newArray.forEach((products) => {
        myList = myList +
            `
            <li>
                <img src="${products.src}">
                <p>${products.name}</p>
                <p class="color-price">${formatCurrency(products.price)}</p>
            </li>

        `
    })

    list.innerHTML = myList
}

/*function mostrarTudo() {
    menuOptions.forEach((products) => {
        myList = myList +
        `
            <li>
                <img src="${products.src}">
                <p>${products.name}</p>
                <p class="color-price">R$${(products.price).toFixed(2)}</p>
            </li>

        `
    })

    list.innerHTML = myList
}
*/


// PARTE DO MAPEAR COM O MAP - VAI DAR UM DESCONTO DE 10% NO VALOR DOS LANCHES
function mapearTudo() {

    const newPrices = menuOptions.map(({ name, price, vegan, src }) => ({ // DESESTRUTURAÇÃO
        name,
        price: price * 0.9,
        vegan,
        src
    }))

    mostrarTudo(newPrices) // está mandando o novo array com o desconto para ser exibido na tela
    // do mostrarTudo()

}

// PARTE DO SOMAR TUDO COM O REDUCE 
function somarTudo() {

    const addTudo = menuOptions.reduce((acc, current) => acc + current.price, 0)

    list.innerHTML =
        `
            <li class="reduce-total">
                <img class="reduce-img" src="./img/xtudo-valor-total.png">
                <p>O valor total dos lanches é de:</p>
                <p class="color-price">${formatCurrency(addTudo)}</p>
            </li>
        `

}

// PARTE DO FILTRAR COM O FILTER

function filtrarTudo() {

    const find = menuOptions.filter((current) => current.vegan === true)
    
    mostrarTudo(find)

}


/* Outra maneira de mapear o array menuOptins

function mapearTudo() {

    const newPrices = menuOptions.map((product) => ({
        name: product.name,
        price: product.price * 0.9, 
        vegan: product.vegan,
        src: product.src
    }))
}

*/

/*  << Spread Operator >> ( ... ) = Ele esparrama todas as informações, o que não mudou continua 
como está e o que vai ser mudado ele altera e armazena na variável. 

function mapearTudo() {

    const newPrices = menuOptions.map((product) => ({
        ...product, --> ele vai jogar todos os itens dos objetos do Array
        price: product.price * 0.9, 
       
    }))

     newPrices.forEach((products) => {  aqui faria imprimir na tela, mas fica redundâcia de código
        myList = myList +
        `
            <li>
                <img src="${products.src}">
                <p>${products.name}</p>
                <p class="color-price">R$${(products.price).toFixed(2)}</p>
            </li>

        `
    })

    list.innerHTML = myList
}
    
*/

buttonMostrarTudo.addEventListener('click', () => mostrarTudo(menuOptions))
//está mandando o conteúdo do arrayOriginal para a função mostrarTudo, essa questão de usar uma 
// função anônima, tem que ser dentro de um addEventListener
buttonMapearTudo.addEventListener('click', mapearTudo)
//quando a função não tem o (), ele não executa ja de uma vez.
buttonSomarTudo.addEventListener('click', somarTudo)
buttonFiltrarTudo.addEventListener('click',filtrarTudo)


/*

Quando uma função tem () na frente, ele já chama na hora, para evitar isso tem que colocar uma
arrow function antes do nome da função, assim:  () => mostrarTudo(menuOptions)

*/