Ext.require('MyExtGenApp.constants.Router');
Ext.define('MyExtGenApp.view.test.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tmaincontroller',
    routes: {
        'message': 'onMessage',
        'main': 'onMainRoute',
        'main/:section': 'onSectionRoute',
        '#': 'onUnExistRoute',
        '*': 'onChangeRoute',
    },
    listen: {
        global: {
            'unmatchedroute': 'onUnExistRoute'
        },
    },

    setActiveMenuOnRouteByUrl: function (url) {
        const nav = this.lookup('tnavview')
        const navController = nav.getController()
        const vm = nav.getViewModel()
        const store = vm.getStore('navmenu')
        const record = store.findNode('url', url)
        const id = record.data.id
        console.log(id)
        navController.setActiveMenuItem(record)
    },

    onMessage: function () {
        const centerView = this.lookup('centerview')
        centerView.setActiveItem('messageview')

    },

    onChangeRoute: function (...arg) {
        console.log(arg, 'onChangeRoute')
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
    }

});
