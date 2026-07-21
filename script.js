// MAPEAR AS COISAS QUE SERÃO INTERATIVAS

const latasMenores = document.querySelectorAll(".latas img:nth-child(2)");

const slides = document.querySelectorAll(".slide")


// SEGUIMENTAR, ESPECIFICAR OS ELEMENTOS DE UM GRUPO PARA TORNAR INDIVIDUAL COM ForEach

// CONTADOR

let = contador = 0;

console.log(contador);


latasMenores.forEach((lataMenor) => {
    lataMenor.onclick = () => {
        const slideAtivo = document.querySelector(".slide.ativo");
        slideAtivo.classList.remove("ativo");

        if (contador == 3) {
            contador = 0;
        } else {
            contador = contador +1;
        }

        console.log(contador);
        
        slides[contador].classList.add("ativo");

    };    
});