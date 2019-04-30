var rollingDiceConfig = {};
rollingDiceConfig.currentRandomDiceOne=5; //intial value of the dice


function pointRoll() {
  var elDiceOne       = document.getElementById('dice1');
  var diceValueOne   = Math.floor((Math.random() * 6) + 1);
  var audioElement = document.getElementById('rollIt');
  ubsApp.raiseAudioEvent(audioElement, 'rollingDice');
  while(diceValueOne==rollingDiceConfig.currentRandomDiceOne){
    diceValueOne   = Math.floor((Math.random() * 6) + 1);
  }


  rollingDiceConfig.currentRandomDiceOne=diceValueOne;
  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceValueOne === i) {
      elDiceOne.classList.add('show-' + i);
    }

  }
  return diceValueOne;
}
