# Chapa Cosmos: site

Estrutura:

    cosmos-site/
    ├── index.html        página principal (seções, menu, formulário)
    ├── avisos.html       página do mural de avisos (post-its)
    ├── css/style.css     cores, fontes e layout (as cores ficam no começo do arquivo)
    ├── css/avisos.css    visual do mural (cortiça, post-its, lixeira)
    ├── js/app.js         conteúdo editável + comportamento (abas, formulário, modo escuro)
    ├── js/avisos.js      recados e datas do mural de avisos
    └── assets/fotos/     coloque aqui as fotos da equipe

## Como editar

Abra `js/app.js`. O bloco "EDITE AQUI" no começo tem tudo que muda:

- `CONFIG`: e-mail, link da comunidade do WhatsApp e Instagram.
- `PRESIDENCIA` e `SETORES`: nome, cargo, curso, @ e foto de cada pessoa, e as propostas de cada setor.

Foto de uma pessoa: salve em `assets/fotos/` e coloque o caminho em `foto`, por exemplo `foto: "assets/fotos/maria.jpg"`.
Use fotos quadradas (por exemplo 400x400) para a foto ficar bem enquadrada no carrossel.

## Mural de avisos (avisos.html)

Abra `js/avisos.js`. No começo, a lista `AVISOS` tem os recados com data: título, texto da data (`quando`),
`fim` (depois desse momento a data é riscada de caneta sozinha), os `dias` marcados no calendário e a cor
(`pink`, `rose`, `mint` ou `plum`). Para trocar os recados depois da votação, é só editar essa lista.
Quem visita pode arrastar os post-its e jogar no lixo; isso fica salvo só no navegador de cada pessoa.
Para testar como o mural fica em outra data, abra `avisos.html?hoje=2026-11-25` (ano-mês-dia).

## Celular

O layout já se adapta a telas pequenas: menu rolável, equipe em carrossel (uma foto por vez, com setas e arrastar), propostas em uma coluna e formulário em largura total.
O menu do topo fica fixo e o botão de modo escuro vira só o ícone em telas estreitas.

## Cores

No começo de `css/style.css`, em `:root`: `--plum` (vinho), `--rose` (rosa claro), `--mint` (verde-água).
O modo escuro usa os mesmos nomes, redefinidos mais abaixo.

## Publicar

É um site estático (só HTML, CSS e JS). Dá para publicar de graça no GitHub Pages, Netlify ou Cloudflare Pages
arrastando a pasta `cosmos-site`. Para testar no computador, abra o `index.html` no navegador.

Observação: o formulário não envia e-mail sozinho. Ele abre o app de e-mail da pessoa com a mensagem pronta
e mostra o texto para copiar caso nada abra.
