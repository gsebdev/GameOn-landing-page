import Modal from './class/Modal.js'
import Form from './class/Form.js'
import form from './data/formData.js'

// selection des elements du header pour la navigation
const topNav = document.getElementById('myTopnav')
const menu = document.querySelector('.main-navbar')

// Création d'une nouvelle instance de Modal(id, constructor, parameters)
const modal = () => new Modal('reservation-modal', Form, form)
modal()

// lorsque la fenêtre est redimensionnée le menu est fermer pour éviter les bugs lors des rotations mobile
window.onresize = () => {
  topNav.classList.remove('responsive')
  menu.style.removeProperty('height')
}

// fonction permettant d'ouvrir le menu responsive mobile
window.editNav = () => {
  if (topNav.className === 'topnav') {
    topNav.className += ' responsive'
    menu.style.height = menu.scrollHeight + 'px'
  } else {
    topNav.className = 'topnav'
    menu.style.height = '0px'
  }
}
