const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/sample-call-control/runtime.js',
        './dist/sample-call-control/polyfills.js',
        './dist/sample-call-control/main.js',
    ]

await fs.ensureDir('elements')
await concat(files, 'elements/sample-call-control.js');
await fs.copyFile('./dist/sample-call-control/styles.css', 'elements/styles.css')
})()