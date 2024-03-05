var lmsAjax = Class.create();
lmsAjax.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

	getDateDiff : function()
	{
		var d1 = new GlideDate();
		d1.setDisplayValue(this.getParameter('sysparm_start'));
		var d2 = new GlideDate();
		d2.setDisplayValue(this.getParameter('sysparam_end'));
		
		var duration = GideDate.subtract(d1,d2);
		return duration.getNumericValue();
	},
    type: 'lmsAjax'
});