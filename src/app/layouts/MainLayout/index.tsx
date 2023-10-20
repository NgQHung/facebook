import React, {ReactNode} from 'react';
import SideBar from '../components/sidebar';
import SideBarRight from '../components/sidebar-right';

const MainLayout = (props: {children: ReactNode}) => {
    return (
        <div className="absolute bg-secondary  top-[56px]  flex justify-center w-full">
            <div className="px-8 pt-2 ">
                <SideBar />
                <SideBarRight />
                <div className="max-w-[40%] relative  left-1/2 translate-x-[-105%] z-[5] flex flex-col">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
