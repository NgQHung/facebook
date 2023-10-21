import {v4 as uuidv4} from 'uuid';

export interface IDataDropdown {
    id: string;
    avatar: string;
    title: string;
    notification: string[];
}
export const data: IDataDropdown[] = [
    {
        id: uuidv4(),
        avatar: '',
        title: 'hung',
        notification: [],
    },
    {
        id: uuidv4(),
        avatar: '',
        title: 'anh',
        notification: [],
    },
    {
        id: uuidv4(),
        avatar: '',
        title: 'hung',
        notification: [],
    },
    {
        id: uuidv4(),
        avatar: '',
        title: 'anh',
        notification: [],
    },
    {
        id: uuidv4(),
        avatar: '',
        title: 'hung',
        notification: [],
    },
    {
        id: uuidv4(),
        avatar: '',
        title: 'anh',
        notification: [],
    },
    {
        id: uuidv4(),
        avatar: '',
        title: 'hung',
        notification: [],
    },
];
