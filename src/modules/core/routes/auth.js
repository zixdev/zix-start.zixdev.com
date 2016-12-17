// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

export default [
    {
        name: 'home',
        path: '/',
        meta: {
            menu: true,
            icon: 'fa-th-large',
            auth: false,
        },
        component: lazyLoading('home', true),
    },
    {
        name: 'auth.login',
        path: '/auth/login',
        meta: {
            icon: 'fa-tachometer',
            guest: true,
        },
        component: lazyLoading('+auth/login')
    },

    {
        name: 'auth.register',
        path: '/auth/register',
        meta: {
            icon: 'fa-tachometer',
            guest: true,
        },
        component: lazyLoading('+auth/register')
    },

    {
        name: 'auth.logout',
        path: '/auth/logout',
        meta: {
            icon: 'fa-tachometer',
            auth: true,
        },
        component: lazyLoading('+auth/logout')
    },
    {
        name: 'auth.indent_login',
        path: '/auth/indent-login',
        meta: {
            guest: true,
        },
        component: lazyLoading('+auth/indent-login')
    },
    {
        name: 'auth.forgot_password',
        path: '/auth/forgot-password',
        meta: {
            guest: true,
        },
        component: lazyLoading('+auth/forgot-password')
    },
    {
        name: 'auth.account_activate',
        path: '/auth/account/activate/:code',
        meta: {
            // guest: true,
        },
        component: lazyLoading('+auth/account-activate')
    }
]
