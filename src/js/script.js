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