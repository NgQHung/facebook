import React, {ReactNode} from 'react';
import Header from '../components/header';
import SideBar from '../components/sidebar';

interface IDefaultLayout {
    children: ReactNode;
    className?: String;
}

const DefaultLayout: React.FC<IDefaultLayout> = ({children, className}) => {
    return (
        <div className={`relative h-full w-full  ${className}`}>
            <Header />
            <SideBar />
            {children}
        </div>
    );
};

export default DefaultLayout;
