const btn = document.querySelector("button")
let id = 0
const exampFunc = async function() {
    const response = await fetch(`https://dummyjson.com/quotes`)
    const data = await response.json()
    const trueData = data.quotes
    const limit = trueData[trueData.length - 1].id
    id++
    if (id <= limit) {
        for (let i = 0; i < limit; i++) {
            if (trueData[i].id == id) {
                alert(trueData[i].quote)
                return
            }
        }
    }
    else {
        id *= 0
        exampFunc()
    }
}

btn.addEventListener("click", exampFunc)