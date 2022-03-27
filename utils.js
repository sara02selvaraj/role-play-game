function generateRandom(diceCount){
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() *6)+1
    })
}

function getDicePlaceholder(diceCount) {
    return new Array(diceCount).fill(0).map(function(){
        return `<div class="placeholder-dice"></div>`
    }).join('')
}

function calculateTotal(arr){
    return arr.reduce((initial,current) => {
        return initial + current
    })
}
export {generateRandom, getDicePlaceholder, calculateTotal}