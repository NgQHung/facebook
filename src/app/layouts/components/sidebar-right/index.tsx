import React, {useEffect, useState} from 'react';
import {defaultData} from './data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCakeCandles, faCaretDown} from '@fortawesome/free-solid-svg-icons';

const dataShowHandler = (data: {id: string; userId: string; image: string; title: string}[]) => {
    return data.slice(0, 6);
};
// const dataBirthdayHandler = (data: {id: number; image: string; title: string}[]) => {
//     return
// }

const SideBarRight = () => {
    return (
        <div className="fixed w-[280px] float-right  top-0 bg-secondary z-[4] scroll bottom-0 right-0">
            <div className="flex flex-col mt-4 pl-4 h-full">
                {defaultData.map((item, key) => {
                    if (item.title === 'Birthday') {
                        return (
                            <div key={item.title + '/' + key} className="mb-2">
                                <div className="pb-2 text-base flex justify-between items-center pl-2 mr-2">
                                    <span className="text-[#65676b] font-semibold inline-block ">
                                        {item.title}
                                    </span>
                                </div>
                                <div className="flex px-2 items-center justify-center">
                                    <div className="shrink-0 h-9 w-9  mr-3">
                                        <FontAwesomeIcon
                                            className="h-7  w-auto object-cover"
                                            icon={faCakeCandles}
                                        />
                                    </div>
                                    <p className="text-[15px] py-1 break-words leading-[1.33333]">
                                        Today is the birthday of
                                        <strong> {item.data[0].title} </strong>and
                                        <strong> {item.data.length - 1} </strong>other people
                                    </p>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <>
                                <div
                                    key={item.title + '+' + key}
                                    className="mb-2 text-base flex justify-between group items-center pt-5 pl-2 mr-2 border-t-2">
                                    <span className="text-[#65676b] font-semibold inline-block ">
                                        {item.title}
                                    </span>
                                    <span className="hidden group-hover:inline text-base text-textSecondary px-[6px] rounded-md cursor-pointer hover:bg-secondary">
                                        Edit
                                    </span>
                                </div>
                                {dataShowHandler(item.data).map((itm, key) => (
                                    <div
                                        key={item.title + '/' + key}
                                        className="px-2 flex hover:bg-secondaryHover items-center cursor-pointer">
                                        <div className="h-9 w-9 bg-primary rounded-md"></div>
                                        <div className="text-base p-3 flex items-center justify-center">
                                            <span>{itm.title}</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="px-2 mb-2 flex hover:bg-secondaryHover  items-center cursor-pointer">
                                    <div className="h-9 w-9  bg-primary rounded-full flex justify-center items-center">
                                        <FontAwesomeIcon
                                            className="h-5 w-auto object-cover"
                                            icon={faCaretDown}
                                        />
                                    </div>
                                    <div className="text-base p-3 flex items-center justify-center">
                                        <span>More</span>
                                    </div>
                                </div>
                                {/* <div className="h-10" /> */}
                            </>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default SideBarRight;
