# Toni-Hoffmann.com

Open Source has always a passion, so why not open sourcing my private portfolio website?!

You can see the results at [toni-hoffmann.com](https://www.toni-hoffmann.com).

![alt text](src/assets/website-mockup.png)


## Technologies used

- **[Angular](https://angular.io/)** is the root framework of this application
- **[Bootstrap](https://getbootstrap.com/)** is used for the layout, buttons and navigation
- **[ng-xGallerify](https://github.com/xremix/ng-xGallerify)** is my gallery component that hosts the photography portfolio

Everything else is developed from scratch.

## Setup

- Install [Node.js](https://nodejs.org/en/)
- Install [Angular CLI](https://github.com/angular/angular-cli)
- Clone the Repository via `git clone git@github.com:xremix/toni-hoffmann-com.git`
- Run `npm i` in your local repository

## Usage

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploy

- Run `ng build --prod` to build the project
- Upload the artifacts in the `dist/toni-hoffmann-com` directory to the webspace
- Make sure you have rewrite rules set up on the webserver
- Make sure deploy the api in the folder `/api` on the same level than the angular application. The API is part of a private repository
