import {generateRandom, getDicePlaceholder,calculateTotal} from './utils.js'


function Character(data){
    Object.assign(this,data)

    this.diceArray = getDicePlaceholder(this.diceCount)
    
    this.diceArrayHtml = function() {
        this.currentDiceScore = generateRandom(this.diceCount);
        this.diceArray = this.currentDiceScore.map((value) => {
            return `<div class="dice-container">${value}</div>`
        }).join('')
        this.life -= calculateTotal(this.currentDiceScore)
        if(this.life <=0){
            this.life = 0
            this.dead = true
        }
       }
    
    this.getCharacterHtml = function(){
        const {elementId, name, avatar, life,diceCount, diceArray} = this
        return `
        <h1>${name}</h1>
        <img class="character-img" src=${avatar} alt="">
        <h3>Life : ${life}</h3>
        <div class="dice-div">
           ${diceArray}
        </div>`
    }

}

export {Character}
