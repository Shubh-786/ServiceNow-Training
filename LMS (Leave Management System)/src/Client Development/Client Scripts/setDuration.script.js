function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

	var start = g_form.getValue('start_date')
   //Type appropriate comment here, and begin script below
   var ga = new GlideAjax('lmsAjax');
   ga.addParam('sysparm_name','getDateDiff');
   ga.addParam('sysparam',start);
   ga.addParam('sysparam',newValue);
   ga.getXML(getDuration);
	
   function getDuration(response){
	   var answer = response.responseXML.documentElement.getAttribute("answer");
	   var days = (answer / (1000*60*60*24));
	   g_form.setValue('duration',days);
	   
   }
	
}