// app.js – logica (non modificare)

let ultimoIndice = -1;

function mostraImprevisto() {
  if (!IMPREVISTI || IMPREVISTI.length === 0) {
    alert("Aggiungi almeno un imprevisto in imprevisti.js!");
    return;
  }

  let idx;
  do {
    idx = Math.floor(Math.random() * IMPREVISTI.length);
  } while (IMPREVISTI.length > 1 && idx === ultimoIndice);
  ultimoIndice = idx;

  const imp = IMPREVISTI[idx];
  document.getElementById("popupEmoji").textContent = imp.emoji;
  document.getElementById("testoImprevisto").textContent = imp.testo;

  document.getElementById("overlay").classList.add("attivo");
  document.getElementById("popup").classList.add("attivo");

  const btn = document.getElementById("btnImprevisto");
  btn.classList.remove("btn-shake");
  void btn.offsetWidth;
  btn.classList.add("btn-shake");
  setTimeout(() => btn.classList.remove("btn-shake"), 600);
}

function chiudiPopup() {
  document.getElementById("overlay").classList.remove("attivo");
  document.getElementById("popup").classList.remove("attivo");
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") chiudiPopup();
});
