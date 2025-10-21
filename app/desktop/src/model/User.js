Ext.define('MyExtGenApp.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'login', type: 'string' },
        { name: 'hash', type: 'string' }, // JWT токен, получаемый при логине
        {name: 'createdAt', type: 'date' },
        {name: 'updatedAt', type: 'date' },
        {name: 'roles', type: 'array' },
    ],

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
