import React, { useState } from 'react'
import { VscGraphLine } from "react-icons/vsc";
import { FiMinus } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoIosSave } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { FcFrame } from "react-icons/fc";
import { FaQuestionCircle } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";

export default function DailyAHT() {

    const [activeTab, setActiveTab] = useState('Daily AHTs');

    return (
        <>
            <div className="flex justify-center items-center max-h-[90vh]">
                <div className="w-[600px] border border-gray-300 shadow-lg">
                    <div className="bg-gray-100 p-2 flex justify-between items-center border-b border-gray-300">
                        <div className="font-semibold flex items-center gap-2">
                            <VscGraphLine className='text-red-400' />
                            Daily AHT Set (NORMAL)
                        </div>
                        <div className="flex space-x-[2em]">
                            <FiMinus />
                            <MdCheckBoxOutlineBlank />
                            <RxCross2 />
                        </div>
                    </div>

                    <div className="bg-gradient-to-tr to-blue-100 from-blue-400 px-2 py-1 font-semibold flex space-x-4 border-b border-gray-300">
                        <div className="cursor-pointer">File</div>
                        <div className="cursor-pointer">Edit</div>
                        <div className="cursor-pointer">View</div>
                        <div className="cursor-pointer">Tools</div>
                        <div className="cursor-pointer">Window</div>
                        <div className="cursor-pointer">Help</div>
                    </div>

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
                        <div className="cursor-pointer"><FcFrame className='w-5 h-5 text-green-500' /></div>
                        <div className="cursor-pointer"> <FaQuestionCircle className='w-6 h-6 text-blue-500 border-gray-100 border-2 rounded-full' /></div>
                    </div>

                    <div className="flex space-x-2  p-2 pb-0 bg-blue-50 border-gray-300">
                        <div className={`${activeTab === 'General' ? 'border-2 font-bold shadow-black shadow-[inset_0_2px_5px_rgba(0,0,0,.5)] rounded-t-md' : 'border-2 rounded-t-md'} w-[10em]  border-gray-300 text-center lg:text-[1em] md:text-[.8em] text-[.7em] font-semibold py-2`}
                            onClick={() => setActiveTab('General')}>
                            General
                        </div>
                        <div className={`${activeTab === 'Daily AHTs' ? 'border-2 font-bold shadow-black shadow-[inset_0_2px_5px_rgba(0,0,0,.5)] rounded-t-md' : 'border-2 rounded-t-md'} w-[10em]  border-gray-300 text-center lg:text-[1em] md:text-[.8em] text-[.7em] font-semibold py-2`}
                            onClick={() => setActiveTab('Daily AHTs')}>
                            Daily AHTs
                        </div>
                    </div>
                    <div className="border border-gray-400 m-2 mt-0">

                        {
                            activeTab === 'Daily AHTs' && (

                                <div className="min-h-[400px]">
                                    <div className="p-2 flex items-center justify-between cursor-pointer md:text-lg bg-gradient-to-t to-blue-500 from-blue-800 text-white font-bold border border-gray-300 border-b-0">
                                        <p>Daily AHTs</p>
                                        <FcDocument className='w-5 h-5' />
                                    </div>
                                    <div className='p-2'>
                                        <table className="w-full border-collapse border border-gray-300">
                                            <thead className="justify-between">
                                                <tr className='font-light'>
                                                    <th className="w-32 border px-2 py-1 text-left">Day of Week</th>
                                                    <th className="w-10 border px-2 py-1 text-right">AHT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='font-semibold'>
                                                    <td className="bg-gray-200 w-5/6 border-2 border-gray-300 px-2 py-1">
                                                        Saturday
                                                    </td>
                                                    <td className="w-10 border p-1 border-gray-300 text-right">
                                                        1797.00
                                                    </td>
                                                </tr>
                                                <tr className='font-semibold'>
                                                    <td className="bg-gray-200 w-5/6 border-2 border-gray-300 px-2 py-1">
                                                        Sunday
                                                    </td>
                                                    <td className="bg-yellow-50 w-10 border p-1 border-gray-300 text-right">
                                                        1797.00
                                                    </td>
                                                </tr>
                                                <tr className='font-semibold'>
                                                    <td className="bg-gray-200 w-5/6 border-2 border-gray-300 px-2 py-1">
                                                        Monday
                                                    </td>
                                                    <td className="w-10 border p-1 border-gray-300 text-right">
                                                        1797.00
                                                    </td>
                                                </tr>
                                                <tr className='font-semibold'>
                                                    <td className="bg-gray-200 w-5/6 border-2 border-gray-300 px-2 py-1">
                                                        Tuesday
                                                    </td>
                                                    <td className="bg-yellow-50 w-10 border p-1 border-gray-300 text-right">
                                                        1797.00
                                                    </td>
                                                </tr>
                                                <tr className='font-semibold'>
                                                    <td className="bg-gray-200 w-5/6 border-2 border-gray-300 px-2 py-1">
                                                        Wednesday
                                                    </td>
                                                    <td className="w-10 border p-1 border-gray-300 text-right">
                                                        1797.00
                                                    </td>
                                                </tr>
                                                <tr className='font-semibold'>
                                                    <td className="bg-gray-200 w-5/6 border-2 border-gray-300 px-2 py-1">
                                                        Thursday
                                                    </td>
                                                    <td className="bg-yellow-50 w-10 border p-1 border-gray-300 text-right">
                                                        1797.00
                                                    </td>
                                                </tr>
                                                <tr className='font-semibold'>
                                                    <td className="bg-gray-200 w-5/6 border-2 border-gray-300 px-2 py-1">
                                                        Friday
                                                    </td>
                                                    <td className="w-10 border p-1 border-gray-300 text-right">
                                                        1797.00
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}


                        {
                            activeTab === 'General' && (
                                <div className="min-h-[400px]">
                                    <div className="p-2 flex items-center justify-between cursor-pointer md:text-lg bg-gradient-to-t to-blue-500 from-blue-800 text-white font-bold border border-gray-300 border-b-0">
                                        <p>General</p>
                                        <FcDocument className='w-5 h-5' />
                                    </div>
                                    <div className='p-2'>
                                        <table className="w-full">
                                            <thead className="justify-between">
                                                <tr className='font-light'>
                                                    <th className="w-32 border px-2 py-1 text-left">Day of Week</th>
                                                    <th className="w-10 border px-2 py-1 text-right">AHT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='font-semibold text-center justify-center'>
                                                    <td colSpan={2} className='py-2'>No data available</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                        <div className="bg-blue-200 p-2 border-t border-gray-300 text-xs">
                            0 of 7 Items Selected, 0 of 1 Columns Selected, 0 Cells Selected
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
