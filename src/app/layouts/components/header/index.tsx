import React, {ReactNode, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBell,
    faGamepad,
    faHouse,
    faShop,
    faUser,
    faUserGroup,
    faVideo,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import {FacebookIcon, MessengerIcon} from '../../../components/UI/Icons';

interface IIconWrapper {
    children: ReactNode;
    className: string;
}
interface ISearch {
    children: ReactNode;
    className: string;
    searchHandler: (value: Boolean) => void;
}

const Header = () => {
    const [searchEntered, setSearchEntered] = useState<Boolean>(false);
    const [menuActive, setMenuActive] = useState<String>('Home');

    const searchHandler = (value: Boolean) => {
        setSearchEntered(value);
    };

    return (
        <div className="fixed top-0 left-0 h-14 bg-white w-full">
            <div className=" h-full flex flex-nowrap justify-between items-center">
                <div className="header-left flex justify-between items-center h-10 ">
                    {!searchEntered ? (
                        <IconWrapper className="header-logo">
                            <FacebookIcon />
                        </IconWrapper>
                    ) : null}
                    <SearchWrapper searchHandler={searchHandler} className="header-search">
                        {!searchEntered ? <FontAwesomeIcon icon={faMagnifyingGlass} /> : null}
                        <input
                            placeholder="Tim kiem tren facebook"
                            className="bg-transparent outline-none"
                        />
                    </SearchWrapper>
                </div>

                <div className="header-right flex justify-between items-center h-10 ">
                    <IconWrapper className="menu">
                        <FontAwesomeIcon className="h-auto w-full object-fill" icon={faBars} />
                    </IconWrapper>
                    <IconWrapper className="messenger">
                        <MessengerIcon />
                    </IconWrapper>
                    <IconWrapper className="notification">
                        <FontAwesomeIcon className="h-auto w-full object-fill" icon={faBell} />
                    </IconWrapper>
                    <IconWrapper className="account">
                        <FontAwesomeIcon className="h-auto w-full object-fill" icon={faUser} />
                    </IconWrapper>
                </div>
            </div>
            <div className="absolute top-0 right-1/2 translate-x-[50%] header-mid h-full flex justify-between items-center text-center">
                <IconsMiddleWrapper className="home ">
                    <FontAwesomeIcon className="h-auto w-full object-fill" icon={faHouse} />
                </IconsMiddleWrapper>
                <IconsMiddleWrapper className="video ">
                    <FontAwesomeIcon className="h-auto w-full object-fill" icon={faVideo} />
                </IconsMiddleWrapper>
                <IconsMiddleWrapper className="market-place ">
                    <FontAwesomeIcon className="h-auto w-full object-fill" icon={faShop} />
                </IconsMiddleWrapper>
                <IconsMiddleWrapper className="group ">
                    <FontAwesomeIcon className="h-auto w-full object-fill" icon={faUserGroup} />
                </IconsMiddleWrapper>
                <IconsMiddleWrapper className="game ">
                    <FontAwesomeIcon className="h-auto w-full object-fill" icon={faGamepad} />
                </IconsMiddleWrapper>
            </div>
        </div>
    );
};

const IconWrapper = (props: IIconWrapper) => (
    <div
        className={`${props.className} h-full w-10 rounded-full bg-secondary flex justify-center items-center
            `}>
        <div className="w-5 h-5 flex justify-center items-center">{props.children}</div>
    </div>
);

const IconsMiddleWrapper = (props: IIconWrapper) => (
    <div className={`${props.className} h-full  w-[110px] min-w-[50px]`}>
        <div className="mx-[2px] my-[4px] h-full rounded-lg flex justify-center items-center hover:bg-secondary cursor-pointer">
            <div className="h-6 w-6 ">{props.children}</div>
        </div>
    </div>
);
const SearchWrapper = (props: ISearch) => (
    <div
        onClick={() => props.searchHandler(true)}
        className={`${props.className} h-full w-[240px] rounded-full bg-secondary flex items-center justify-center`}>
        <div className="h-6 w-6 flex items-center justify-center">{props.children}</div>
    </div>
);

export default Header;
