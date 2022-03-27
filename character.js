import {generateRandom} from './utils.js'

function Character(data){
    Object.assign(this,data)
    
    this.diceArrayHtml = function(diceCount) {
            return generateRandom(diceCount).map(value => {
               return `<div class="dice-container">${value}</div>`
           }).join('')
       }

    this.displayHtml = function(){
        const {elementId, name, avatar, life,diceCount} = this
        let diceHtml = this.diceArrayHtml(diceCount)
        return `
        <h1>${name}</h1>
        <img class="character-img" src=${avatar} alt="">
        <h3>Life : ${life}</h3>
        <div class="dice-div">
           ${diceHtml}
        </div>`
    }

}

export {Character}
