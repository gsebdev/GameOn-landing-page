export default class Modal {

    constructor(modalObject) {

        this.modalObject = modalObject;
        document.querySelector('main').insertAdjacentHTML('afterbegin', '<div class="bground"><div class="content"><span class="close"></span><div class="modal-body"></div></div></div></div>');
        
        this.modalContainerEl = document.querySelector(".bground");
        this.modalCloseEl = document.querySelectorAll('.close');
        this.modalOpenEl = document.querySelectorAll(".modal-btn");
        
        this.modalOpenEl.forEach((el) => el.addEventListener("click", this.open.bind(this)));
        this.modalCloseEl.forEach((el) => el.addEventListener("click", this.close.bind(this)));
    }

    init() {
        this.modalObject.make(this.modalContainerEl.querySelector('.modal-body'));
        this.modalObject.init();
    }
    
    open() {
        this.init(this);
        this.modalContainerEl.setAttribute('data-opened', true);
        window.scrollTo({ top: 0 });
    }

    close() {
        this.modalContainerEl.setAttribute('data-opened', false);
        this.reset(this);
       
    }
    reset() {
        this.modalContainerEl.querySelector('.modal-body').innerHTML = '';
    }
}
