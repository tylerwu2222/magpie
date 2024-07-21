export const defaultProfileImage = require('../../images/icon.png')

export const dummyCollection = [
    {
        'CollectionName': 'interesting birds',
        'CollectionID': 0,
        'CollectionImage': require('../../images/templateImages/birds.png'),
        'CollectionType': 'imageText',
        'CollectionView': 'list',
        'CollectionItems': [
            {
                'title': 'bird1',
                'subtitle': 'from LA',
                'image': 'bird1.png',
                'description': 'this is a bird i saw',
            },
            {
                'title': 'bird2',
                'subtitle': 'from LA',
                'image': 'bird2.png',
                'description': 'this is a bird i saw',
            },
            {
                'title': 'bird3',
                'subtitle': 'from LA',
                'image': 'bird3.png',
                'description': 'this is a bird i saw',
            },
        ],
    },
    {
        'CollectionName': 'interesting bugs',
        'CollectionID': 0,
        'CollectionImage': require('../../images/templateImages/bugs.png'),
        'CollectionType': 'imageText',
        'CollectionView': 'list',
        'CollectionItems': [
            {
                'title': 'bug1',
                'subtitle': '',
                'image': 'bug1.png',
                'description': 'this is a bug i saw',
            },
            {
                'title': 'bug2',
                'subtitle': '',
                'image': 'bug2.png',
                'description': 'this is a bug i saw',
            },
            {
                'title': 'bug3',
                'subtitle': '',
                'image': 'bug3.png',
                'description': 'this is a bug i saw',
            },
        ],
    },
]

// export const dummyCollections = Array(5).fill(dummyCollection).flat();