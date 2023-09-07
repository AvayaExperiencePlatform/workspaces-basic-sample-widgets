const fs = require('fs-extra');

(async function build() {
// copy build files into bundle folder
const buildDir = '../../bundle/react-parcel';
if (!fs.existsSync(buildDir)) {
	fs.mkdirSync(buildDir);
}
await fs.copyFile('./dist/react-parcel.js', '../../bundle/react-parcel/react-parcel.js');
})()
