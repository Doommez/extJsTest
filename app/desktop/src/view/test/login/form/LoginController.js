Ext.define('MyExtGenApp.view.test.login.form.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.logincontroller',



    onLogin: function (...args) {
        console.log(args);
        const form = this.getView();
        const values = form.getValues();
        console.log(values);
    }
}, )
