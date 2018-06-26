import Vue from 'vue'
const skeletonName = process.env.SKELETON_PAGE;
const Skeleton = require(`./skeleton/${skeletonName}.vue`).default;


console.log(`Skeleton_${skeletonName}...`)

export default new Vue({
    components: {
        Skeleton
    },
    template: '<skeleton />'
})
