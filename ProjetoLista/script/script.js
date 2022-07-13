
function removerItem (button) {
    let remove = button.parentNode
    document.getElementById("lista-produtos").removeChild(remove)

}

document.addEventListener("keypress", function(e){
    if (e.which == 13){
        adicionarProduto()
    }
}, false)


function adicionarProduto(){
    let produto = document.querySelector("input[name='produto']").value
    let novaLista = document.createElement("li")
    novaLista.style.margin = "7px"
    novaLista.innerText = produto
    if (produto) {
        document.getElementById("lista-produtos").appendChild(novaLista)
        document.querySelector("input[name='produto']").value = ""
    }
    
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


    window.event.preventDefault()
}

