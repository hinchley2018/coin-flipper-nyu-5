console.log("Your index.js file loaded")

//get refernces to all my things I'm interacting with
let pennyImg = document.querySelector("#penny-image")
console.log("penny image", pennyImg)

let flipButton = document.querySelector("#flip")
console.log("flip button", flipButton)

let clearButton = document.querySelector("#clear")
console.log("clear button", clearButton)

let statusText = document.querySelector("#status-text")
console.log("statustext ", statusText)

let numberHeads = 0
let numberTails = 0
let totalFlips = 0
let numberHeadsTd = document.querySelector("#number-heads")
console.log("numberHeads",numberHeadsTd)
let percentHeadsTd = document.querySelector("#percentage-heads")
console.log("percentHeads",percentHeadsTd)
let numberTailsTd = document.querySelector("#number-tails")
console.log("numberTails",numberTailsTd)
let percentTailsTd = document.querySelector("#percentage-tails")
console.log("percentTails",percentTailsTd)


let coinFace = "tails"
//handle flip button clicks
//When flip button is clicked flip coin and set the statistics
// addEventListener
// Decide the flip result by using the pseudorandom function Math.random()
// - - Update the table that shows how many of each has been flipped.
// - Before displaying the percentage, make sure we don't divide by zero.
flipButton.addEventListener("click", function() {
    console.log("flip button was clicked")
    let flipResultIsHeads = Math.random() < 0.5 
    console.log("flip", flipResultIsHeads)
    if(flipResultIsHeads){
        pennyImg.setAttribute("src","./penny-heads.jpg")
        //display you flipped heads
        statusText.textContent = "You Flipped Heads!"
        //update the number of heads
        numberHeads = numberHeads + 1
        totalFlips = totalFlips + 1
        //display that updated count
        numberHeadsTd.textContent = numberHeads
        //update percentage heads
        percentHeadsTd.textContent = `${Math.round(numberHeads / totalFlips * 100)}%`
        percentTailsTd.textContent = `${Math.round(numberTails / totalFlips * 100)}%`
    }
    //its tails
    else{
        pennyImg.setAttribute("src","./penny-tails.jpg")
        //display you flipped heads
        statusText.textContent = "You Flipped Tails!"
        //update the number of tails
        numberTails = numberTails + 1
        totalFlips = totalFlips + 1
        //display that updated count
        numberTailsTd.textContent = numberTails
        //update percentage heads
        percentHeadsTd.textContent = `${Math.round(numberHeads / totalFlips * 100)}%`
        percentTailsTd.textContent = `${Math.round(numberTails / totalFlips * 100)}%`
    }
})


//handle clear button clicks
clearButton.addEventListener("click", function() {
    console.log("clear button was clicked")
    numberHeadsTd.textContent = "0"
    numberTailsTd.textContent = "0"
    percentHeadsTd.textContent = "0%"
    percentTailsTd.textContent = "0%"
    console.log("scoreboard cleared")
})
