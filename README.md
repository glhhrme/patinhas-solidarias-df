# Patinhas Solidárias DF

Site front-end desenvolvido como estudo de caso integrador da disciplina Desenvolvimento Front-end.

## Integrantes da dupla
- Felipe Silva Campestrini - UC26100637
- Guilherme Azevedo Lemos Do Nascimento - UC26101572

## Turma e professora
- Código da turma: GPE01M10623
- Professora: JESSICA SOUSA OLIVEIRA
- Local e data: Brasília - DF, 20/06/2026

## Descrição do caso escolhido
O caso escolhido foi a criação de uma landing page para a iniciativa acadêmico-comunitária **Patinhas Solidárias DF**, voltada à divulgação de informações sobre resgate, lar temporário, adoção responsável e doações para animais em situação de vulnerabilidade no Distrito Federal.

A proposta considera uma necessidade comum em iniciativas pequenas: muitas informações ficam espalhadas em redes sociais, grupos de mensagens ou conversas individuais. Por isso, a página organiza em um único local o que o visitante precisa saber para ajudar.

## Necessidade identificada
A necessidade principal identificada foi a ausência de uma página simples, organizada e acessível para orientar moradores de Brasília que desejam adotar, doar, oferecer lar temporário ou entender os primeiros passos ao encontrar um animal em risco.

Problemas considerados:
- dificuldade para localizar informações importantes rapidamente;
- falta de uma chamada para ação clara;
- ausência de um espaço único com formas de ajuda;
- necessidade de funcionar bem em celular, já que muitos acessos ocorrem por dispositivos móveis;
- necessidade de texto objetivo, contraste adequado e navegação simples.

## Público-alvo
O público-alvo são moradores do Distrito Federal interessados em:
- conhecer animais disponíveis para adoção;
- apoiar com ração, transporte, divulgação ou lar temporário;
- tirar dúvidas sobre adoção responsável;
- entrar em contato com a iniciativa.

Esse público precisa encontrar com facilidade: objetivo do projeto, ações realizadas, animais em destaque, formas de ajuda, dúvidas frequentes e área de contato.

## Objetivo do site
O objetivo principal do site é incentivar o visitante a entrar em contato para adotar, ajudar ou solicitar orientação. Por isso, a página possui botões de chamada para ação no topo, nas seções de adoção e na área final de contato.

## Processo de desenvolvimento
O processo foi organizado em etapas:

1. leitura do roteiro do trabalho e identificação dos requisitos obrigatórios;
2. escolha do caso e definição do público-alvo;
3. organização das seções principais da página;
4. criação de uma identidade visual própria, com cores acolhedoras e tema comunitário;
5. estruturação do HTML com elementos semânticos;
6. estilização com CSS externo;
7. aplicação de Bootstrap para grid, navbar, cards, botões e utilitários;
8. implementação de interações simples em JavaScript;
9. criação de imagens locais em SVG;
10. testes de responsividade, links, carregamento de arquivos e validação básica do formulário.

Durante o desenvolvimento, a ideia inicial era apenas uma página de apresentação. A versão final passou a incluir diagnóstico visível, cards de animais, área de apoio com contador, orientação rápida expansível, perguntas frequentes e formulário simulado.

## Principais decisões do projeto

### Estrutura HTML
Foram utilizados elementos semânticos como `header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, `form`, `fieldset`, `address` e `footer`. A intenção foi representar corretamente cada parte do conteúdo e evitar uma estrutura baseada apenas em `div`.

### Organização visual
A interface usa uma paleta com verde, creme, laranja e amarelo. O verde foi escolhido para transmitir cuidado e confiança; o creme para dar leveza; o laranja e o amarelo para destacar chamadas importantes sem prejudicar a leitura.

### Responsividade
O layout usa Bootstrap Grid em conjunto com CSS próprio. Em telas menores, os blocos se reorganizam em uma coluna, os botões do topo ocupam largura total e a navegação passa para menu recolhível.

### Acessibilidade
Foram aplicados cuidados básicos:
- idioma da página definido como `pt-BR`;
- texto alternativo em imagens relevantes;
- link de pular para o conteúdo principal;
- hierarquia lógica de títulos;
- foco visível para navegação por teclado;
- labels associados aos campos do formulário;
- mensagens com `aria-live` no contador e no formulário;
- contraste adequado entre texto e fundo;
- conteúdo não depende apenas de cor para ser compreendido.

### Interatividade
O JavaScript foi usado para melhorar a experiência sem criar complexidade desnecessária. A página continua compreensível mesmo antes da interação.

## Funcionalidade em JavaScript
O projeto possui três interações principais:

1. **Contador de formas de ajuda:** na seção “Como ajudar”, o visitante marca opções como ração, lar temporário, transporte e divulgação. O texto é atualizado em tempo real para informar quantas opções foram selecionadas.
2. **Botão de orientação rápida:** um botão mostra ou oculta uma lista com passos iniciais para quem encontra um animal em situação de risco. O botão também atualiza o atributo `aria-expanded`.
3. **Validação simples do formulário:** o formulário verifica campos obrigatórios e formato básico de e-mail. Quando os dados estão corretos, exibe uma mensagem visual de confirmação. O formulário é apenas uma simulação e não envia dados reais.

Essas funcionalidades foram escolhidas porque têm relação direta com o objetivo do site: orientar, facilitar contato e estimular apoio.

## Uso de Bootstrap
O Bootstrap foi utilizado de forma introdutória e justificada nos seguintes pontos:
- `container` para centralizar e limitar largura do conteúdo;
- `row`, `col-md-*` e `col-lg-*` para grid responsivo;
- `navbar` e `navbar-toggler` para navegação adaptável;
- `card` para organizar os animais em destaque;
- `btn`, `badge`, `form-control` e `form-select` para componentes básicos;
- classes utilitárias como `d-flex`, `gap`, `text-center`, `h-100` e `w-100`.

O CSS externo continua sendo responsável pela identidade visual do projeto.

## Testes realizados
Checklist de testes feito na versão final:

- [x] Abrir `index.html` pelo Live Server no VS Code.
- [x] Conferir se `css/style.css` carrega corretamente.
- [x] Conferir se `js/script.js` carrega corretamente.
- [x] Verificar se as imagens em `img/` aparecem sem caminho absoluto.
- [x] Testar menu em tela menor.
- [x] Testar layout em larguras aproximadas de 360px, 768px, 1024px e desktop.
- [x] Verificar ausência de rolagem horizontal indesejada.
- [x] Testar links internos da navegação.
- [x] Testar contador de formas de ajuda.
- [x] Testar botão “Ver orientação rápida”.
- [x] Testar formulário com campos vazios, e-mail inválido e preenchimento válido.
- [x] Testar navegação básica por teclado.
- [x] Conferir textos alternativos das imagens.

Após publicar no GitHub Pages, devem ser testados novamente:
- carregamento do CSS;
- carregamento do JavaScript;
- carregamento das imagens;
- funcionamento dos links internos;
- responsividade na URL pública.

## Links
- Link do repositório: https://github.com/glhhrme/patinhas-solidarias-df
- Link do site publicado: https://glhhrme.github.io/patinhas-solidarias-df/

## Contribuição dos integrantes
- **Felipe Silva Campestrini:** apoio na definição do caso, organização das informações do público-alvo, revisão de conteúdo e testes de responsividade.
- **Guilherme Azevedo Lemos Do Nascimento:** estruturação do HTML, estilização CSS, implementação JavaScript, organização dos arquivos e documentação.

## Observação sobre autoria e uso de apoio
Este projeto deve ser revisado e compreendido pela dupla antes da entrega. A dupla precisa conseguir explicar o caso escolhido, a estrutura HTML, as regras CSS, o funcionamento do JavaScript, o uso de Bootstrap, os testes realizados e o processo de publicação.
