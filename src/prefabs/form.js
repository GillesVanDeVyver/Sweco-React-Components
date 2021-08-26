(() => ({
  name: 'Form',
  icon: 'FormIcon',
  category: 'FORM',
  structure: [
    {
      name: 'Form',
      options: [
        {
          value: {
            customModelId: null,
            actionId: null,
            modelId: null,
            variableId: null,
          },
          label: 'Action',
          key: 'formData',
          type: 'FORM_DATA',
          configuration: {
            apiVersion: 'v1',
          },
        },
        {
          value: '',
          label: 'Model',
          key: 'model',
          type: 'MODEL',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'formData',
              comparator: 'EQ',
              value: '',
            },
          },
        },
        {
          value: {},
          label: 'Filter',
          key: 'filter',
          type: 'FILTER',
          configuration: {
            dependsOn: 'model',
          },
        },
        {
          value: '',
          label: 'Current Record',
          key: 'currentRecord',
          type: 'NUMBER',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'currentRecord',
              comparator: 'EQ',
              value: 'never',
            },
          },
        },
        {
          value: 'built-in',
          label: 'Success message',
          key: 'showSuccess',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Built in', value: 'built-in' },
              { name: 'Interaction', value: 'interaction' },
            ],
          },
        },
        {
          value: 'Thanks for submitting the form!',
          label: 'Success message',
          key: 'formSuccessMessage',
          type: 'TEXT',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'showSuccess',
              comparator: 'EQ',
              value: 'built-in',
            },
          },
        },
        {
          value: 'built-in',
          label: 'Error message',
          key: 'showError',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Built in', value: 'built-in' },
              { name: 'Interaction', value: 'interaction' },
            ],
          },
        },
        {
          value: 'Failed to submit the form!',
          label: 'Error message',
          key: 'formErrorMessage',
          type: 'TEXT',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'showError',
              comparator: 'EQ',
              value: 'built-in',
            },
          },
        },
        {
          value: ['0rem', '0rem', 'M', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
        {
          value: '',
          label: 'Redirect after succesful submit',
          key: 'redirect',
          type: 'ENDPOINT',
        },
      ],
      descendants: []
    },
  ],
}))();
