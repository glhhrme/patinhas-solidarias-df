# Registro do processo de desenvolvimento

## 1. Caso escolhido
O caso escolhido foi uma landing page para a iniciativa acadêmico-comunitária Patinhas Solidárias DF, voltada à divulgação de resgate, lar temporário, adoção responsável e doações para animais no Distrito Federal.

## 2. Justificativa da escolha
A escolha foi feita porque iniciativas pequenas normalmente dependem de redes sociais e conversas diretas, o que dificulta a organização de informações importantes. Um site simples ajuda o visitante a entender o objetivo do projeto e encontrar rapidamente como ajudar.

## 3. Diagnóstico inicial

### Quem é atendido
Iniciativa comunitária de apoio a animais resgatados em Brasília - DF.

### Necessidade concreta
Organizar informações sobre adoção, lar temporário, doações e contato em uma página clara e acessível.

### Público-alvo
Moradores do Distrito Federal interessados em adotar, doar, divulgar, oferecer transporte ou lar temporário.

### Informações que precisam aparecer
- o que é a iniciativa;
- ações realizadas;
- animais em destaque;
- formas de ajuda;
- dúvidas frequentes;
- área de contato.

### Ação esperada do visitante
Entrar em contato para adotar, ajudar ou solicitar orientação.

## 4. Decisões tomadas pela dupla

### Estrutura HTML
A página foi organizada em seções semânticas: cabeçalho, navegação, conteúdo principal, seções temáticas, artigos/cards, formulário e rodapé.

### Organização visual
Foi criado um tema visual próprio, com cores acolhedoras: verde para confiança e cuidado, creme para fundo suave, laranja e amarelo para destaque.

### Responsividade
O layout combina Bootstrap Grid com media queries próprias. Cards e blocos ficam lado a lado no desktop e empilham no celular.

### Acessibilidade
Foram usados textos alternativos, labels nos campos, foco visível, `aria-live` para mensagens dinâmicas, `aria-expanded` no botão expansível e ordem lógica dos títulos.

### Interatividade
A funcionalidade JavaScript foi escolhida para ter relação com o objetivo do site, não apenas para cumprir requisito. O contador de apoio, o botão de orientação e a validação do formulário ajudam o visitante a interagir com a página.

### Bootstrap
Bootstrap foi usado em recursos introdutórios: grid, navbar, cards, botões, badges e campos de formulário.

## 5. Evidência de evolução do projeto

### Versão inicial planejada
- Cabeçalho com nome da iniciativa.
- Seção sobre.
- Cards de animais.
- Contato simples.

### Melhorias adicionadas na versão final
- Diagnóstico da necessidade visível na página.
- Hero com chamada para ação.
- Seção de ações principais.
- Cards de animais com botões.
- Área “Como ajudar” com contador em JavaScript.
- Botão para exibir orientação rápida.
- FAQ com `<details>` e `<summary>`.
- Formulário com validação simples.
- Rodapé com identificação da dupla, turma e professora.

### Wireframe textual
```text
[Header / Navbar]
[Hero: chamada principal + imagem]
[Diagnóstico: problema, público, ação e solução]
[Ações: resgate, lar temporário, adoção, doação]
[Animais em destaque]
[Como ajudar: checklist + orientação rápida]
[Dúvidas frequentes]
[Contato: formulário simulado]
[Rodapé]
```

## 6. Funcionalidade JavaScript

### O que faz
- Conta as opções selecionadas pelo visitante na seção de ajuda.
- Mostra ou oculta uma orientação rápida de resgate.
- Valida campos obrigatórios e e-mail no formulário.

### Onde aparece
- Seção “Como ajudar”.
- Botão “Ver orientação rápida”.
- Formulário na seção “Contato”.

### Por que foi escolhida
Foi escolhida porque combina com o objetivo da página: facilitar ajuda, orientar o visitante e simular contato inicial.

## 7. Testes realizados

| Item testado | Resultado esperado | Status |
| --- | --- | --- |
| CSS externo | Página estilizada corretamente | OK |
| JavaScript externo | Contador, botão e formulário funcionando | OK |
| Imagens locais | SVGs carregando em `img/` | OK |
| Menu mobile | Menu recolhível funciona em telas menores | OK |
| Responsividade | Sem rolagem horizontal em celular | OK |
| Formulário vazio | Exibe aviso de erro | OK |
| E-mail inválido | Exibe aviso de e-mail inválido | OK |
| Formulário válido | Exibe confirmação visual | OK |
| Teclado | Navegação básica com Tab | OK |
| Acessibilidade básica | Alt, labels, foco e títulos conferidos | OK |

## 8. Pontos para verificar após publicação
- URL pública do GitHub Pages abre corretamente.
- Caminhos relativos continuam funcionando.
- CSS, JavaScript e imagens carregam na URL pública.
- Links internos funcionam na página publicada.
- README recebe o link do repositório e o link do site publicado.
