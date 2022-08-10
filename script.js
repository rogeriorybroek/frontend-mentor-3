const mainContainer = document.querySelector('.container')
const thankContainer = document.querySelector('.thank-you')
const btnSubmit = document.querySelector('#submit')
const btnRateAgain = document.querySelector('#rate-again')
const rateButtons = document.querySelectorAll('.btn')
const actualRate = document.querySelector('#rating')


rateButtons.forEach((rate) => {
    rate.onclick = () => {
        console.log(rate.innerText)
        actualRate.innerText = rate.innerText
    }
})



btnSubmit.onclick = () => {

    if (!actualRate.innerText) {
        alert('please rate us')
    } else {
        mainContainer.classList.add('hidden')
        thankContainer.classList.remove('hidden')
    }

}


btnRateAgain.onclick = () => {
    mainContainer.classList.remove('hidden')
    thankContainer.classList.add('hidden')
    actualRate.innerText = ''
}

