(() => ({
  name: 'Alert',
  icon: 'AlertIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Alert',
      options: [
        {
          type: 'VARIABLE',
          label: 'Message',
          key: 'message',
          value: ['']
        },
        {
          type: 'CUSTOM',
          label: 'Alert Type',
          key: 'alertType',
          value: 'primary',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Primary', value: 'primary' },
              { name: 'Success', value: 'success' },
              { name: 'Warning', value: 'warning' },
              { name: 'Danger', value: 'danger' }
            ]
          }
        },
        {
          value: ['0rem', '0rem', 'M', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
      ],
      descendants: [],
    },
  ],
}))();
