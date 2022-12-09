export default class Modal {
  constructor (modalId, ObjectConstructor, parameters) {
    this.ObjectConstructor = ObjectConstructor
    this.parameters = parameters
    this.modalId = modalId

    // insertion du code html du modal dans l'element main
    document.querySelector('main').insertAdjacentHTML('afterbegin', '<div id="' + this.modalId + '" class="bground"><div class="content"><span class="close"></span><div class="modal-body"></div></div></div></div>')

    this.modalEl = document.querySelector('#' + this.modalId)
    this.CloseEl = document.querySelector('#' + this.modalId + ' .close')
    this.OpenElements = document.querySelectorAll('.modal-btn[data-target=' + this.modalId + ']')

    // détection du click pour ouvrir et fermer la modale
    this.OpenElements.forEach((el) => el.addEventListener('click', this.open.bind(this)))
    this.CloseEl.addEventListener('click', this.close.bind(this))
  }

  init () {
    // Création d'une nouvelle instance de l'objet à inclure dans la modale
    const modalInstance = new this.ObjectConstructor(this.parameters)
    modalInstance.make(this.modalEl.querySelector('.modal-body'))
    modalInstance.init().then((action) => {
      if (action === 'close') {
        this.close(this)
      }
    })
  }

  // methode permettant d'afficher la modale et de l'initialiser
  open () {
    this.init(this)
    this.modalEl.setAttribute('data-opened', true)
    window.scrollTo({ top: 0 })
  }

  // methode permettant de fermer la modale
  close () {
    this.modalEl.setAttribute('data-opened', false)
    this.reset(this)
  }

  // methode permettant d'effacer le contenu de la modale
  reset () {
    this.modalEl.querySelector('.modal-body').innerHTML = ''
  }
}
