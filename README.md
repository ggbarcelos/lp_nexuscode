# NexusCode — IA, engenharia e visão de negócio

Landing page estática da parceria de Ricardo Grossi e Glauber Barcelos. Código em `dist/`, sem dependências de runtime ou etapa de build. Para abrir localmente: `python3 -m http.server 4173 --directory dist`.

## Direção e conteúdo

Identidade original da NexusCode, fundo carbono, vermelhão, seções editoriais claras e um grafo animado de conexão entre IA, negócio e engenharia. Inclui cinco serviços exploráveis, doze projetos com filtros e detalhes, os dois perfis, método, FAQ e contato.

Fontes consultadas em 01/10/2026:

- https://www.nexuscode.app.br/ — logomarca, retrato de Ricardo, IA e automação, GSIX, Rico Solare, arOS, ASAP e RevendeBem.
- https://glauberbarcelos.com.br/ — retrato de Glauber, SaaS, mobile, web, arquitetura e consultoria; SAMU, Unimed, Native IP, StreetMe, Turquesa, Banana Startups e Empreender 40+.
- https://www.linkedin.com/in/ricardo-grossi/ e https://www.linkedin.com/in/glauber-gomes-barcelos/ — links profissionais preservados. A extração direta do LinkedIn foi indisponível; biografias baseadas nos sites oficiais.

SAMU e Unimed mantêm o crédito a projetos realizados para a TRUE Tecnologia para Vida. arOS preserva o crédito de participação de Ricardo. Os cases representam as trajetórias anteriores, sem sugerir contratação retroativa pela parceria. A meta de 3.000 clientes da ASAP é identificada como projeção. Indicadores provêm dos portfólios e não foram auditados independentemente. Os gráficos de barras são decorativos, sem série histórica ou novos indicadores.

## Contato

O formulário prepara uma mensagem revisável e abre o WhatsApp comercial de Glauber, +55 51 98012-0387, publicado em seu site. Não há envio automático, banco de dados, armazenamento local, analytics ou alegação de integração com um modelo de IA. O e-mail `contato@nexuscode.app.br` vem do site original. O site não replica a NexusAI sem acesso ao seu backend.

## Hospedagem e domínio

`.openai/hosting.json` aponta para a saída estática `dist`. A versão é disponibilizada em acesso privado para avaliação. O domínio comercial `nexuscode.app.br` não é alterado por este projeto. Para hospedar em outro servidor estático, basta copiar o conteúdo de `dist` e manter os caminhos relativos.

## Acessibilidade e comportamento

Navegação mobile, foco visível, link de salto, abas com teclado, filtros com estado acessível, diálogo nativo, validação do formulário, respeito a movimento reduzido e pausa da animação quando o hero ou a página não está visível. Sem bibliotecas externas de JavaScript; fontes Google com fallback local.
