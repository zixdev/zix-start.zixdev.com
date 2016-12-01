// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

export default [
    {
        name: 'dashboard',
        path: '/',
        meta: {
            menu: true,
            icon: 'fa-th-large',
            // auth: true,
        },
        component: lazyLoading('home', true),
    },
    {
        name: 'auth.login',
        path: '/auth/login',
        meta: {
            icon: 'fa-tachometer',
            auth: false,
        },
        component: lazyLoading('+auth/login')
    },

    {
        name: 'auth.logout',
        path: '/auth/logout',
        meta: {
            icon: 'fa-tachometer',
            auth: true,
        },
        component: lazyLoading('+auth/logout')
    }
]
