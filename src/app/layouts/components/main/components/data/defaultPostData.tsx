import {v4 as uuidv4} from 'uuid';

export const defaultPostData = [
    {
        id: uuidv4(),
        userId: 'hungId',
        avatar: 'me.png',
        name: 'Hung',
        time: '1h',
        caption: 'Today is the beautiful day love love !!! ~~~~',
        imagePost:
            'https://scontent.xx.fbcdn.net/v/t1.15752-9/387544738_821399722801471_8672849085278501618_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=iUhlBVTz4qgAX9Ev95w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTPlNNBZ50FrWiNJYROpAZxfq9tsu9koJYuinzG5U_8Ww&oe=654A68EF',
        numberLiked: [
            {id: uuidv4(), userId: 'hungId', name: 'Hung'},
            {id: uuidv4(), userId: 'maId', name: 'Anh'},
            {id: uuidv4(), userId: 'naId', name: 'Ngoc Anh'},
        ],
        comment: [
            {
                id: uuidv4(),
                userId: 'hungId',
                avatar: 'me.png',
                name: 'Hung',
                comment: 'Its a beautiful day',
            },
            {
                id: uuidv4(),
                userId: 'maId',
                avatar: 'ny.jpg',
                name: 'Minh Anh',
                taggedName: [{id: uuidv4(), userId: 'hungid'}],
                comment: 'You are so cool',
            },
        ],
    },
    {
        id: uuidv4(),
        avatar: 'ny.jpg',
        userId: 'maId',
        name: 'Minh Anh',
        time: '2h',
        caption: 'Today is the beautiful day love love !!! ~~~~',
        imagePost:
            'https://scontent.xx.fbcdn.net/v/t1.15752-9/383246347_631939349100044_8911122595629006337_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=cYz7pyrxyIQAX-Nzwxh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSe-4K12EihZjvRXfCfxwMtK1WANN6q56QdGYwpEPek9w&oe=65538949',
        numberLiked: [
            {id: uuidv4(), userId: 'hungId', name: 'Hung'},
            {id: uuidv4(), userId: 'maId', name: 'Anh'},
            {id: uuidv4(), userId: 'naId', name: 'Ngoc Anh'},
        ],
        comment: [
            {
                id: uuidv4(),
                userId: 'hungId',
                avatar: 'me.png',
                name: 'Hung',
                comment: 'Its a beautiful day',
            },
            {
                id: uuidv4(),
                avatar: 'ny.jpg',
                userId: 'maId',
                name: 'Minh Anh',
                taggedName: [{id: uuidv4(), userId: 'maId'}],
                comment: 'You are so cool',
            },
        ],
    },
    {
        id: uuidv4(),
        userId: 'hungId',
        avatar: 'me.png',
        name: 'Hung',
        time: '1h',
        caption: 'Today is the beautiful day love love !!! ~~~~',
        imagePost:
            'https://scontent.xx.fbcdn.net/v/t1.15752-9/383738024_1248757805899009_3479150230827863708_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_ohc=22IXaJAgkDcAX-D6Wv7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRf1iRkEb7vrerurwlek1V-RSlFX7H2ED6tZhr-N4xUww&oe=65537B81',
        numberLiked: [
            {id: uuidv4(), userId: 'hungId', name: 'Hung'},
            {id: uuidv4(), userId: 'maId', name: 'Anh'},
            {id: uuidv4(), userId: 'naId', name: 'Ngoc Anh'},
        ],
        comment: [
            {
                id: uuidv4(),
                avatar: 'ny.jpg',
                userId: 'maId',
                name: 'Minh Anh',
                taggedName: [
                    {id: uuidv4(), userId: 'hungId'},
                    {id: uuidv4(), userId: 'maId'},
                ],
                comment: 'You are so cool',
            },
            {
                id: uuidv4(),
                userId: 'hungId',
                avatar: 'me.png',
                name: 'Hung',
                taggedName: [{id: uuidv4(), userId: 'hungId'}],
                comment: 'Its a beautiful day',
            },
        ],
    },
    {
        id: uuidv4(),
        avatar: 'ny.jpg',
        userId: 'maId',
        name: 'Minh Anh',
        time: '1h',
        caption: 'Today is the beautiful day love love !!! ~~~~',
        imagePost:
            'https://scontent.xx.fbcdn.net/v/t1.15752-9/382341186_1379351405978778_7209687367486408270_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_ohc=Emd9VQg8OuYAX-Vz0ur&_nc_oc=AQleTBQmrMv96hZJhC9NWQEh70yAGnrbc-JrjLUIeP52CM26i7li0fvmuIJu24hiaNohMfUaQyjdaU8wlz7tARFh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQEynl5WTr1FhLQbnd-1-tdz4RvP2nxntP3qNeKb5mL4w&oe=655380E3',
        numberLiked: [
            {id: uuidv4(), userId: 'hungId', name: 'Hung'},
            {id: uuidv4(), userId: 'maId', name: 'Anh'},
            {id: uuidv4(), userId: 'naId', name: 'Ngoc Anh'},
        ],
        comment: [
            {
                id: uuidv4(),
                avatar: 'me.png',
                userId: 'hungId',
                name: 'Hung',
                taggedName: [{id: uuidv4(), userId: 'maiId'}],
                comment: 'Its a beautiful day',
            },
            {
                id: uuidv4(),
                avatar: 'ny.jpg',
                userId: 'maId',
                name: 'Minh Anh',
                taggedName: [
                    {id: uuidv4(), userId: 'maiId'},
                    {id: uuidv4(), userId: 'hungId'},
                ],
                comment: 'You are so cool',
            },
        ],
    },
    {
        id: uuidv4(),
        userId: 'hungId',
        avatar: 'me.png',
        name: 'Hung',
        time: '1h',
        caption: 'Today is the beautiful day love love !!! ~~~~',
        imagePost:
            'https://scontent.xx.fbcdn.net/v/t1.15752-9/384560498_282569781281197_4842368455313544935_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_ohc=glkrim8JAlUAX_UZ9OH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSHYrnz9SDPlT0IOeCkek9cMkHweJRYbkUyOYrrnnVP-g&oe=65537FBF',
        numberLiked: [
            {id: uuidv4(), userId: 'hungId', name: 'Hung'},
            {id: uuidv4(), userId: 'maId', name: 'Anh'},
            {id: uuidv4(), userId: 'naId', name: 'Ngoc Anh'},
        ],
        comment: [
            {
                id: uuidv4(),
                avatar: 'ny.jpg',
                userId: 'maId',
                name: 'Minh Anh',
                taggedName: [
                    {id: uuidv4(), userId: 'hungId'},
                    {id: uuidv4(), userId: 'maiId'},
                ],
                comment: 'You are so cool',
            },
            {
                id: uuidv4(),
                avatar: 'me.png',
                userId: 'hungId',
                name: 'Hung',
                taggedName: [{id: uuidv4(), userId: 'hungId'}],
                comment: 'Its a beautiful day',
            },
        ],
    },
];
