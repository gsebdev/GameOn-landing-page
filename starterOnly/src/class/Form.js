export default class Form {
    
    constructor(form) {

        this.form = form;
        this.sent = false;
        this.formEl = null;
    }

    init() {
        // lorsque l'objet Form est initialisé, on instancie une promesse qui sera résolue lorsque Form aura été envoyé avec succès
        // cela permet d'indiquer à l'object conteneur parent que Form est envoyé avec succès
        return new Promise( resolve => {

            this.formEl.addEventListener('submit', (e) => {
                e.preventDefault();
                
                //Tant que Form n'a pas été envoyé on écoute le bouton submit en appelant la méthode handlesubmit()
                
                if(this.sent === false) {
                    this.handleSubmit(this); 
                }

                //Dès que Form a été envoyé on résoud la promesse

                else if (this.sent === true) {
                    resolve('close');   
                }
        
            });
        });
        
    }

    handleSubmit() {

        const formData = this.formEl.querySelectorAll('.formData');
        let errors = [];
        let errorsSum;
        let data = {};

        // chaque élément .formData du formulaire est validé puis il est rajouté à la variable {data}

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

        //On vérifie qu'il n'y a pas d'erreurs et que tous les champs de données ont passé la validation
        //Si oui la methode send() est appelé pour envoyer au serveur

        errorsSum = errors.reduce((a, current) => a + current, 0);

        if( errors.length === formData.length && errorsSum === 0 ){
           
            this.send(data);
        }
    }

    //la methode make() permet de générer le code html de Form à partir du parametre 'this.form' qui à été passé au constructeur
    //Ensuite ce code html est inclus dans parentElement
    make(parentElement) {
        
        let html = '';

        html += `<form id="${this.form.id}" name="${this.form.name}" action="${this.form.action}" method="${this.form.method}" novalidate><div class="loader"></div><span class="success-msg"></span>`;


        this.form.data.forEach((formData) => {
            
            if (formData.before_html) {
                html += formData.before_html;
            }

            html += `<div class="formData">`;

            formData.inputs.forEach((input) => {
                if(formData.label_after) {
                    
                    html += `<input class="${formData.input_class ? formData.input_class : false}" type="${formData.type}" id="${input.id}" name="${formData.name}" ${input.required ? 'required': false} /><label class="${formData.label_class ? formData.label_class : false}" for="${input.id}">${input.label}</label>
                    `;

                } else {
                    html += `<label class="${formData.label_class ? formData.label_class : false}" for="${input.id}">${input.label}</label><br>
                    <input class="${formData.input_class ? formData.input_class : false}" type="${formData.type}" id="${input.id}" name="${formData.name}" ${input.required ? 'required': false} />`;
                }

            });

            html += `</div>`;
        });

        html += `<input class="btn-submit" type="submit" class="button" value="${this.form.submit}" /></form>`;
        
        parentElement.innerHTML = html;
        
        //mise à jour de la variable contenant l'element form (this.formEl)
        this.formEl = document.querySelector('#' + this.form.id);

    }

    //la methode validateData permet de valider un element formData pouvant contenir plusieurs inputs
    //la validation prend en compte le type de champ input
    validateData(inputs) {
        
        // initialisation de la valeur de retour {data}
        let data = {
            name: inputs[0].name,
            value: 'error'
        }

        let errorMsg;
        
        switch(inputs[0].type) {
            // vérification qu'il y a au moins 2 caractères
            case 'text':
                errorMsg = "Veuillez entrer au minimum 2 caractères !";
                inputs[0].value.length < 2 ? data.hasError = errorMsg : (data.value = inputs[0].value, data.hasError = false);
                break;
            // vérification que email est bien un pattern email
            case 'email':
                errorMsg = "Adresse Email invalide, merci de modifier";
                !inputs[0].value.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,6})+)$/) ? data.hasError = errorMsg : (data.value = inputs[0].value, data.hasError = false);
                break;
            // uniquement des nombres
            case 'number':
                errorMsg = "Merci d'entrer une valeur numérique";
                !inputs[0].value.match(/^\d+$/) ? data.hasError = errorMsg : (data.value = inputs[0].value, data.hasError = false);
                break;
            //un et un seul bouton radio doit être sélectionné
            case 'radio':
                errorMsg = "Merci de sélectionner une localité";
                const checked = inputs[0].parentElement.querySelectorAll(':checked');
                checked.length !== 1 ? data.hasError = errorMsg : (data.value = checked[0].value, data.hasError = false);
                break;    
            //les chackbox 'required' doivent être cochées
            case 'checkbox':
                errorMsg = "Merci de cocher la case conditions générales";
                let errors = 0;
                let values = {};
                inputs.forEach(input => {
                    !input.checked && input.hasAttribute('required') ? errors += 1 : values[input.id] = input.checked;
                });
                errors !== 0 ? data.hasError = errorMsg : (data.value = values, data.hasError = false);
                break;
            // date valide comprise entre aujourd'hui et 01/01/1920    
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

    //methode permettant d'afficher l'erreur sous l'element formData correspondant

    displayError(el, errorMsg) {
        el.setAttribute('data-error', errorMsg);
        el.setAttribute('data-error-visible', true);
    }

    //methode permettant de masquer l'erreur sous l'element formData correspondant

    hideError(el) {
        el.setAttribute('data-error-visible', false);
    }

    //méthode permettant d'afficher le loader lors de l'envoi

    displayLoading() {
        const submitBtn = this.formEl.querySelector('input[type=submit]');

        this.formEl.className = 'sending';
        submitBtn.setAttribute('value', 'Envoi...');
    }

    //méthode permettant d'afficher le message d'envoi réussi
    //mise à jour de la variable this.sent permettant de résoudre la promesse init() lors du prochain click sur le btn submit
    displaySuccessMsg(msg) {
        const formHeight = this.formEl.offsetHeight;
        const submitBtn = this.formEl.querySelector('input[type=submit]');
        
        this.sent = true;
        this.formEl.querySelector('.success-msg').innerHTML = msg;
        this.formEl.className = 'sending--success';
        this.formEl.style.height = formHeight + 'px';
        
        submitBtn.setAttribute('value', 'Fermer');
        
        

        

    }

    //méthode d'envoi au serveur les données {data}
    send(data) {
        console.log(data);

        // code envoi serveur à rajouter
        //simulation avec new Promise et setTimeout()
        const sendFunc = new Promise((resolve, reject) => {
            
            this.displayLoading();
            //setTimeout(() => resolve('Success!'), 2000);
            setTimeout(() => reject('error!'), 2000);

        });

        sendFunc.then(
            (response) => {

                console.log(response);

                if(response === 'Success!') {
                    this.displaySuccessMsg('Merci pour<br>votre inscription');
                }
            }
        )
        .catch((error) => {
            console.log(error)
            this.displaySuccessMsg('Une erreur est survenue<br>merci de rééssayer');
        })
       
    }

}