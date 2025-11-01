// Seleciona os elementos do DOM com tipagem adequada

// HTMLElement (pode ser qualquer tipo de elemento HTML)
const campoNome = document.getElementById('nome') as HTMLInputElement | null;

// HTMLFormElement (primeiro formulário encontrado na página)
const formulario = document.getElementsByTagName('form')[0] as HTMLFormElement | undefined;

// HTMLElement (botão de envio)
const botaoEnviar = document.getElementById('btn-enviar') as HTMLButtonElement | null;

// Adiciona o evento de clique, se o botão existir
botaoEnviar?.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault(); // Evita recarregar a página (boa prática em forms)
    console.log('Botão clicado!');
});