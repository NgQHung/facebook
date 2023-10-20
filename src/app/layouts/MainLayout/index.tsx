import React, {ReactNode} from 'react';
import SideBar from '../components/sidebar';
import SideBarRight from '../components/sidebar-right';

const MainLayout = (props: {children: ReactNode}) => {
    return (
        <>
            <SideBar />
            <SideBarRight />
            <div className="absolute left-1/2 translate-x-[-50%] z-[5]  top-[56px]  flex justify-center  w-[calc(100vw-280px*2)]">
                <div className=" bg-secondary w-full flex justify-center  ">
                    <div className="px-8 pt-2 max-w-[600px]">{props.children}</div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
