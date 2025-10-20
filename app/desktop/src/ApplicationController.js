Ext.define('MyExtGenApp.ApplicationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.applicationcontroller',

    routes: {
        '*': 'onChangeRoute'
    },

    onChangeRoute: function (...args) {
        console.log('Route changed:', args);
    }

});
