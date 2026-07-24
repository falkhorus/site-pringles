gsap.registerPlugin(SplitText)

// MAPEAR AS COISAS QUE SERÃO INTERATIVAS

const latasMenores = document.querySelectorAll(".latas img:nth-child(2)");

const slides = document.querySelectorAll(".slide")


// SEGUIMENTAR, ESPECIFICAR OS ELEMENTOS DE UM GRUPO PARA TORNAR INDIVIDUAL COM ForEach

// CONTADOR

let = contador = 0;

let = clicar = true

console.log(contador);


latasMenores.forEach((lataMenor) => {
    lataMenor.onclick = () => {
        

        if (clicar) {
            clicar = false
            const slideAtivo = document.querySelector(".slide.ativo");
            slideAtivo.classList.remove("ativo");

            if (contador == 3) {
                contador = 0;
            } else {
                contador = contador + 1;
            }

            console.log(contador);

            slides[contador].classList.add("ativo");
            animarTitulo();

            setTimeout(()=>{

                clicar = true

            }, 1500)

        };



    }

});

function animarTitulo() {

    const split = SplitText.create(".slide.ativo h2", {
        type: "chars",
        mask: "chars"
    });

    gsap.from(split.chars, {
        y: "100%",
        duration: .5,
        stagger: .06,
        delay: .5,
    })

}



