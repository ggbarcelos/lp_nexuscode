# NexusCode — IA, engenharia e visão de negócio

Landing page estática da parceria de Ricardo Grossi e Glauber Barcelos. O `index.html` fica na raiz do repositório; CSS, JavaScript, fontes e imagens ficam nos respectivos subdiretórios de `assets/`, sem dependências de runtime. Para abrir localmente a partir de `lp_nexuscode`: `python3 -m http.server 4173`.

## Direção e conteúdo

Identidade original da NexusCode, fundo carbono, vermelhão, seções editoriais claras e um grafo animado de conexão entre IA, negócio e engenharia. Inclui cinco serviços exploráveis, doze projetos com filtros e detalhes, os dois perfis, método, FAQ e contato.

Fontes consultadas em 01/10/2026:

- https://www.nexuscode.app.br/ — logomarca, retrato de Ricardo, IA e automação, GSIX, Rico Solare, arOS, ASAP e RevendeBem.
- https://glauberbarcelos.com.br/ — retrato de Glauber, SaaS, mobile, web, arquitetura e consultoria; SAMU, Unimed, Native IP, StreetMe, Turquesa, Banana Startups e Empreender 40+.
- https://www.linkedin.com/in/ricardo-grossi/ e https://www.linkedin.com/in/glauber-gomes-barcelos/ — links profissionais preservados. A extração direta do LinkedIn foi indisponível; biografias baseadas nos sites oficiais.

SAMU e Unimed mantêm o crédito a projetos realizados para a TRUE Tecnologia para Vida. arOS preserva o crédito de participação de Ricardo. Os cases representam as trajetórias anteriores, sem sugerir contratação retroativa pela parceria. A meta de 3.000 clientes da ASAP é identificada como projeção. Indicadores provêm dos portfólios e não foram auditados independentemente. O gráfico circular representa o indicador reportado de 95% da GSIX; não há série histórica inventada.

## Contato

O formulário prepara uma mensagem revisável e abre o WhatsApp comercial de Glauber, +55 51 98012-0387, publicado em seu site. Não há envio automático, banco de dados, armazenamento local, analytics ou alegação de integração com um modelo de IA. O e-mail `contato@nexuscode.app.br` vem do site original. O site não replica a NexusAI sem acesso ao seu backend.

## Repositório

Código versionado em https://github.com/ggbarcelos/lp_nexuscode.git. O remoto `origin` aponta para o GitHub e `sites` mantém a conexão de publicação da prévia.

## Hospedagem e domínio

O site pode ser servido diretamente da raiz, que contém `index.html`. Para publicação no Sites, `node scripts/build-site.mjs` gera uma cópia em `dist/`, ignorada pelo Git, e `.openai/hosting.json` aponta para essa saída exigida pela hospedagem. A versão é disponibilizada em acesso privado para avaliação. O domínio comercial `nexuscode.app.br` não é alterado por este projeto. Para hospedar em outro servidor estático, basta copiar `index.html` e a pasta `assets/`, mantendo os caminhos relativos.

## Acessibilidade e comportamento

Navegação mobile, foco visível, link de salto, abas com teclado, filtros com estado acessível, diálogo nativo, validação do formulário, respeito a movimento reduzido e pausa da animação quando o hero ou a página não está visível. Sem bibliotecas externas de JavaScript; fontes Sora, Manrope e IBM Plex Mono hospedadas localmente, com suas licenças OFL e fallback de sistema.

## Refinamento visual 02

Sora em títulos, Manrope em leitura e IBM Plex Mono em metadados. Neutros carbono e porcelana com vermelhão da marca, contraste revisado, galeria assimétrica, gráfico real do indicador GSIX, superfícies de formulário, controle de pausa do visual, navegação com seção ativa e indicador discreto de leitura. Mantém o conteúdo, as fontes dos cases e o fluxo de contato.

## Prova em campo — refinamento 03

Vitrine interativa com desafio, entrega, impacto e origem dos doze projetos. Cada case possui uma apresentação própria: indicador circular de automação, fluxo de OCR, escala de produto ou imagem real da aplicação. Seleção rápida de quatro cases, catálogo compacto por especialidade, detalhes e fontes em diálogo. A troca leva o foco ao título do case e respeita movimento reduzido. Gráficos representam apenas indicadores publicados, sem séries ou resultados inventados. Layout revisado para desktop, tablet e celular.

## Banners sociais e prévia de links

Artes horizontais 1200×630 e 1200×627, mais uma composição quadrada 1080×1080, em `assets/social/`. Mestres e direção criativa em `creative/social/`. O head possui metadados Open Graph completos e cartão grande, apontando para `https://www.nexuscode.app.br/` e para `https://www.nexuscode.app.br/assets/social/nexuscode-share-v1.jpg`. A prévia continua privada; as redes precisam de página e imagem públicas para gerar cartões de links. Consulte `creative/social/README.md` para formatos, fontes e migração de URLs.

## Organização do projeto

- `index.html` — página principal na raiz.
- `assets/css/` — estilos, incluindo as declarações de fontes.
- `assets/js/` — JavaScript da página.
- `assets/fonts/` — fontes locais e suas licenças.
- `assets/images/` — logomarca, retratos e imagens de projetos.
- `assets/social/` — banners sociais e orientações de uso.
- `creative/` — mestres dos banners, orientações e prévias locais.
- `scripts/build-site.mjs` — prepara a saída temporária exigida pelo Sites.
- `.openai/hosting.json` — configuração da hospedagem.

O repositório Git também fica em `lp_nexuscode`; as pastas intermediárias `nexuscode/` e `dist/` deixaram de fazer parte da estrutura versionada da página.

## Compartilhamento no domínio comercial

Facebook, LinkedIn e WhatsApp podem usar o mesmo banner horizontal 1200×630 em `og:image`. O domínio escolhido é `https://www.nexuscode.app.br/`; a versão 1200×627 permanece disponível para anexação manual no LinkedIn. O compartilhamento automático requer publicar o `index.html` atualizado e `assets/social/nexuscode-share-v1.jpg` nessa hospedagem, sem autenticação. Nenhum dado precisa ser enviado a serviços de validação externos.
