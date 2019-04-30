 var ubsWheelOfFortune = {};
 
 ubsWheelOfFortune.defaultSettings = {
                'outerRadius'     : 200,        // Set outer radius so wheel fits inside the background.
                'innerRadius'     : 45,         // Make wheel hollow so segments don't go all way to center.
                'textFontSize'    : 14,         // Set default font size for the segments.
                'textOrientation' : 'horizontal', // Make text vertial so goes down from the outside of wheel.
                'textAlignment'   : 'center',    // Align text to outside of wheel.
                'numSegments'     : 6,         // Specify number of segments.
                'segments'        :             // Define segments including colour and text.
                [                               // font size and test colour overridden on backrupt segments.
                   {'fillStyle' : '#ee1c24', 'text' : '300'},
                   {'fillStyle' : '#3cb878', 'text' : '450'},
                   {'fillStyle' : '#f6989d', 'text' : '600'},
				    {'fillStyle' : '#ee1c24', 'text' : '300'},
                   {'fillStyle' : '#3cb878', 'text' : '450'},
                   {'fillStyle' : '#f6989d', 'text' : '600'}
                   
                ],
                'animation' :           // Specify the animation to use.
                {
                    'type'     : 'spinToStop',
                    'duration' : 8,     // Duration in seconds.
                    'spins'    : 3,     // Default number of complete spins.
                    'callbackFinished' : ubsWheelOfFortune.alertPrize
                }
            };
			
			ubsWheelOfFortune.optionPageMap = {};
			

            // Vars used by the code in this page to do power controls.
            
            ubsWheelOfFortune.wheelSpinning = false;
        
            // -------------------------------------------------------
            // Click handler for spin button.
            // -------------------------------------------------------
            ubsWheelOfFortune.startSpin = function()
            {
                // Ensure that spinning can't be clicked again while already running.
                if (ubsWheelOfFortune.wheelSpinning == false)
                {
                    
                   // ubsApp.wheelOfFortune.animation.spins = 9;
                    
                    
                    // Begin the spin animation by calling startAnimation on the wheel object.
                    ubsApp.wheelOfFortune.startAnimation();
                    // Set to true so that power can't be changed and spin button re-enabled during
                    // the current animation. The user will have to reset before spinning again.
                    ubsWheelOfFortune.wheelSpinning = true;
                }
            }
         
            // -------------------------------------------------------
            // Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
            // -------------------------------------------------------
            ubsWheelOfFortune.alertPrize = function(indicatedSegment)
            {
			    
				$('#wheelOfFortuneIndicatedSegment').text(indicatedSegment.text);
				$('#wheelOfFortuneModal').css("display", "table");
				
	
            }
			
			 ubsWheelOfFortune.resetWheel = function()
            {

				ubsWheelOfFortune.wheelSpinning = false; 
				ubsApp.wheelOfFortune.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
                ubsApp.wheelOfFortune.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
                ubsApp.wheelOfFortune.draw(); 
				ubsApp.renderPage(ubsApp.pages[ubsWheelOfFortune.optionPageMap[$('#wheelOfFortuneIndicatedSegment').text()]]);
				
				 
				
            }