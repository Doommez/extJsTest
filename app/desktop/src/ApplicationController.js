Ext.define('MyExtGenApp.ApplicationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.applicationcontroller',

    routes: {
        '#': {action: 'onChangeRoute'}
    },

    onMessage: function (...acc) {
        console.log(acc)
    },

    onChangeRoute: function (...arg){
        console.log(arg)
    }

});
