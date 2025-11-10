Ext.define('MyExtGenApp.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'login', type: 'string' },
        { name: 'hash', type: 'string' }, // JWT токен, получаемый при логине
        {name: 'createdAt', type: 'date' },
        {name: 'updatedAt', type: 'date' },
        {name: 'roles', type: 'auto' },
    ],

    validators: {
        name: [
            { type: 'presence', message: 'Имя обязательно' },
            { type: 'length', min: 2, max: 50 }
        ],
        login: [
            { type: 'presence', message: 'Login обязателен' },
            { type: 'length', min: 2, max: 50 }
        ],
        role: {
            type: 'inclusion',
            list: ['admin', 'manager', 'user'],
            message: 'Некорректная роль'
        }
    },

    proxy: {
        type: 'rest',
        url: `/api/users`, // например /api/users/1
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});
