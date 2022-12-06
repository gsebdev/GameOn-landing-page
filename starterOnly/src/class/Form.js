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

            if (inputData.hasError === true) {

                errors.push(1);
                dataEl.classList.add('formData--has-error');

            } else if ( inputData.hasError === false ) {

                dataEl.classList.remove('formData--has-error');
                data[inputData.name] = inputData.value;
                errors.push(0);
            }

        });

        //On vérifie que tout les .formData ont passé la vérification et qu'il n'y a pas d'erreurs

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
        
        switch(inputs[0].type) {

            case 'text':
                inputs[0].value.length < 2 ? data.hasError = true : (data.value = inputs[0].value, data.hasError = false);
                break;

            case 'email':
                !inputs[0].value.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,6})+)$/) ? data.hasError = true : (data.value = inputs[0].value, data.hasError = false);
                break;

            case 'number':
                !inputs[0].value.match(/^\d+$/) ? data.hasError = true : (data.value = inputs[0].value, data.hasError = false);
                break;

            case 'radio':
                const checked = inputs[0].parentElement.querySelectorAll(':checked');
                checked.length !== 1 ? data.hasError = true : (data.value = checked[0].value, data.hasError = false);
                break;    

            case 'checkbox':
                let errors = 0;
                let values = {};
                inputs.forEach(input => {
                    !input.checked && input.hasAttribute('required') ? errors += 1 : values[input.id] = input.checked;
                });
                errors !== 0 ? data.hasError = true : (data.value = values, data.hasError = false);
                break;

            case 'date':
                const date = Date.parse(inputs[0].value);
                const today = Date.now();
                const minDate = Date.parse('1920-01-01');
                
                date !== NaN && minDate <= date && date < today ? (data.value = inputs[0].value, data.hasError = false) : data.hasError = true;
                break;

        }
        return data;

    }

    send(data) {
        console.log(data);
    }

}