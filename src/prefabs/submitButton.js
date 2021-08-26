(() => ({
  name: 'SubmitButton',
  icon: 'SubmitButtonIcon',
  category: 'FORM',
  structure: [
    {
      name: 'Button',
      options: [
        {
          label: 'Toggle visibility',
          key: 'visible',
          value: true,
          type: 'TOGGLE',
          configuration: {
            as: 'VISIBILITY',
          },
        },
        {
          type: 'CUSTOM',
          label: 'Button Style',
          key: 'buttonStyle',
          value: 'primary',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Primary', value: 'primary' },
              { name: 'Secondary', value: 'secondary' },
              { name: 'Dark', value: 'dark' },
              { name: 'Warning', value: 'warning' },
              { name: 'Danger', value: 'danger' },
              { name: 'Success', value: 'success' },
            ],
          },
        },
        {
          type: 'CUSTOM',
          label: 'type',
          key: 'type',
          value: 'submit',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Submit', value: 'submit' },
              { name: 'Reset', value: 'reset' },
            ],
          },
        },
        {
          type: 'VARIABLE',
          label: 'Button text',
          key: 'buttonText',
          value: ['Send'],
        },


        {
          value: false,
          label: 'Full width',
          key: 'fullWidth',
          type: 'TOGGLE',
        },
        {
          type: 'CUSTOM',
          label: 'Size',
          key: 'size',
          value: 'm',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Large', value: 'lg' },
              { name: 'Medium', value: 'm' }, // this value doesn't do anything
              { name: 'Small', value: 'sm' },
              { name: 'Extra Small', value: 'xs' },
            ],
          },

        },
        {
          type: 'VARIABLE',
          label: 'Outer space',
          key: 'outerSpacing',
          value: ['0 0 0 0']
        },
        {
          label: 'Disabled',
          key: 'disabled',
          value: false,
          type: 'TOGGLE',
        },
      ],
      descendants: [],
    },
  ],
}))();
