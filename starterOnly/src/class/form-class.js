export default class Form {
    constructor(formEl) {
        this.formEl = formEl
    }
    init() {
        this.formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validateAll(this);
        });

    }

    validateAll() {
        let formData = this.formEl.querySelectorAll('.formData');
       
        formData.forEach(dataEl => {
            let input = dataEl.querySelector('input');
            let data = input.value;

            switch(input.type) {

                case 'text':
                    this.validateText(input, data);
                    break;
                case 'email':
                    this.validateEmail(input, data);
                    break;
                case 'number':
                    this.validateNumber(input, data);
                    break;
                case 'radio':
                    this.validateRadio(dataEl);
                    break;
                case 'checkbox':
                    this.validateCheckbox(dataEl);
                    break;

            }
        })
    }

    validateText(input, data) {
        
        if(data.length < 2) {
            this.displayError(input);
        } else {
            this.hideError(input);
        }

    }

    validateEmail(input, data) {

        if(!data.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,6})+)$/)) {
            this.displayError(input);
        } else {
            this.hideError(input);
        }
    }

    validateNumber(input, data) {

        if(!data.match(/^\d+$/)) {
            this.displayError(input);
        } else {
            this.hideError(input);
        }
    }

    validateRadio(dataEl) {

        let inputs = dataEl.querySelectorAll('input');
        let checked = 0;
        inputs.forEach(input => {
            if(input.checked === true) {
                checked += 1;
            } 
        })
        
        checked !== 1 ? this.displayError(inputs[0]) : this.hideError(inputs[0]);
    }

    validateCheckbox(dataEl) {
        let inputs = dataEl.querySelectorAll('input');
        let errors = 0;
        inputs.forEach(input => {
            if(!input.checked && input.hasAttribute('required')) {
                errors += 1;
            }
        });
        errors !== 0 ? this.displayError(inputs[0]) : this.hideError(inputs[0]);
    }

    displayError(input) {
        input.parentElement.querySelector('.input-error').style.display = 'block';
    }
    hideError(input) {
        input.parentElement.querySelector('.input-error').style.display = 'none';
    }
}