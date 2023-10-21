import React from 'react';
import MainLayout from '../../MainLayout';
import Story from './components/Story';
import NewPost from './components/NewPost';
import Post from './components/Post';
import {defaultPostData} from './components/data/defaultPostData';

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
