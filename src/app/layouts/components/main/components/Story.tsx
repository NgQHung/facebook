import {faCaretRight, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {Fragment} from 'react';
import {defaultData} from '../data';

const Story = () => {
    return (
        <Fragment>
            <div
                className=" relative overflow-auto flex-nowrap scrollbar_hidden 
    flex justify-between items-center py-2 space-x-2 pb-[14px]">
                <div className="w-[140px] h-[250px] cursor-pointer relative shrink-0 rounded-xl py-2 ">
                    <div className="relative h-full rounded-xl overflow-hidden shadow-md">
                        <img
                            className="h-full w-full object-cover transition-all rounded-xl hover:scale-110"
                            src="https://images.unsplash.com/photo-1682686580950-960d1d513532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                            alt="img"
                        />
                    </div>
                    <div className="h-[40px] w-full rounded-b-xl bg-primary absolute bottom-[8px] text-center">
                        <div
                            className="h-10 w-10 bg-primary rounded-full 
                    absolute left-1/2 translate-x-[-50%] top-[calc(-40px/2)]
                    flex justify-center items-center">
                            <div className="h-8 w-8 rounded-full bg-facebook flex items-center justify-center">
                                <FontAwesomeIcon className="text-primary h-5 w-5 " icon={faPlus} />
                            </div>
                        </div>
                        <span className="inline-block pt-3 px-3 ">Create story</span>
                    </div>
                </div>
                {defaultData.map((item) => (
                    <div
                        key={item.id}
                        className="w-[140px] cursor-pointer h-[250px] shrink-0 rounded-xl py-2">
                        <div className="relative h-full overflow-hidden rounded-xl shadow-md">
                            <img
                                className="h-full hover:scale-110 w-full transition-all object-cover rounded-xl"
                                src={item.img}
                                alt="img"
                            />
                        </div>
                    </div>
                ))}
                <div className="absolute right-0 top-1/2 translate-y-[-50%] mr-20 h-12 w-12 bg-primary rounded-full flex justify-center items-center cursor-pointer hover:bg-secondary">
                    <div className="h-6 w-6">
                        <FontAwesomeIcon
                            className="h-full w-full object-cover"
                            icon={faCaretRight}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Story;
