// Exemplo de JavaScript: Rolagem suave para as seções
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Você pode adicionar mais funcionalidades aqui, como:
// - Um carrossel de imagens para a galeria
// - Um formulário de contato funcional (requer backend, mas o JS pode fazer validações)
// - Efeitos de animação ao rolar a página