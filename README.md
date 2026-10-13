# manantayal.com

Source for [Manan Tayal](https://manantayal.com)'s personal website, built with Jekyll on the [al-folio](https://github.com/alshedivat/al-folio) theme and deployed with GitHub Pages.

## Updating content

- **Bio:** `_pages/about.md`
- **News:** add a file to `_news/`
- **Publications:** `_bibliography/papers.bib` (preview images go in `assets/img/publication_preview/`)
- **CV:** replace `assets/pdf/Manan_Tayal_CV.pdf`

Pushing to `main` rebuilds and deploys the site automatically.

## Local preview

```bash
docker compose up
```

Then open http://localhost:8080.
