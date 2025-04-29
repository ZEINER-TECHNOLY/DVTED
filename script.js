const barMenu = document.querySelector(".navBar") 
barMenu.addEventListener("click", ()=> {
    const menuLateral = document.querySelector(".menuLateral")
    menuLateral.classList.toggle("mostraMenu");
})

const txtMostraTela = document.querySelector(".tecnologiaAutomovel") 
txtMostraTela.addEventListener("click", function() {
    const telaCards = document.querySelector(".secaoCards") 
    telaCards.classList.toggle("mostraTela")
    if (telaCards.classList.contains("mostraTela"))
        txtMostraTela.style.color = "#40E194"
    else
        txtMostraTela.style.color = "white"
})

const fechaTelaMobile = document.querySelector(".botaoFecharMobile button")

fechaTelaMobile.addEventListener("click", ()=> {
    const telaCards = document.querySelector(".secaoCards") 
    telaCards.classList.remove("mostraTela")
})