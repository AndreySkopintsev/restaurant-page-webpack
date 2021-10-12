import './style.css'

function createMenu(){
    const container = document.querySelector('.container')
    container.innerHTML = ''
    let div = document.createElement('div')
    div.innerHTML = 'I\'m here and I\'m MENU'
    div.classList.add('menu')

    container.appendChild(div)
}

export default createMenu