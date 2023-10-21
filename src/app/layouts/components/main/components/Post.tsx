import React, {useEffect, useState} from 'react';
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
import DetailUserOnHover from './DetailUserOnHover';
import {defaultPostData} from './data/defaultPostData';

interface IPost {
    item: {
        id: string;
        userId: string;
        avatar: string;
        name: string;
        time: string;
        caption: string;
        imagePost: string;
        numberLiked: {id: string; name: string}[];
        comment: {
            id: string;
            name: string;
            avatar: string;
            userId: string;
            taggedName?: {id: string; userId: string}[];
            comment: string;
        }[];
    };
}

const Post = (props: IPost) => {
    const [isHover, setIsHover] = useState(false);
    const [userIdHovered, setUserIdHovered] = useState<string | null>(null);
    const [idHovered, setIdHovered] = useState<string | null>(null);
    const [dataOnHover, setDataOnHover] = useState<{
        id: string;
        avatar: string;
        name: string;
    } | null>(null);

    const showDetailHandler = (userId: string | null, id: string | null) => {
        setUserIdHovered(userId);
        setIdHovered(id);
        setIsHover(true);
    };
    const closeDetailHandler = () => {
        setIsHover(false);
        setDataOnHover(null);
    };

    useEffect(() => {
        if (!isHover) return;
        const dataFound = defaultPostData.find((item) => item.userId === userIdHovered);
        if (dataFound) {
            let dataToSet = {...dataFound};
            const {id, avatar, name} = dataToSet;
            setDataOnHover({id: id, avatar: avatar, name: name});
        }
    }, [isHover, userIdHovered]);

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
                        {/* <Link to="/"> */}
                        <a
                            onMouseEnter={() => showDetailHandler(props.item.userId, props.item.id)}
                            onMouseLeave={closeDetailHandler}
                            className="hover:underline relative"
                            href="/">
                            <strong className="text-sm w-full">{props.item.name}</strong>
                            {dataOnHover && isHover && idHovered === props.item.id ? (
                                <DetailUserOnHover dataOnHover={dataOnHover} />
                            ) : null}
                        </a>
                        {/* </Link> */}
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
            <div className="w-[calc(100%+16px*2)] max-h-[500px] overflow-hidden relative left-0 ml-[-16px] flex justify-center items-center">
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
            <div className="grow py-2 flex items-center space-x-2">
                <div className="h-8 w-8 shrink-0">
                    <img
                        className="w-full h-full rounded-full object-cover"
                        src={props.item.avatar}
                        alt={props.item.name}
                    />
                </div>
                <input
                    className="text-base w-full  py-2 px-3 rounded-3xl outline-none bg-secondary "
                    type="text"
                    placeholder="What's on your mind, Hung?"
                />
            </div>
            <div className="w-full py-2 flex items-center space-x-2">
                <div className="h-8 w-8 shrink-0">
                    <img
                        className="w-full h-full rounded-full object-cover"
                        src={props.item.comment[0].avatar}
                        alt={props.item.comment[0].name}
                    />
                </div>
                <div className="  text-base justify-self-start w-full max-w-content  py-2 px-3 rounded-3xl outline-none bg-secondary ">
                    <a
                        href="/"
                        onMouseEnter={() =>
                            showDetailHandler(
                                props.item.comment[0].userId,
                                props.item.comment[0].id
                            )
                        }
                        onMouseLeave={closeDetailHandler}
                        className="hover:underline relative text-sm">
                        <strong>{props.item.comment[0].name}</strong>
                        {dataOnHover && isHover && idHovered === props.item.comment[0].id ? (
                            <DetailUserOnHover dataOnHover={dataOnHover} />
                        ) : null}
                    </a>
                    <p>
                        {props.item.comment[0].taggedName &&
                        props.item.comment[0].taggedName.length > 0 ? (
                            <>
                                {props.item.comment[0].taggedName.map((itm) => (
                                    <a
                                        href="/"
                                        onMouseEnter={() => showDetailHandler(itm.userId, itm.id)}
                                        onMouseLeave={closeDetailHandler}
                                        className="hover:underline relative text-base">
                                        <strong>{getNameUserByUserId(itm.userId)} </strong>
                                        {dataOnHover && isHover && idHovered === itm.id ? (
                                            <DetailUserOnHover dataOnHover={dataOnHover} />
                                        ) : null}
                                    </a>
                                ))}
                            </>
                        ) : null}
                        <span>{props.item.comment[0].comment}</span>
                    </p>
                </div>
            </div>
        </PostLayout>
    );
};

export default Post;

function getNameUserByUserId(userId: string) {
    // if()
    const getObjUser = defaultPostData.find((item) => item.userId === userId);
    if (getObjUser) {
        return getObjUser.name;
    }
    console.log('something went wrong, userId is invalid');
    return;
}
