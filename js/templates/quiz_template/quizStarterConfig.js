ubsApp.quizStarterConfig = {

"generalQuizStarter":{
		"templates":[{
			"templateId": 1,
			"templateType": "quizStarter",
			"noOfQuestions":3,
			"resultPage":"generalQuizResult",
			"totalNoOfQuestions":155,
		}]
	},

	"generalQuizResult":{
		"templates":[
	 		{
				"templateId": 1,
				"templateType": "quiz",
				"noOfQuestions":"",
				"quizResult":true,
				"questionTime":3000,
				"optionsTime":2000,
				"points":1,
				"questionHeading":"Result",
				"width": "col-lg-6 col-lg-offset-5  col-md-4 col-md-offset-5 col-xs-6 col-xs-offset-5",
				"style":"position:absolute;text-align: center; top:70%",
				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				},
				"congratulationsImage":"{{wowImage}}",
			}
		]
	},

	"luckQuizResult":{
		"templates":[
	 		{
				"templateId": 1,
				"templateType": "quiz",
				"question": "Your Result is: ",
				"noOfQuestions":"",
				"quizResult":true,
				"questionTime":3000,
				"optionsTime":2000,
				"questionHeading":"Result",
				"amount":"",
				"width": "col-lg-6 col-lg-offset-5  col-md-4 col-md-offset-5 col-xs-6 col-xs-offset-5",
				"style":"position:absolute;text-align: center; top:70%",
				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}
		]
	}

}