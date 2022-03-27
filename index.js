import characterData from "./data.js";
import { Character } from "./character.js";

const attackBtn = document.getElementById('attack-btn')

attackBtn.addEventListener('click', attack)

function attack(){
    render()
}

const wizard = new Character(characterData.hero)
const monstor = new Character(characterData.monstor)


function render(){
    document.getElementById('hero').innerHTML = wizard.displayHtml();
    document.getElementById('monstor').innerHTML = monstor.displayHtml()
}
render()