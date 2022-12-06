export default class Modal {

    constructor(modalContainerEl, modalCloseEl, modalOpenEl) {
        
        this.modalContainerEl = modalContainerEl;
        this.modalCloseEl = modalCloseEl;
        this.modalOpenEl = modalOpenEl;
        this.modalOpenEl.forEach((el) => el.addEventListener("click", this.open.bind(this)));
        this.modalCloseEl.forEach((el) => el.addEventListener("click", this.close.bind(this)));
    }
    
    open() {
        this.modalContainerEl.style.display = 'block';
    }

    close() {
        this.modalContainerEl.style.display = 'none';
        this.reset(this);
       
    }
    reset() {
        this.modalContainerEl.querySelectorAll('input:not(input[type=submit]):not(input[type=checkbox]):not(input[type=radio])')
            .forEach( input => input.value = '' );

        this.modalContainerEl.querySelectorAll('input[type=checkbox], input[type=radio]')
            .forEach( input => input.checked = false );
    }
}
