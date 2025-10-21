Ext.define('MyExtGenApp.store.NavMenuStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.navmenustore',
    type: 'tree',
    rootVisible: true,
    root: {
        expanded: true,
        text: 'All',
        iconCls: 'x-fa fa-sitemap',
        children: [{
            text: 'Home',
            iconCls: 'x-fa fa-home',
            children: [{
                text: Ext.API.BASE_URL,
                url: 'message',
                iconCls: 'x-fa fa-inbox',
                leaf: true
            }, {
                text: 'Music',
                iconCls: 'x-fa fa-music',
                url: 'music',
                leaf: true
            }, {
                text: 'Video',
                iconCls: 'x-fa fa-film',
                url: 'video',
                leaf: true
            }]
        }, {
            text: 'Users',
            iconCls: 'x-fa fa-user',
            children: [{
                text: 'Profile',
                url: 'profile',
                iconCls: 'x-fa fa-tag',
                leaf: true
            }, {
                text: 'users',
                url: 'users',
                iconCls: 'x-fa fa-trash-alt',
                leaf: true
            }]
        }, {
            text: 'Groups',
            iconCls: 'x-fa fa-users',
            url: 'groups',
            leaf: true
        }, {
            text: 'Settings',
            iconCls: 'x-fa fa-wrench',
            children: [{
                text: 'Sharing',
                iconCls: 'x-fa fa-share-alt',
                leaf: true,
                url: '/sharing',
            }, {
                text: 'Notifications',
                iconCls: 'x-fa fa-flag',
                leaf: true,
                url: '/notifications',
            }, {
                text: 'Network',
                iconCls: 'x-fa fa-signal',
                leaf: true,
                url: '/network',
            }]
        }]
    }
});
