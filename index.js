// file 관련된 node 기본 라이브러리
const fs = require('fs');
const path = require('path');
// svelte의 compiler
const svelteCompiler = require('svelte/compiler');

// svelte파일
const pathToComponent = path.join(__dirname, './src/component.svelte');
// svelte파일을 text로 변환
const svelteCode = fs.readFileSync(pathToComponent, 'utf-8');
// 변환된 text를 input으로하여 svelte의 compiler를 실행
const compiled = svelteCompiler.compile(svelteCode);

// compiler의 output을 ./output.js 경로의 파일로 리턴 (js만 이용하여 리턴)
fs.writeFileSync(path.join(__dirname, './output.js'), compiled.js.code, 'utf-8');