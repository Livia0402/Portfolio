/* ============ EDITE AQUI: os recados do mural ============ */
/* cor: pink (rosa claro) · rose (rosa médio) · mint (verde-água) · plum (vinho)
   fim: quando a data deixa de valer (depois disso, ela é riscada de caneta)
   dias: dias do mês que ficam marcados no calendário */
const MES = { ano: 2026, mes: 10 };                 // mês do calendário (0 = janeiro, 10 = novembro)
const AVISOS = [
  { id: "inscricoes", cor: "pink", kicker: "Inscrições", titulo: "Inscrições da chapa", quando: "até 19 de novembro", fim: "2026-11-19T23:59:59", dias: [19], leg: "inscrições", fix: "pin" },
  { id: "reuniao", cor: "mint", kicker: "Reunião", titulo: "Presidentes e vice-presidentes", quando: "23 de novembro, 14h", fim: "2026-11-23T15:00:00", dias: [23], leg: "reunião", fix: "tape" },
  { id: "propaganda", cor: "rose", kicker: "Propaganda", titulo: "Divulgação da chapa", quando: "24 a 26 de novembro", fim: "2026-11-26T23:59:59", dias: [24, 25, 26], leg: "propaganda", fix: "pin mint" },
  { id: "votacao", cor: "plum", kicker: "Votação", titulo: "Votação da chapa", quando: "27 de novembro", fim: "2026-11-27T23:59:59", dias: [27], leg: "votação", obs: "Conta com o seu voto!", fix: "pin" }
];
const CONTATO = { insta: "https://www.instagram.com/chapaa.cosmos/", handle: "@chapaa.cosmos", email: "chapaa.cosmos@gmail.com" };
/* ================================================================== */

const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const icon = id => `<svg class="icon" aria-hidden="true"><use href="#${id}"/></svg>`;
const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/* "hoje": dá para testar uma data com ?hoje=2026-11-25 no endereço da página */
const NOW = () => {
  try {
    const q = new URLSearchParams(location.search).get("hoje");
    if (q) { const d = new Date(q.length <= 10 ? q + "T12:00:00" : q); if (!isNaN(d)) return d; }
  } catch (e) {}
  return new Date();
};

/* memória do mural (só neste navegador) */
const KEY = "cosmos-avisos-v1";
const store = { pos: {}, gone: [] };
try {
  const t = JSON.parse(localStorage.getItem(KEY));
  if (t && typeof t === "object") { store.pos = t.pos || {}; store.gone = Array.isArray(t.gone) ? t.gone : []; }
} catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} };

/* ---------- conteúdo dos recados ---------- */
const tossBtn = t => `<button type="button" class="toss" aria-label="Amassar e jogar fora: ${esc(t)}" title="Amassar e jogar fora"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 7V4h4v3M6.500 7l1 13h9l1-13M10 11v6M14 11v6"/></g></svg></button>`;
const COLORS = { pink: "#fcd6eb", rose: "#f2b3cf", mint: "#c2e3da", plum: "#77054b" };

function dateNote(a) {
  return `<span class="fix ${a.fix || "pin"}"></span>${tossBtn(a.titulo)}
    <p class="kicker">${esc(a.kicker)}</p>
    <h2 class="ttl">${esc(a.titulo)}</h2>
    <p class="when"><span class="wt">${a.quando.split(" ").map(w => `<span class="w">${esc(w)}</span>`).join(" ")}</span><svg class="strike" aria-hidden="true"></svg></p>
    ${a.obs ? `<p class="obs">${esc(a.obs)}</p>` : ""}
    <span class="stamp">já passou</span>`;
}
function calGrid() {
  const now = NOW(), first = new Date(MES.ano, MES.mes, 1), dim = new Date(MES.ano, MES.mes + 1, 0).getDate();
  const hl = {}; AVISOS.forEach(a => a.dias.forEach(d => hl[d] = "hl-" + a.cor));
  let h = ["D", "S", "T", "Q", "Q", "S", "S"].map(x => `<span class="h">${x}</span>`).join("");
  for (let i = 0; i < first.getDay(); i++) h += "<span></span>";
  for (let d = 1; d <= dim; d++) {
    const over = new Date(MES.ano, MES.mes, d, 23, 59, 59) < now;
    const today = now.getFullYear() === MES.ano && now.getMonth() === MES.mes && now.getDate() === d;
    h += `<span class="d ${hl[d] || ""} ${over ? "past" : ""} ${today ? "today" : ""}">${d}</span>`;
  }
  return h;
}
const MESES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
function calNote() {
  const leg = AVISOS.map(a => `<span><i style="background:${COLORS[a.cor]}"></i>${esc(a.leg)}</span>`).join("");
  return `<span class="fix pin"></span>${tossBtn("calendário")}
    <p class="cal-title">${MESES[MES.mes]} ${MES.ano}</p>
    <div class="cal-grid" id="calGrid">${calGrid()}</div>
    <div class="cal-leg">${leg}</div>`;
}
const tagNote = () => `<span class="fix tape"></span>${tossBtn("crachá")}
  <div class="band-top">OLÁ, EU SOU<small>A CHAPA</small></div>
  <div class="tag-body"><b>Chapa Cosmos</b><span>2027</span><svg viewBox="0 0 200 200" aria-hidden="true"><use href="#logo" x="0" y="0" width="200" height="200"/></svg></div>`;
const postNote = () => `<span class="fix pin mint"></span>${tossBtn("cartão")}
  <div class="post-top"><p class="kicker">Cartão postal</p><span class="post-stamp"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-insta"/></svg></span></div>
  <h2 class="ttl">Fale com a gente</h2>
  <a class="insta" href="${CONTATO.insta}" target="_blank" rel="noopener">${esc(CONTATO.handle)}</a>
  <p class="lines">${esc(CONTATO.email)}<br><a href="index.html#contato">Sugestões e dúvidas</a></p>`;

const NOTES = [
  { id: "inscricoes", cls: "n-" + AVISOS[0].cor, html: dateNote(AVISOS[0]), a: AVISOS[0] },
  { id: "calendario", cls: "n-paper n-cal", html: calNote() },
  { id: "reuniao", cls: "n-" + AVISOS[1].cor, html: dateNote(AVISOS[1]), a: AVISOS[1] },
  { id: "cracha", cls: "n-paper n-tag", html: tagNote() },
  { id: "propaganda", cls: "n-" + AVISOS[2].cor, html: dateNote(AVISOS[2]), a: AVISOS[2] },
  { id: "votacao", cls: "n-" + AVISOS[3].cor, html: dateNote(AVISOS[3]), a: AVISOS[3] },
  { id: "postal", cls: "n-paper n-post", html: postNote() }
];
const ROT = [-3, 2, 3, -4, -2, 2.5, -2.5];

/* ---------- montar o mural ---------- */
const board = $("#board"), bin = $("#bin"), live = $("#live");
const btnRestore = $("#btnRestore"), btnArrange = $("#btnArrange");
let zTop = 10;
const notes = NOTES.map((d, i) => {
  const e = document.createElement("article");
  e.className = "note enter " + d.cls;
  e.dataset.id = d.id; e.tabIndex = 0;
  e.style.setProperty("--r", ROT[i % ROT.length] + "deg"); e.style.setProperty("--i", i);
  e.innerHTML = d.html;
  e.addEventListener("animationend", ev => { if (ev.target === e) e.classList.remove("enter"); });
  board.append(e);
  const title = (d.a && d.a.titulo) || e.querySelector(".ttl,.cal-title,.tag-body b")?.textContent || d.id;
  const n = { id: d.id, el: e, a: d.a, r: ROT[i % ROT.length], x: 0, y: 0, gone: store.gone.includes(d.id), title };
  if (n.gone) e.classList.add("gone");
  e.setAttribute("aria-label", title + ". Arraste para mover, Delete para jogar fora.");
  return n;
});
const byEl = new Map(notes.map(n => [n.el, n]));
const visible = () => notes.filter(n => !n.gone);

/* datas que passaram: riscadas de caneta */
function refresh() {
  const now = NOW();
  notes.forEach(n => {
    if (!n.a) return;
    const done = new Date(n.a.fim) < now;
    n.el.classList.toggle("done", done);
  });
  const g = $("#calGrid"); if (g) g.innerHTML = calGrid();
  drawStrikes();
}
/* a caneta risca cada linha da data (mesmo quando o texto quebra em duas) */
function drawStrikes() {
  notes.forEach(n => {
    if (!n.a || n.gone) return;
    const wh = n.el.querySelector(".when"), svg = wh.querySelector(".strike");
    const W = wh.offsetWidth, H = wh.offsetHeight, lines = [];
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    wh.querySelectorAll(".w").forEach(w => {
      const L = lines.find(l => Math.abs(l.top - w.offsetTop) < 6), r = w.offsetLeft + w.offsetWidth;
      if (L) L.x1 = Math.max(L.x1, r); else lines.push({ top: w.offsetTop, h: w.offsetHeight, x0: w.offsetLeft, x1: r });
    });
    svg.innerHTML = lines.map((l, i) => {
      const y = l.top + l.h * .58, a = l.x0 - 6, b = l.x1 + 6, d = b - a;
      return `<path pathLength="1" d="M${a} ${y + 2} C${a + d * .25} ${y - 7} ${a + d * .5} ${y + 7} ${a + d * .75} ${y - 3} S${b} ${y + 3} ${b} ${y - 3}"/>` +
             `<path class="p2" pathLength="1" d="M${a + 4} ${y - 8} C${a + d * .3} ${y + 5} ${a + d * .55} ${y - 8} ${b - 4} ${y + 6}"/>`;
    }).join("");
  });
}
refresh(); setInterval(refresh, 30000);

/* posição */
function place(n, x, y) { n.x = x; n.y = y; n.el.style.left = x + "px"; n.el.style.top = y + "px"; }
function fit() {
  let bottom = 0;
  visible().forEach(n => { bottom = Math.max(bottom, n.y + n.el.offsetHeight); });
  board.style.height = Math.max(520, bottom + 128) + "px";
}
function layout(reset) {
  const W = board.clientWidth, pad = 22, gap = 26, vis = visible();
  if (!vis.length) { fit(); return; }
  const nw = Math.max(...vis.map(n => n.el.offsetWidth));
  const cols = Math.max(1, Math.floor((W - pad * 2 + gap) / (nw + gap)));
  const colW = (W - pad * 2 - gap * (cols - 1)) / cols;
  const hs = Array(cols).fill(pad + 10);
  vis.forEach((n, i) => {
    const w = n.el.offsetWidth, h = n.el.offsetHeight, s = store.pos[n.id];
    if (s && !reset) { place(n, clamp(s[0] * W, -8, W - w + 8), Math.max(-6, s[1])); return; }
    const c = hs.indexOf(Math.min(...hs));
    const jx = ((i * 37) % 17) - 8, jy = ((i * 53) % 13) - 4;
    place(n, pad + c * (colW + gap) + (colW - w) / 2 + jx * (cols > 1 ? 1 : .5), hs[c] + jy);
    hs[c] += h + gap + 6;
  });
  fit();
  drawStrikes();
}
layout();
let lastW = board.clientWidth;
window.addEventListener("resize", () => { if (Math.abs(board.clientWidth - lastW) > 2) { lastW = board.clientWidth; layout(); } });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => layout());

function syncTools() {
  const any = notes.some(n => n.gone);
  btnRestore.hidden = !any;
  bin.classList.toggle("full", any);
}
syncTools();
const say = t => { live.textContent = ""; setTimeout(() => { live.textContent = t; }, 30); };

/* ---------- arrastar ---------- */
let drag = null, suppress = false;
const overBin = (x, y) => {
  const r = bin.getBoundingClientRect();
  return x > r.left - 18 && x < r.right + 18 && y > r.top - 18 && y < r.bottom + 18;
};
function lift(n) {
  n.el.classList.remove("enter");
  n.el.classList.add("held");
  n.el.style.zIndex = ++zTop;
  board.classList.add("dragging");
}
function drop(n, over) {
  board.classList.remove("dragging");
  bin.classList.remove("open");
  n.el.classList.remove("held", "over");
  if (over) { trash(n); return; }
  if (!REDUCE) {
    n.el.animate([
      { transform: `rotate(${n.r * .3}deg) scale(1.07)` },
      { transform: `rotate(${n.r}deg) scale(.97)`, offset: .55 },
      { transform: `rotate(${n.r}deg) scale(1)` }], { duration: 340, easing: "ease-out" });
    const pin = n.el.querySelector(".fix.pin");
    if (pin) pin.animate([{ transform: "translateY(-16px) scale(.6)", opacity: 0 }, { transform: "translateY(1px) scale(1.15)", opacity: 1, offset: .7 }, { transform: "none", opacity: 1 }], { duration: 360, delay: 80, fill: "backwards" });
  }
  store.pos[n.id] = [n.x / board.clientWidth, n.y]; save();
  fit();
}
board.addEventListener("pointerdown", e => {
  const el = e.target.closest(".note");
  if (!el || e.target.closest(".toss")) return;
  if (e.pointerType === "mouse" && e.button !== 0) return;
  const n = byEl.get(el);
  drag = { n, id: e.pointerId, sx: e.clientX, sy: e.clientY, ox: n.x, oy: n.y, active: false, touch: e.pointerType !== "mouse", timer: 0 };
  if (drag.touch) {
    /* no celular: segurar um instante para pegar o recado (assim a página ainda rola) */
    drag.timer = setTimeout(() => { if (drag && drag.n === n) { drag.active = true; lift(n); if (navigator.vibrate) { try { navigator.vibrate(12); } catch (x) {} } } }, 260);
  }
});
board.addEventListener("pointermove", e => {
  if (!drag || e.pointerId !== drag.id) return;
  const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
  if (!drag.active) {
    if (drag.touch) { if (Math.hypot(dx, dy) > 10) { clearTimeout(drag.timer); drag = null; } return; }
    if (Math.hypot(dx, dy) < 5) return;
    drag.active = true; lift(drag.n);
    try { board.setPointerCapture(e.pointerId); } catch (x) {}
  }
  e.preventDefault();
  const n = drag.n, W = board.clientWidth, H = board.clientHeight;
  place(n, clamp(drag.ox + dx, -10, W - n.el.offsetWidth + 10), clamp(drag.oy + dy, -8, H - n.el.offsetHeight + 24));
  const over = overBin(e.clientX, e.clientY);
  bin.classList.toggle("open", over); n.el.classList.toggle("over", over);
  drag.over = over;
});
const endDrag = e => {
  if (!drag || e.pointerId !== drag.id) return;
  clearTimeout(drag.timer);
  const d = drag; drag = null;
  if (d.active) {
    suppress = true; setTimeout(() => { suppress = false; }, 0);
    drop(d.n, e.type === "pointerup" && !!d.over);
  }
};
board.addEventListener("pointerup", endDrag);
board.addEventListener("pointercancel", endDrag);
board.addEventListener("touchmove", e => { if (drag && drag.active) e.preventDefault(); }, { passive: false });
board.addEventListener("click", e => { if (suppress) { e.preventDefault(); e.stopPropagation(); } }, true);
board.addEventListener("dragstart", e => e.preventDefault());

/* botão de lixo e teclado */
board.addEventListener("click", e => {
  const b = e.target.closest(".toss"); if (!b) return;
  trash(byEl.get(b.closest(".note")));
});
board.addEventListener("keydown", e => {
  const el = e.target.closest(".note"); if (!el || e.target !== el) return;
  const n = byEl.get(el), W = board.clientWidth, H = board.clientHeight, s = 14;
  const mv = { ArrowLeft: [-s, 0], ArrowRight: [s, 0], ArrowUp: [0, -s], ArrowDown: [0, s] }[e.key];
  if (mv) {
    e.preventDefault();
    place(n, clamp(n.x + mv[0], -10, W - el.offsetWidth + 10), clamp(n.y + mv[1], -8, H - el.offsetHeight + 24));
    store.pos[n.id] = [n.x / W, n.y]; save(); fit();
  } else if (e.key === "Delete" || e.key === "Backspace") { e.preventDefault(); trash(n); }
});

/* ---------- amassar e jogar no lixo ---------- */
const RECT = "polygon(0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,0% 100%,0% 50%)";
const CRUM = "polygon(14% 10%,46% 22%,86% 6%,94% 48%,78% 94%,52% 74%,12% 88%,6% 46%)";
function trash(n) {
  if (!n || n.gone) return;
  n.gone = true;
  if (!store.gone.includes(n.id)) store.gone.push(n.id);
  save(); say(n.title + " jogado fora.");
  bin.classList.remove("open"); board.classList.remove("dragging");
  const el = n.el;
  const finish = () => { el.classList.add("gone"); el.classList.remove("held", "over"); syncTools(); fit(); };
  if (REDUCE) { finish(); return; }
  const b = board.getBoundingClientRect(), r = el.getBoundingClientRect();
  const cx = r.left - b.left + r.width / 2, cy = r.top - b.top + r.height / 2;
  const color = getComputedStyle(el).backgroundColor;
  const from = getComputedStyle(el).transform;
  const a1 = el.animate([
    { transform: from, clipPath: RECT, filter: "none" },
    { transform: `rotate(${n.r + 26}deg) scale(.5)`, clipPath: CRUM, filter: "brightness(.9)" }
  ], { duration: 300, easing: "ease-in", fill: "forwards" });
  a1.onfinish = () => {
    finish(); a1.cancel();
    const ball = document.createElement("div");
    ball.className = "ball"; ball.style.backgroundColor = color; board.append(ball);
    const br = bin.getBoundingClientRect();
    const tx = br.left - b.left + br.width / 2, ty = br.top - b.top + br.height * .38;
    const at = (x, y, s, rot) => `translate(${x - 28}px,${y - 28}px) scale(${s}) rotate(${rot}deg)`;
    const a2 = ball.animate([
      { transform: at(cx, cy, .55, 0), offset: 0 },
      { transform: at(cx, cy, 1, 40), offset: .12 },
      { transform: at((cx + tx) / 2, Math.min(cy, ty) - 140, 1, 220), offset: .56 },
      { transform: at(tx, ty, .75, 420), offset: 1 }
    ], { duration: 950, easing: "cubic-bezier(.32,.1,.55,1)", fill: "forwards" });
    a2.onfinish = () => {
      ball.remove(); bin.classList.add("shake");
      setTimeout(() => bin.classList.remove("shake"), 500);
    };
  };
}
btnRestore.addEventListener("click", () => {
  store.gone = []; save();
  notes.forEach(n => {
    if (!n.gone) return;
    n.gone = false; delete store.pos[n.id];
    n.el.classList.remove("gone", "enter");
    if (!REDUCE) n.el.animate([{ opacity: 0, transform: `rotate(${n.r + 8}deg) scale(1.15)` }, { opacity: 1, transform: `rotate(${n.r}deg) scale(1)` }], { duration: 420, easing: "ease-out" });
  });
  save(); layout(); syncTools(); say("Recados de volta ao mural.");
});
btnArrange.addEventListener("click", () => {
  store.pos = {}; save();
  notes.forEach(n => n.el.classList.add("arranging"));
  layout(true);
  setTimeout(() => notes.forEach(n => n.el.classList.remove("arranging")), 700);
  say("Mural arrumado.");
});

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
paintBtn();
