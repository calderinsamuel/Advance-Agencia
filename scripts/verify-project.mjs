import { readFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';
function load(file) {
  const result = ts.transpileModule(readFileSync(file, 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}});
  const context = { exports: {}, encodeURIComponent };
  vm.runInNewContext(result.outputText, context);
  return context.exports;
}
const {catalogoItems} = load('src/data/catalogo.ts');
const {whatsappUrl,contact} = load('src/lib/contact.ts');
assert.equal(catalogoItems.length,15);
assert.equal(new Set(catalogoItems.map(p=>p.id)).size,15);
for (const item of catalogoItems) {
  assert.ok(item.imagenes.length,`${item.titulo}: falta imagen`);
  for (const image of item.imagenes) assert.ok(existsSync(`public${image.src}`),`No existe: ${image.src}`);
}
for (const message of ['María & José + 50% #local\nMedida: 2 × 3 m','¿Me cotizan 100 mugs?','🙂']) {
  const url = new URL(whatsappUrl(message));
  assert.equal(url.searchParams.get('text'),message);
  assert.equal(url.pathname,`/${contact.phone}`);
  assert.equal(url.searchParams.size,1);
}
for (const asset of ['public/images/advance-studio.png','public/catalogo.pdf','public/logo.png','public/favicon.ico','public/apple-touch-icon.png']) assert.ok(existsSync(asset),`Falta ${asset}`);
const html=readFileSync('.next/server/app/index.html','utf8');
for (const section of ['inicio','servicios','catalogo','nosotros','cotizacion','contacto']) assert.ok(html.includes(`id="${section}"`),`Falta sección ${section}`);
for (const oldText of ['¡Solicitud enviada!','Carlos Mendoza','cookies_aceptadas']) assert.ok(!html.includes(oldText));
assert.ok(existsSync('.next/server/app/privacidad.html'));
assert.ok(existsSync('.next/server/app/terminos.html'));
console.log('OK: 15 productos, imágenes, enlaces WhatsApp con caracteres especiales, secciones y páginas legales.');
