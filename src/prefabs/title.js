(() => ({
  name: 'Title',
  icon: 'TitleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Title',
      options: [
        {
          type: 'VARIABLE',
          label: 'Content',
          key: 'content',
          value: [],
        },
        {
          type: 'CUSTOM',
          label: 'Header Type',
          key: 'type',
          value: 'h1',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Header 1', value: 'h1' },
              { name: 'Header 2', value: 'h2' },
              { name: 'Header 3', value: 'h3' },
              { name: 'Header 4', value: 'h4' },
              { name: 'Header 5', value: 'h5' },
              { name: 'Header 6', value: 'h6' },
            ],
          },
        }
      ],
      descendants: [],
    },
  ],
}))();
