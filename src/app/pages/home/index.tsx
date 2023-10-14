import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import Main from '../../layouts/components/main';

const Home = () => {
    return (
        <DefaultLayout className="bg-secondary">
            <Main />
        </DefaultLayout>
    );
};

export default Home;
