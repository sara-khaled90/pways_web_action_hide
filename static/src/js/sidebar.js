odoo.define('pways_web_action_hide.Sidebar', function (require) {
'use strict';
	var core = require('web.core');
    var Sidebar = require('web.Sidebar');
	var _t = core._t;
    Sidebar.include({
    //--------------------------------------------------------------------------
    // Private
    //--------------------------------------------------------------------------

    start: function () {
        var self = this;
        var def = this.getSession().user_has_group('pways_web_action_hide.group_hide_action').then(function(has_group){
    		if (has_group) {
		        self.sections = [{name: 'print', label: _t('Print')},];
    		}
    	});
        return Promise.resolve(def).then(this._super.bind(this));
    },

    });

});
