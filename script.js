document.addEventListener('DOMContentLoaded', () => {
    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {
        button.addEventListener('click', function() {
            // Obtém o elemento atualmente visível
            const atual = document.querySelector('.passo-ativo');
            // Obtém o próximo passo a partir do atributo data-proximo do botão
            const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
            
            // Remove a classe passo-ativo do passo atual
            atual.classList.remove('passo-ativo');
            // Adiciona a classe passo-ativo ao próximo passo
            document.getElementById(proximoPasso).classList.add('passo-ativo');
        });
    });
});
