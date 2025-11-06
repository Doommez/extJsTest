Ext.define('MyExtGenApp.controller.NavigationController', {
    extend: 'Ext.app.Controller',

    routes: {
        'message': 'onMessage',
        'main': 'onMainRoute',
        'main/:section': 'onSectionRoute',
        '#': 'onUnExistRoute',
        '*': 'onChangeRoute',
    },
    listen: {
        global: {
            'unmatchedroute': 'onUnExistRoute',
            'navigate:to': 'onNavigate',
            'navigate:redirectToLogin': 'redirectToLogin'
        },
    },

    setActiveMenuOnRouteByUrl: function (url) {
        const nav = this.lookup('tnavview')
        const navController = nav.getController()
        const vm = nav.getViewModel()
        const store = vm.getStore('navmenu')
        const record = store.findNode('url', url)
        navController.setActiveMenuItem(record)
    },

    onMessage: function () {
        console.log('onMessage');
        const centerView = this.lookup('centerview')
        centerView.setActiveItem('messageview')

    },


    onChangeRoute: function (...arg) {
        const newUrl = new URL(window.location.href)
        const hash = newUrl.hash
        const menuItemUrl = hash.split('/')[0].substring(1)

        this.setActiveMenuOnRouteByUrl(menuItemUrl)
    },

    onMainRoute: function () {
        console.log('Маршрут: main');
    },

    onSectionRoute: function (section) {
        console.log('Маршрут: main/' + section);
    },
    onUnExistRoute: function () {
        console.log('onUnExistRoute')
    },


    redirectToLogin() {
        this.redirectTo(MyExtGenApp.constants.Api.API.LOGIN)
        Ext.Viewport.add([{xtype: 'login-page'}])
    },

    onNavigate: function (route) {
        Ext.Viewport.setActiveItem(route);
        // switch (route) {
        //     case 'dashboard':
        //         Ext.Viewport.setActiveItem('dashboardview');
        //         break;
        //     case 'reports':
        //         Ext.Viewport.setActiveItem('reportsview');
        //         break;
        //     default:
        //         Ext.Viewport.setActiveItem('notfoundview');
        // }
    }

});
