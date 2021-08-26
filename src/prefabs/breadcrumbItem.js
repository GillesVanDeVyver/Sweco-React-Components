(() => ({
  name: 'Breadcrumb Item',
  icon: 'BreadcrumbItemIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'BreadcrumbItem',
      options: [
        {
          type: 'VARIABLE',
          label: 'Content',
          key: 'breadcrumbContent',
          value: ['Breadcrumb Item'],
        },
        {
          type: 'ENDPOINT',
          label: 'Page',
          key: 'endpoint',
          value: '',
        },
      ],
      descendants: [],
    },
  ],
}))();
