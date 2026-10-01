# NexusCode — banners sociais

Campanha: Inteligência que vira vantagem.
IA aplicada · Software · Visão de negócio.

## Arquivos finais

- nexuscode-facebook-1200x630.jpg — compartilhamento de links no Facebook; imagem Open Graph principal da LP.
- nexuscode-linkedin-1200x627.jpg — imagem customizada de post com URL no LinkedIn.
- nexuscode-whatsapp-link-1200x630.jpg — arquivo horizontal para compartilhar com o link ou usar em prévias grandes.
- nexuscode-square-1080x1080.jpg — composição própria quadrada para postagem em feed e envio como imagem no WhatsApp; não é recorte do banner horizontal.

Todas as exportações têm as dimensões exatas do nome, JPEG em sRGB e margens seguras para o conteúdo essencial. A composição quadrada é uma opção prática de envio, não um tamanho obrigatório do WhatsApp. A interface pode variar o recorte/tipo de prévia.

## Imagem automática ao compartilhar a página

A LP contém og:title, og:description, og:type, og:url, og:site_name, og:locale e og:image com URL HTTPS absoluta, tipo, dimensões e texto alternativo; também fornece cartão grande compatível com Twitter/X. O padrão compartilhado é 1200×630, próximo da proporção 1,91:1 usada no LinkedIn. Para usar a versão exata do LinkedIn como imagem personalizada, anexe o respectivo JPEG.

A hospedagem atual permanece privada. Robôs de redes sociais normalmente precisam ler tanto a página como a imagem sem login para gerar a prévia. A configuração está pronta, mas a geração automática não foi validada nessas redes e depende da publicação em endereço público. Ao migrar para nexuscode.app.br, atualize todas as URLs absolutas do head; não alteramos o site comercial existente.

## Referências consultadas em 01/10/2026

- LinkedIn: https://www.linkedin.com/help/linkedin/answer/a563309 — imagem de post com URL 1200×627, proporção 1,91:1.
- Meta: https://developers.facebook.com/docs/sharing/best-practices/ — referência de compartilhamento Open Graph; consulta direta retornou limite de acesso. Canvas escolhido 1200×630 para a prévia horizontal.
- Open Graph: https://ogp.me/ — propriedades básicas e estruturadas da imagem.
- WhatsApp: https://faq.whatsapp.com/445453537819972/ — prévias podem ser desativadas pelo usuário. Não há um único tamanho obrigatório de banner divulgado nesse artigo.

## Criação e arquivos mestre

Gerados com o image_gen integrado (skill imagegen), a partir da logomarca original. Mestres PNG em creative/social. Exportação às dimensões finais solicitadas com sips, sem cortes de texto.

Direção: editorial B2B contemporânea; carvão #111214, branco quente #f4f2ed e vermelhão #f1603d; logomarca original, headline grande e uma escultura 3D de conexões que comunica IA integrada à engenharia e ao negócio.

Prompt horizontal: composição 1,91:1; logo original NexusCode no alto à esquerda; texto exato “Inteligência / que vira / vantagem.”; assinatura “IA aplicada · Software · Visão de negócio”; domínio “nexuscode.app.br”; à direita, núcleo luminoso de IA com filamentos vermelhão e arcos metálicos, em fundo carbono; legibilidade em miniatura e margens de segurança; sem pessoas, robôs, estatísticas inventadas ou texto extra.

Prompt quadrado: recompor o banner para 1:1, mantendo logo, paleta e tipografia; headline em três linhas no alto; escultura na metade inferior; assinatura em duas linhas “IA aplicada · Software” e “Visão de negócio”; domínio no rodapé; respeitar margens de segurança, sem recortar a composição horizontal.
