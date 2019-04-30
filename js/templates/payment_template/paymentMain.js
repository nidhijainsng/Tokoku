ubsApp.getPayTemplate=function(templateConfig,tempVar){
    templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
	tempVar.html+=ubsLuckTemplate(templateConfig);
}

ubsApp.payFromBank=function(pageName){
    let initialBankBalance = userArray[playerChance].getBankBalance();
    let initialCashBalance = userArray[playerChance].getplayerScore();
    let initialReputationPoints = userArray[playerChance].getReputationPts();
    let initialInventory = userArray[playerChance].getInventoryScore();
    let deduction = 0;
    var credit=ubsApp.pages[pageName].templates[0].credit;
    $.each(credit, function(key, value) {
        if(key=="bankBalance"){
            deduction = -value;
            userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+value);     
                if(userArray[playerChance].getBankBalance()<0){
                    
                    let difference=userArray[playerChance].getBankBalance();
                    userArray[playerChance].setBankBalance(0);
                    
                    
                    difference=userArray[playerChance].getInventoryScore();
                    userArray[playerChance].setInventoryScore(0);
                    /*if(userArray[playerChance].getCredit()+(difference*(-1))<=userArray[playerChance].getCreditLimit()){
                        userArray[playerChance].setCredit(userArray[playerChance].getCredit()+(difference*(-1)));
                    }
                    else{
                    }*/
                }
        }
        else if(key=="reputationPoints"){
            userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+value);
        }
    });

        let message = "";
        let header = ubsApp.getTranslation("paymentResultHeader");
        // Bank Balance Compare
        if(initialBankBalance <= 0 || initialBankBalance > userArray[playerChance].getBankBalance())
        {
/*            message= message + ubsApp.formatMessage(ubsApp.translation["badPaymentResultPopUpBankBalance"], [initialBankBalance - userArray[playerChance].getBankBalance()]);*/
            message= message + ubsApp.formatMessage(ubsApp.translation["badPaymentResultPopUpBankBalance"], [deduction]);
        }
        else if(initialBankBalance < userArray[playerChance].getBankBalance())
        {
            message= message + ubsApp.formatMessage(ubsApp.translation["goodPaymentResultPopUpBankBalance"], [userArray[playerChance].getBankBalance() - initialBankBalance]);
        }

        // Cash Balance Compare
        if(initialCashBalance > userArray[playerChance].getplayerScore())
        {
            message= message + ubsApp.formatMessage(ubsApp.translation["badPaymentResultPopUpCash"], [initialCashBalance - userArray[playerChance].getplayerScore()]);
        }
        else if(initialCashBalance < userArray[playerChance].getplayerScore())
        {
            message= message + ubsApp.formatMessage(ubsApp.translation["goodPaymentResultPopUpCash"], [userArray[playerChance].getplayerScore() - initialCashBalance]);
        }

        //reputation points compare
        if(initialReputationPoints > userArray[playerChance].getReputationPts())
        {
            message= message + ubsApp.formatMessage(ubsApp.translation["badPaymentResultPopUpRepPt"], [initialReputationPoints - userArray[playerChance].getReputationPts()]);
        }
        else if(initialReputationPoints < userArray[playerChance].getReputationPts())
        {
            message= message + ubsApp.formatMessage(ubsApp.translation["goodPaymentResultPopUpRepPt"], [userArray[playerChance].getReputationPts() - initialReputationPoints]);
        }

        //inventory compare
        if(initialInventory > userArray[playerChance].getInventoryScore())
        {
            if (userArray[playerChance].getInventoryScore()==0 && userArray[playerChance].getBankBalance() <= 0)
            {
                message = message + ubsApp.translation["badPaymentResultPopUpInv2"];
            }
            else
            {
                message = message + ubsApp.formatMessage(ubsApp.translation["badPaymentResultPopUpInv"], [initialInventory - userArray[playerChance].getInventoryScore()]);
            }
        }
        else if(initialInventory < userArray[playerChance].getInventoryScore())
        {
            message = message + ubsApp.formatMessage(ubsApp.translation["goodPaymentResultPopUpInv"], [userArray[playerChance].getInventoryScore() - initialInventory]);
        }

        ubsApp.openResultPopup({
            "message" : message,
            "header" : header,
            "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
            })

}