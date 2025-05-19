document.getElementById('rebornForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const dataCompra = document.getElementById('dataCompra').value;
    const sexo = document.getElementById('sexo').value;

    // Gerar número do plano de saúde aleatório
    const planoSaude = Math.random().toString().slice(2, 14).replace(/(\d{4})(?=\d)/g, '$1 ');

    // Redirecionar para a página de cartão de saúde
    window.location.href = `cartao.html?nome=${encodeURIComponent(nome)}&dataCompra=${encodeURIComponent(dataCompra)}&sexo=${encodeURIComponent(sexo)}&planoSaude=${encodeURIComponent(planoSaude)}`;
});
