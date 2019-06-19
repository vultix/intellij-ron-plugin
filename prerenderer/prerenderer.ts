import { enableProdMode } from '@angular/core';
import { readFileSync, writeFile, readdirSync } from 'fs';
import { join } from 'path';
import { renderModuleFactory } from '@angular/platform-server';
import { MODULE_MAP } from '@nguniversal/module-map-ngfactory-loader';
import 'zone.js/dist/zone-node';
enableProdMode();

const mainFile = readdirSync('./prerender/').find(file => file.startsWith('main'));

const { AppPrerenderModuleNgFactory, LAZY_MODULE_MAP } = require('./prerender/' + mainFile);

const indexFile = readFileSync(join('intellij-ron-plugin', 'index.html'), 'utf8');
const routes = ['/', '/license', '/features', '/404', '/quickstart'];

const distFolder = './intellij-ron-plugin';

routes.forEach(route => renderToHtml(route));

function renderToHtml(url: string): void {
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
    // if (url !== '/index.html') {
    //   mkdirSync(folderPath);
    // }
    if (url === '/') {
      url = '/index';
    }

    writeFile(distFolder + url + '.html', html,  (err =>  {
      if (err) {
        throw err;
      }
      console.log(`successfully prerendered: ${url}`);
    }));
  });
}
