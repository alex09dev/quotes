import quotes from "./quotes.json"
function generateQuote () {
    const randomNum = Math.round(Math.random() * quotes.length)
    const randomQuote = quotes[randomNum]
    document.querySelector(".quote").innerText = "“" + randomQuote.cita + "”"
    document.querySelector(".autor").innerText = "- " + randomQuote.autor
}

const newQuoteBtn = document.querySelector(".new-quote")
newQuoteBtn.onclick = generateQuote