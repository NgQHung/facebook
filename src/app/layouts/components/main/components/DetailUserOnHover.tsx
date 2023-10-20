import {faEllipsis, faUser, faUserGroup} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {MessengerIcon} from '../../../../components/UI/Icons';

interface IDetailUserOnHover {
    dataOnHover: {
        id: number;
        name: string;
        avatar: string;
    };
}

const DetailUserOnHover = (props: IDetailUserOnHover) => {
    return (
        <div className="absolute top-full left-1/2 translate-x-[-50%] w-[400px] text-base rounded-xl bg-primary z-[5] p-4">
            <div className="flex w-full px-3">
                <div className="avatar h-[92px] w-[92px] shrink-0">
                    <img
                        className="w-full h-full object-cover rounded-full"
                        src={props.dataOnHover.avatar}
                        alt={props.dataOnHover.name}
                    />
                </div>
                <div className=" grow flex flex-col p-2">
                    <div className="px-4 text-xl">
                        <strong>{props.dataOnHover.name}</strong>
                    </div>
                    <div className="px-4 flex">
                        <div className="p-[6px]">
                            <FontAwesomeIcon className="w-5 h-5 object-cover" icon={faUserGroup} />
                        </div>
                        <div className="p-[6px] leading-5 ">
                            <span>Became friends with Tú Lê and 47 other people</span>
                        </div>
                    </div>
                    <div className="px-4 flex">
                        <div className="p-[6px]">
                            <FontAwesomeIcon className="w-5 h-5 object-cover" icon={faUser} />
                        </div>

                        <div className="p-[6px] leading-5">
                            <span>101 mutual friends including Vân Thùy and Minh Anh</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex px-3 h-9 w-full space-x-1">
                <div className="flex px-3 flex-1 h-full justify-center rounded-md items-center bg-secondary space-x-1 hover:bg-brand-darkerSecondary">
                    <div className="h-4 w-4 flex justify-center items-center">
                        <FontAwesomeIcon className="h-full w-full object-cover" icon={faUser} />
                    </div>
                    <span>Friends</span>
                </div>
                <div className="flex px-3 flex-1 h-full justify-center rounded-md items-center bg-facebook text-primary hover:bg-brand-darkerFacebook">
                    <div className="h-4 w-4 flex justify-center items-center">
                        <MessengerIcon className="text-primary" />
                    </div>
                    <span>Messages</span>
                </div>
                <div className="flex px-3  items-center justify-center rounded-md bg-secondary space-x-1 hover:bg-brand-darkerSecondary">
                    <div className="h-4 w-4 flex justify-center items-center">
                        <FontAwesomeIcon className="h-full w-full object-cover" icon={faEllipsis} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailUserOnHover;
