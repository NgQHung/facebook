import {faFaceSmile, faImage, faVideo} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import PostLayout from '../../../PostLayout';

const NewPost = () => {
    return (
        <PostLayout className="pb-[10px]">
            <div className="flex">
                <div className="h-10 w-10 mr-2">
                    <img
                        className="h-full w-full  rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1682686580950-960d1d513532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                        alt="avatar"
                    />
                </div>
                <div className="grow">
                    <input
                        className="text-base w-full  py-2 px-3 rounded-2xl outline-none bg-secondary "
                        type="text"
                        placeholder="What's on your mind, Hung?"
                    />
                </div>
            </div>
            <div className=" border-t mt-4">
                <div className="pt-2 flex text-base font-medium ">
                    <div className=" hover:bg-secondary rounded-lg cursor-pointer p-2 text-center flex-1 flex justify-center">
                        <FontAwesomeIcon className="pr-2 h-6 w-6 object-cover" icon={faVideo} />
                        <span className="text-textPost">Live video</span>
                    </div>
                    <div className=" hover:bg-secondary rounded-lg cursor-pointer p-2 text-center flex-1  flex justify-center">
                        <FontAwesomeIcon className="pr-2 h-6 w-6 object-cover" icon={faImage} />
                        <span className="text-textPost">Photo/video</span>
                    </div>
                    <div className=" hover:bg-secondary rounded-lg cursor-pointer p-2 text-center flex-1  flex justify-center">
                        <FontAwesomeIcon className="pr-2 h-6 w-6 object-cover" icon={faFaceSmile} />
                        <span className="text-textPost ">Feeling/activity</span>
                    </div>
                </div>
            </div>
        </PostLayout>
    );
};

export default NewPost;
