import { db, ref, set } from "./firebase-config.js";

document.getElementById('btnPublicar').addEventListener('click', async () => {
    const link = document.getElementById('linkDestino').value.trim();
    const titulo = document.getElementById('tituloCampanha').value.trim();
    const descricao = document.getElementById('descricaoCampanha').value.trim();

    if (!link || !titulo) {
        alert('Por favor, preencha o link de destino e o título!');
        return;
    }

    const campanhaId = 'camp_' + Date.now();

    try {
        await set(ref(db, 'campanhas/' + campanhaId), {
            id: campanhaId,
            titulo: titulo,
            descricao: descricao,
            linkDestino: link,
            criadoEm: Date.now()
        });

        alert('Campanha criada com sucesso!');
        // Redireciona para testar a página de campanha gerada
        window.location.href = `campanha.html?id=${campanhaId}`;
    } catch (error) {
        console.error("Erro ao salvar:", error);
        alert('Erro ao salvar no Firebase. Verifique o console.');
    }
});
