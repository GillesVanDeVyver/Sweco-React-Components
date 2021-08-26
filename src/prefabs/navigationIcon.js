(() => ({
  name: 'Navigation Icon',
  icon: 'IconIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'NavigationIcon',
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
          type: 'TOGGLE',
          label: 'Has dropdown',
          key: 'hasDropdown',
          value: true
        }
      ],
      descendants: [],
    },
  ],
}))();
