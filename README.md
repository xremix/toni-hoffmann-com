# Toni-Hoffmann.com

Open Source has always a passion, so why not open sourcing my personal portfolio website.

The website is hosted at [toni-hoffmann.com](https://www.toni-hoffmann.com).

The base idea is to have a portfolio, that represents me in different kind of ways. On one site, it is the contents, like the photography, projects and music that I created. But then it's also the minimalistic bright design, the animation contents or the tons of images I fit in on the pages.

![alt text](src/assets/website-mockup.png)

## To-Do´s

- [ ] Increase banner image quality, based on the browser size
- [ ] Improve user experience for contact via mail

## Technologies used

- **[Angular](https://angular.io/)** is the root framework of this application
- **[Bootstrap](https://getbootstrap.com/)** is used for the layout, buttons and navigation
- **[ng-xGallerify](https://github.com/xremix/ng-xGallerify)** is my gallery component that hosts the photography portfolio

Everything else is developed from scratch. The languages that have been used are [TypeScript](https://www.typescriptlang.org/), [SCSS](https://sass-lang.com/) and HTML.

**Branching** should be done like the git flow, with a *master*, *develop* and *feature* branches, while *master* represents the production state of the database.

Depending on the project, my favorite set up is to work with a seperate [terminal](https://www.iterm2.com/) and a nice clean [editor](https://atom.io/), which I both can upgrade with plug ins and adjust to my needs. I also tried to code much of this project by using [GitHub Codespaces](https://github.com/features/codespaces), which was a great success.

## Setup

- Install [Node.js](https://nodejs.org/en/)
- Install [Angular CLI](https://github.com/angular/angular-cli)
- Clone the Repository via `git clone git@github.com:xremix/toni-hoffmann-com.git`
- Run `npm i` in your local repository

## Run

- Run `ng serve` to get the dev server started
- Navigate to `http://localhost:4200/`
- The app will automatically reload if you change any of the source files

## Deploy

- Run `npm run prerender
` to [prerender](https://dev.to/michaeljota/how-to-prerender-your-angular-app-using-angular-universal-4g0b) the project
- Upload the artifacts in the `dist/toni-hoffmann-com` directory to the webspace
- Make sure you have rewrite rules set up on the webserver
- Make sure deploy the api in the folder `/api` on the same level than the angular application. The API is part of a private repository
