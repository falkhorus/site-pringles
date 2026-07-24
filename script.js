gsap.registerPlugin(SplitText);

// MAPEAR OS ELEMENTOS (Antigos e Novos)
const latasMenores = document.querySelectorAll(".latas img:nth-child(2)");
const slides = document.querySelectorAll(".slide");

// Mapeando os novos controles
const dots = document.querySelectorAll(".dot"); 
const btnPrev = document.querySelector(".seta.prev"); 
const btnNext = document.querySelector(".seta.next"); 

// Corrigindo a declaração das variáveis
let contador = 0;
let clicar = true;

console.log(contador);

// FUNÇÃO PRINCIPAL PARA MUDAR DE SLIDE
// Esta função vai ser reaproveitada por qualquer botão que mude o slide
function mudarSlide(novoIndice) {
    if (!clicar) return; // Se o delay ainda estiver rodando, ignora o clique
    clicar = false;

    // Remove a classe 'ativo' do slide e do dot atuais
    document.querySelector(".slide.ativo").classList.remove("ativo");
    document.querySelector(".dot.ativo").classList.remove("ativo");

    // Atualiza o contador para o novo índice desejado
    contador = novoIndice;

    // Lógica para criar o "loop infinito" do slider
    if (contador > slides.length - 1) {
        contador = 0; // Se passou do último, volta para o primeiro
    } else if (contador < 0) {
        contador = slides.length - 1; // Se recuou do primeiro, vai para o último
    }

    console.log(contador);

    // Adiciona a classe 'ativo' no novo slide e no novo dot
    slides[contador].classList.add("ativo");
    dots[contador].classList.add("ativo");

    // Roda a animação do título
    animarTitulo();

    // Trava de segurança de 1.5s (sua lógica original)
    setTimeout(() => {
        clicar = true;
    }, 1500);
}


// ADICIONA OS EVENTOS DE CLIQUE

// Clique na lata menor (Avança para o próximo slide)
latasMenores.forEach((lataMenor) => {
    lataMenor.addEventListener("click", () => {
        mudarSlide(contador + 1);
    });
});

// Quando Clica na Seta da Direita (Avança)
btnNext.addEventListener("click", () => {
    mudarSlide(contador + 1);
});

// quando Clica na Seta da Esquerda (Volta)
btnPrev.addEventListener("click", () => {
    mudarSlide(contador - 1);
});

// Clique nas Bolinhas (Dots)
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        // Só executa se a bolinha clicada for diferente da que já está ativa
        if (index !== contador) { 
            mudarSlide(index); // O índice da bolinha é exatamente o índice do slide
        }
    });
});


// FUNÇÃO DO GSAP PARA ANIMAR O TEXTO
function animarTitulo() {
    const split = SplitText.create(".slide.ativo h2", {
        type: "chars",
        mask: "chars"
    });

    gsap.from(split.chars, {
        y: "100%",
        duration: 0.5,
        stagger: 0.06,
        delay: 0.5,
    });
}



