import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import vm from 'node:vm';
const source=fs.readFileSync('data/catalog.ts','utf8');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
const context={exports:{}}; vm.runInNewContext(js,context);
const allModels=context.exports.catalogModels;
const models=allModels.filter(m=>m.id<=14);
const rows=fs.readFileSync('docs/CATALOG_VERIFICATION.md','utf8').split('\n').filter(x=>/^\| (Barva|Zurquí|Orosí|Tilarán|Upala|Talamanca|Turrialba|Tenorio|Tapantí|Irazú|Miravalles|Arenal|Poás|Térraba) \|/.test(x));
assert.equal(models.length,14); assert.equal(rows.length,14);
for (const row of rows) {
 const [,name,,area,terrace,price,beds,baths]=row.split('|').map(x=>x.trim());
 const model=models.find(m=>m.name==='Modelo '+name); assert.ok(model,name);
 assert.ok(model.area.includes(area+' m²'),name+' closed area'); assert.ok(model.area.includes('terraza '+terrace+' m²'),name+' terrace');
 assert.ok(model.price.includes(price.replace(' sin piscina','')),name+' price');
 assert.equal(model.bedrooms,beds.includes('servicio')?3:Number(beds),name+' bedrooms');
 assert.ok(model.features.some(f=>f.startsWith(baths+' baño')),name+' baths');
 for (const image of model.images) for(const field of ['src','fullSrc','thumbnailSrc']) assert.ok(fs.statSync('public'+image[field]).size>0,image[field]);
 assert.equal(model.images.filter(i=>i.label==='Plano').length,1);
}
assert.ok(models.find(m=>m.name==='Modelo Arenal').price.includes('sin piscina'));
// Distribution checklist independently transcribed from PDF pages 3-29.
const distribution = {
 Barva: ['cocina de concepto abierto', 'terraza'],
 'Zurquí': ['cocina', 'sala', 'terraza'],
 'Orosí': ['cocina', 'sala', 'terraza', 'piedra clara u oscura'],
 'Tilarán': ['cocina', 'sala', 'terraza'],
 Upala: ['cocina de concepto abierto', 'terraza'],
 Talamanca: ['cocina abierta con desayunador', 'lavandería integrada', 'terraza frontal'],
 Turrialba: ['recámara principal', 'sala de estar', 'cocina abierta con desayunador', 'terraza exterior'],
 Tenorio: ['baño compartido', 'sala de estar', 'cocina de concepto abierto', 'terraza perimetral en u', 'circulación central'],
 'Tapantí': ['cocina abierta con desayunador', 'terraza amplia'],
 'Irazú': ['cocina abierta con desayunador', 'sala', 'lavandería', 'dos terrazas'],
 Miravalles: ['walk-in closets', 'cocina abierta con desayunador', 'lavandería', 'terraza frontal'],
 Arenal: ['sala de estar', 'comedor', 'cocina abierta con desayunador', 'terraza amplia', 'piscina no incluida', 'circulación central'],
 'Poás': ['sala comedor', 'cocina abierta con desayunador', 'lavandería', 'terraza amplia', 'circulación central'],
 'Térraba': ['2 recámaras + 1 de servicio', 'sala y comedor', 'cocina de concepto abierto', 'estudio', 'lavandería y depósito', 'terraza', 'garaje de 32.87 m²'],
};
assert.equal(new Set(models.map(m=>m.id)).size,14,'Unique model ids');
assert.equal(new Set(models.map(m=>m.name)).size,14,'Unique model names');
let assetCount=0;
for (const model of models) {
 const name=model.name.replace('Modelo ','');
 const text=[...model.features,model.description].join(' ').toLowerCase();
 for (const detail of distribution[name]) assert.ok(text.includes(detail),`${name}: missing ${detail}`);
 const slug=name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 for (const image of model.images) {
  for (const key of ['src','fullSrc','thumbnailSrc']) assert.ok(image[key].startsWith(`/images/catalog/verified/${slug}-`),`${name}: incorrect image association`);
  assetCount++;
 }
}
assert.equal(assetCount,34,'All PDF model views present');
console.log('PASS: complete distribution checklist, unique models and 34 image associations.');
console.log('PASS: 14 model names, areas, terraces, prices, bedrooms, bathrooms and 102 asset files checked against PDF transcription.');

const expected2025 = [
 ['Casa Bangkok',44,48365.5,1,1,'bangkok'],['Casa Singapur',44,51639,1,1,'singapur'],
 ['Casa New York',67,71561,2,1,'new-york'],['Casa Dubái',106,114590,3,2,'dubai'],
 ['Casa Estambul',119,114000,3,1,'estambul'],['Casa París',122,115688,2,1,'paris'],
 ['Casa Londres',132,137805,2,1,'londres'],['Casa Tokio',99.23,95641.5,2,1,'tokio'],
 ['Casa Hawai',72,80908,2,2,'hawai']
];
assert.equal(allModels.length,23);
assert.equal(new Set(allModels.map(m=>m.id)).size,23);
assert.equal(new Set(allModels.map(m=>m.name)).size,23);
for (const [name,area,price,beds,baths,slug] of expected2025) {
 const model=allModels.find(m=>m.name===name); assert.ok(model,name);
 assert.equal(model.area,'Área '+area+' m²'+(slug==='hawai'?' + piscina de 12 m²':''));
 assert.equal(Number(model.price.replace(/[^0-9.]/g,'').replace(/^\./,'')),price,name);
 assert.equal(model.bedrooms,beds,name); assert.ok(model.features.includes(baths+' baño'+(baths>1?'s':'')),name);
 assert.equal(model.hasTerrace,slug!=='dubai'); assert.equal(model.images.length,2);
 for (const [i,image] of model.images.entries()) {
  assert.equal(image.label,i===0?'Fachada':'Plano');
  for (const field of ['src','fullSrc','thumbnailSrc']) {
   assert.ok(image[field].startsWith('/images/catalog/verified/'+slug+'-'));
   assert.ok(fs.statSync('public'+image[field]).size>0);
  }
 }
}
const section=fs.readFileSync('components/CatalogSection.tsx','utf8');
assert.ok(section.includes('useState<CatalogSort>("price-asc")'));
assert.ok(section.includes('setSort("price-asc")'));
assert.ok(section.includes('sort !== "price-asc"'));
console.log('PASS: 23 unique models, 9 additional PDF records and user corrections, 156 assets, ascending default and reset.');
