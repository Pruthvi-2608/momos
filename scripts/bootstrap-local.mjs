// Offline recovery for this workstation. Copies dependencies; never modifies source projects.
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
const roots=['../Momos and stuff','../vihaan traders','D:/video studio','../boat and bites'].map(x=>path.resolve(x));
const installed=new Set();
function install(name,sourceRoot){
 if(installed.has(name))return;
 let source;
 for(const root of [sourceRoot,...roots].filter(Boolean)){
  const candidate=path.join(root,'node_modules',name);
  if(fs.existsSync(path.join(candidate,'package.json'))){source=candidate;break;}
 }
 if(!source){if(!name.includes('linux')&&!name.includes('darwin'))console.log('Unavailable offline:',name);return;}
 installed.add(name);
 const dest=path.resolve('node_modules',name);
 fs.mkdirSync(path.dirname(dest),{recursive:true});
 fs.cpSync(source,dest,{recursive:true,force:true});
 const meta=JSON.parse(fs.readFileSync(path.join(source,'package.json'),'utf8'));
 for(const dep of Object.keys({...meta.dependencies,...meta.optionalDependencies})){ 
  let resolvedRoot=path.dirname(path.dirname(source));
  try {const req=createRequire(path.join(source,'package.json'));const entry=req.resolve(dep+'/package.json');resolvedRoot=entry.slice(0,entry.lastIndexOf('node_modules'));}catch{/* use source project */}
  install(dep,resolvedRoot);
 }
 if(meta.bin){fs.mkdirSync('node_modules/.bin',{recursive:true});for(const [bin,file] of Object.entries(typeof meta.bin==='string'?{[name.split('/').at(-1)]:meta.bin}:meta.bin)){fs.writeFileSync(`node_modules/.bin/${bin}.cmd`,`@echo off\r\nnode "%~dp0\\..\\${name.replaceAll('/','\\')}\\${file.replaceAll('/','\\')}" %*\r\n`);}}
}
for(const name of ['react','react-dom','motion','lucide-react','vite','@vitejs/plugin-react'])install(name,roots[1]);
for(const name of ['tailwindcss','@tailwindcss/vite'])install(name,roots[1]);
for(const name of ['@types/react','@types/react-dom'])install(name,roots[1]);
for(const name of ['typescript','@types/node','eslint','@eslint/js','globals'])install(name,roots[2]);
console.log('Copied',installed.size,'local dependency packages.');
