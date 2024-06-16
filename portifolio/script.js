// Função para alternar o modo escuro
document.getElementById('toggle').addEventListener('click', function() {
    // Alterna a classe 'dark-mode' no corpo do documento
    document.body.classList.toggle('dark-mode');
});

// Função para exibir a seção correspondente ao botão clicado
function showSection(sectionId) {
    // Seleciona todas as seções
    const sections = document.querySelectorAll('.content-section');
    // Oculta todas as seções
    sections.forEach(section => {
        section.style.display = 'none';
    });
    // Exibe a seção selecionada
    document.getElementById(sectionId).style.display = 'block';
}

// Exibe a primeira seção (Automação Industrial) por padrão
showSection('automacao');