import React, {ReactNode} from 'react';
import Header from '../components/header';
import SideBar from '../components/sidebar';
import SideBarRight from '../components/sidebar-right';

interface IDefaultLayout {
    children: ReactNode;
    className?: String;
}

const DefaultLayout: React.FC<IDefaultLayout> = ({children, className}) => {
    return (
        <div className={`relative h-full w-full  ${className}`}>
            <Header />
            <SideBar />
            <SideBarRight />
            {children}
        </div>
    );
};

export default DefaultLayout;
