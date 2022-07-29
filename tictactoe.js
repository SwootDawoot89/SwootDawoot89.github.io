let block0 = document.querySelector("#block_0")
let block1 = document.querySelector("#block_1")
let block2 = document.querySelector("#block_2")
let block3 = document.querySelector("#block_3")
let block4 = document.querySelector("#block_4")
let block5 = document.querySelector("#block_5")
let block6 = document.querySelector("#block_6")
let block7 = document.querySelector("#block_7")
let block8 = document.querySelector("#block_8")
let turn = "x"
let button = document.querySelector("#reset")


function place(event) {
    if (turn === "x") {
        event.target.innerHTML = '<img src="1200px-LetterX.svg.png">'
        turn = "o"
    } else {
        event.target.innerHTML = '<img src= "192948-0320-px.jpg" >'
        turn = "x"
    }
}

function reset(event) {
    block0.innerHTML= ""
    block1.innerHTML= ""
    block2.innerHTML= ""
    block3.innerHTML= ""
    block4.innerHTML= ""
    block5.innerHTML= ""
    block6.innerHTML= ""
    block7.innerHTML= ""
    block8.innerHTML= ""
    turn= "x"
}

block_0.addEventListener("click", place)
block_1.addEventListener("click", place)
block_2.addEventListener("click", place)
block_3.addEventListener("click", place)
block_4.addEventListener("click", place)
block_5.addEventListener("click", place)
block_6.addEventListener("click", place)
block_7.addEventListener("click", place)
block_8.addEventListener("click", place)
button.addEventListener("click", reset)
