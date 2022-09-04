/*Prompt the user for input.
Repeat actions using a loop.
Perform calculations and make decisions based on the numbers.
Output results to the console.
*/

let userName = prompt("Welcome to GC mini golf! What is your name?");
let gameChoice = prompt( `Hi ${userName}! Would you like to play 3 or 6 rounds? `);
let hole = 1;
let total = 0;
let par = 0;
if (Number(gameChoice) === 3) {
    for(i = 0; i < Number(gameChoice); i++){
        let putts = prompt(`How many putts for hole ${hole}? (par is 3)`);
         hole = hole + 1 ;
        console.log(`Total Putts: ${total += Number(putts)}`);
        }
        par = total - 9;
        } else if (Number(gameChoice) === 6){
        for(i = 0; i < Number(gameChoice); i++){
            let putts = prompt(`How many putts for hole ${hole}? (par is 6)`);
            hole = hole + 1;
          console.log(`Total Putts: ${total += Number(putts)}`);
        }
        par = total - 18;
        } else {
        alert("Invalid Answer! Enter 3 or 6!")
        }
        if (par > 0) {
            console.log(`Nice try, ${userName}... Your total par was: +${par}.`)
        }  else if (par < 0) {
            console.log(`Great job, ${userName}! Your total par was: ${par}.`)
        } else if (par === 0) {
            console.log(`Good game, ${userName}. Your total par was: ${par}.`)
        }