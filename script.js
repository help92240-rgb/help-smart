document.addEventListener('DOMContentLoaded', () => {
    
    // Controle do Menu Mobile
    const mobileBtn = document.getElementById('mobile-menu-btn');
    
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // Futuramente: Adicionar lógica para abrir uma div de overlay com os links do menu
            console.log('Menu mobile clicado!');
            // Exemplo: document.getElementById('mobile-menu').classList.toggle('hidden');
        });
    }

    // Preparação para suavizar o scroll ao clicar em links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Controle do Header Fixo (Sticky com Blur)
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Adiciona fundo escuro com leve transparência, blur e borda inferior
            header.classList.add('bg-brand-dark/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/10', 'py-4');
            header.classList.remove('py-6', 'bg-transparent');
        } else {
            // Retorna ao estado original no topo
            header.classList.remove('bg-brand-dark/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/10', 'py-4');
            header.classList.add('py-6', 'bg-transparent');
        }
    });

});