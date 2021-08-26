(() => ({
  name: 'Navigation Button',
  icon: 'ButtonIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'NavigationButton',
      options: [
        {
          type: 'VARIABLE',
          label: 'Text',
          key: 'text',
          value: ['Navigation Button'],
        },
        {
          type: 'CUSTOM',
          label: 'Link to',
          key: 'linkType',
          value: 'internal',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Internal page', value: 'internal' },
              { name: 'External page', value: 'external' },
            ],
          },
        },
        {
          value: '',
          label: 'Page',
          key: 'linkTo',
          type: 'ENDPOINT',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'linkType',
              comparator: 'EQ',
              value: 'internal',
            },
          },
        },
        {
          value: [''],
          label: 'URL',
          key: 'linkToExternal',
          type: 'VARIABLE',
          configuration: {
            placeholder: 'Starts with https:// or http://',
            condition: {
              type: 'SHOW',
              option: 'linkType',
              comparator: 'EQ',
              value: 'external',
            },
          },
        },

        {
          type: 'TOGGLE',
          label: 'Visible',
          key: 'visible',
          value: true,
        },
      ],
      descendants: [],
    },
  ],
}))();
