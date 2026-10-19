// Arrow function

const multiplicarValor=(num1,num2)=>{
    return num1 * num2;
}
console.log(multiplicarValor(3,5))

// Array lista 

let herois =["Arqueiro","Thor","Viuva"];
console.log(herois[2])

// Push método adicionar no final 
herois.push("Capitão")
console.log(herois)

//pop remove o ultimo item adicionado 
herois.pop()
console.log(herois)

//DOM - Document Object Model 
document.getElementById("titulo").innerText="Dev";

function mudar(){
    let novo = document.getElementById("nome");
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = novo.value;
}

function inserir(){
    let numero = document.getElementById("posicao").value -1;
    let novoTime = document.getElementById("novo").value;
    document.getElementsByClassName("time")[numero].innerHTML = novoTime;
}


let botao = document.querySelector("#btnImagem");
let container = document.querySelector("#containerImagem");

//Adicionar Evento Clique 
botao.addEventListener("click", function(){

    if (document.getElementById("minhaImagem")){
        alert("Imagem já foi criada")
        return;
    }
    let novaImg = document.createElement("img")

    novaImg.id = "minhaImagem"
    novaImg.src = "/src/assets/imagen.jpg";
    novaImg.alt = "Imagem de jogo"

    //Estilização 
    novaImg.style.width="400px";
    novaImg.style.borderRadius= "10px";
    novaImg.style.marginTop="15px";
    novaImg.style.display="block";

    container.appendChild(novaImg)
})
