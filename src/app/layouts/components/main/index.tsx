import React from 'react';
import {defaultData} from './data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCaretRight,
    faComment,
    faEarthAsia,
    faEllipsis,
    faFaceSmile,
    faHeart,
    faImage,
    faPlus,
    faShare,
    faThumbsUp,
    faVideo,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import MainLayout from '../../MainLayout';
import Story from './components/Story';
import PostLayout from '../../PostLayout';
import NewPost from './components/NewPost';
import Post from './components/Post';
import {defaultPostData} from './components/data/defaultPostData';

// const limitImgShow = (
//     data: {id: number; img: string; video: string; avatar: string; name: string}[]
// ) => {
//     return data.slice(0, 4);
// };

const Main = () => {
    return (
        <MainLayout>
            <Story />
            <NewPost />
            {defaultPostData.map((item) => (
                <div className="" key={item.id}>
                    <Post item={item} />
                </div>
            ))}
        </MainLayout>
    );
};

export default Main;
