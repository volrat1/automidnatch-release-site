# Automidnatch Release Site

Minimal static release site for GitHub Pages.

## Replace these files

### 1. Cover

Replace:

```text
assets/images/cover-placeholder.svg
```

with your real cover.

Recommended:

```text
assets/images/cover.webp
```

Then change the image path in `index.html`.

### 2. Final tracks

Put the four MP3 files here:

```text
assets/audio/final/
```

Default filenames expected by the site:

```text
01-track-one.mp3
02-track-two.mp3
03-track-three.mp3
04-track-four.mp3
```

You can rename them, but update the `<source src="...">` entries in both `index.html` and `about.html`.

### 3. Pre-APS audio

Put short exports of the four original snippets here:

```text
assets/audio/pre-aps/
```

Expected filenames:

```text
01-pre-aps.mp3
02-pre-aps.mp3
03-pre-aps.mp3
04-pre-aps.mp3
```

These do not need to be full tracks. Short loops / cells are enough.

### 4. Renoise snippets

Edit:

```text
assets/snippets/01.txt
assets/snippets/02.txt
assets/snippets/03.txt
assets/snippets/04.txt
```

Paste a readable tracker representation, pattern text, XML excerpt or other compact source material.

### 5. Titles and text

Search and replace in `index.html`:

```text
RELEASE TITLE
TRACK ONE
TRACK TWO
TRACK THREE
TRACK FOUR
```

Then edit the prose in `about.html`.

## Test locally

From this folder:

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

Do not open `about.html` directly as `file://` if you want the snippet loader to work; serve it through a local HTTP server.

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Copy this folder into it.
3. Commit and push.
4. In GitHub: Settings → Pages.
5. Choose `Deploy from a branch`.
6. Select your main branch and `/ (root)`.

The site is plain HTML/CSS/JS: no build system, dependencies or framework.
