import './style.css'

function createMain(){
    const container = document.querySelector('.container')
    container.innerHTML = ''
    let div = document.createElement('div')
    div.innerHTML = 'I\'m here and I\'m HOME'
    div.classList.add('home')

    container.appendChild(div)
}

export default createMain