# Tensile Polska - strona startowa

To jest pierwsza, w pelni edytowalna strona z jednym zdjeciem w tle i czterema duzymi animowanymi filarami.

## Jak edytowac tresc

- Otworz `index.html`.
- Kazdy filar jest osobnym blokiem `<article class="pillar">`.
- Tytul zmieniasz w `<h2>`.
- Opis zmieniasz w `<p>`.
- Podkategorie zmieniasz w linkach `<a>` wewnatrz listy `<ul class="pillar__links">`.
- Adres podstrony zmieniasz w atrybucie `href`, np. `href="podstrony/zadaszenia-i-przekrycia.html"`.
- Kolor paska filaru zmieniasz w `style="--accent: ..."` przy danym filarze.

## Jak edytowac podstrony

- Podstrony sa w folderze `podstrony`.
- Kazdy plik HTML odpowiada jednej klikalnej podkategorii.
- Tytul podstrony zmieniasz w `<h1>`.
- Opis podstrony zmieniasz w akapitach `<p>`.

## Jak zmienic zdjecie i logo

- Najprosciej podmien plik `zdjecie.webp` na nowe zdjecie o tej samej nazwie.
- Logo na gorze strony jest w pliku `logos.svg`.
- Alternatywnie w `index.html` zmien `src="zdjecie.webp"` albo `src="logos.svg"` na nazwe innego pliku.

## Jak edytowac wyglad

- Otworz `style.css`.
- Glowny uklad filarow jest w sekcji `.pillars`.
- Wyglad pojedynczego filaru jest w sekcji `.pillar`.
- Animacja wejscia jest w `@keyframes pillarEnter`.
- Widok telefonu jest w sekcjach `@media`.

## Jak uruchomic

Otworz plik `index.html` w przegladarce. Strona nie wymaga instalowania dodatkowych narzedzi.
