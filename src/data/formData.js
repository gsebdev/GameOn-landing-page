const form = {
  id: 'reservation-form',
  name: 'reserve',
  action: 'index.html',
  method: 'post',
  submit: 'C\'est parti',
  data: [{
    type: 'text',
    name: 'first',
    input_class: 'text-control',
    inputs: [{
      label: 'Prénom',
      id: 'first'
    }]
  },
  {
    type: 'text',
    name: 'last',
    input_class: 'text-control',
    inputs: [{
      label: 'Nom',
      id: 'last'
    }]
  },
  {
    type: 'email',
    name: 'email',
    input_class: 'text-control',
    inputs: [{
      label: 'E-mail',
      id: 'email'
    }]
  },
  {
    type: 'date',
    name: 'birthdate',
    input_class: 'text-control',
    inputs: [{
      label: 'Date de naissance',
      id: 'birthdate'
    }]
  },
  {
    type: 'number',
    name: 'quantity',
    input_class: 'text-control',
    inputs: [{
      label: 'À combien de tournois GameOn avez-vous déjà participé ?',
      id: 'quantity'
    }]
  },
  {
    type: 'radio',
    name: 'location',
    label_after: true,
    before_html: '<p class="text-label">A quel tournoi souhaitez-vous participer cette année ?</p>',
    label_class: 'checkbox-label',
    input_class: 'checkbox-input',
    inputs: [{
      label: '<span class="checkbox-icon"></span>New York',
      id: 'location1'
    },
    {
      label: '<span class="checkbox-icon"></span>San Francisco',
      id: 'location2'
    },
    {
      label: '<span class="checkbox-icon"></span>Seatle',
      id: 'location3'
    },
    {
      label: '<span class="checkbox-icon"></span>Chicago',
      id: 'location4'
    },
    {
      label: '<span class="checkbox-icon"></span>Boston',
      id: 'location5'
    },
    {
      label: '<span class="checkbox-icon"></span>Portland',
      id: 'location6'
    }
    ]
  },
  {
    type: 'checkbox',
    name: 'user-approval',
    label_after: true,
    label_class: 'checkbox2-label',
    input_class: 'checkbox-input',
    inputs: [{
      label: '<span class="checkbox-icon"></span>J\'ai lu et accepté les conditions d\'utilisation.',
      id: 'terms-of-use',
      required: true
    },
    {
      label: '<span class="checkbox-icon"></span>Je souhaite être prévenu des prochains évènements.',
      id: 'newsletter'
    }
    ]
  }
  ]
}

export default form
