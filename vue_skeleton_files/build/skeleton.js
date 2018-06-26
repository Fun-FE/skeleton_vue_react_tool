const fs = require('fs')
const { resolve } = require('path')

const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

const skeletonName = process.env.SKELETON_PAGE;
const injectedHtmlPath = `page/${skeletonName}.html`

const renderer = createBundleRenderer(resolve(__dirname, '../assets/skeleton.json'), {
    template: fs.readFileSync(resolve(__dirname, `../${injectedHtmlPath}`), 'utf-8')
})

renderer.renderToString({}, (err, html) => {
    fs.writeFileSync(`${injectedHtmlPath}`, html, 'utf-8')
})
