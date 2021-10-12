import createMain from './mainPage';
import createMenu from './menuPage';
import createContact from './contactPage';
import './style.css'

const content = document.querySelector('.content')
const container = document.createElement('div')
container.classList.add('container')
const btns = document.createElement('div')
content.appendChild(btns)
content.appendChild(container)
const homeBtn = document.createElement('button')
const menuBtn = document.createElement('button')
const contactBtn = document.createElement('button')
homeBtn.innerHTML='Home'
menuBtn.innerHTML='Menu'
contactBtn.innerHTML='Contact'
btns.appendChild(homeBtn)
btns.appendChild(menuBtn)
btns.appendChild(contactBtn)

createMain()

homeBtn.addEventListener('click',createMain)
menuBtn.addEventListener('click',createMenu)
contactBtn.addEventListener('click',createContact)
