// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

export default [
    {
        path: '/:slug',
        name: 'page.view',
        meta: {
            // auth: true,
        },
        component: lazyLoading('+pages', true)


    }

];
