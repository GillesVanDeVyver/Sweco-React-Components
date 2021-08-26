(() => ({
  name: 'Button',
  icon: 'ButtonIcon',
  category: 'CONTENT',
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
          label: 'Button Type',
          key: 'variant',
          value: 'text',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Text', value: 'text' },
              { name: 'Icon', value: 'icon' },
            ],
          },
        },
        {
          type: 'VARIABLE',
          label: 'Button text',
          key: 'buttonText',
          value: ['Button'],
          configuration: {
            condition: {
              type: 'HIDE',
              option: 'variant',
              comparator: 'EQ',
              value: 'icon',
            },
          },
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
              { name: 'Action', value: 'action' },
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
          value: '',
          label: 'Action',
          key: 'actionId',
          type: 'ACTION',
          configuration: {
            apiVersion: 'v1',
            condition: {
              type: 'SHOW',
              option: 'linkType',
              comparator: 'EQ',
              value: 'action',
            },
          },
        },
        {
          value: [],
          label: 'Property',
          key: 'actionProperties',
          type: 'ACTION_PROPERTIES',
          configuration: {
            apiVersion: 'v1',
            condition: {
              type: 'SHOW',
              option: 'linkType',
              comparator: 'EQ',
              value: 'action',
            },
          },
        },
        {
          value: false,
          label: 'Full width',
          key: 'fullWidth',
          type: 'TOGGLE',
          configuration: {
            condition: {
              type: 'HIDE',
              option: 'variant',
              comparator: 'EQ',
              value: 'icon',
            },
          },
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
          type: 'CUSTOM',
          label: 'Icon',
          key: 'icon',
          value: 'fal fa-search',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',

            // findIconAllowedInput
            allowedInput: [
              { name: 'Users', value: 'fal fa-users' },
              { name: 'User', value: 'fal fa-user' },
              { name: 'User Cog', value: 'fal fa-user-cog' },
              { name: 'Sign Out', value: 'fal fa-sign-out' },
              { name: 'Search', value: 'fal fa-search' },
              { name: 'Exclamation Circle', value: 'fal fa-exclamation-circle' },
              { name: 'Cloud Upload', value: 'fal fa-cloud-upload-alt' },
              { name: 'Comment', value: 'fal fa-comment' },
              { name: 'Comments', value: 'fal fa-comments' },
              { name: 'Phone', value: 'fal fa-phone-alt' },
              { name: 'Envelope', value: 'fal fa-envelope' },
              { name: 'Paper Plane', value: 'fal fa-paper-plane' },
              { name: 'File', value: 'fal fa-file-pdf' },
              { name: 'Recycle', value: 'fal fa-recycle' },
              { name: 'Biking', value: 'fal fa-biking' },
              { name: 'Wind Turbine', value: 'fal fa-wind-turbine' },
              { name: 'Globe Europe', value: 'fal fa-globe-europe' },
              { name: 'Map Marker', value: 'fal fa-map-marker-alt' },
            ],

            condition: {
              type: 'SHOW',
              option: 'buttonType',
              comparator: 'EQ',
              value: 'icon',
            },
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