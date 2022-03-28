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
function calculateLifePercentage(remaining,total){
    return (100 * remaining) / total
}
export {generateRandom, getDicePlaceholder, calculateTotal}