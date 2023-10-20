import React, {useEffect, useState} from 'react';
import {defaultData} from './data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

const dataShowHandler = (data: {id: number; image: string; title: string}[]) => {
    return data.slice(0, 6);
};

const SideBar = () => {
    return (
        <div className="fixed w-[280px] float-left  top-0 bg-secondary z-[4] scroll left-0 bottom-0">
            <div className="flex flex-col mt-4 pl-4 h-full ">
                {defaultData.map((item, key) => {
                    // const slicedDefaultData = '';
                    if (item.title === 'first') {
                        return (
                            <div className="mb-2">
                                {dataShowHandler(item.data).map((itm) => (
                                    <div className="px-2 flex hover:bg-secondaryHover  items-center cursor-pointer">
                                        <div className="h-9 w-9 bg-primary rounded-full"></div>
                                        <div className="text-base p-3 flex items-center justify-center">
                                            <span>{itm.title}</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="px-2 flex hover:bg-secondaryHover  items-center cursor-pointer">
                                    <div className="h-9 w-9 bg-primary rounded-full flex justify-center items-center">
                                        <FontAwesomeIcon
                                            className="h-5 w-auto object-cover"
                                            icon={faCaretDown}
                                        />
                                    </div>
                                    <div className="text-base p-3 flex items-center justify-center">
                                        <span>More</span>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <>
                                <div className="pb-2 text-base flex justify-between group items-center pt-5 pl-2 mr-2 border-t-2">
                                    <span className="text-[#65676b] font-semibold inline-block ">
                                        {item.title}
                                    </span>
                                    <span className="hidden group-hover:inline text-base text-textSecondary px-[6px] rounded-md cursor-pointer hover:bg-secondary">
                                        Edit
                                    </span>
                                </div>
                                {dataShowHandler(item.data).map((itm) => (
                                    <div className="px-2 flex hover:bg-secondaryHover items-center cursor-pointer">
                                        <div className="h-9 w-9 bg-primary rounded-md"></div>
                                        <div className="text-base p-3 flex items-center justify-center">
                                            <span>{itm.title}</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="px-2 flex hover:bg-secondaryHover  items-center cursor-pointer">
                                    <div className="h-9 w-9 bg-primary rounded-full flex justify-center items-center">
                                        <FontAwesomeIcon
                                            className="h-5 w-auto object-cover"
                                            icon={faCaretDown}
                                        />
                                    </div>
                                    <div className="text-base p-3 flex items-center justify-center">
                                        <span>More</span>
                                    </div>
                                </div>
                            </>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default SideBar;
