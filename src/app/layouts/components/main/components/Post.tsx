import React from 'react';
import PostLayout from '../../../PostLayout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faComment,
    faEarthAsia,
    faEllipsis,
    faHeart,
    faShare,
    faThumbsUp,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

interface IPost {
    item: {
        id: number;
        avatar: string;
        name: string;
        time: string;
        caption: string;
        imagePost: string;
        numberLiked: {id: number; name: string}[];
    };
}

const Post = (props: IPost) => {
    return (
        <PostLayout>
            <div className="flex mb-2">
                {/* logo */}
                <div className="h-10 w-10 mr-2">
                    <img
                        className="h-full w-full  rounded-full object-cover"
                        src={props.item.avatar}
                        alt="avatar"
                    />
                </div>
                {/* name time option */}
                <div className="grow flex justify-between">
                    <div className="flex flex-col items-start justify-center grow  ">
                        <strong className="text-sm w-full">{props.item.name}</strong>
                        <div className="text-xs text-textPost w-full">
                            <span>{props.item.time}</span>
                            <span> · </span>
                            <FontAwesomeIcon icon={faEarthAsia} />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-secondary cursor-pointer">
                            <FontAwesomeIcon className="h-5 w-5" icon={faEllipsis} />
                        </div>
                        <div className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-secondary cursor-pointer">
                            <FontAwesomeIcon className="h-5 w-5" icon={faXmark} />
                        </div>
                    </div>
                </div>
            </div>
            {/* caption */}
            <p className="pt-1 pb-2">{props.item.caption}</p>
            {/* image */}
            <div className="w-[calc(100%+16px*2)] h-auto relative left-0 ml-[-16px]">
                <img className="h-full w-full object-cover" src={props.item.imagePost} alt="post" />
            </div>
            {/* likes */}
            <div className="py-[10px] flex items-center">
                <div className="relative ">
                    <div className="absolute w-[calc(100%+4px)] h-[calc(100%+4px)] top-[-2px] right-[-2px] rounded-full z-[2] bg-primary " />
                    <div className="h-[18px] w-[18px] rounded-full bg-love flex justify-center items-center relative z-[3]  ">
                        <FontAwesomeIcon
                            className=" w-3 h-3 bg-transparent text-primary "
                            icon={faHeart}
                        />
                    </div>
                </div>
                <div className="h-[18px] w-[18px] rounded-full bg-facebook flex justify-center items-center relative z-[1] mr-2">
                    <FontAwesomeIcon
                        className=" w-3 h-3 bg-transparent text-primary"
                        icon={faThumbsUp}
                    />
                </div>
                {/* people who liked */}
                <p className="text-base text-textPost">
                    {props.item.numberLiked[0].name} and {props.item.numberLiked.length - 1} others
                </p>
            </div>
            <div className=" border-t">
                <div className="py-1 flex text-base font-medium ">
                    <div className=" hover:bg-secondary rounded-lg cursor-pointer p-1 text-center flex-1 flex justify-center">
                        <FontAwesomeIcon className="pr-2 h-5 w-5 object-cover" icon={faThumbsUp} />
                        <span className="text-textPost">Like </span>
                    </div>
                    <div className=" hover:bg-secondary rounded-lg cursor-pointer p-1 text-center flex-1  flex justify-center">
                        <FontAwesomeIcon className="pr-2 h-5 w-5 object-cover" icon={faComment} />
                        <span className="text-textPost">Comment</span>
                    </div>
                    <div className=" hover:bg-secondary rounded-lg cursor-pointer p-1 text-center flex-1  flex justify-center">
                        <FontAwesomeIcon className="pr-2 h-5 w-5 object-cover" icon={faShare} />
                        <span className="text-textPost ">Share</span>
                    </div>
                </div>
            </div>
        </PostLayout>
    );
};

export default Post;
