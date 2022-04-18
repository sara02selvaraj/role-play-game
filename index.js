import characterData from "./data.js";
import { Character } from "./character.js";

const attackBtn = document.getElementById('attack-btn')
let monstersArray = ['monstor', 'demon', 'goblin']

attackBtn.addEventListener('click', attack)

function endGame() {
    const endMessage = wizard.life === 0 && orc.life === 0 ?
    "No victors - all creatures are dead " :
    wizard.life > 0 ? "The Wizard Wins " :
    "The Orc is Victorious "
    const endEmoji = wizard.life > 0 ? '🔮' : '☠️'
    document.body.innerHTML = 
    `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
}
function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack(){
    wizard.diceArrayHtml()
    monstor.diceArrayHtml()
    wizard.takeDamage(monstor.currentDiceScore)
    monstor.takeDamage(wizard.currentDiceScore)
    render()
    if(wizard.dead || monstor.dead){
        endGame()
    }
}

const wizard = new Character(characterData.hero)
const monstor = new Character(characterData.monstor)


function render(){
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monstor').innerHTML = monstor.getCharacterHtml()
}
render()