# Toni-Hoffmann.com

Open Source has always a passion, so why not open sourcing my personal portfolio website.

The website is hosted at [toni-hoffmann.com](https://www.toni-hoffmann.com).

The base idea is to have a portfolio, that represents me in different kind of ways. On one site, it is the contents, like the photography, projects and music that I created. But then it's also the minimalistic bright design, the animation contents or the tons of images I fit in on the pages.

![alt text](src/assets/website-mockup.webp)

## To-Do´s

- [ ] Increase banner image quality, based on the browser size

## Technologies used

- **[Angular](https://angular.io/)** is the root framework of this application
- **[Bootstrap](https://getbootstrap.com/)** is used for the layout, buttons and navigation
- **[ng-xGallerify](https://github.com/xremix/ng-xGallerify)** is my gallery component that hosts the photography portfolio

Everything else is developed from scratch. The languages that have been used are [TypeScript](https://www.typescriptlang.org/), [SCSS](https://sass-lang.com/) and HTML.

**Branching** should be done like the git flow, with a *master*, *develop* and *feature* branches, while *master* represents the production state of the database.

Depending on the project, my favorite set up is to work with a seperate [terminal](https://www.iterm2.com/) and a nice clean [editor](https://atom.io/), which I both can upgrade with plug ins and adjust to my needs. I also tried to code much of this project by using [GitHub Codespaces](https://github.com/features/codespaces), which was a great success.

## Setup

- Install [Node.js](https://nodejs.org/en/) version 24 (the version is pinned in `.nvmrc`)
- Clone the Repository via `git clone git@github.com:xremix/toni-hoffmann-com.git`
- If using [nvm](https://github.com/nvm-sh/nvm), run `nvm install` and `nvm use` in the repository to select Node 24.
- Run `npm install` in your local repository

## Run

- Run `npm start` to get the dev server started with SSR enabled
- Navigate to `http://localhost:4200/`
- The app will automatically reload if you change any of the source files

## Deploy

### Prerequisites
- Make sure you have rewrite rules set up on the webserver
- Make sure deploy the api in the folder `/api` on the same level than the angular application. The API is part of a private repository

### Build and Prerender
- Run `nvm use` in the deployment terminal before building (or otherwise ensure Node 24 is selected).
- Run `npm run prerender` to generate the sitemap and [prerender](https://angular.dev/guide/prerendering) every route in `routes.txt`. This produces route-specific HTML and metadata for search engines.
- Upload the complete contents of `dist/toni-hoffmann-com/browser` (including all prerendered subfolders and the root files) to the web server.
- Browser navigation, SSR, and prerendering use the same routes and generate URLs with a trailing slash. Old `/.` URLs are still accepted.
- For Node hosting instead of static hosting, run `npm run build:ssr` and then `npm run serve:ssr`.

### Gallery image indexing
- Gallery HTML includes full-size image sources, descriptive alternative text and captions, and direct image links that also work without JavaScript. Small screens use thumbnails; normal clicks still open the lightbox.
- Each gallery page includes `ImageGallery` / `ImageObject` structured data with full-size URLs and photographer attribution. This helps describe the images; it does not guarantee rankings or rich results.
- `npm run prerender` generates image sitemap entries and gallery routes from `api/images/*.json`. Pagination is shared with the gallery through `src/app/models/gallery-config.json`; update the metadata before building whenever photos change.
- Prerendering reads gallery metadata from the live API. Deploy matching `api/images/*.json` files and image files before building so prerendered gallery pages and the locally generated sitemap describe the same photos.
- The sitemap deliberately omits `lastmod` rather than reporting the build date as a content change date. `robots.txt` advertises the sitemap, and pages allow large image previews.
- After deployment, submit `https://www.toni-hoffmann.com/sitemap.xml` in Google Search Console and inspect a gallery URL's crawled HTML. Ensure `/images/` still serves actual image files without authentication or crawler-blocking headers. Google needs time to recrawl, and inclusion in image search is not guaranteed.
- Run `node --test generate-sitemap.test.js` to check sitemap pagination and XML escaping.
