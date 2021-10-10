
ubsApp.getStaticTemplate = function(templateConfig, tempVar){

	if(templateConfig.display_score){
		tempVar.html += ubsScoreTemplate(ubsApp.pages.score[0]);
	}
	if(templateConfig.resultId){
		templateConfig.src=templateConfig.src.replace("Message",ubsApp.translation[templateConfig.resultId]);
	}
	if(templateConfig.buttonType){
		templateConfig.src=templateConfig.src.replace("Message",ubsApp.translation[templateConfig.buttonType]);
	}
	if(templateConfig.score_animation_req){
		tempVar.flag=true;
	}
	if(templateConfig.onClickPage){
		tempVar.staticConfig = templateConfig;
	}
	tempVar.html += ubsStaticTemplate(templateConfig);
}

ubsApp.playStaticTemplate = function(staticConfig){
	setTimeout(function(){
		$('#'+staticConfig.id).trigger('click');
	},staticConfig.conclusionTime);
}
