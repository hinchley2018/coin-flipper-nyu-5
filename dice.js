console.log("loaded dice.js")

//get refernces to all my things I'm interacting with
let diceImg = document.querySelector("#dice-image")
console.log("dice image", diceImg)

let rollButton = document.querySelector("#roll")
console.log("roll button", rollButton)

let clearButton = document.querySelector("#clear")
console.log("clear button", clearButton)


let totalRolls = 0
let diceFaceCounts = [
    //0 index is really dice face 1
    0,
    0,
    0,
    0,
    0,
    0
]
rollButton.addEventListener("click", function() {
    
    //
    let rollResult = Math.floor(Math.random() * 6) + 1
    console.log(rollResult)
    
    let numberRollsTd = document.querySelector(`#number-${rollResult}`)
    console.log(numberRollsTd)
    
    totalRolls = totalRolls +1
    diceFaceCounts[rollResult - 1] = diceFaceCounts[rollResult - 1] + 1
    numberRollsTd.textContent = diceFaceCounts[rollResult - 1]
    
    //update each row percenatge based on new numbers
    for(let x = 1; x < 7; x++){
        
        let percentageRollsTd = document.querySelector(`#percentage-${x}`)
        percentageRollsTd.textContent = `${Math.round(diceFaceCounts[x - 1] / totalRolls * 100)}%`
        // console.log(percentageRollsTd)
    }
    
})


//handle clear button clicks
clearButton.addEventListener("click", function() {
    console.log("clear button was clicked")
    //
    for(let x = 1; x < 7; x++){
        
        let numberRollsTd = document.querySelector(`#number-${x}`)
        numberRollsTd.textContent = "0"
        
        let percentageRollsTd = document.querySelector(`#percentage-${x}`)
        percentageRollsTd.textContent = "0%"
        // console.log(percentageRollsTd)
    }
    console.log("scoreboard cleared")
})