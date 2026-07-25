function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    if (tabName === 'criar') {
        document.getElementById('secao-criar').classList.add('active');
    }
}

function adicionarAcao() {
    const listaAcoes = document.getElementById('listaAcoes');
    const div = document.createElement('div');
    div.className = 'acao-item';
    div.innerHTML = `
        <select class="tipo-acao">
            <option value="youtube">Inscrever-se no canal (YouTube)</option>
            <option value="curtir">Curtir vídeo (YouTube)</option>
        </select>
        <input type="text" placeholder="Cole a URL aqui" class="url-acao">
    `;
    listaAcoes.appendChild(div);
}

function publicarCampanha() {
    const link = document.getElementById('linkDestino').value;
    const titulo = document.getElementById('tituloCampanha').value;

    if (!link || !titulo) {
        alert('Preencha os campos obrigatórios!');
        return;
    }

    // Salvando os dados no armazenamento local para a página de destino ler
    const dadosCampanha = { link, titulo };
    localStorage.setItem('campanhaAtual', JSON.stringify(dadosCampanha));

    alert('Campanha criada com sucesso! Acesse a página de campanha.');
    window.location.href = 'campanha.html';
}
