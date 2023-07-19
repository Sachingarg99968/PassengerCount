let saveEl = document.getElementById("prvs-ent")
let countEl = document.getElementById("count-el")
console.log(countEl)


let count = 0
function increment(){
    count +=1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    console.log(count)
    countEl.innerText = 0
    count = 0
}





