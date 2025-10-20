Ext.define('MyExtGenApp.view.test.login.form.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'login-form',
    title: 'Авторизация',
    controller: 'logincontroller',
    bodyPadding: 20,
    width: 320,
    autoSize: true,

    items: [{
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'Логин',
        name: 'login',
        placeholder: 'Имя пользователя'
    }, {
        xtype: 'passwordfield',
        allowBlank: false,
        required: true,
        label: 'Пароль',
        name: 'pass',
        placeholder: 'пароль'
    }, ],

    buttons: [{
        text: 'Войти',
        handler: 'onLogin'
    }]
})
