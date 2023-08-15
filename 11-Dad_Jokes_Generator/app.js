const apikey = 'jbxui16rp4XyAAHEdQNDqQ==2Q30NJIcypgZcIQ6'
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
const btnEl = document.getElementById('btn')
const jokeEl = document.getElementById('joke')

const options = {
    method: 'GET',
    headers: {
        "X-Api-Key": apikey,
    }
}

async function getJoke() {

    try {
        jokeEl.innerText = 'Updating...'
        btnEl.disabled = true
        btnEl.innerText = 'Loading...'

        const response = await fetch(apiURL, options)
        const data = await response.json()

        btnEl.disabled = false
        btnEl.innerText = 'Tell me a joke'

        jokeEl.innerText = data[0].joke
    } catch (error) {
        console.log(error);
    }
}

btnEl.addEventListener('click', getJoke)