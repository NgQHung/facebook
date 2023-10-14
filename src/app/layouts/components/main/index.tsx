import React from 'react';
import {defaultData} from './data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

// const limitImgShow = (
//     data: {id: number; img: string; video: string; avatar: string; name: string}[]
// ) => {
//     return data.slice(0, 4);
// };

const Main = () => {
    return (
        <div className="absolute w-[calc(100%-280px*2)] left-1/2 translate-x-[-50%] top-[56px] z-[5]">
            <div className="px-8 pt-2 ">
                <div
                    className=" relative overflow-auto flex-nowrap scrollbar_hidden 
                flex justify-between items-center py-2 space-x-2">
                    <div className="w-[140px] h-[250px] relative shrink-0 rounded-xl py-2">
                        <img
                            className="h-full w-full object-cover rounded-xl"
                            src="https://scontent.fprg1-1.fna.fbcdn.net/v/t1.6435-9/36813545_2236837126546648_8563890790785351680_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_ohc=FvpTQm28YLEAX_Ft8I2&_nc_ht=scontent.fprg1-1.fna&oh=00_AfBr9NTLvGmL_WrFcGyQVs22FtPFXf4Q2Oumb6DDJsINDA&oe=65521157"
                            alt="img"
                        />
                        <div className="h-[40px] w-full rounded-b-xl bg-primary absolute bottom-0 text-center">
                            <div
                                className="h-10 w-10 bg-primary rounded-full 
                            absolute left-1/2 translate-x-[-50%] top-[calc(-40px/2)]
                            flex justify-center items-center">
                                <div className="h-8 w-8 rounded-full bg-facebook flex items-center justify-center">
                                    <FontAwesomeIcon
                                        className="text-primary h-5 w-5 "
                                        icon={faPlus}
                                    />
                                </div>
                            </div>
                            <div className="  ">
                                <span className="inline-block pt-3 px-3 ">Create news</span>
                            </div>
                        </div>
                    </div>
                    {defaultData.map((item) => (
                        <div className="w-[140px] h-[250px] shrink-0 rounded-xl py-2">
                            <img
                                className="h-full w-full object-cover rounded-xl"
                                src={item.img}
                                alt="img"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
