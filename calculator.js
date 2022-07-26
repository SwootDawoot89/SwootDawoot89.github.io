let body = document.querySelector("body")
let vinput = document.querySelector("#vcleetus")
let pinput = document.querySelector("#pcleetus")
let button = document.querySelector("button")
let output = document.querySelector("output")
let add = document.querySelector("#add")

function quickmaths() {
    output.value = Number(vinput.value) + Number(pinput.value) 
    
}

add.addEventListener("click", quickmaths)

function subtract() {
    output.value = Number(vinput.value) - Number(pinput.value) 
    
}

sub.addEventListener("click", subtract)

function times() {
    output.value = Number(vinput.value) * Number(pinput.value) 
    
}

mult.addEventListener("click", times)


function divide() {
    output.value = Number(vinput.value) / Number(pinput.value) 
    
}

div.addEventListener("click", divide)
