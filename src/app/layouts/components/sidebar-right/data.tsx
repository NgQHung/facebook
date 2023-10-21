import {v4 as uuidv4} from 'uuid';

export const defaultData: {
    title: string;
    data: {id: string; userId: string; image: string; title: string}[];
}[] = [
    {
        title: 'Birthday',
        data: [
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
        ],
    },
    {
        title: 'Contact',
        data: [
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
        ],
    },
    {
        title: 'Group chat',
        data: [
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
            {id: uuidv4(), userId: 'hungId', image: '', title: 'Hung Nguyen Quang'},
        ],
    },
];
