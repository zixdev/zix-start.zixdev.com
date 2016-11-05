// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

export default [
    {
        path: '/pages',
        name: 'pages.index',
        meta: {
            icon: 'fa-file-text-o',
            menu: true,
            auth: false,
        },
        component: lazyLoading('+pages', true),
        children: [
            /*
             * Pages Routes
             */
            {
                path: '/pages/',
                name: 'pages.all',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+pages', true)
            },
            {
                path: '/pages/add',
                name: 'pages.add',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+pages/create')
            },

            {
                path: '/pages/:id/edit',
                name: 'pages.edit',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+pages/create')
            }
        ]
    },

];
