import React, {ReactNode} from 'react';

const PostLayout = (props: {children: ReactNode; className?: string}) => {
    return (
        <div className={` mb-4 bg-primary rounded-xl pt-3 px-4  shadow-md ${props.className}`}>
            {props.children}
        </div>
    );
};

export default PostLayout;
