/* ============ EDITE AQUI: contatos, equipe e propostas ============ */
const CONFIG = {
  email: "chapaa.cosmos@gmail.com",
  // whatsapp: "https://chat.whatsapp.com/...",        // (desativado por enquanto)
  instagram: "https://www.instagram.com/chapaa.cosmos/",
  handle: "@chapaa.cosmos"
};

/* foto: caminho ou endereço da imagem (deixe "" para mostrar o ícone padrão) */
const PRESIDENCIA = {
  id: "presidencia", nome: "Presidência", icon: "i-presidencia",
  desc: "Quem coordena a chapa e responde por todos os setores.",
  pessoas: [
    { nome: "Gustavo Lima", cargo: "Presidente", curso: "2ºZ", insta: "", foto: "assets/fotos/gustavo-lima.jpg" },
    { nome: "Maria Eduarda", cargo: "Vice-presidente", curso: "2ºE", insta: "", foto: "assets/fotos/maria-eduarda-pereira.jpg" },
    { nome: "Daniel Cruz", cargo: "Diretor Geral", curso: "2ºE", insta: "", foto: "assets/fotos/daniel-cruz.jpg" }
  ]
};

const SETORES = [
  {
    id: "social", nome: "Social", icon: "i-social",
    desc: "Acolhimento, convivência e apoio aos estudantes em todas as fases do curso.",
    pessoas: [
      { nome: "Antonella Paolinetti", cargo: "Diretora", curso: "2ºS", insta: "", foto: "assets/fotos/antonella-paolinetti.jpg" },
      { nome: "Milena Nunes", cargo: "Membro", curso: "1ºS6", insta: "", foto: "assets/fotos/milena-nunes.jpg" },
      { nome: "Kamilly", cargo: "Membro", curso: "1ºF", insta: "", foto: "assets/fotos/kamilly.jpg" },
      { nome: "João", cargo: "Membro", curso: "1ºF", insta: "", foto: "assets/fotos/joao.jpg" },
      { nome: "Gabrielle", cargo: "Membro", curso: "1ºV", insta: "", foto: "assets/fotos/gabrielle.jpg" },
      { nome: "Mafer", cargo: "Membro", curso: "2ºT", insta: "", foto: "assets/fotos/mafer.jpg" }
    ],
    intro: "Um Grêmio que acolhe e escuta quem chega e quem já está há tempos por aqui.",
    propostas: [
      { t: "Ouvidoria estudantil", d: "O Grêmio buscará criar canais de comunicação para os alunos compartilharem sugestões, críticas, solicitações, elogios e dúvidas, fortalecendo a representação estudantil e fazendo com que as demandas da comunidade escolar sejam ouvidas." },
      { t: "Maior inclusão do período noturno", d: "Ampliar a participação dos estudantes do noturno nas atividades e comemorações da escola, considerando as particularidades de sua rotina: muitos trabalham durante o dia e, por isso, têm dificuldade de participar de eventos em outros horários." },
      { t: "Divulgação e integração dos clubes extracurriculares", d: "O Grêmio auxiliará na divulgação dos clubes, com meios digitais e físicos, e buscará ampliar a participação de estudantes da manhã, tarde, integral e noite, organizando dias e horários que favoreçam o acesso e a integração entre alunos de diferentes turnos." },
      { t: "Festa Junina", d: "Uma comemoração aberta ao público, com barraquinhas de comidas e bebidas, brincadeiras interativas, apresentações e quadrilha, para a convivência entre estudantes e comunidade escolar. Serão buscadas parcerias com empresas de eventos escolares, como a UP, que já tem vínculo com a instituição, para ajudar na organização e ampliar as possibilidades da festa." },
      { t: "Clube de Libras", d: "Retomar as atividades do Clube de Libras, incentivando a participação dos estudantes e ampliando a divulgação nos canais da escola. Será incentivada a colaboração de alunos, professores e instituições com conhecimento em Libras para ensinar e orientar, promovendo o aprendizado básico da língua e a conscientização sobre acessibilidade, inclusão e comunicação com pessoas com deficiência auditiva." },
      { t: "Arrecadação de materiais para os cursos", d: "Campanhas de doação e, conforme a disponibilidade financeira do Grêmio, aquisição de materiais básicos e específicos importantes para as atividades dos cursos, especialmente aqueles de maior custo ou menos acessíveis aos estudantes." },
      { t: "Disponibilização de absorventes", d: "Manter a disponibilização gratuita de absorventes na escola, apoiando estudantes em situações de urgência ou durante o período letivo. Será proposta a instalação de um recipiente fixo em local acessível, com armazenamento adequado e disponibilização gradual dos produtos, para controlar o estoque e evitar desperdícios. O Setor Social acompanhará a reposição periódica, conforme a demanda e os recursos, e o local será definido em alinhamento com a Direção." },
      { t: "Passeios escolares", d: "Promover e incentivar a realização de passeios escolares, com oportunidades de aprendizado, integração e contato com diferentes experiências fora do ambiente escolar." },
      { t: "Semana Paulo Freire (PF)", d: "Manter a Semana Paulo Freire, com atividades e competições entre os cursos, em diferentes jogos e modalidades esportivas. Para ampliar a participação e considerar as preferências dos estudantes, serão feitas pesquisas ao longo do ano, por Forms e enquetes na Comunidade da ETECVAV no WhatsApp, por exemplo sobre os esportes e modalidades que os alunos gostariam de ver na programação." },
      { t: "Tradições entre Recos e Veteranos", d: "Preservar e incentivar tradições da ETECVAV que integram os estudantes e criam vínculos entre turmas, como a Integração, no início do ano, e a Libertação, ao final do período letivo, respeitando as orientações da Direção e garantindo atividades saudáveis, respeitosas e agradáveis para todos os envolvidos." },
      { t: "Trotes para terceiros anos", d: "Incentivar a realização dos tradicionais trotes temáticos para os terceiros anos, com momentos de descontração e integração durante o último ano dos estudantes na ETEC." },
      { t: "Eventos de arrecadação", d: "Eventos e atividades ao longo do ano para proporcionar descontração e integração entre os estudantes, além de gerar recursos financeiros para o Grêmio e apoiar suas demais iniciativas. Serão planejados de acordo com o calendário escolar, com colaboração de outros setores e parcerias externas." },
      { t: "Parceria com o Jornal ETEVAV", d: "O Setor Social buscará estabelecer uma parceria com os responsáveis pelo perfil Jornal ETEVAV no Instagram, aproveitando o alcance da página para ampliar a divulgação de informações importantes para os estudantes." }
    ]
  },
  {
    id: "esportivo", nome: "Esportivo", icon: "i-esportivo",
    desc: "Gestão de eventos esportivos, PF, as Ligas e muito mais do mundo esportivo.",
    pessoas: [
      { nome: "Calegari", cargo: "Diretor", curso: "2ºZ", insta: "", foto: "assets/fotos/calegari.jpg" },
      { nome: "Nonato", cargo: "Vice-diretora", curso: "1ºB", insta: "", foto: "assets/fotos/nonato.jpg" },
      { nome: "Nicolas Barragan", cargo: "Membro", curso: "1ºF", insta: "", foto: "assets/fotos/nicolas-barragan.jpg" },
      { nome: "Rafael", cargo: "Membro", curso: "1ºD2", insta: "", foto: "assets/fotos/rafael.jpg" },
      { nome: "Isis", cargo: "Membro", curso: "2ºW", insta: "", foto: "assets/fotos/isis.jpg" }
    ],
    intro: "Esporte para quem compete e para quem só quer se mexer com os amigos.",
    propostas: [
      { t: "Organização de ligas com a Atlética", d: "O setor esportivo atuará junto à Atlética, participando de decisões importantes e sugerindo melhorias para o desenvolvimento das ligas. Também buscaremos melhorar a comunicação e a realização dos jogos, alinhando as informações com antecedência para organizar a escala de arbitragem e informar quem será o responsável por apitar cada partida em determinado dia." },
      { t: "Organização e divulgação do calendário esportivo", d: "Melhorar a organização e a divulgação do calendário esportivo, garantindo acesso antecipado a informações sobre inscrições, datas, horários e locais dos jogos, para facilitar a participação dos estudantes, incentivar a presença das torcidas e proporcionar melhor organização dos eventos esportivos da escola." },
      { t: "Inclusão do período noturno", d: "Ampliar a participação dos alunos do noturno nas atividades e eventos esportivos, para que também possam participar, interagir e representar sua sala e curso. Propomos ainda torneios voltados ao noturno, já que o uso da quadra depende da liberação da diretoria, garantindo espaço e voz a todos os períodos e fortalecendo a integração entre cursos e turnos." },
      { t: "Arrecadação de recursos", d: "Desenvolver iniciativas para arrecadar recursos destinados ao setor esportivo, contribuindo para a compra de materiais, a organização de eventos e a melhoria das atividades, investindo no esporte da escola e priorizando as necessidades dos alunos e do setor." },
      { t: "Arbitragem justa", d: "Garantir partidas conduzidas de maneira justa e transparente, com respeito às regras e a todos os participantes. Propomos um rodízio de árbitros entre pessoas de todos os cursos, evitando que um mesmo grupo apite todos os jogos, distribuindo a responsabilidade, equilibrando as competições, evitando favorecimentos e dando as mesmas oportunidades a todos os times." },
      { t: "Competições interescolares (Showball, Interetec)", d: "Realizar peneiras gerenciadas por pessoas mais capacitadas (não somente pela Atlética) para a formação das equipes, com datas e horários previamente divulgados. Outro mecanismo será a observação direta dos alunos durante as ligas, amistosos e até jogos do cotidiano escolar, avaliando o desempenho em diferentes situações." }
    ]
  },
  {
    id: "midias", nome: "Mídias", icon: "i-midias",
    desc: "Comunicação clara, bonita e transparente entre a gestão e os estudantes.",
    pessoas: [
      { nome: "Amanda Neves", cargo: "Diretora", curso: "2ºD", insta: "", foto: "assets/fotos/amanda-neves.jpg" },
      { nome: "Livia Vasconcellos", cargo: "Membro", curso: "1ºC3", insta: "", foto: "assets/fotos/livia-vasconcellos.jpg" },
      { nome: "Larissa Ribeiro", cargo: "Membro", curso: "2ºC1", insta: "", foto: "assets/fotos/larissa-ribeiro.jpg" },
      { nome: "Sophia Chagas", cargo: "Membro", curso: "1ºS6", insta: "", foto: "assets/fotos/sophia-chagas.jpg" },
      { nome: "Carol Fiorini", cargo: "Membro", curso: "2ºA", insta: "", foto: "assets/fotos/carol-fiorini.jpg" },
      { nome: "Nicole Winkler", cargo: "Membro", curso: "2ºA", insta: "", foto: "assets/fotos/nicole-winkler.jpg" }
    ],
    intro: "Informação que chega rápido, sem ruído, onde os estudantes realmente olham.",
    propostas: [
      { t: "Transparência na comunicação e atuação do Grêmio", d: "Manter os alunos informados sobre mudanças, projetos, ações e decisões ao longo de 2027, incentivando a participação por meio de sugestões e opiniões e valorizando suas contribuições. Em parceria com o setor financeiro, serão divulgadas periodicamente informações sobre despesas e investimentos, garantindo mais transparência no uso dos recursos." },
      { t: "Comunidade de comunicação no WhatsApp", d: "Manter a Comunidade no WhatsApp, com grupos para facilitar a comunicação entre o Grêmio e os estudantes. O espaço será usado para compartilhar avisos, comunicados e eventos, além de interação com a própria comunidade escolar." },
      { t: "Gestão das redes sociais (Instagram)", d: "O setor midiático ficará responsável pela administração e atualização do Instagram oficial do Grêmio, divulgando informações importantes, projetos, eventos, campanhas e demais atividades, com o perfil organizado e com identidade visual padronizada." },
      { t: "Apresentação dos integrantes da chapa", d: "Apresentar os integrantes do Grêmio em publicações nas redes sociais, divulgando nomes, cursos, cargos, setores e fotos, para aproximar os estudantes de seus representantes e facilitar o contato com os responsáveis por cada área." },
      { t: "Intercâmbios culturais, olimpíadas acadêmicas e vestibulares", d: "Ampliar a divulgação de oportunidades acadêmicas, como intercâmbio cultural, olimpíadas do conhecimento e vestibulares, com informações sobre inscrições, prazos e requisitos, além de links para as páginas oficiais, incentivando os estudantes a conhecer e participar." },
      { t: "Canal de sugestões, críticas e acolhimento dos estudantes", d: "Disponibilizar um canal de comunicação, por meio de formulários digitais, para que os estudantes compartilhem sugestões, opiniões, críticas e relatem situações vivenciadas no ambiente escolar. O setor midiático será responsável por divulgar essa iniciativa." },
      { t: "Desenvolvimento do site oficial da chapa", d: "Desenvolver um site oficial para centralizar as informações mais importantes: propostas, projetos realizados, comunicados, cronogramas, registros de eventos, informações sobre os integrantes e links para os canais oficiais de comunicação, facilitando o acesso às informações." }
    ]
  },
  {
    id: "cultural", nome: "Cultural", icon: "i-cultural",
    desc: "Organização dos saraus, apresentações artísticas e eventos culturais.",
    pessoas: [
      { nome: "Alice", cargo: "Diretora", curso: "2ºV", insta: "", foto: "assets/fotos/alice.jpg" },
      { nome: "Beatriz", cargo: "Membro", curso: "2ºW", insta: "", foto: "assets/fotos/beatriz.jpg" },
      { nome: "Karol Carraro", cargo: "Membro", curso: "1ºB", insta: "", foto: "assets/fotos/karol-carraro.jpg" },
      { nome: "Pedro Flávio", cargo: "Membro", curso: "2ºE", insta: "", foto: "assets/fotos/pedro-flavio.jpg" },
      { nome: "Leonardo", cargo: "Membro", curso: "1ºC3", insta: "", foto: "assets/fotos/leonardo.jpg" }
    ],
    intro: "Um calendário cultural feito pelos estudantes e para os estudantes.",
    propostas: [
      { t: "Apresentação dos clubes", d: "Realizar, no início do ano letivo, um dia de apresentações individuais dos clubes, para que os novos estudantes (Recos) conheçam as atividades e as oportunidades de participação." },
      { t: "Apresentação musical", d: "Em concordância com os clubes e a direção, propor um musical envolvendo o Clube de Teatro, com os personagens; o Clube de Dança, como corpo de baile; e o Clube de Música, com o coro e o instrumental. Caso esteja ativo novamente, o Clube de Fotografia também poderá participar." },
      { t: "Sarau", d: "Organizar dois saraus ao longo do ano letivo, um em cada semestre, com um dia dedicado às apresentações artísticas dos estudantes no anfiteatro, envolvendo diferentes manifestações culturais de acordo com o interesse e a criatividade dos participantes. Temas, decorações e ensaios ficam sob responsabilidade do Setor Cultural." },
      { t: "Calendário cultural", d: "Elaborar um calendário com datas escolares, feriados nacionais e datas relacionadas à cultura, como o Dia do Teatro, do Grafite e do Folclore, dando visibilidade a essas ocasiões." },
      { t: "Temáticas culturais mensais", d: "Definir, desde o início das aulas, uma temática cultural para cada mês, como hiphop, trap, pop e K-pop, para que os estudantes conheçam diferentes culturas e se sintam representados. Será sugerido que se vistam de acordo com a temática no primeiro dia de aula de cada mês." },
      { t: "Semana Paulo Freire: apresentações de dança e música", d: "Propor apresentações de dança e música na abertura dos jogos, seguindo a proposta do primeiro dia pela manhã, com a corrida das bandeiras dos cursos, fumaça colorida e os hinos, ou no encerramento, no anfiteatro, antes da premiação." },
      { t: "Modalidade de fotografia", d: "Propor a inclusão da fotografia como nova modalidade cultural, junto ao desenho e à poesia. A ideia inicial é que cada curso entregue sua melhor fotografia autoral, relacionada ao próprio curso." }
    ]
  },
  {
    id: "financeiro", nome: "Financeiro", icon: "i-financeiro",
    desc: "Organização, planejamento e transparência no uso de cada recurso do Grêmio.",
    pessoas: [
      { nome: "Ana Lívia", cargo: "Diretora", curso: "2ºD", insta: "", foto: "assets/fotos/ana-livia.jpg" },
      { nome: "Kiwi", cargo: "Membro", curso: "2ºZ", insta: "", foto: "assets/fotos/kiwi.jpg" },
      { nome: "Guilherme", cargo: "Membro", curso: "1ºC2", insta: "", foto: "assets/fotos/guilherme-dos-santos.jpg" },
      { nome: "Bruno", cargo: "Membro", curso: "1ºT", insta: "", foto: "assets/fotos/bruno-dos-reis-marques.jpg" }
    ],
    intro: "Cada real do Grêmio com destino claro e contas abertas para quem quiser conferir.",
    propostas: [
      { t: "Transparência bancária", d: "Garantir uma administração transparente e acessível a todos. Na primeira semana de cada mês, será divulgada uma tabela com o registro das movimentações financeiras do Grêmio, incluindo receitas, despesas, suas finalidades e o saldo bancário atualizado, para que todos acompanhem como os recursos são administrados e investidos." },
      { t: "Feira do Livro", d: "Em parceria com os setores Social e Cultural, promover uma Feira do Livro para disponibilizar à comunidade escolar os livros arrecadados pelo Grêmio, incentivando a leitura, facilitando o acesso e reutilizando os materiais. O valor das vendas será revertido para os recursos do Grêmio, financiando futuras atividades e projetos." },
      { t: "Destinação e venda dos livros restantes", d: "Os livros que não forem vendidos na Feira do Livro serão destinados à venda para sebos e estabelecimentos especializados em livros usados, evitando o acúmulo de materiais sem destinação e aproveitando ao máximo o que foi arrecadado. Assim, será possível obter receita adicional para novos projetos e iniciativas escolares." },
      { t: "Vendas estratégicas", d: "Desenvolver estratégias de arrecadação por meio de vendas planejadas ao longo do ano, considerando datas comemorativas, eventos escolares e interesses dos estudantes, para ampliar as receitas e garantir recursos para atividades, eventos e melhorias no ambiente escolar. Cada iniciativa será planejada considerando os custos e o retorno financeiro esperado." },
      { t: "Rifas", d: "Organizar rifas ao longo do ano letivo, com prêmios atrativos e divulgação acessível à comunidade escolar, ampliando as fontes de receita para financiar projetos, eventos e ações voltadas aos estudantes. As rifas terão planejamento prévio e prestação de contas dos valores arrecadados." }
    ]
  }
];

const KINDS = ["Sugestão", "Dúvida", "Elogio", "Crítica"];
/* ================================================================== */

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, attrs = {}, html = "") => {
  const n = document.createElement(tag);
  for (const k in attrs) n.setAttribute(k, attrs[k]);
  if (html) n.innerHTML = html;
  return n;
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const icon = id => `<svg class="icon" aria-hidden="true"><use href="#${id}"/></svg>`;

/* contatos */
$("#chInsta").href = CONFIG.instagram;
$("#handleTxt").textContent = CONFIG.handle;
$("#mailTxt").textContent = CONFIG.email;
$("#footHandle").textContent = CONFIG.handle;

/* chips do hero: abrem o setor na equipe */
const TEAM = [PRESIDENCIA, ...SETORES];
const reduceMotionTeam = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
SETORES.forEach(s => {
  const a = el("a", { class: "chip", href: "#equipe", "data-sector": s.id }, icon(s.icon) + esc(s.nome));
  a.addEventListener("click", () => showSector(s.id));
  $("#heroChips").append(a);
});

/* equipe: seletor de setor + carrossel */
const teamTabs = $("#teamTabs"), teamPanel = $("#teamPanel");
let carouselObserver = null;

function slideHTML(p, i) {
  const photo = p.foto
    ? `<img src="${esc(p.foto)}" alt="Foto de ${esc(p.nome)}" decoding="async" draggable="false">`
    : `<svg aria-hidden="true"><use href="#i-person"/></svg>`;
  const handle = p.insta
    ? `<a class="handle" href="https://www.instagram.com/${esc(p.insta.replace("@", ""))}/" target="_blank" rel="noopener">${esc(p.insta)}</a>` : "";
  return `<article class="slide" style="--i:${i}">
    <div class="photo">${photo}</div>
    <div class="meta">
      <h4 class="name">${esc(p.nome)}</h4>
      <span class="role">${esc(p.cargo)}</span>
      <span class="course">${esc(p.curso)}</span>
      ${handle}
    </div>
  </article>`;
}

function wireCarousel() {
  const track = $(".track", teamPanel);
  const prev = $('[data-dir="-1"]', teamPanel), next = $('[data-dir="1"]', teamPanel);
  const btns = $(".car-btns", teamPanel), bar = $(".bar", teamPanel), thumb = $(".bar span", teamPanel);
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    const can = max > 4;
    btns.hidden = !can; bar.hidden = !can;
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft >= max - 4;
    if (can) {
      thumb.style.width = (track.clientWidth / track.scrollWidth * 100) + "%";
      thumb.style.left = (track.scrollLeft / track.scrollWidth * 100) + "%";
    }
  };
  const step = () => {
    const sl = track.querySelector(".slide");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return sl ? sl.getBoundingClientRect().width + gap : track.clientWidth * .8;
  };
  const go = dir => track.scrollBy({ left: dir * step(), behavior: reduceMotionTeam ? "auto" : "smooth" });
  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));
  track.addEventListener("scroll", update, { passive: true });

  /* arrastar com o mouse (no celular o toque já rola sozinho) */
  let down = false, moved = false, startX = 0, startLeft = 0;
  track.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
  });
  track.addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 5) { moved = true; track.classList.add("drag"); track.setPointerCapture(e.pointerId); }
    if (moved) track.scrollLeft = startLeft - dx;
  });
  const end = () => { if (!down) return; down = false; track.classList.remove("drag"); };
  ["pointerup", "pointercancel", "pointerleave"].forEach(ev => track.addEventListener(ev, end));
  track.addEventListener("click", e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);

  if (carouselObserver) carouselObserver.disconnect();
  if (window.ResizeObserver) { carouselObserver = new ResizeObserver(update); carouselObserver.observe(track); }
  update();
}

function showSector(id, focusTab) {
  const i = TEAM.findIndex(s => s.id === id);
  if (i < 0) return;
  const s = TEAM[i];
  [...teamTabs.children].forEach((b, j) => {
    b.setAttribute("aria-selected", j === i);
    b.tabIndex = j === i ? 0 : -1;
  });
  teamPanel.setAttribute("aria-labelledby", "tteam-" + s.id);
  teamPanel.innerHTML = `
    <div class="team-head">
      <div class="info">
        <span class="sector-badge">${icon(s.icon)}</span>
        <div><h3>${esc(s.nome)}</h3><p>${esc(s.desc)}</p></div>
      </div>
      <div class="car-btns">
        <button type="button" class="car-btn" data-dir="-1" aria-label="Pessoas anteriores">${icon("i-prev")}</button>
        <button type="button" class="car-btn" data-dir="1" aria-label="Próximas pessoas">${icon("i-next")}</button>
      </div>
    </div>
    <div class="track" tabindex="0" role="region" aria-label="Equipe do setor ${esc(s.nome)}">${s.pessoas.map(slideHTML).join("")}</div>
    <div class="bar" aria-hidden="true"><span></span></div>`;
  wireCarousel();
  if (focusTab) teamTabs.children[i].focus();
}

TEAM.forEach((s, i) => {
  const b = el("button", { class: "team-tab", role: "tab", id: "tteam-" + s.id, type: "button" },
    icon(s.icon) + esc(s.nome) + `<span class="count" aria-label="${s.pessoas.length} pessoas">${s.pessoas.length}</span>`);
  b.addEventListener("click", () => showSector(s.id));
  b.addEventListener("keydown", e => {
    const n = TEAM.length;
    if (e.key === "ArrowRight") { e.preventDefault(); showSector(TEAM[(i + 1) % n].id, true); }
    if (e.key === "ArrowLeft") { e.preventDefault(); showSector(TEAM[(i - 1 + n) % n].id, true); }
    if (e.key === "Home") { e.preventDefault(); showSector(TEAM[0].id, true); }
    if (e.key === "End") { e.preventDefault(); showSector(TEAM[n - 1].id, true); }
  });
  teamTabs.append(b);
});
showSector(PRESIDENCIA.id);

/* propostas em abas */
const tabs = $("#tabs"), panel = $("#panel");
function wirePropCarousel() {
  const track = $(".ptrack", panel), prev = $('[data-pdir="-1"]', panel), next = $('[data-pdir="1"]', panel);
  const dots = [...panel.querySelectorAll(".dot")], n = dots.length;
  $(".pctl", panel).hidden = n < 2;
  const w = () => track.clientWidth;
  const smooth = () => (reduceMotionTeam ? "auto" : "smooth");
  const update = () => {
    const i = Math.min(n - 1, Math.max(0, Math.round(track.scrollLeft / w())));
    prev.disabled = i === 0; next.disabled = i === n - 1;
    dots.forEach((d, k) => d.setAttribute("aria-current", k === i));
  };
  prev.addEventListener("click", () => track.scrollBy({ left: -w(), behavior: smooth() }));
  next.addEventListener("click", () => track.scrollBy({ left: w(), behavior: smooth() }));
  dots.forEach(d => d.addEventListener("click", () => track.scrollTo({ left: +d.dataset.i * w(), behavior: smooth() })));
  track.addEventListener("scroll", update, { passive: true });
  track.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { e.preventDefault(); next.click(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev.click(); }
  });
  let down = false, moved = false, x0 = 0, l0 = 0;
  track.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse" || e.button !== 0) return; down = true; moved = false; x0 = e.clientX; l0 = track.scrollLeft; });
  track.addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - x0;
    if (!moved && Math.abs(dx) > 5) { moved = true; track.classList.add("drag"); track.setPointerCapture(e.pointerId); }
    if (moved) track.scrollLeft = l0 - dx;
  });
  const end = () => { if (!down) return; down = false; track.classList.remove("drag"); };
  ["pointerup", "pointercancel", "pointerleave"].forEach(ev => track.addEventListener(ev, end));
  if (window.ResizeObserver) new ResizeObserver(update).observe(track);
  update();
}
function showTab(i, focus) {
  const s = SETORES[i];
  [...tabs.children].forEach((b, j) => {
    b.setAttribute("aria-selected", j === i);
    b.tabIndex = j === i ? 0 : -1;
  });
  panel.setAttribute("aria-labelledby", "tab-" + s.id);
  panel.innerHTML = `
    <div class="pcar">
      <div class="ptrack" tabindex="0" role="region" aria-label="Propostas do setor ${esc(s.nome)}">${s.propostas.map((p, k) => `
        <article class="prop"><div class="top"><span class="tag">${esc(s.nome)}</span><span class="num" aria-hidden="true">${String(k + 1).padStart(2, "0")}</span></div><h4>${esc(p.t)}</h4><p>${esc(p.d)}</p></article>`).join("")}
      </div>
      <div class="pctl">
        <button type="button" class="pbtn" data-pdir="-1" aria-label="Proposta anterior">${icon("i-prev")}</button>
        <div class="dots pdots">${s.propostas.map((p, k) => `<button type="button" class="dot" data-i="${k}" aria-label="Proposta ${k + 1}: ${esc(p.t)}"></button>`).join("")}</div>
        <button type="button" class="pbtn" data-pdir="1" aria-label="Próxima proposta">${icon("i-next")}</button>
      </div>
    </div>`;
  wirePropCarousel();
  if (focus) tabs.children[i].focus();
}
SETORES.forEach((s, i) => {
  const b = el("button", { class: "tab", role: "tab", id: "tab-" + s.id, type: "button" }, icon(s.icon) + esc(s.nome));
  b.addEventListener("click", () => showTab(i));
  b.addEventListener("keydown", e => {
    const n = SETORES.length;
    if (e.key === "ArrowRight") { e.preventDefault(); showTab((i + 1) % n, true); }
    if (e.key === "ArrowLeft") { e.preventDefault(); showTab((i - 1 + n) % n, true); }
    if (e.key === "Home") { e.preventDefault(); showTab(0, true); }
    if (e.key === "End") { e.preventDefault(); showTab(n - 1, true); }
  });
  tabs.append(b);
});
showTab(0);

/* formulário */
const sel = $("#fSector");
sel.append(el("option", { value: "Geral" }, "Geral / não sei"));
SETORES.forEach(s => sel.append(el("option", { value: s.nome }, esc(s.nome))));
KINDS.forEach((k, i) => {
  $("#kinds").append(el("input", { type: "radio", name: "kind", id: "k" + i, value: k, ...(i === 0 ? { checked: "" } : {}) }));
  $("#kinds").append(el("label", { for: "k" + i }, esc(k)));
});

async function copyText(text, btn) {
  const old = btn.textContent;
  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = "Copiado";
  } catch (e) {
    const target = btn.id === "copyMail" ? $("#mailTxt") : $("#resultText");
    const r = document.createRange(); r.selectNodeContents(target);
    const sl = getSelection(); sl.removeAllRanges(); sl.addRange(r);
    btn.textContent = "Selecionado, use Ctrl+C";
  }
  setTimeout(() => btn.textContent = old, 2200);
}
$("#copyMail").addEventListener("click", e => copyText(CONFIG.email, e.currentTarget));

let composed = "";
$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const msg = $("#fMsg").value.trim();
  if (msg.length < 5) { $("#fErr").textContent = "Escreva sua mensagem antes de continuar."; $("#fMsg").focus(); return; }
  $("#fErr").textContent = "";
  const name = $("#fName").value.trim() || "Anônimo";
  const sector = sel.value;
  const kind = (document.querySelector("input[name=kind]:checked") || {}).value || "Sugestão";
  const subject = `${kind} para a Chapa Cosmos (${sector})`;
  composed = `${msg}\n\n— ${name}`;
  const href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composed)}`;
  const a = el("a", { href }); document.body.append(a); a.click(); a.remove();
  $("#resultMsg").innerHTML = `Montamos a mensagem. Se o seu app de e-mail não abriu, copie o texto abaixo e envie para <b>${esc(CONFIG.email)}</b> com o assunto “${esc(subject)}”.`;
  $("#resultText").textContent = composed;
  $("#result").hidden = false;
});
$("#copyText").addEventListener("click", e => copyText(composed, e.currentTarget));

/* modo escuro */
const root = document.documentElement;
const mq = window.matchMedia("(prefers-color-scheme: dark)");
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : mq.matches;
function paintBtn() {
  const d = isDark();
  $("#themeBtn").setAttribute("aria-pressed", d);
  $("#themeTxt").textContent = d ? "Modo claro" : "Modo escuro";
  $("#themeBtn use").setAttribute("href", d ? "#i-sun" : "#i-moon");
}
try { const t = localStorage.getItem("cosmos-theme"); if (t) root.dataset.theme = t; } catch (e) {}
$("#themeBtn").addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("cosmos-theme", next); } catch (e) {}
  paintBtn();
});
mq.addEventListener && mq.addEventListener("change", paintBtn);
paintBtn();

/* logo: repete a entrada ao clicar ou tocar */
const logoEl = $(".hero-art .logo");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function replayIntro() {
  if (reduceMotion) return;
  logoEl.classList.remove("intro");
  void logoEl.getBoundingClientRect();
  logoEl.classList.add("intro");
  if (logoEl.setCurrentTime) logoEl.setCurrentTime(0);
}
logoEl.addEventListener("click", replayIntro);
logoEl.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); replayIntro(); }
});

/* movimento reduzido: pausa a orbita do planeta */
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("svg").forEach(s => s.pauseAnimations && s.pauseAnimations());
}

/* destaque do item atual no menu */
const links = [...document.querySelectorAll(".nav a")];
const secs = links.map(a => document.querySelector(a.getAttribute("href")));
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) links.forEach((a, i) => a.setAttribute("aria-current", secs[i] === en.target));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
secs.forEach(s => s && io.observe(s));
