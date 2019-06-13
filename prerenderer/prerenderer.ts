import { enableProdMode } from '@angular/core';
import { readFileSync, writeFile, mkdirSync } from 'fs';
import { join } from 'path';
import { renderModuleFactory } from '@angular/platform-server';
import { MODULE_MAP } from '@nguniversal/module-map-ngfactory-loader';
import 'zone.js/dist/zone-node';
enableProdMode();

const val = require('./prerender/main');
const { AppPrerenderModuleNgFactory, LAZY_MODULE_MAP } = require('./prerender/main');

const indexFile = readFileSync(join('documentation', 'index.html'), 'utf8');
const routes = ['/license', '/404', '/coming-soon'];

const distFolder = './documentation';

renderToHtml('/index.html', distFolder);
routes.forEach(route => renderToHtml(route, distFolder + route));

function renderToHtml(url: string, folderPath: string): void {
  // Render the module with the correct url just
  // as the server would do
  renderModuleFactory(AppPrerenderModuleNgFactory, {
    url,
    document: indexFile,
    extraProviders: [
      {provide: MODULE_MAP, useValue: LAZY_MODULE_MAP}
    ]
  }).then(html => {
    // create the route directory
    if (url !== '/index.html') {
      mkdirSync(folderPath);
    }
    writeFile(folderPath + '/index.html', html,  (err =>  {
      if (err) {
        throw err;
      }
      console.log(`successfully prerendered: ${url}`);
    }));
  });
}
