// Animação para os itens da lista e botão
document.addEventListener('DOMContentLoaded', function () {
    const benefitItems = document.querySelectorAll('.benefit-item');
    const ctaButton = document.querySelector('.cta-button-benefits');

    // Anima os itens da lista
    benefitItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = `slideIn 0.5s ease-out ${index * 0.1}s forwards`;
        }, 500);
    });

    // Anima o botão após a lista
    setTimeout(() => {
        ctaButton.style.animation = 'fadeInUp 0.6s ease-out 0.3s forwards';
    }, 800);
});
// Efeito adicional ao carregar
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.cta-button-benefits');

    // Efeito de pulso alternativo após aparecer
    setTimeout(() => {
        button.style.animation = 'fadeInUp 0.8s forwards, pulse 2s infinite';
    }, 1200);
});




// Efeito adicional ao carregar
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.cta-button-benefits');

    // Efeito de pulso alternativo após aparecer
    setTimeout(() => {
        button.style.animation = 'fadeInUp 0.8s forwards, pulse 2s infinite';
    }, 1200);



});

// Rolagem suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const idAlvo = this.getAttribute('href');
        if (idAlvo === '#') return;

        const elementoAlvo = document.querySelector(idAlvo);
        if (elementoAlvo) {
            window.scrollTo({
                top: elementoAlvo.offsetTop - 80, // Ajusta para o cabeçalho fixo
                behavior: 'smooth'
            });

            // Atualiza a URL sem recarregar a página
            if (history.pushState) {
                history.pushState(null, null, idAlvo);
            } else {
                location.hash = idAlvo;
            }
        }
    });
});

// Animação ao rolar a página
function animarAoRolar() {
    const elementos = document.querySelectorAll('.animate-in');

    elementos.forEach(elemento => {
        const posicaoElemento = elemento.getBoundingClientRect().top;
        const posicaoTela = window.innerHeight / 1.2;

        if (posicaoElemento < posicaoTela) {
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }
    });
}

// Inicializa animações quando a página carrega
window.addEventListener('load', () => {
    animarAoRolar();

    // Adiciona classe para efeitos de transição
    document.body.classList.add('carregado');
});

// Listener para evento de rolagem
window.addEventListener('scroll', animarAoRolar);

// Funcionalidade para o vídeo
const containerVideo = document.querySelector('.video-container');
if (containerVideo) {
    containerVideo.addEventListener('click', () => {
        const iframe = containerVideo.querySelector('iframe');
        if (iframe) {
            // Alterna entre modo normal e tela cheia
            containerVideo.classList.toggle('expandido');

            if (containerVideo.classList.contains('expandido')) {
                containerVideo.style.position = 'fixed';
                containerVideo.style.top = '0';
                containerVideo.style.left = '0';
                containerVideo.style.width = '100%';
                containerVideo.style.height = '100vh';
                containerVideo.style.zIndex = '10000';
                containerVideo.style.borderRadius = '0';
                document.body.style.overflow = 'hidden';
            } else {
                containerVideo.style.position = '';
                containerVideo.style.top = '';
                containerVideo.style.left = '';
                containerVideo.style.width = '';
                containerVideo.style.height = '';
                containerVideo.style.zIndex = '';
                containerVideo.style.borderRadius = '';
                document.body.style.overflow = '';
            }
        }
    });
}

// Manipulação do formulário CTA
const formularioCTA = document.querySelector('.cta-form');
if (formularioCTA) {
    formularioCTA.addEventListener('submit', function (e) {
        e.preventDefault();
        const campoEmail = this.querySelector('input[type="email"]');

        if (campoEmail && campoEmail.value) {
            // Aqui você enviaria os dados para seu servidor
            // Para demonstração, mostraremos um alerta
            alert('Obrigado pelo seu interesse! Em breve enviaremos mais informações para seu e-mail.');
            campoEmail.value = '';

            // Pode redirecionar para página de pagamento
            // window.location.href = '#pricing';
        } else {
            alert('Por favor, insira um endereço de e-mail válido.');
        }
    });
}

// Animação de contagem para estatísticas
function animarEstatisticas() {
    const itensEstatistica = document.querySelectorAll('.stat-item h3');
    const duracaoAnimacao = 2000; // 2 segundos
    const duracaoFrame = 1000 / 60; // 60 quadros por segundo
    const totalFrames = Math.round(duracaoAnimacao / duracaoFrame);

    itensEstatistica.forEach(estatistica => {
        const numeroAlvo = parseInt(estatistica.textContent);
        let numeroAtual = 0;
        const incremento = numeroAlvo / totalFrames;

        // Trata porcentagem de forma diferente
        if (estatistica.textContent.includes('%')) {
            const itemPai = estatistica.closest('.stat-item');
            if (itemPai) {
                itemPai.style.opacity = '1';
                itemPai.style.transform = 'translateY(0)';
            }
            return;
        }

        const animar = () => {
            numeroAtual += incremento;
            if (numeroAtual >= numeroAlvo) {
                estatistica.textContent = numeroAlvo.toLocaleString() + (estatistica.textContent.includes('+') ? '+' : '');
            } else {
                estatistica.textContent = Math.floor(numeroAtual).toLocaleString();
                requestAnimationFrame(animar);
            }
        };

        animar();
    });
}

// Intersection Observer para animação de estatísticas
const secaoEstatisticas = document.querySelector('.stats');
if (secaoEstatisticas) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                animarEstatisticas();
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.5 });

    observador.observe(secaoEstatisticas);
}

// Efeito hover nos cards de preço
const cardsPreco = document.querySelectorAll('.pricing-card');
cardsPreco.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
    });
});
