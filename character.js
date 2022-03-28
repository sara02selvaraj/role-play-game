import {generateRandom, getDicePlaceholder,calculateTotal,calculateLifePercentage} from './utils.js'


function Character(data){
    Object.assign(this,data)

    this.diceArray = getDicePlaceholder(this.diceCount)
    this.maxLife = this.life
    
    this.diceArrayHtml = function() {
        this.currentDiceScore = generateRandom(this.diceCount);
        this.diceArray = this.currentDiceScore.map((value) => {
            return `<div class="dice-container">${value}</div>`
        }).join('')
    }

    this.takeDamage = function(opponentArray){
        this.life -= calculateTotal(opponentArray)
        if(this.life <=0){
            this.life = 0
            this.dead = true
        }
    }

    this.percentageHtml = function(){
        let percent = calculateLifePercentage(this.life, this.maxLife)
        console.log(percent)
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 30 ? 'danger' : ""}" style="width: ${percent}%;"></div>
                </div>`
    }

    this.getCharacterHtml = function(){
        const {elementId, name, avatar, life,diceCount, diceArray} = this
        const lifePercentHtml = this.percentageHtml()
        return `
        <h1>${name}</h1>
        <img class="character-img" src=${avatar} alt="">
        <h3>Life : </h3>
        ${lifePercentHtml}
        <div class="dice-div">
           ${diceArray}
        </div>`
    }

}

export {Character}
