(() => ({
  name: 'Date Input',
  icon: 'DateTimePickerIcon',
  category: 'FORM',
  structure: [
    {
      name: 'InputDate',
      options: [
        {
          value: { label: ['Date'], value: [] },
          label: 'Label',
          key: 'customModelAttribute',
          type: 'CUSTOM_MODEL_ATTRIBUTE',
          configuration: {
            allowedTypes: ['string'], // string datatype: let user decide correct attribute
          },
        },
        {
          type: 'CUSTOM',
          label: 'Type',
          key: 'timeType',
          value: 'datetime-local',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Date and Time', value: 'datetime-local' },
              { name: 'Date', value: 'date' },
              { name: 'Month', value: 'month' },
              { name: 'Week', value: 'week' },
              { name: 'Time', value: 'time', }
            ],
          },
        }
        ,
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
              { name: 'Read Only', value: 'readonly' },
              { name: 'Disabled', value: 'disabled' }
            ]
          }
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
              { name: 'Large', value: 'lg' },
              { name: 'Medium', value: 'm' },
              { name: 'Small', value: 'sm' },
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
