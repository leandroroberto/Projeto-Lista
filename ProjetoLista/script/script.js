function removerItem(button) {
    let remove = button.parentNode
    document.getElementById("lista-produtos").removeChild(remove)

}

function limparLista() {
    document.getElementById("lista-produtos").innerHTML = ""
    document.getElementById("lista-produtos").innerText = "...Lista vazia"
}


function limparUl() {
    if (document.getElementById("lista-produtos").innerText == "...LISTA VAZIA") {
        document.getElementById("lista-produtos").innerText = ""
    }
}


function adicionarProduto() {

    // Chamar função de limpar

    limparUl()
    
    // Cria o objeto e personaliza

    let produto = document.querySelector("input[name='produto']").value
    let novaLista = document.createElement("li")
    novaLista.setAttribute("id", "li-lista")
    novaLista.style.margin = "7px"
    novaLista.style.cursor = "pointer"
    novaLista.addEventListener("click", () => {
        if(novaLista.style.textDecoration == "line-through"){
            novaLista.style.textDecoration = ""
        } else {
            novaLista.style.textDecoration = "line-through"
        }
    })
    novaLista.style.fontSize = "1rem"
    novaLista.innerText = produto

    // Verifica se o input de produto está vazio para continuar adicionando

    if (produto) {
        document.getElementById("lista-produtos").appendChild(novaLista)
        document.querySelector("input[name='produto']").value = ""
    }


    // Botão Remover

    let removeButton = document.createElement("button")
    removeButton.setAttribute("onclick", "removerItem(this)")
    removeButton.setAttribute("id", "remove-item")
    removeButton.type = "button"
    removeButton.innerText = "remover"
    removeButton.style.width = "80px"
    removeButton.style.marginLeft = "10px"
    removeButton.style.border = "none"
    removeButton.style.backgroundColor = "rgb(149, 203, 248)"
    removeButton.style.borderRadius = "5px"
    removeButton.style.cursor = "pointer"

    novaLista.appendChild(removeButton)


    // Adiciona a tecla "Enter" como envio do produto para lista

    document.addEventListener("keypress", function (e) {
        if (e.which == 13) {
            adicionarProduto()
        }
    }, false)



    window.event.preventDefault()

    
}



