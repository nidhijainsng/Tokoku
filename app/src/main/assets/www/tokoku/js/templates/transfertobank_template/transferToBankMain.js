ubsApp.getTransferTemplate=function(templateConfig,tempVar){
	var object={};
	//object.title=ubsApp.translation["transferToBankTitle"];
	//object.cashTitle=ubsApp.translation["cashTitle"];
	//object.bankBalanceTitle=ubsApp.translation["bankBalanceTitle"];
	object.color=userArray[playerChance].getplayerColor();
	object.cash=userArray[playerChance].getplayerScore();
	object.bankBalance=userArray[playerChance].getBankBalance();
		ubsApp.openedTransferScenario = true;

	//object.transferTitle=ubsApp.translation["transferTitle"];
	//object.cashTitle=ubsApp.translation["cashTitle"];
	//object.chequeTitle=ubsApp.translation["cheque"];
	//object.amountToTransferTitle=ubsApp.translation["amountToTransferTitle"];
	//object.cancelTitle=ubsApp.translation["cancelTitle"];
	// object.debt=userArray[playerChance].getCredit();
	if(languageSelected=="hindi"){
		object.hindi=true;
	}
	templateConfig=$.extend(templateConfig,object);
	templateConfig.openNextMove = ubsApp.openNextMoveAfterTransfer;
	tempVar.html+=ubsPayOffTemplate(templateConfig);
	//ubsApp.openNextMoveAfterTransfer = false;
}

ubsApp.transferToBank=function(questionId){
	console.log("Transfer Question ID : " + questionId);
	var amount=document.getElementById("debtPaymentText").value;
	var date = new Date();
	var startTime=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,amount, 0,0, startTime,"transferToBank");

	if(amount){
		if(amount<=userArray[playerChance].getplayerScore()){
			userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()-amount);
			
			userArray[playerChance].setBankBalance(parseInt(userArray[playerChance].getBankBalance())+parseInt(amount));
			if(!cashTransfered&&userArray[playerChance].getTransferReminderOpened()){
				userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+5);
			}
			cashTransfered=true;

			
			var temptimer;
			var temptime=20;
			temptimer = setInterval(function(){
				temptime--;
			if(document.getElementById("bankBalanceValue"))	
				document.getElementById("bankBalanceValue").innerHTML=userArray[playerChance].getBankBalance();
			if(document.getElementById("cashValue"))
				document.getElementById("cashValue").innerHTML=userArray[playerChance].getplayerScore();
			if(document.getElementById("creditValue"))
				document.getElementById("creditValue").innerHTML=userArray[playerChance].getCredit();
			if(document.getElementById("creditLimitValue"))
				document.getElementById("creditLimitValue").innerHTML=userArray[playerChance].getCreditLimit();
				if(temptime === 0 ){
					clearInterval(temptimer);
					ubsApp.closeCurrentScenario();
					ubsApp.currentPlayerContents();
                    ubsApp.openResultPopup({
                                "message" : ubsApp.getTranslation("transferSuccessMsg").replace("{{transferAmount}}",amount),
                                "header" : ubsApp.getTranslation("SUCCESS"),
                                "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                                "buttons":[
                                    {
                                        'id':"closePopupButton",
                                        'name' : ubsApp.getTranslation("CLOSE"),
                                        'action': "ubsApp.closePopup();"
                                    }
                                ]
                     });
				}
			},50);
			
		}
		else{
			document.getElementById("result").innerHTML=ubsApp.translation["validAmount"];
		}
	}
	else{
		document.getElementById("result").innerHTML=ubsApp.translation["validAmount"];
	}
}

ubsApp.openTransferToBank=function(openNextMove = false){
	ubsApp.startCurrentScenario();
	ubsApp.openNextMoveAfterTransfer = openNextMove;
	ubsApp.openedTransferScenario = true;
	ubsApp.renderPageByName("transferToBank");
}
