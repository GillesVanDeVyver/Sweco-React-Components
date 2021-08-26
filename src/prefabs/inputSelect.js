(() => ({
  name: 'Select Input',
  icon: 'SelectIcon',
  category: 'FORM',
  structure: [
    {
      name: 'InputSelect',
      options: [
        {
          value: { label: ['Select'], value: [] },
          label: 'Label',
          key: 'customModelAttribute',
          type: 'CUSTOM_MODEL_ATTRIBUTE',
          configuration: {
            allowedTypes: ['string'],
          },
        },
        
        {
          label: 'Option type',
          key: 'optionType',
          value: 'static',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Static', value: 'static' },
              { name: 'Model', value: 'model' },
              { name: 'Property', value: 'property' },
            ],
          },
        },
        {
          value: '',
          label: 'Property',
          key: 'property',
          type: 'PROPERTY',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'optionType',
              comparator: 'EQ',
              value: 'property',
            },
          },
        },
        {
          type: 'MODEL',
          label: 'Model',
          key: 'model',
          value: '',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'optionType',
              comparator: 'EQ',
              value: 'model',
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
            condition: {
              type: 'SHOW',
              option: 'optionType',
              comparator: 'EQ',
              value: 'model',
            },
          },
        },
        {
          type: 'PROPERTY',
          label: 'Order by',
          key: 'orderBy',
          value: '',
          configuration: {
            dependsOn: 'model',
            apiVersion: 'v1',
            condition: {
              type: 'SHOW',
              option: 'optionType',
              comparator: 'EQ',
              value: 'model',
            },
          },
        },
        {
          type: 'CUSTOM',
          label: 'Sort order',
          key: 'order',
          value: 'asc',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            condition: {
              type: 'HIDE',
              option: 'orderBy',
              comparator: 'EQ',
              value: '',
            },
            allowedInput: [
              { name: 'Ascending', value: 'asc' },
              { name: 'Descending', value: 'desc' },
            ],
          },
        },
        {
          type: 'PROPERTY',
          label: 'Property',
          key: 'labelProperty',
          value: '',
          configuration: {
            dependsOn: 'model',
            condition: {
              type: 'SHOW',
              option: 'optionType',
              comparator: 'EQ',
              value: 'model',
            },
          },
        },
        {
          value: '',
          label: 'Value property',
          key: 'valueProperty',
          type: 'PROPERTY',
          configuration: {
            dependsOn: 'model',
            condition: {
              type: 'SHOW',
              option: 'optionType',
              comparator: 'EQ',
              value: 'model',
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
            condition: {
              type: 'SHOW',
              option: 'optionType',
              comparator: 'EQ',
              value: 'model',
            },
          },
        },
        {
          type: 'TEXT',
          label: 'Options',
          key: 'selectOptions',
          value: 'a\nb\nc',
          configuration: {
            as: 'MULTILINE',
            condition: {
              type: 'SHOW',
              option: 'optionType',
              comparator: 'EQ',
              value: 'static',
            },
          },
        },
        {
          type: 'CUSTOM',
          label: 'Select Type',
          key: 'selectType',
          value: 'single',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Single', value: 'single' },
              { name: 'Multiple', value: 'multiple' }
            ]
          }
        },
        {
          type: 'CUSTOM',
          label: 'State',
          key: 'state',
          value: 'enabled',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Enabled', value: 'enabled' },
              { name: 'Disabled', value: 'disabled' }
            ]
          }
        },
        {
          value: [],
          label: 'Helper text',
          key: 'helperText',
          type: 'VARIABLE',
        },
        
        {
          value: false,
          label: 'Validation options',
          key: 'validationOptions',
          type: 'TOGGLE',
        },
        {
          value: ['This field is required'],
          label: 'Value required message',
          key: 'validationValueMissing',
          type: 'VARIABLE',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'validationOptions',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          label: 'Size',
          key: 'size',
          value: 'm',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Small', value: 'sm' },
              { name: 'Medium', value: 'm' },
              { name: 'Large', value: 'lg' },
            ],
          },
        },
        
        {
          value: false,
          label: 'Advanced settings',
          key: 'advancedSettings',
          type: 'TOGGLE',
        },
        {
          type: 'VARIABLE',
          label: 'name attribute',
          key: 'nameAttribute',
          value: [],
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'advancedSettings',
              comparator: 'EQ',
              value: true,
            },
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
