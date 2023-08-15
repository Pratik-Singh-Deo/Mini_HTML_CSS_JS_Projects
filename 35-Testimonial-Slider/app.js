const testimonials = [
    {
        name: "Wynny O",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        text: "I was amazed at the quality of Apple. Apple has completely surpassed our expectations. I like Apple more and more each day because it makes my life a lot easier. Wow what great service, I love it!"
    },
    {
        name: "Matelda D",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        text: "Apple should be nominated for service of the year. Apple is the most valuable business resource we have EVER purchased. We have no regrets! Man, this thing is getting better and better as I learn more about it"
    },
    {
        name: "Georgianna Z",
        photoUrl: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        text: "ust what I was looking for. I have gotten at least 50 times the value from Apple. The very best. I am really satisfied with my Apple."
    },
    {
        name: "acinda E",
        photoUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "pple is worth much more than I paid. Thanks guys, keep up the good work! It's the perfect solution for our business."
    },
]

const imgEl = document.querySelector('img')
const textEl = document.querySelector('.text')
const usernameEl = document.querySelector('.username')

let idx = 0;

updateTestimonial()

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx]
    imgEl.src = photoUrl
    textEl.innerText = text
    usernameEl.innerText = name
    idx++
    if (idx === testimonials.length) {
        idx = 0
    }
    setTimeout(() => {
        updateTestimonial()
    },5000)
}