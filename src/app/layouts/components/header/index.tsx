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
    faArrowLeft,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {FacebookIcon, MessengerIcon} from '../../../components/UI/Icons';
import {IDataDropdown, data} from './data';

interface IIconWrapper {
    children: ReactNode;
    className?: string;
}
interface ISearchWrapper {
    children: ReactNode;
    className?: string;
    setSearchEntered: (value: Boolean) => void;
}
interface ISearchContainer {
    children: ReactNode;
    // className?: string;
    setSearchEntered: (value: Boolean) => void;
}
interface ISearchDropdownWrapper {
    // children?: ReactNode;
    // className?: string;
    // setSearchEntered?: (value: Boolean) => void;
}

const Header = () => {
    const [searchEntered, setSearchEntered] = useState<Boolean>(false);
    const [menuActive, setMenuActive] = useState<String>('Home');

    return (
        <div className="fixed top-0 left-0 h-14 bg-white w-full shadow-lg z-[5]">
            <div
                className={` h-full flex flex-nowrap justify-between items-center ${
                    searchEntered ? 'justify-end' : 'justify-between'
                }`}>
                <div className="header-left ">
                    {!searchEntered ? (
                        <div className="relative h-10 flex justify-between items-center pr-6 space-x-2">
                            <IconWrapper className="header-logo ml-4">
                                <FacebookIcon />
                            </IconWrapper>
                            <SearchWrapper
                                setSearchEntered={setSearchEntered}
                                className={`header-search `}>
                                <FontAwesomeIcon className="pl-3" icon={faMagnifyingGlass} />
                                <input
                                    placeholder="Tim kiem tren facebook"
                                    className="bg-transparent outline-none p-2"
                                />
                            </SearchWrapper>
                        </div>
                    ) : (
                        <div className="absolute h-max flex flex-col top-[calc(100%-56px+(56px-40px)/2)] shadow-lg ">
                            <div className="flex justify-between items-center pr-6 space-x-2">
                                <IconWrapper className=" h-10 bg-primary hover:bg-secondary cursor-pointer ml-2">
                                    <FontAwesomeIcon
                                        onClick={() => setSearchEntered(false)}
                                        icon={faArrowLeft}
                                    />
                                </IconWrapper>
                                <SearchWrapper
                                    setSearchEntered={setSearchEntered}
                                    className={`header-search `}>
                                    <FontAwesomeIcon className="pl-3" icon={faMagnifyingGlass} />
                                    <input
                                        placeholder="Tim kiem tren facebook"
                                        className="bg-transparent outline-none p-2"
                                    />
                                </SearchWrapper>
                            </div>
                            <div className=" w-full p-2">
                                <div className="mb-2  flex flex-row justify-between">
                                    <span className="text-base inline-block px-[6px] pt-3 pb-1 text-textPrimary">
                                        <span>Recent</span>
                                    </span>
                                    <span className="text-base inline-block px-[6px] p-2 rounded-md text-textSecondary cursor-pointer hover:bg-secondary ">
                                        <span>Edit</span>
                                    </span>
                                </div>
                                {data.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex rounded-xl hover:bg-secondary cursor-pointer justify-between items-center">
                                        <div className="flex">
                                            <div className="p-[6px] ">
                                                <div className="h-9 w-9  bg-secondary rounded-full">
                                                    {/* <img
                                                                className="h-full w-auto object-fill"
                                                                src={item.avatar}
                                                                alt={item.title}
                                                            /> */}
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <span className="inline-block p-[6px]">
                                                    {item.title}
                                                </span>
                                                {item.notification.length !== 0 ? (
                                                    <span className="inline-block p-[6px]">
                                                        {item.notification.map((it) => it)}
                                                    </span>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="p-[6px] h-8 w-8">
                                            <FontAwesomeIcon
                                                className="h-full w-auto object-fill"
                                                icon={faXmark}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className={`header-right flex justify-between items-center h-10 space-x-2 pr-4 pl-1`}>
                    <IconWrapper className="menu">
                        <FontAwesomeIcon className="h-auto w-full object-fill" icon={faBars} />
                    </IconWrapper>
                    <IconWrapper className="messenger">
                        <MessengerIcon />
                    </IconWrapper>
                    <IconWrapper className="notification">
                        <FontAwesomeIcon className="h-auto w-full object-fill" icon={faBell} />
                    </IconWrapper>
                    <IconWrapper className="account mr-4">
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
        className={` cursor-pointer hover:bg-secondaryHover h-full w-10 rounded-full bg-secondary flex justify-center items-center
        ${props.className}    `}>
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
const SearchContainer = (props: ISearchContainer) => (
    <div className="h-full w-[240px] bg-secondary">
        <SearchWrapper setSearchEntered={props.setSearchEntered}>
            {props.children}
            <SearchDropdownWrapper />
            {/* </SearchDropdownWrapper> */}
        </SearchWrapper>
    </div>
);
const SearchWrapper = (props: ISearchWrapper) => (
    <>
        <div
            onClick={() => props.setSearchEntered(true)}
            className={` h-full w-[240px] rounded-full bg-secondary flex items-center justify-center ${props.className}`}>
            <div className="h-full w-full flex items-center justify-center">{props.children}</div>
        </div>
    </>
);

const SearchDropdownWrapper = (props: ISearchDropdownWrapper) => (
    <div>
        {data.map((dropdown) => {
            return <DropdownItemWrapper dropdown={dropdown} />;
        })}
    </div>
);

interface IDropdownItemWrapper {
    // children: ReactNode;
    dropdown: IDataDropdown;
}

const DropdownItemWrapper = (props: IDropdownItemWrapper) => (
    <div className="w-[300px] h-[48px] flex">
        <div>{props.dropdown.avatar}</div>
        <div className="flex flex-col"></div>
        <div className="">
            <FontAwesomeIcon icon={faXmark} />
        </div>
    </div>
);

export default Header;
