 ubsApp.decisionInsurancePage = {
	"decisionInsurance":{
		"repeatforuser":true,
		"repeatforall":true,
		"questionTime":3000,
		"displayCalculator":true,
		"minimumInventoryScoreRequired":"0",
		"inventoryScoreToBeChanged":"0",
		"templates":[{
				"templateId": 1,
				"templateType": "insurance",
				"insuranceType":"{{insuranceType}}",
				"helpPageName":"decisionHelp",
		        "Insurance":"{{Insurance}}",
		        "insurance1":"{{insurance1}}",
		        "insurance2":"{{insurance2}}",
		        "insurance3":"{{insurance3}}",
		        "premium":"{{premium}}",
		        "sumAssured":"{{sumAssured}}",
		        "buy":"{{buy}}",
		        "cancel":"{{cancel}}",
		        "cashTitleName":"{{cashTitleName}}",
		        "chequeTitleName":"{{chequeTitleName}}",
		        "creditTitleName":"{{creditTitleName}}",
		        "mode":"{{mode}}",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"page":"decision2",
				"premium1":10000,
				"premium2":20000,
				"premium3":30000,
				"sumAssuredvalue1":200000,
				"sumAssuredvalue2":400000,
				"sumAssuredvalue3":600000,
				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
	}]
},
}

ubsApp.initializeUbsPages();
