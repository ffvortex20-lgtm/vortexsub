import { db, ref, get, child } from "./firebase-config.js";

let linkFinalSalvo = "";
let acaoConcluida = false;

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const campanhaId = params.get('id');

    if (!campanhaId) {
        document.getElementById('tituloExibicao').innerText = "Campanha não encontrada";
        document.getElementById('descricaoExibicao').innerText = "O link acessado é inválido.";
        return;
    }

    try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `campanhas/${campanhaId}`));

        if (snapshot.exists()) {
            const dados = snapshot.val();
            document.getElementById('tituloExibicao').innerText = dados.titulo;
            if (dados.descricao) {
                document.getElementById('descricaoExibicao').innerText = dados.descricao;
            }
            linkFinalSalvo = dados.linkDestino;
        } else {
            document.getElementById('tituloExibicao').innerText = "Campanha inexistente";
            document.getElementById('descricaoExibicao').innerText = "Esta campanha pode ter sido removida.";
        }
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
        document.getElementById('tituloExibicao').innerText = "Erro de Conexão";
    }
});

// Função acionada quando o usuário clica na etapa de inscrição/ação
window.concluirEtapa = function(elemento) {
    if (acaoConcluida) return;

    acaoConcluida = true;
    elemento.style.borderColor = '#22c55e';
    elemento.style.backgroundColor = '#064e3b';
    elemento.querySelector('.status-etapa').innerText = 'Concluído ✓';
    elemento.querySelector('.status-etapa').style.color = '#4ade80';

    // Libera o botão de download/destino final
    const btn = document.getElementById('btnDesbloquear');
    btn.disabled = false;
    btn.classList.remove('btn-bloqueado');
    btn.classList.add('btn-liberado');
}

window.irParaDestino = function() {
    if (linkFinalSalvo) {
        window.location.href = linkFinalSalvo;
    } else {
        alert('O link final ainda não foi carregado.');
    }
}
