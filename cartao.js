// Função para obter os parâmetros da URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        nome: params.get('nome'),
        dataCompra: params.get('dataCompra'),
        sexo: params.get('sexo'),
        planoSaude: params.get('planoSaude')
    };
}

// Função para gerar código PIX
function gerarCodigoPix() {
    const chavePix = '18996898475';
    return `Código PIX: ${chavePix}`;
}

// Função para mostrar o modal
function mostrarModal() {
    const modal = document.getElementById('modal');
    const codigoPix = document.getElementById('codigoPix');
    codigoPix.textContent = gerarCodigoPix();
    modal.style.display = 'flex'; // Exibe o modal
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Oculta o modal
}

// Função para formatar a data de dd-mm-aaaa para dd/mm/aaaa
function formatarData(data) {
    const partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`; // Formato: dd/mm/aaaa
}

// Preencher os dados no cartão
const dados = getQueryParams();
document.getElementById('planoSaude').textContent = `${dados.planoSaude}`;
document.getElementById('nome').textContent = `${dados.nome}`;
document.getElementById('dataCompra').textContent = `${formatarData(dados.dataCompra)}`;
document.getElementById('sexo').textContent = `${dados.sexo}`;

// Adicionar evento ao botão de imprimir
document.getElementById('btnImprimir').addEventListener('click', function() {
    window.print(); // Chama a função de impressão
});
