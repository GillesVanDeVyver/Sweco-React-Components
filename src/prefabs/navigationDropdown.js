(() => ({
    name: 'Navigation Dropdown',
    icon: 'DialogIcon',
    category: 'NAVIGATION',
    structure: [
        {
            name: 'NavigationDropdown',
            options: [
                {
                    type: 'TOGGLE',
                    label: 'Stay visible in development',
                    key: 'stayVisibleInDev',
                    value: true
                }
            ],
            descendants: [],
        },
    ],
}))();