(() => ({
  name: 'Navigation Pane',
  icon: 'NavbarIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'NavigationPane',
      options: [
        {
          label: 'Page',
          key: 'endpoint',
          value: '',
          type: 'ENDPOINT',
        },
      ],
      descendants: [
        {
          name: 'NavigationLinks',
          options: [],
          descendants: []
        },
        {
          name: 'NavigationToolbar',
          options: [],
          descendants: [],
        }
      ],
    },
  ],
}))();