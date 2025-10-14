Ext.require('MyExtGenApp.constants.Router');
Ext.define('MyExtGenApp.view.test.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tmaincontroller',
    routes: {
       'message': 'onMessage',
        'main': 'onMainRoute',
        'main/:section': 'onSectionRoute',
        '#': 'onUnExistRoute',
        '*':  'onChangeRoute',
    },
    listen:{
        global:{
            'unmatchedroute': 'onUnExistRoute'
        },
    },



    onMessage: function (...acc) {
       const centerView = this.lookup('centerview')
        centerView.setActiveItem('messageview')
        console.log(centerView)
    },

    onChangeRoute: function (...arg){
        console.log(arg, 'onChangeRoute')
    },
    onMainRoute: function () {
        console.log('Маршрут: main');
    },

    onSectionRoute: function (section) {
        console.log('Маршрут: main/' + section);
    },
    onUnExistRoute:function (){
        console.log('onUnExistRoute')
    }

});
