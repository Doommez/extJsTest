Ext.define("MyExtGenApp.service.AuthService", {
    singleton: true,
    /**
     * Логин в систему
     * @param candidate логин пароль
     */
    login: function(candidate) {
        Ext.Ajax.request({
            url: MyExtGenApp.constants.Api.BASE_URL + MyExtGenApp.constants.Api.API.LOGIN,
            method: 'POST',
            jsonData: candidate,
            success: function (res) {
                console.log(res)
            },
            error: function (res) {
                console.error(res)
            }
        })
    }
})
