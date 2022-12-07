export default class Form {
    constructor(formEl) {
        this.formEl = formEl;
        // le 'click' sur le bouton submit est écouté
        this.formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit(this);
        });

    }

    handleSubmit() {
        
        const formData = this.formEl.querySelectorAll('.formData');
        let errors = [];
        let errorsSum;
        let data = {};

        // chaque élément .formData du formulaire est validé puis il est rajouté à l'objet {data}

        formData.forEach(dataEl => {

            const inputs = dataEl.querySelectorAll('input');
            const inputData = this.validateData(inputs);

            if (inputData.hasError !== false) {

                errors.push(1);
                this.displayError(dataEl, inputData.hasError);

            } else if ( inputData.hasError === false ) {
                errors.push(0);
                this.hideError(dataEl);
                data[inputData.name] = inputData.value;
            }

        });

        //On vérifie qu'il n'y a pas d'erreurs

        errorsSum = errors.reduce((a, current) => a + current, 0);

        if( errors.length === formData.length && errorsSum === 0 ){
           
            this.send(data);
        }
    }


    validateData(inputs) {
        let data = {
            name: inputs[0].name,
            value: 'error'
        }
        let errorMsg;
        
        switch(inputs[0].type) {

            case 'text':
                errorMsg = "Veuillez entrer au minimum 2 caractères !";
                inputs[0].value.length < 2 ? data.hasError = errorMsg : (data.value = inputs[0].value, data.hasError = false);
                break;

            case 'email':
                errorMsg = "Adresse Email invalide, merci de modifier";
                !inputs[0].value.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,6})+)$/) ? data.hasError = errorMsg : (data.value = inputs[0].value, data.hasError = false);
                break;

            case 'number':
                errorMsg = "Merci d'entrer une valeur numérique";
                !inputs[0].value.match(/^\d+$/) ? data.hasError = errorMsg : (data.value = inputs[0].value, data.hasError = false);
                break;

            case 'radio':
                errorMsg = "Merci de sélectionner une localité";
                const checked = inputs[0].parentElement.querySelectorAll(':checked');
                checked.length !== 1 ? data.hasError = errorMsg : (data.value = checked[0].value, data.hasError = false);
                break;    

            case 'checkbox':
                errorMsg = "Merci de cocher la case conditions générales";
                let errors = 0;
                let values = {};
                inputs.forEach(input => {
                    !input.checked && input.hasAttribute('required') ? errors += 1 : values[input.id] = input.checked;
                });
                errors !== 0 ? data.hasError = errorMsg : (data.value = values, data.hasError = false);
                break;

            case 'date':
                errorMsg = "Veuillez saisir une date de naissance valide";
                const date = Date.parse(inputs[0].value);
                const today = Date.now();
                const minDate = Date.parse('1920-01-01');
                
                date !== NaN && minDate <= date && date < today ? (data.value = inputs[0].value, data.hasError = false) : data.hasError = errorMsg;
                break;

        }
        return data;

    }

    displayError(el, errorMsg) {
        el.setAttribute('data-error', errorMsg);
        el.setAttribute('data-error-visible', true);
    }


    hideError(el) {
        el.setAttribute('data-error-visible', false);
    }

    send(data) {
        console.log(data);
        const sendFunc = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Success!'), 2000);
        });

        sendFunc.then(
            (response) => {
                console.log(response);
            }
        )
       
    }

}