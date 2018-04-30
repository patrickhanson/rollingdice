let destination = document.getElementById("diceresults")

function createBlankNodeContainer(node) {
    const newElement = document.createElement("div");
    newElement.appendChild(node);
    destination.appendChild(newElement);
}

function oneDiRoll() {
    return Math.floor((Math.random() * 6) + 1)
}
function twoDiceRoll() {
    return oneDiRoll() + oneDiRoll()
}
let diceCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for(let i = 1; i <= 1000; i++) {
    const roll = twoDiceRoll();
    diceCount[roll] += 1
}

function diceBarGraph() {
    const containerDiv = document.createElement("div")
    for(let i = 2; i <= 12; i++) {
        let newElement = document.createElement("div")
        newElement.style.backgroundColor = "gray"
        newElement.style.height = "20px"
        newElement.style.border = "solid 1px black"
        newElement.style.color = "white"
        newElement.style.width = String(diceCount[i] * 3) + "px"
        const text = document.createTextNode(String(i) + ": " + diceCount[i])
        newElement.appendChild(text)
        containerDiv.appendChild(newElement)
    }
    return containerDiv
}

createBlankNodeContainer(diceBarGraph())