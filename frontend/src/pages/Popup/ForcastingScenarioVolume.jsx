import React from 'react'
import { IoIosSave } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { FaQuestionCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

const fiscalVolume = [
    {
        "Start Date": "2/4/2023",
        "Stop Date": "2/10/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "2/11/2023",
        "Stop Date": "2/17/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "2/18/2023",
        "Stop Date": "2/24/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "2/25/2023",
        "Stop Date": "3/3/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "3/4/2023",
        "Stop Date": "3/10/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "3/11/2023",
        "Stop Date": "3/17/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "3/18/2023",
        "Stop Date": "3/24/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "3/25/2023",
        "Stop Date": "3/31/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "4/1/2023",
        "Stop Date": "4/7/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "4/8/2023",
        "Stop Date": "4/14/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "4/15/2023",
        "Stop Date": "4/21/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "4/22/2023",
        "Stop Date": "4/28/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "4/29/2023",
        "Stop Date": "5/5/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "5/6/2023",
        "Stop Date": "5/12/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "5/13/2023",
        "Stop Date": "5/19/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "5/20/2023",
        "Stop Date": "5/26/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "5/27/2023",
        "Stop Date": "6/2/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "6/3/2023",
        "Stop Date": "6/9/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "6/10/2023",
        "Stop Date": "6/16/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "6/17/2023",
        "Stop Date": "6/23/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "6/24/2023",
        "Stop Date": "6/30/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "7/1/2023",
        "Stop Date": "7/7/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "7/8/2023",
        "Stop Date": "7/14/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "7/15/2023",
        "Stop Date": "7/21/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "7/22/2023",
        "Stop Date": "7/28/2023",
        "Supplied Volume": 0
    },
    {
        "Start Date": "7/29/2023",
        "Stop Date": "8/4/2023",
        "Supplied Volume": 0
    }
]

export default function ForcastingScenarioVolume() {
    return (
        <>
            <div className='max-h-[90vh] md:w-auto m-auto border bg-white flex flex-col shadow-lg overflow-auto'>
                <div className='bg-gray-50 p-2 flex items-center justify-between sticky top-0'>
                    <h1 className='flex items-center gap-2 text-sm text-gray-500 font-semibold'>
                        <FaUser className='-rotate-45 text-yellow-500 w-4 h-4' />Forcasting Scenario</h1>
                    <div className="flex space-x-[2em]">
                        <FiMinus />
                        <MdCheckBoxOutlineBlank />
                        <RxCross2 />
                    </div>
                </div>
                <div className='sticky top-9'>
                    <div className='bg-gradient-to-tr font-thin to-blue-300 from-blue-200'>
                        <ul className='flex items-center font-semibold text-sm py-1 gap-5 px-4'>
                            <li className='cursor-pointer'>File</li>
                            <li className='cursor-pointer'>Edit</li>
                            <li className='cursor-pointer'>View</li>
                            <li className='cursor-pointer'>Go</li>
                            <li className='cursor-pointer'>Shortcuts</li>
                            <li className='cursor-pointer'>Tools</li>
                            <li className='cursor-pointer'>Window</li>
                            <li className='cursor-pointer'>Help</li>
                        </ul>
                    </div>
                    {/* Second menu with icons and inputbox */}
                    <div className='bg-gradient-to-tl font-thin to-blue-300 from-blue-100'>
                        <div className="bg-gradient-to-tr items-center to-blue-100 from-blue-400 px-2 py-1 font-semibold flex space-x-4 border-b border-gray-300">
                            <div className="cursor-pointer flex items-center gap-1"><IoIosSave className='text-blue-700 w-5 h-5' /> Save & Close</div>
                            <div className="cursor-pointer"><IoIosSave className='text-blue-700 w-5 h-5' /></div>
                            <div className="cursor-pointer"><TiArrowBack className='w-6 h-6 text-gray-500' /></div>
                            <div className="cursor-pointer"><BsFileEarmarkArrowUpFill className='w-5 h-5' /></div>
                            <div className="cursor-pointer"><HiArrowCircleLeft className='w-5 h-5 bg-white rounded-full text-green-500' /></div>
                            <div className="cursor-pointer"><HiArrowCircleRight className='w-5 h-5 bg-white rounded-full text-green-500' /></div>
                            <div className='cursor-pointer'>
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
                            </div>
                            <div className="cursor-pointe relative">
                                <input
                                    type="text"
                                    placeholder="(UTC+00:00) Dublin, Edinburgh, Lisbon, London"
                                    className="md:w-[25vw] w-auto  px-3 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    aria-label="Time zone input"
                                />
                                <div
                                    className="absolute top-1/2 right-0 transform -translate-y-1/2 border-2 border-gray-400 px-[5px] py-[4px] cursor-pointer"
                                    aria-label="More options"
                                >
                                    <BsThreeDots />
                                </div>
                            </div>
                            <div className="cursor-pointer"> <FaQuestionCircle className='w-6 h-6 text-blue-500 border-gray-100 border-2 rounded-full' /></div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-tl font-thin to-blue-100 from-blue-50 text-black p-2">
                        <ul className="flex space-x-4 font-semibold">
                            <li className='cursor-pointer'>General</li>
                            <li className='cursor-pointer'>Fiscal</li>
                            <li className='cursor-pointer'>Revenue</li>
                            <li className='cursor-pointer'>Cycle</li>
                            <li className='cursor-pointer'>Intra-Day</li>
                            <li className='cursor-pointer'>Daily</li>
                            <li className='cursor-pointer'>AFT</li>
                            <li className='cursor-pointer'>Service</li>
                            <li className='cursor-pointer'>Multi-Channel</li>
                        </ul>
                    </div>
                </div>

                <div className='md:flex'>
                    <div className='w-full md:w-5/6'>
                        <div className="flex items-center justify-between bg-gradient-to-t to-blue-400 from-blue-800 text-white px-2 py-1 rounded-t-md">
                            <h1 className="text-lg font-bold">Fiscal Volumes</h1>
                            <IoMenu className='w-5 h-5' />
                        </div>
                        <div className="overflow-y-auto" style={{ maxHeight: '100vh' }}>
                            <table className='w-full h-[50vh] overflow-y-scroll'>
                                <thead className='sticky top-0 bg-white'>
                                    <tr className='text-center font-bold md:text-sm'>
                                        <th className='border-x border-gray-300 p-2'>Start Date</th>
                                        <th className='border-x border-gray-300 p-2'>Stop Date</th>
                                        <th className='border-x border-gray-300 p-2'>Supplied Volume</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {fiscalVolume.map((val, index) => (
                                        <tr key={index}
                                            className={`${index % 2 === 0 ? '' : 'bg-yellow-100'}`}>
                                            <td className='px-4 py-1 border-x border-gray-300'>{val['Start Date']}</td>
                                            <td className='px-4 py-1 border-x border-gray-300'>{val['Stop Date']}</td>
                                            <td className='px-4 py-1 border-x border-gray-300'>{val['Supplied Volume']}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className='space-y-2 md:w-1/6 mt-2 px-3'>
                        <button className='bg-gray-100 py-1 hover:border-2 hover:border-blue-400 border-2 border-gray-300 w-[9vw]'>Select...</button>
                        <button className='bg-gray-100 py-1 hover:border-2 hover:border-blue-400 border-2 border-gray-300 w-[9vw]'>Delete</button>
                    </div>
                </div>
            </div >
        </>
    )
}
