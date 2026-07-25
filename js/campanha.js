document.addEventListener('DOMContentLoaded', () => {
    const dados = JSON.parse(localStorage.getItem('campanhaAtual'));
    if (dados) {
        document.getElementById('tituloExibico').innerText = dados.titulo;
    }
});

let acoesConcluidas = 0;
const totalAcoes = 1; // Defina de acordo com a quantidade configurada

function concluirAcao(element) {
    element.style.backgroundColor = '#22c55e';
    element.innerText = 'Concluído ✓';
    acoesConcluidas++;

    if (acoesConcluidas >= totalAcoes) {
        const btn = document.getElementById('btnDesbloquear');
        btn.disabled = false;
        btn.classList.remove('btn-bloqueado');
        btn.classList.add('btn-liberado');
    }
}

function liberarLinkFinal() {
    const dados = JSON.parse(localStorage.getItem('campanhaAtual'));
    if (dados && dados.link) {
        window.location.href = dados.link;
    } else {
        alert('Link não encontrado.');
    }
}
