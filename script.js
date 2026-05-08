/*
  Opcjonalne zachowanie filarow.
  Wszystkie tresci sa w index.html, wyglad w style.css.
  Ten plik dodaje tylko delikatne aktywowanie filaru po kliknieciu lub najechaniu.
*/

const pillars = document.querySelectorAll(".pillar");

function setActivePillar(selectedPillar) {
  pillars.forEach((pillar) => {
    pillar.classList.toggle("is-active", pillar === selectedPillar);
  });
}

pillars.forEach((pillar) => {
  pillar.tabIndex = 0;

  pillar.addEventListener("pointerenter", () => setActivePillar(pillar));
  pillar.addEventListener("focus", () => setActivePillar(pillar));
  pillar.addEventListener("click", () => setActivePillar(pillar));
});

if (pillars.length > 0) {
  setActivePillar(pillars[0]);
}
