const fs = require('fs-extra');

(async function build() {
// copy build files into bundle folder
const buildDir = '../../bundle/react-hello-world';
if (!fs.existsSync(buildDir)) {
	fs.mkdirSync(buildDir);
}
await fs.copyFile('./dist/react-hello-world.js', '../../bundle/react-hello-world/react-hello-world.js');
})()