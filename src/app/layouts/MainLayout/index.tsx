import React, {ReactNode} from 'react';

const MainLayout = (props: {children: ReactNode}) => {
    return (
        <div className="absolute bg-secondary left-1/2 translate-x-[-50%] top-[56px] z-[3] flex justify-center w-full">
            <div className="  w-[calc(100%-280px*2)] max-w-[600px] ">
                <div className="px-8 pt-2 ">{props.children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
