const btnEl = document.getElementById('btn')
const quoteEl = document.getElementById('quote')
const quoteAuthorEl = document.getElementById('author')
const apiURL = 'https://api.quotable.io/random'

async function getQuote() {
    try {
        quoteEl.innerText = 'Updating...'
        quoteAuthorEl.innerText = 'Updating...'
        btnEl.innerText = 'Loading...'
        btnEl.disabled = true

        const response = await fetch(apiURL)
        const data = await response.json()

        const quoteContent = data.content
        const quoteAuthor = data.author

        quoteEl.innerText = quoteContent
        quoteAuthorEl.innerText = '~ ' + quoteAuthor

        btnEl.innerText = 'Get a quote'
        btnEl.disabled = false
    } catch (error) {
        console.log(error)
        quoteEl.innerText = 'An error happened, try again later'
        quoteAuthorEl.innerText = 'An error happened'
        btnEl.innerText = 'Get a quote'
        btnEl.disabled = false
    }
}

getQuote()

btnEl.addEventListener('click', getQuote)