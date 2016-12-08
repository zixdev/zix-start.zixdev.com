// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

export default [
    {
        name: 'user.settings.profile',
        path: '/user/settings/profile',
        meta: {
            icon: 'fa-tachometer',
            auth: true,
        },
        component: lazyLoading('+user/+settings/profile')
    },
    {
        name: 'user.settings.security',
        path: '/user/settings/security',
        meta: {
            icon: 'fa-tachometer',
            auth: true,
        },
        component: lazyLoading('+user/+settings/security')
    },
    {
        name: 'user.settings.social',
        path: '/user/settings/social',
        meta: {
            icon: 'fa-tachometer',
            auth: true,
        },
        component: lazyLoading('+user/+settings/social')
    },
];
