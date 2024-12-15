 /* Initialize score from localStorage or set default values */
 let score = JSON.parse( localStorage.getItem('score')) || {
  Wins : 0,
  Losses :0,
  Ties : 0
 };
 display();/* Display the score initially */
 
 /* Function to handle the gameplay logic and determine the result */
 function gamePlay(playerMove){
   const compuermove = autoPick();  /* Call the autoPick function for the computer's choice */
   let result = '';

   /* Compare player and computer moves to determine the result */
   if(playerMove === 'Rock'){
         
     if(compuermove === playerMove){
       result = `It's a Tie!`;
     }else if(compuermove === 'Paper'){
       result = 'You Lose!';
     }else if(compuermove === 'Scissor'){
       result = 'You Win!';
     }
   }else if(playerMove === 'Paper'){
     if(compuermove === 'Paper'){
       result = `It's a Tie!`;
     }else if(compuermove === 'Scissor'){
       result = 'You Lose!';
     }else if(compuermove === 'Rock'){
       result = 'You Win!';
     }
   }else if(playerMove === 'Scissor'){
     if(compuermove === 'Scissor'){
       result = `It's a Tie!`;
     }else if(compuermove === 'Rock'){
       result = 'You Lose!';
     }else if(compuermove === 'Paper'){
       result = 'You Win!';
     }
   }
   /* Update the score based on the result */
   if(result ==='You Win!'){
     score.Wins = score.Wins + 1;
   }else if(result ==='You Lose!'){
     score.Losses = score.Losses + 1;
   }else if(result ===`It's a Tie!`){
     score.Ties = score.Ties + 1;
   }

   /* Save the updated score to localStorage */
   localStorage.setItem('score', JSON.stringify(score));
   
   /* Display the result and both player and computer choices */
   document.querySelector('.result').innerText = result;
   document.querySelector('.Move').innerHTML = `You <img src="Resource/images/${playerMove}Icon.png" class="buttonImg">Computer <img src="Resource/images/${compuermove}Icon.png" class="buttonImg">`;
   display();/* Update the score display */
 }
 /* Function to display the current score (Wins, Losses, and Ties) */
 function display(){
   document.querySelector('.score').innerText = `Wins : ${score.Wins}, Losses : ${score.Losses}, Ties : ${score.Ties}`;
 }

 /* Function to generate the computer's move randomly */
 function autoPick(){
   let compuermove = '';
   const randomNumber = Math.random();

   if(randomNumber >=0 && 1/3 > randomNumber){
     compuermove = 'Rock';
   }else if (randomNumber >= 1/3 && 2/3 > randomNumber){
     compuermove = 'Paper';
   }else if(randomNumber >= 2/3 && 1 > randomNumber){
     compuermove = 'Scissor';
   }

   return compuermove;
 }