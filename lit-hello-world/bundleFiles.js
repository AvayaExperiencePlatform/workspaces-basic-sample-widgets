const fs = require('fs-extra');

(async function build() {
// copy build files into bundle folder
const buildDir = '../../bundle/lit-hello-world';
if (!fs.existsSync(buildDir)) {
	fs.mkdirSync(buildDir);
}
await fs.copyFile('./dist/lit-hello-world.js', '../../bundle/lit-hello-world/lit-hello-world.js');
})()