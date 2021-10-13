import createMain from './mainPage';
import createMenu from './menuPage';
import createContact from './contactPage';
import './style.css'

const content = document.querySelector('.content')

const container = document.createElement('div')
container.classList.add('container')

// Creating header with nav
function createHeader(){
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    h1.textContent = 'Mazzeratie Monica'
    header.appendChild(h1)
    header.appendChild(createNav())

    return header
}

// Function to create nav
function createNav(){
    const btns = document.createElement('nav')
    btns.classList.add('btns')

    // Creating home button
    const homeBtn = document.createElement('button')
    homeBtn.innerHTML='Home'
    homeBtn.addEventListener('click',createMain)

    // Creating menu button
    const menuBtn = document.createElement('button')
    menuBtn.innerHTML='Menu'
    menuBtn.addEventListener('click',createMenu)

    // Creating contact button
    const contactBtn = document.createElement('button')
    contactBtn.innerHTML='Contact'
    contactBtn.addEventListener('click',createContact)

    btns.appendChild(homeBtn)
    btns.appendChild(menuBtn)
    btns.appendChild(contactBtn)

    return btns
}


content.appendChild(createHeader())
content.appendChild(container)



// Appending all the buttons to the nav


createMain()




