const svelteCompiler = require('svelte/compiler');
const fs = require('fs');
const path = require('path');

const pathToComponent = path.join(__dirname, './src/component.svelte');

const svelteCOde = fs.readFileSync(pathToComponent, 'utf-8');
const { js, css } = svelteCompiler.compile(svelteCOde);

fs.writeFileSync(path.join(__dirname, './output.js'), js.code, 'utf-8');



