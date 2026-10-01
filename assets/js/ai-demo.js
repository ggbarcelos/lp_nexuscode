(() => {
  'use strict';
  const section = document.querySelector('#ia-em-acao');
  if (!section) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const messages = section.querySelector('#demo-messages');
  const pipeline = section.querySelector('#demo-pipeline');
  const transcript = section.querySelector('#demo-transcript');
  const pause = section.querySelector('#demo-pause');
  const replay = section.querySelector('#demo-replay');
  const stateLabel = section.querySelector('#demo-state');
  const choices = [...section.querySelectorAll('[data-demo-scenario]')];
  const scenarios = {
    sales: {
      title: 'Do contato<br>ao contexto.',
      steps: [
        ['Entender & qualificar', 'Segmento, necessidade e contexto do contato.'],
        ['Conectar & organizar', 'Informações preparadas para CRM, catálogo e ERP.'],
        ['Encaminhar com contexto', 'A equipe recebe o cenário para conduzir a próxima etapa.']
      ],
      messages: [
        { role: 'human', text: 'Quero uma proposta para automatizar o atendimento da minha empresa.' },
        { role: 'agent', text: 'Claro. Qual é o seu segmento e quais tarefas mais consomem tempo hoje?', step: 0 },
        { role: 'human', text: 'Somos uma distribuidora. Recebemos pedidos pelo WhatsApp e cadastramos tudo no ERP.' },
        { role: 'agent', text: 'Entendi. Vou organizar seu contexto e identificar os dados que precisam conectar atendimento, catálogo e ERP.', step: 1 },
        { role: 'system', text: 'CRM · contexto e interesse organizados' },
        { role: 'agent', text: 'Com esse contexto, a equipe pode desenhar o fluxo e validar a proposta com você.', step: 2 },
        { role: 'system', text: 'EQUIPE · próxima etapa preparada' }
      ]
    },
    operations: {
      title: 'Do documento<br>à operação.',
      steps: [
        ['Ler & estruturar', 'Itens e informações do documento organizados.'],
        ['Validar & confirmar', 'Exceções e dados ambíguos seguem para revisão humana.'],
        ['Integrar & registrar', 'Após a aprovação, o fluxo pode atualizar o sistema.']
      ],
      messages: [
        { role: 'human', text: 'Recebi uma nota com vários produtos. Preciso cadastrar cada item no sistema?' },
        { role: 'agent', text: 'Podemos começar pela leitura do documento. Na demonstração, a IA organiza os itens e aponta o que precisa de revisão.', step: 0 },
        { role: 'system', text: 'DOCUMENTO · itens estruturados para validação' },
        { role: 'human', text: 'E se houver uma descrição ambígua ou um preço diferente?' },
        { role: 'agent', text: 'Esses pontos seguem para conferência humana antes de confirmar o cadastro.', step: 1 },
        { role: 'system', text: 'VALIDAÇÃO · revisão preparada' },
        { role: 'agent', text: 'Depois da aprovação, o fluxo pode atualizar o catálogo e registrar a operação no sistema.', step: 2 }
      ]
    }
  };
  let current = 'sales';
  let index = 0;
  let position = 0;
  let timer;
  let bubble;
  let playing = false;
  let finished = false;
  let manualPause = false;
  let visible = false;

  function stop() {
    clearTimeout(timer);
    timer = undefined;
    playing = false;
  }
  function updateControls() {
    pause.disabled = motion.matches || finished;
    pause.setAttribute('aria-pressed', String(manualPause));
    pause.textContent = motion.matches ? 'Visual estático' : finished ? 'Fluxo concluído' : manualPause ? 'Retomar demonstração' : 'Pausar demonstração';
  }
  function setStep(step, complete = false) {
    [...pipeline.children].forEach((el, i) => {
      el.dataset.state = complete || i < step ? 'done' : i === step ? 'active' : 'waiting';
      el.querySelector(':scope > span').textContent = complete || i < step ? '✓' : String(i + 1).padStart(2, '0');
    });
  }
  function append(item, full = false) {
    const row = document.createElement('div');
    row.className = `demo-message ${item.role}`;
    if (item.role === 'system') row.textContent = item.text;
    else {
      const author = document.createElement('span');
      author.textContent = item.role === 'agent' ? 'NEXUS / IA' : 'VISITANTE';
      const text = document.createElement('p');
      text.textContent = full ? item.text : '';
      row.append(author, text);
    }
    messages.append(row);
    return row;
  }
  function complete() {
    stop();
    finished = true;
    setStep(2, true);
    stateLabel.textContent = motion.matches ? 'Conversa completa · visual estático' : 'Fluxo demonstrativo concluído';
    updateControls();
  }
  function tick() {
    if (!playing || !visible || document.hidden) return;
    const list = scenarios[current].messages;
    if (index >= list.length) { complete(); return; }
    const item = list[index];
    if (!bubble) {
      bubble = append(item);
      if (item.step !== undefined) setStep(item.step);
      if (item.role !== 'system') bubble.classList.add('typing');
    }
    if (item.role === 'system') position = item.text.length;
    else {
      position = Math.min(position + 4, item.text.length);
      bubble.querySelector('p').textContent = item.text.slice(0, position);
    }
    messages.scrollTop = messages.scrollHeight;
    if (position >= item.text.length) {
      bubble.classList.remove('typing');
      bubble = undefined;
      position = 0;
      index++;
      timer = setTimeout(tick, item.role === 'system' ? 850 : 1150);
    } else timer = setTimeout(tick, 33);
  }
  function play() {
    if (motion.matches || manualPause || finished || !visible || document.hidden || playing) return;
    playing = true;
    stateLabel.textContent = 'Explorando o fluxo demonstrativo';
    updateControls();
    tick();
  }
  function select(name) {
    stop();
    current = name;
    index = 0;
    position = 0;
    bubble = undefined;
    finished = false;
    manualPause = false;
    messages.replaceChildren();
    const scenario = scenarios[name];
    section.querySelector('#demo-flow-title').innerHTML = scenario.title;
    pipeline.innerHTML = scenario.steps.map(([title, description], i) => `<div class="demo-step" data-state="waiting"><span aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><div><h4>${title}</h4><p>${description}</p></div></div>`).join('');
    transcript.replaceChildren();
    scenario.messages.forEach(item => {
      const text = document.createElement('p');
      const author = document.createElement('strong');
      author.textContent = `${item.role === 'agent' ? 'Nexus / IA' : item.role === 'human' ? 'Visitante' : 'Etapa do fluxo'}: `;
      text.append(author, document.createTextNode(item.text));
      transcript.append(text);
    });
    choices.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.demoScenario === name)));
    stateLabel.textContent = 'Fluxo pronto para explorar';
    updateControls();
    if (motion.matches) {
      scenario.messages.forEach(item => append(item, true));
      complete();
      messages.scrollTop = 0;
    } else play();
  }
  choices.forEach(button => button.addEventListener('click', () => select(button.dataset.demoScenario)));
  pause.addEventListener('click', () => {
    manualPause = !manualPause;
    if (manualPause) { stop(); stateLabel.textContent = 'Demonstração pausada'; }
    else play();
    updateControls();
  });
  replay.addEventListener('click', () => select(current));
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else play(); });
  motion.addEventListener('change', () => select(current));
  const observer = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (visible) play(); else stop();
  }, { threshold: 0.2 });
  observer.observe(section.querySelector('.demo-stage'));
  select(current);
})();
