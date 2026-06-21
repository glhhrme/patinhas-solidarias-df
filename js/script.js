const anoAtual = document.querySelector('#anoAtual');
const opcoesAjuda = document.querySelectorAll('input[name="apoio"]');
const contadorAjuda = document.querySelector('#contadorAjuda');
const btnPlano = document.querySelector('#btnPlano');
const planoResgate = document.querySelector('#planoResgate');
const formContato = document.querySelector('#formContato');
const statusFormulario = document.querySelector('#statusFormulario');

if (anoAtual) {
  anoAtual.textContent = `Ano de referência: ${new Date().getFullYear()}.`;
}

function atualizarContadorAjuda() {
  const selecionadas = Array.from(opcoesAjuda).filter((opcao) => opcao.checked);
  const total = selecionadas.length;

  if (total === 0) {
    contadorAjuda.textContent = 'Nenhuma opção selecionada ainda.';
    return;
  }

  const nomes = selecionadas.map((opcao) => opcao.value).join(', ');
  contadorAjuda.textContent = `${total} forma${total > 1 ? 's' : ''} de apoio selecionada${total > 1 ? 's' : ''}: ${nomes}.`;
}

opcoesAjuda.forEach((opcao) => {
  opcao.addEventListener('change', atualizarContadorAjuda);
});

if (btnPlano && planoResgate) {
  btnPlano.addEventListener('click', () => {
    const estaOculto = planoResgate.hasAttribute('hidden');

    if (estaOculto) {
      planoResgate.removeAttribute('hidden');
      btnPlano.textContent = 'Ocultar orientação rápida';
      btnPlano.setAttribute('aria-expanded', 'true');
    } else {
      planoResgate.setAttribute('hidden', '');
      btnPlano.textContent = 'Ver orientação rápida';
      btnPlano.setAttribute('aria-expanded', 'false');
    }
  });
}

function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function mostrarStatus(mensagem, tipo) {
  statusFormulario.textContent = mensagem;
  statusFormulario.classList.remove('success', 'error');
  statusFormulario.classList.add(tipo);
}

if (formContato) {
  formContato.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const dados = new FormData(formContato);
    const nome = String(dados.get('nome') || '').trim();
    const email = String(dados.get('email') || '').trim();
    const interesse = String(dados.get('interesse') || '').trim();
    const mensagem = String(dados.get('mensagem') || '').trim();

    if (!nome || !email || !interesse || !mensagem) {
      mostrarStatus('Preencha nome, e-mail, interesse e mensagem para concluir a simulação.', 'error');
      return;
    }

    if (!emailValido(email)) {
      mostrarStatus('Digite um e-mail válido. Exemplo: nome@email.com', 'error');
      return;
    }

    mostrarStatus(`Obrigado, ${nome}! Sua solicitação sobre ${interesse.toLowerCase()} foi registrada nesta simulação.`, 'success');
    formContato.reset();
    atualizarContadorAjuda();
  });
}
