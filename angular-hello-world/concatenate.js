const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

const files = [
'./dist/angular-hello-world/runtime.js',
'./dist/angular-hello-world/polyfills.js',
'./dist/angular-hello-world/main.js',
]

await fs.ensureDir('elements')
await concat(files, 'elements/angular-hello-world.js');
await fs.copyFile('./dist/angular-hello-world/styles.css', 'elements/styles.css');
// copy build files into bundle folder
const buildDir = '../../bundle/angular-hello-world';
if (!fs.existsSync(buildDir)) {
	fs.mkdirSync(buildDir);
}
await fs.copyFile('./dist/angular-hello-world/styles.css', '../../bundle/angular-hello-world/styles.css');
await fs.copyFile('./elements/angular-hello-world.js', '../../bundle/angular-hello-world/angular-hello-world.js');
})()