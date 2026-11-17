/* ============ EDITE AQUI: contatos, equipe e propostas ============ */
const CONFIG = {
  email: "chapaa.cosmos@gmail.com",
  whatsapp: "https://chat.whatsapp.com/",               // cole o link de convite da comunidade
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
      { nome: "Gabrielle", cargo: "Membro", curso: "1ºV", insta: "", foto: "assets/fotos/gabrielle.jpg" }
    ],
    intro: "Um Grêmio que acolhe e escuta quem chega e quem já está há tempos por aqui.",
    propostas: [
      { t: "Recepção dos calouros", d: "Semana de boas-vindas com tour pelo campus, apadrinhamento por veteranos e roda de conversa sobre o curso." },
      { t: "Canal de acolhimento", d: "Espaço para estudantes relatarem problemas e serem encaminhados ao setor ou à coordenação certa." },
      { t: "Ações solidárias", d: "Campanhas pontuais de arrecadação e voluntariado com participação aberta a todos os cursos." },
      { t: "Convivência", d: "Encontros mensais em espaços comuns para aproximar turmas e períodos diferentes." }
    ]
  },
  {
    id: "esportivo", nome: "Esportivo", icon: "i-esportivo",
    desc: "Treinos, campeonatos e a torcida organizada em torno de quem pratica esporte.",
    pessoas: [
      { nome: "Calegari", cargo: "Diretor", curso: "2ºZ", insta: "", foto: "assets/fotos/calegari.jpg" },
      { nome: "Nonato", cargo: "Vice-diretora", curso: "1ºB", insta: "", foto: "assets/fotos/nonato.jpg" }
    ],
    intro: "Esporte para quem compete e para quem só quer se mexer com os amigos.",
    propostas: [
      { t: "Campeonato interno", d: "Torneios entre turmas em modalidades variadas, com calendário divulgado desde o início do semestre." },
      { t: "Treinos abertos", d: "Horários livres para iniciantes experimentarem as modalidades sem pressão de desempenho." },
      { t: "Apoio às atléticas", d: "Ajuda na organização, na divulgação e no transporte para jogos e competições." },
      { t: "Material esportivo", d: "Empréstimo de bolas, coletes e equipamentos para treinos e partidas casuais." }
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
      { t: "Transparência na comunicação", d: "Manter os alunos informados sobre mudanças, projetos, ações e decisões de 2027, incentivando sugestões e opiniões. Com o setor financeiro, divulgar periodicamente despesas e investimentos." },
      { t: "Comunidade no WhatsApp", d: "Manter a Comunidade com grupos para facilitar a comunicação entre o Grêmio e os estudantes: avisos, comunicados, eventos e interação com a comunidade escolar." },
      { t: "Gestão do Instagram", d: "O setor cuida do Instagram oficial do Grêmio, divulgando informações, projetos, eventos e campanhas, com perfil organizado e identidade visual padronizada." },
      { t: "Apresentação dos integrantes", d: "Publicações nas redes com nome, curso, cargo, setor e foto de cada integrante, aproximando os estudantes de seus representantes e facilitando o contato com cada área." },
      { t: "Intercâmbios, olimpíadas e vestibulares", d: "Divulgar oportunidades acadêmicas como intercâmbio cultural, olimpíadas do conhecimento e vestibulares, com inscrições, prazos, requisitos e links oficiais." },
      { t: "Registro de eventos e jogos", d: "Registrar eventos, projetos e atividades da Etec em fotos, vídeos e posts, e divulgar jogos escolares, ligas e competições, como o JEESP." },
      { t: "Cronogramas e programações", d: "Divulgar cronogramas dos eventos e atividades do Grêmio (e, quando possível, em parceria com a escola), com datas, horários e orientações." },
      { t: "Canal de sugestões e acolhimento", d: "Divulgar o canal por formulários digitais em que os estudantes podem enviar sugestões, opiniões, críticas e relatar situações vividas no ambiente escolar." },
      { t: "Divulgação dos trotes escolares", d: "Auxiliar na divulgação dos trotes e atividades temáticas, apresentando antes datas, temas e orientações, respeitando a segurança e a participação voluntária." },
      { t: "Site oficial da chapa", d: "Desenvolver um site para centralizar propostas, projetos realizados, comunicados, cronogramas, registros de eventos, integrantes e links dos canais oficiais." }
    ]
  },
  {
    id: "cultural", nome: "Cultural", icon: "i-cultural",
    desc: "Arte, música, debate e tudo o que faz o campus ter vida além da sala de aula.",
    pessoas: [
      { nome: "Alice", cargo: "Diretora", curso: "2ºV", insta: "", foto: "assets/fotos/alice.jpg" },
      { nome: "Beatriz", cargo: "Membro", curso: "2ºW", insta: "", foto: "assets/fotos/beatriz.jpg" },
      { nome: "Karol Carraro", cargo: "Membro", curso: "1ºB", insta: "", foto: "assets/fotos/karol-carraro.jpg" },
      { nome: "Juju Saviam", cargo: "Membro", curso: "2ºW", insta: "", foto: "assets/fotos/juju-saviam.jpg" },
      { nome: "Pedro Flávio", cargo: "Membro", curso: "2ºE", insta: "", foto: "assets/fotos/pedro-flavio.jpg" }
    ],
    intro: "Um calendário cultural feito pelos estudantes e para os estudantes.",
    propostas: [
      { t: "Festival de talentos", d: "Palco aberto para música, dança, teatro, poesia e qualquer talento que queira se apresentar." },
      { t: "Cine debate", d: "Sessões de filmes seguidas de conversa, com temas sugeridos pelos próprios estudantes." },
      { t: "Feira de arte e criação", d: "Espaço para estudantes exporem e venderem trabalhos autorais." },
      { t: "Roda de conversa", d: "Encontros periódicos sobre temas ligados ao curso, ao mercado e à vida universitária." }
    ]
  },
  {
    id: "financeiro", nome: "Financeiro", icon: "i-financeiro",
    desc: "Organização, planejamento e transparência no uso de cada recurso do Grêmio.",
    pessoas: [
      { nome: "Ana Lívia", cargo: "Diretora", curso: "2ºD", insta: "", foto: "assets/fotos/ana-livia.jpg" },
      { nome: "Kiwi", cargo: "Membro", curso: "2ºZ", insta: "", foto: "assets/fotos/kiwi.jpg" },
      { nome: "Guilherme Dos Santos", cargo: "Membro", curso: "1ºC2", insta: "", foto: "assets/fotos/guilherme-dos-santos.jpg" },
      { nome: "Bruno dos Reis Marques", cargo: "Membro", curso: "1ºT", insta: "", foto: "assets/fotos/bruno-dos-reis-marques.jpg" }
    ],
    intro: "Cada real do Grêmio com destino claro e contas abertas para quem quiser conferir.",
    propostas: [
      { t: "Transparência total", d: "Relatório periódico de entradas e saídas, publicado nos canais da chapa." },
      { t: "Orçamento por setor", d: "Planejamento anual com verba definida para cada setor e revisão a cada semestre." },
      { t: "Parcerias e descontos", d: "Convênios com comércios da região para benefícios aos estudantes." },
      { t: "Arrecadação responsável", d: "Eventos e vendas planejados com antecedência para reduzir custo e risco." }
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
$("#chWhats").href = CONFIG.whatsapp;
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
    ? `<img src="${esc(p.foto)}" alt="Foto de ${esc(p.nome)}" loading="lazy" draggable="false">`
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
    <p class="panel-intro">${esc(s.intro)}</p>
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
