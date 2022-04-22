import characterData from "./data.js";
import { Character } from "./character.js";

const attackBtn = document.getElementById('attack-btn')
let monstersArray = ['monstor', 'demon', 'goblin']

attackBtn.addEventListener('click', attack)

function getNewMonster(){
  const nextMonsterData = characterData[monstersArray.shift()]
  return nextMonsterData ? new Character(nextMonsterData) : {}

}    

function endGame() {
    const endMessage = wizard.life === 0 && monster.life === 0 ?
    "No victors - all creatures are dead " :
    wizard.life > 0 ? "The Wizard Wins " :
    "The monster is Victorious "

    const endEmoji = wizard.life > 0 ? '🔮' : '☠️'
    document.body.innerHTML = 
    `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
}


function attack(){
    wizard.diceArrayHtml()
    monster.diceArrayHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()
    if(wizard.dead){
        endGame()
    }else if(monster.dead){
        if(monstersArray.length > 0){
           monster = getNewMonster()
           render()
        }else{
            endGame()
        }
    }
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

function render(){
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monstor').innerHTML = monster.getCharacterHtml()
}
render()