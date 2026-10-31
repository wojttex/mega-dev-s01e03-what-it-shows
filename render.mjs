import { createServer } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const root=path.dirname(new URL(import.meta.url).pathname);
const server=await createServer({root,configFile:false,resolve:{alias:{'#lib':path.join(root,'src/lib')}},plugins:[svelte({configFile:false,extensions:['.svelte','.svx'],preprocess:[mdsvex({extensions:['.svx'],layout:{runbook:path.join(root,'src/lib/layouts/runbook.svelte')}})],compilerOptions:{css:'injected',dev:false}})],server:{middlewareMode:true,hmr:false},appType:'custom'});
try {
 const {default:Page}=await server.ssrLoadModule('/src/routes/kb/incidents/4471-reassessment/+page.svx');
 const {render}=await server.ssrLoadModule('svelte/server');
 const result=render(Page);
 await mkdir(path.join(root,'rendered'),{recursive:true});
 await writeFile(path.join(root,'rendered/4471-reassessment.html'),'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'+result.head+'</head><body>'+result.body+'</body></html>');
 console.log('Rendered original .svx with Svelte components to rendered/4471-reassessment.html');
} finally {await server.close();}
