require('babel-register', {
    cache: false,
});

const fs = require('fs');
const {styleString, markup} = require('../src/skeleton/xx_react/index.js');

console.log(`Skeleton_${process.env.SKELETON_PAGE}...`)

const skeletonName = process.env.SKELETON_PAGE;
const injectedHtmlPath = `./page/${skeletonName}.html`;

function inject(str){
    const oldHtml = fs.readFileSync(injectedHtmlPath, 'utf-8');
    const html = oldHtml.replace('<!--react-ssr-outlet-->', str);
    fs.writeFileSync(injectedHtmlPath, html, 'utf-8');
}

inject(`${styleString}\n    ${markup}`);

