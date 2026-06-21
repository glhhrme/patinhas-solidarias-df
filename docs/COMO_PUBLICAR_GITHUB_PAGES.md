# Como publicar no GitHub Pages

## 1. Criar o repositório
1. Entre no GitHub.
2. Clique em **New repository**.
3. Crie um repositório com nome simples, por exemplo: `patinhas-solidarias-df`.
4. Marque como público, se a entrega exigir link público.

## 2. Enviar os arquivos
Envie para o repositório a estrutura completa:

```text
index.html
css/style.css
js/script.js
img/
docs/
README.md
```

Evite mudar letras maiúsculas/minúsculas nos nomes dos arquivos. O GitHub Pages diferencia `style.css` de `Style.css`.

## 3. Ativar GitHub Pages
1. Acesse o repositório.
2. Vá em **Settings**.
3. Abra **Pages**.
4. Em **Build and deployment**, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Clique em **Save**.

## 4. Testar a URL pública
Depois que o GitHub gerar o link, abra a página publicada e verifique:

- CSS carregou;
- JavaScript funcionou;
- imagens apareceram;
- menu mobile funcionou;
- botões de navegação rolaram até as seções;
- formulário exibiu mensagens;
- não houve rolagem horizontal no celular.

## 5. Atualizar o README e a declaração
Depois da publicação, copie:

- link do repositório;
- link do site publicado.

Cole esses links no `README.md` e na declaração antes de entregar.
