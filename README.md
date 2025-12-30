# Strona internetowa do pracy inżynierskiej

To jest prosty szablon strony w czystym HTML/CSS/JS (bez frameworków i bez instalowania paczek).

## Jak uruchomić

1. Otwórz plik `index.html` w przeglądarce (dwuklik), **albo**
2. Uruchom lokalny serwer (zalecane, jeśli później dodasz moduły / fetch):

### Opcja A: Python

```bash
python -m http.server 5500
```

Wejdź na: http://localhost:5500

### Opcja B: VS Code Live Server

Zainstaluj rozszerzenie „Live Server”, kliknij prawym na `index.html` → **Open with Live Server**.

## Co edytować najpierw

- Sekcję „Streszczenie” oraz dane autora w `index.html`
- Nagłówki i listy w sekcjach: O projekcie, Cele, Metody, Wyniki
- Dane kontaktowe

## Struktura

- `index.html` — treść strony
- `styles.css` — wygląd
- `script.js` — menu mobilne + drobne interakcje
- `assets/` — miejsce na grafiki (np. `assets/img/diagram.png`)

## Zdjęcia pracy (galeria)

W `index.html` jest sekcja „Zdjęcia pracy”, która oczekuje plików w `assets/img/` o nazwach:

- `schemat_skrzyzowania.jpg`
- `model_01.jpg`
- `model_02.jpg`
- `model_03.jpg`
- `model_04.jpg`
- `model_05.jpg`

Jeśli Twoje zdjęcia mają inne nazwy/formaty (np. `.png`), zmień nazwy plików albo podmień ścieżki w `index.html`.

## Udostępnienie strony (publiczny link)

Jeśli chcesz, żeby strona była dostępna dla każdego, kto ma link, najprościej użyć hostingu statycznego.

### GitHub Pages (najprościej)

1) Wrzuć projekt do repozytorium na GitHub.
2) GitHub → **Settings** → **Pages**.
3) **Build and deployment** → wybierz **Deploy from a branch**.
4) Branch: `main`, folder: `/ (root)`.

Po chwili dostaniesz stały link.

### Prywatność (nieindeksowanie)

W projekcie jest `robots.txt` oraz meta `noindex`, co zmniejsza szansę indeksowania przez wyszukiwarki.
To nie blokuje dostępu — każdy z linkiem nadal wejdzie.
