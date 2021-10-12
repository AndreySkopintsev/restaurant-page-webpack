import './style.css'

function createContact(){
    const container = document.querySelector('.container')
    container.innerHTML = ''
    let div = document.createElement('div')
    div.innerHTML = 'I\'m here and I\'m CONTACT'
    div.classList.add('contact')

    container.appendChild(div)
}

export default createContact