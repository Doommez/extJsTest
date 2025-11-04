Ext.define('MyExtGenApp.constants.Api',{
    singleton: true,
    alternateClassName: 'API',
    BASE_URL: 'http://localhost:4000',
    API: {
        LOGIN: '/auth/login',
        LOGOUT: '/auth/logout',
        USERS: '/users',
        POSTS: '/posts',
    },
})
