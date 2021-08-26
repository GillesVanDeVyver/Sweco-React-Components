(() => ({
    name: 'PowerBI',
    icon: 'FileInputIcon',
    category: 'CONTENT',
    structure: [
        {
            name: 'powerBI',
            options: [
                {
                    type: 'VARIABLE',
                    label: 'Unique ID',
                    key: 'uniqueId',
                    value: []
                },
                {
                    type: 'VARIABLE',
                    label: 'Report ID',
                    key: 'reportId',
                    value: []
                },
                {
                    type: 'VARIABLE',
                    label: 'Start page',
                    key: 'startpage',
                    value: []
                },
                {
                    type: 'VARIABLE',
                    label: 'Prefilter',
                    key: 'prefilter',
                    value: []
                },

                {
                    type: 'TOGGLE',
                    label: 'Show Navigation Pane',
                    key: 'showNavigationPane',
                    value: false
                },
                {
                    type: 'TOGGLE',
                    label: 'Show Filter Pane',
                    key: 'showFilterPane',
                    value: false
                }

            ],
            descendants: [],
        },
    ],
}))();