Ext.define('MyExtGenApp.util.Auth', {
    singleton: true,


    getToken(){
        return Ext.util.Cookies.get('access_token')
    }
})
