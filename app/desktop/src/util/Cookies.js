Ext.define('MyExtGenApp.util.Cookies', {
    singleton: true,

    getToken: function() {
        const name = MyExtGenApp.constants.Constants.TOKEN_NAME + '=';
        const ca = document.cookie.split(';');
        for (let c of ca) {
            c = c.trim();
            if (c.indexOf(name) === 0) return decodeURIComponent(c.substring(name.length));
        }
        return null;
    },

    clearToken: function() {
        const name = MyExtGenApp.constants.Constants.TOKEN_NAME;
        document.cookie = `${name}=;path=${MyApp.Constants.cookiePath};max-age=0;`;
        Ext.Ajax.setDefaultHeaders({});
    },

    isAuthenticated: function() {
        return !!this.getToken();
    },

})
