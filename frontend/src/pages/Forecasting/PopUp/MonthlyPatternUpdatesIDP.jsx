import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io';
import { BiSolidBinoculars } from "react-icons/bi";
import { FaSitemap } from "react-icons/fa";
import { TbSitemap } from "react-icons/tb";
import { GrCopy } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MonthlyPatternUpdatesIDP({ selectedRowData }) {

    const navigate = useNavigate();

    const handleNavigate = () => {
        localStorage.setItem('isMontlyPatternVisible', 'true');
        if (selectedRowData) {
            navigate('/forecasting/Monthly-Pattern-Updates/General', {
                state: {
                    userId: selectedRowData.userId,
                    groupName: selectedRowData.groupName,
                    scenarioId: selectedRowData.scenarioId,
                    month: selectedRowData.month,
                    ForecastGroup_Description: selectedRowData.ForecastGroup_Description
                },
            });
        }
    };

    return (
        <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  shadow-md shadow-black">
            {/* <TrackingEdit /> */}
            <div className="flex justify-center relative h-auto  w-[300px] bg-[#fff] p-1 shadow-md text-[13px]  border border-blue-400 font-sans text-black select-none">

                <div className='p-2 w-[1.5vw] shadow shadow-current bg-gradient-to-tl to-blue-500 from-blue-50'>
                    <span className='py-1'></span>
                </div>

                <div
                    className=" shadow-black w-[300px]"
                >
                    <ul className="">
                        <li className="flex items-center group hover:bg-yellow-200 hover:border border-black">
                            <button className='absolute left-[7px] flex items-center justify-center'>
                                <BiSolidBinoculars className='w-4 h-4 text-yellow-300' />
                            </button>
                            <button
                                className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                                type="button"
                            >
                                <span> Find...</span>
                                <span className="text-black text-xs font-semibold">
                                    Ctrl+F
                                </span>
                            </button>
                        </li>
                        <li className="group  text-gray-400 ">
                            <button
                                className="w-full text-left px-3 py-1.5 flex justify-between items-center cursor-not-allowed"
                                type="button"
                            >
                                <span> Find Next</span>
                                <span className="text-xs font-semibold">
                                    F3
                                </span>
                            </button>
                        </li>

                        <li>
                            <hr className="border-t border-blue-600 m-0" />
                        </li>

                        <li className="flex items-center group hover:bg-yellow-200 hover:border border-black">
                            <button className='absolute left-[7px] flex items-center justify-center'>
                                <FaSitemap className='w-4 h-4 text-blue-600' />
                            </button>
                            <button
                                className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                                type="button"
                            >
                                <span>Expand All</span>
                                <span className="text-black text-xs font-semibold">

                                </span>
                            </button>
                        </li>
                        <li className="flex items-center group hover:bg-yellow-200 hover:border border-black">
                            <button className='absolute left-[7px] flex items-center justify-center'>
                                <FaSitemap className='w-4 h-4 text-blue-600' />
                            </button>
                            <button
                                className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                                type="button"
                            >
                                <span>Collapse All</span>
                                <span className="text-black text-xs font-semibold">

                                </span>
                            </button>
                        </li>
                        <li className="px-3 py-1.5 hover:bg-yellow-200 hover:border border-black">Always Expanded</li>

                        <li>
                            <hr className="border-t border-blue-600 m-0" />
                        </li>

                        <li className="flex items-center group hover:bg-yellow-200 hover:border border-black">
                            <button className='absolute left-[7px] flex items-center justify-center'>
                                <GrCopy className='w-4 h-4 text-gray-500' />
                            </button>
                            <button
                                className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                                type="button"
                            >
                                <span>Copy</span>
                                <span className="text-black text-xs font-semibold">
                                    Ctrl+C
                                </span>
                            </button>
                        </li>

                        <li className="px-3 py-1.5 flex justify-between items-center hover:bg-yellow-200 hover:border border-black">
                            <span className="flex items-center gap-1">
                                Select All
                            </span>
                            <span className="text-xs font-semibold">Ctrl+A</span>
                        </li>

                        <li>
                            <hr className="border-t border-blue-600 m-0" />
                        </li>

                        <li className="px-3 py-1.5 flex justify-between items-center hover:bg-yellow-200 hover:border border-black">
                            Layout
                            <span className="text-xs font-normal">
                                <IoMdArrowDropright />
                            </span>
                        </li>

                        <li>
                            <hr className="border-t border-blue-600 m-0" />
                        </li>

                        <li className="px-3 py-1.5 cursor-pointer hover:bg-yellow-200 hover:border border-black">Export...</li>

                        <li>
                            <hr className="border-t border-blue-600 m-0" />
                        </li>

                        <li className="flex items-center group hover:bg-yellow-200 hover:border border-black">
                            <button className='absolute left-[7px] flex items-center justify-center'>
                                <FaRegEdit className='w-4 h-4 text-gray-500' />
                            </button>
                            <button
                                className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                                type="button"
                            >
                                <span>View Details...</span>
                                <span className="text-black text-xs font-semibold">

                                </span>
                            </button>
                        </li>

                        <li className="group hover:bg-yellow-200 hover:border border-black">
                            <span className='flex items-center' onClick={handleNavigate}>
                                <button className='absolute left-[7px] flex items-center justify-center'>
                                    <TbSitemap className='w-4 h-4 rotate-90 text-blue-500' />
                                </button>
                                <button className="w-full text-left px-3 py-1.5 flex justify-between items-center" type="button">
                                    <span>Add...</span>
                                    <span className="text-black text-xs font-semibold" />
                                </button>
                            </span>
                        </li>
                        <li className="flex items-center group hover:bg-yellow-200 hover:border border-black">
                            <button className='absolute left-[1px] flex items-center justify-center'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    shapeRendering="geometricPrecision"
                                    textRendering="geometricPrecision"
                                    imageRendering="optimizeQuality"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    viewBox="0 0 512 508.33"
                                    width="2vw"  // or any other size
                                    height="2vh" // or any other size
                                >
                                    <path
                                        fill="#EB0100"
                                        d="M317.99 323.62c-17.23-19.89-35.3-40.09-54.23-60.09-62.06 59.35-119.53 126.18-161.12 201.73-51.02 92.68-126.31 16.84-92.15-50.33 27.46-61.28 98.07-146.3 182.94-220.07-46.74-41.72-97.97-79.34-154.08-107.07C-42.76 47.2 19.97-20.82 79.37 6.16c50.04 19.82 119.09 70.85 182.26 134.32 63.11-45.86 129.55-81.8 189.45-95.87 13-3.06 50.95-11.33 59.69 1.04 3.29 4.67-.33 11.68-7.08 19.29-22.99 25.96-84.78 67.12-114.72 90.82-21.61 17.11-43.55 34.99-65.37 53.71 23.2 28.81 43.94 58.64 60.47 88.17 14.37 25.66 25.55 51.1 32.42 75.46 3.14 11.13 11.75 43.64 1.38 51.66-3.91 3.03-10.11.16-16.95-5.38-23.34-18.89-61.29-70.77-82.93-95.76z"
                                    />
                                </svg>
                            </button>
                            <button
                                className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                                type="button"
                            >
                                <span>Delete...</span>
                                <span className="text-black text-xs font-semibold">

                                </span>
                            </button>
                        </li>
                        <li>
                            <hr className="border-t border-blue-600 m-0" />
                        </li>
                        <li className="px-3 py-1.5 cursor-pointer hover:bg-yellow-200 hover:border border-black">
                            Day-of-Week Factors...
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
