Ext.define('MyExtGenApp.view.test.center.message.MessageView', {
    extend: 'Ext.form.Panel',
    title: 'Message',
    xtype: 'messageview',
    html: Ext.create('Ext.form.Panel', {
        items: [{
            xtype: 'textfield',
        }]
    })
})
