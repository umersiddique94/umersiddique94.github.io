# umersiddique94.github.io

Personal academic website of Umer Siddique, a lightweight Jekyll site styled after the
[al-folio](https://github.com/alshedivat/al-folio) theme. It is deployed by
`.github/workflows/jekyll.yml` on every push to `master`.

## Where to edit

| What | File |
| --- | --- |
| Bio, name line, links, nav | `index.html`, `_config.yml` |
| News (newest first) | `_data/news.yml` |
| Publications | `_data/papers.yml` |
| Paper figures | `assets/img/papers/` (set `img:` in `papers.yml`) |
| CV PDF | `files/Umer_Siddique_CV.pdf` |
| Styles / colours | `assets/css/main.css` (`--accent` sets the theme colour) |

A paper with `selected: N` also appears on the home page, ordered by `N`. A paper without
`img:` gets a venue tile instead.

## Local preview

```
bundle install
bundle exec jekyll serve
```
