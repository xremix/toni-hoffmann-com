import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import AppServerModule from './main.server';

const browserDistFolder = join(import.meta.dirname, '../browser');
const app = express();
const commonEngine = new CommonEngine({
  allowedHosts: ['toni-hoffmann.com', 'www.toni-hoffmann.com', 'localhost', '127.0.0.1']
});

app.use(express.static(browserDistFolder, { maxAge: '1y', index: false }));

app.use((req, res, next) => {
  commonEngine
    .render({
      bootstrap: AppServerModule,
      documentFilePath: join(browserDistFolder, 'index.html'),
      publicPath: browserDistFolder,
      url: `${req.protocol}://${req.get('host') ?? 'localhost'}${req.originalUrl}`,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl || '/' }]
    })
    .then(html => res.send(html))
    .catch(next);
});

if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, error => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
