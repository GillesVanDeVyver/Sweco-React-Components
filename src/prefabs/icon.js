(() => ({
  name: 'Icon',
  icon: 'IconIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Icon',
      options: [
        {
          label: 'Icon',
          key: 'icon',
          value: 'fal fa-search',
          type: 'CUSTOM',
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
            ]
          },
        },
        {
          type: 'CUSTOM',
          label: 'Size',
          key: 'size',
          value: 'fa-2x',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'XS', value: 'fa-2x' },
              { name: 'S', value: 'fa-3x' },
              { name: 'M', value: 'fa-5x' },
              { name: 'L', value: 'fa-7x' },
              { name: 'XL', value: 'fa-9x' },
            ]
          }
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
          value: ['0rem', '0rem', '0rem', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
        {
          type: 'TOGGLE',
          label: 'Add Badge',
          key: 'addBadge',
          value: false,
        },
        {
          type: 'VARIABLE',
          label: 'Content',
          key: 'content',
          value: ['1'],
          configuration: {
            as: 'MULTILINE',
            condition: {
              type: 'SHOW',
              option: 'addBadge',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          label: 'Badge Color',
          key: 'badgeColor',
          value: 'Secondary',
          type: 'COLOR',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'addBadge',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          label: 'Anchor Origin',
          key: 'anchorOrigin',
          value: 'right,top',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Top Right',
                value: 'right,top',
              },
              {
                name: 'Top Left',
                value: 'left,top',
              },
              {
                name: 'Bottom Right',
                value: 'right,bottom',
              },
              {
                name: 'Bottom Left',
                value: 'left,bottom',
              },
            ],
            condition: {
              type: 'SHOW',
              option: 'addBadge',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          label: 'Variant',
          key: 'variant',
          value: 'standard',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Standard', value: 'standard' },
              { name: 'Dot', value: 'dot' },
            ],
            condition: {
              type: 'SHOW',
              option: 'addBadge',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          type: 'SIZES',
          label: 'Outer Space',
          key: 'margin',
          value: ['S', 'S', 'S', 'S'],
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'addBadge',
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
