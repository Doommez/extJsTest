Ext.define('MyExtGenApp.view.test.login.form.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.logincontroller',
    requires: [
        'MyExtGenApp.service.AuthService',
    ],


    onLogin: function (...args) {
        console.log(args)
        const form = this.getView();
        const values = form.getValues();
        console.log(values);
        MyExtGenApp.service.AuthService.login(values);
    }
}, )
