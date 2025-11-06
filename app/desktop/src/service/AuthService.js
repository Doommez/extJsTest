Ext.define("MyExtGenApp.service.AuthService", {
    singleton: true,

    requires: [
        'Ext.Ajax'
    ],


    setPrevRoute: function () {
        const hash = window.location.hash
        if (!hash.includes('auth')) {
            const prevRoute = hash.substring(1, hash.length - 1)
            localStorage.setItem(MyExtGenApp.constants.Constants.PREV_ROUTE_BEFORE_REDIRECT_TO_LOGIN, prevRoute)
        }
    },

    setupInterceptors: function () {
        const self = this;
        Ext.Ajax.on('requestexception', function (conn, res, opt) {
            if (res.status === 401) {
                console.log(401)
                self.setPrevRoute()
                Ext.GlobalEvents.fireEvent('navigate:redirectToLogin')
            } else if (res.status === 403) {
                Ext.Msg.alert('Forbidden', 'У вас нет доступа к этому ресурсу');
            }
        })
    },

    /**
     * Логин в систему
     * @param candidate логин пароль
     */
    login: async function (candidate) {
        const res = Ext.Ajax.request({
            url: MyExtGenApp.constants.Api.BASE_URL + MyExtGenApp.constants.Api.API.LOGIN,
            method: 'POST',
            jsonData: candidate,
            success: function (res) {
                const prevRoute = localStorage.getItem(MyExtGenApp.constants.Constants.PREV_ROUTE_BEFORE_REDIRECT_TO_LOGIN)
                console.log('success', res)
                Ext.GlobalEvents.fireEvent('navigate:to', prevRoute || MyExtGenApp.constants.Router.Routes.message)
                return res
            },
            failure: function (res) {
                console.log('asdfasdf', res)
                return res
            }
        })
        console.log('11234123', res.failure())
    },

    logout: function () {
        Ext.Ajax.request({
            url: MyExtGenApp.constants.Api.BASE_URL + MyExtGenApp.constants.Api.API.LOGOUT,
            method: 'POST',
            success: function (res) {
                console.log('LOGOUT s ', res)
            },
            failure: function (res) {
                console.log('LOGOUT er', res)
            }
        })
    }
})
