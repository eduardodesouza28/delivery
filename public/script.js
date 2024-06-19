
num = 1
document.getElementById("preçoS").innerHTML = parseInt(Math.floor(Math.random() * (220 - 75) + 75))
document.getElementById("preçoS1").innerHTML = parseInt(Math.floor(Math.random() * (220 - 75) + 75))
document.getElementById("preçoS2").innerHTML = parseInt(Math.floor(Math.random() * (220 - 75) + 75))
document.getElementById("preçoS3").innerHTML = parseInt(Math.floor(Math.random() * (220 - 75) + 75))
document.getElementById("preçoS4").innerHTML = parseInt(Math.floor(Math.random() * (220 - 75) + 75))
document.getElementById("preçoS5").innerHTML = parseInt(Math.floor(Math.random() * (220 - 75) + 75))

function registrarLogin() {
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let nome = document.getElementById("nome").value

    localStorage.setItem("email", email)
    localStorage.setItem("senha", senha)
    localStorage.setItem("nome", nome)

    window.location.href = "index.html"
}
function sairConta() {
    if (confirm("tem certeza") == true)
        window.location.href = "index.html"
}
function login() {
    let email = document.getElementById("email2").value
    let senha = document.getElementById("senha2").value
    let nome = document.getElementById("nome2").value
    let emailS = localStorage.getItem("email")
    let senhaS = localStorage.getItem("senha")
    let nomeS = localStorage.getItem("nome")

    if (email == emailS && senha == senhaS && nome.toLocaleLowerCase() == nomeS.toLocaleLowerCase()) {
        alert("login efetuado")
        window.location.href = "pgInicio.html"
    } else {
        alert("login fracassado, tente novamente")
    }
}
function aumentar() {
    num++
    document.getElementById("quantidade").innerHTML = num

}
function diminuir() {
    if (num > 1)
        num--
    document.getElementById("quantidade").innerHTML = num
}
function sushi() {
    window.location.href = "sushi.html"
}
function pizza() {
    window.location.href = "pizza.html"
}
function hamb() {
    window.location.href = "hamb.html"
}
function voltar() {
    window.location.href = "pgInicio.html"
}
function limparCarrinho() {
    total = 0
    localStorage.setItem("carrinho", total)
    document.getElementById("view").innerHTML = "R$" + total

}

let total = parseInt(localStorage.getItem("carrinho") || 0)
document.getElementById("view").innerHTML = "R$" + total

document.querySelectorAll('button[id]').forEach(function (button) {
    button.addEventListener('click', function (event) {
        let pid = event.currentTarget.querySelector('p').textContent
        let pnum = Number(pid) * num
        total += pnum
        localStorage.setItem("carrinho", total)
        document.getElementById("view").innerHTML = "R$" + total
    })
})
function comprar() {
    if (total != 0) {
        alert("Seu pedido ficou R$" + total)
        let senha = prompt("Digite a senha:")

        while (senha.length != 4) {
            senha = prompt("Digite a senha:")
        }
        if (senha != "") {
            total = 0
            localStorage.setItem("carrinho", total)
            document.getElementById("view").innerHTML = "R$" + total
        }
    }
}