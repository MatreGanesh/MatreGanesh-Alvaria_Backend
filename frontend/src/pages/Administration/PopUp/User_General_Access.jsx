import React, { useState } from 'react'
import { BiSolidFile } from 'react-icons/bi'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaQuestionCircle } from 'react-icons/fa'
import { TbMessageFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { HiMiniMinus } from 'react-icons/hi2'
import { ImUndo2 } from "react-icons/im";
import { IoIosSave } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { PiDotsThreeBold, PiDotsThreeOutlineFill } from 'react-icons/pi'
import { VscChromeMaximize } from 'react-icons/vsc'

export default function User_General_Access() {

    const [toggleTabs, setToggleTabs] = useState('General');

    const handleToggleTabs = (tab) => {
        setToggleTabs((prev) => prev === tab ? tab : tab)
    }

    return (
        <div className="z-10 absolute top-1/2 left-1/2 transform translate-x-26 -translate-y-1/2  shadow-sm shadow-black bg-white">
            {/* <TrackingEdit /> */}
            <div className="border border-gray-300 w-[700px] max-w-full mx-auto shadow-sm">
                {/* <!-- Title bar --> */}
                <div className="flex items-center justify-between border-b border-gray-400 px-2 py-2 select-text">
                    <div className="text-sm flex items-center gap-4 font-bold text-black truncate font-[Segoe UI]">
                        <span className='relative'>
                            <FaUser className='w-5 h-5 text-blue-500' />
                            <TbMessageFilled className='w-5 h-5 text-blue-500 absolute top-0.5 left-3 ' />
                        </span>
                        User
                    </div>
                    <div className="flex gap-8">
                        <HiMiniMinus className='w-4 h-4' />
                        <VscChromeMaximize className='w-4 h-4' />
                        <IoClose className='w-4 h-4' />
                    </div>
                </div>
                {/* <!-- Menu bar --> */}
                <div className='bg-gradient-to-bl font-thin to-blue-300 from-blue-100 flex flex-grow'>
                    <ul className='flex items-center font-semibold text-sm py-1 gap-4 px-2'>
                        <li className='cursor-pointer'>File</li>
                        <li className='cursor-pointer'>Edit</li>
                        <li className='cursor-pointer'>View</li>
                        <li className='cursor-pointer'>Tools</li>
                        <li className='cursor-pointer'>Window</li>
                        <li className='cursor-pointer'>Help</li>
                    </ul>
                </div>
                {/* <!-- Toolbar --> */}
                <div className="flex items-center space-x-1 bg-gradient-to-b to-blue-300 from-blue-100 border-b border-gray-400 px-1 select-none">
                    <ul className='flex items-center font-semibold text-sm gap-2 py-1'>
                        <li
                            className='cursor-pointer flex items-center gap-1 hover:text-blue-700'>
                            <IoIosSave className='w-5 h-5 text-blue-500' /> Save & Close
                        </li>
                        <li className='cursor-pointer'>
                            <IoIosSave className='w-5 h-5 text-blue-500' />
                        </li>
                        <li className='cursor-pointer'>
                            <ImUndo2 className='w-5 h-5 text-gray-500' />
                        </li>
                        <li className='cursor-pointer flex items-center gap-1 hover:text-blue-700'>
                            <FaArrowAltCircleLeft className='w-5 h-5 text-green-500 bg-white rounded-full p-[.4px]' />
                        </li>
                        <li className='cursor-pointer flex items-center gap-1'>
                            <FaArrowAltCircleRight className='w-5 h-5 text-green-500 bg-white rounded-full p-[.4px]' />
                        </li>
                        <li className='cursor-pointer'>
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
                        </li>
                        <li
                            className='cursor-pointer gap-1 hover:text-green-300'>
                            <BiSolidFile className='w-5 h-5 text-blue-500' />
                        </li>
                        <li className='cursor-pointer'>
                            <FaQuestionCircle className='w-5 h-5 text-blue-500 border-gray-100 border-2 rounded-full' />
                        </li>
                    </ul>
                </div>
                {/* <!-- Tab bar --> */}
                <div className="flex bg-gradient-to-tr from-blue-100 to-blue-200 text-black select-text pt-1">
                    <button className={`${toggleTabs === "General" ? " border border-b-0 bg-white font-semibold" : "bg-gray-200"} border text-sm border-gray-400 px-3 py-1 font-semibold"`}
                        onClick={() => handleToggleTabs('General')}
                    >
                        General
                    </button>
                    <button className={`${toggleTabs === "Access" ? " border border-b-0 bg-white font-semibold" : "bg-gray-200"} border text-sm border-gray-400 px-3 py-1 font-semibold"`}
                        onClick={() => handleToggleTabs('Access')}>
                        Access
                    </button>
                </div>


                {/* <!-- General area --> */}

                {toggleTabs === "General" && (
                    <div className="p-3 bg-white min-h-[520px]">
                        <form className="space-y-3 max-w-[560px]">
                            <div className="flex items-center space-x-2">
                                <label className="w-[210px] text-sm font-semibold text-black" htmlFor="user">User name:</label>
                                <div className='w-[420px] flex items-center gap-1 border border-gray-300 px-0.5'>
                                    <input id='user'
                                        className="rounded-sm text-sm w-full text-gray-500 px-1 py-[2px] truncate focus:bg-yellow-300/80"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <label className="w-[210px] text-sm font-semibold text-black" htmlFor="alteternateUser">Alternate user name:</label>
                                <div className='w-[420px] flex items-center gap-1 border border-gray-300 px-0.5'>
                                    <input id='alteternateUser'
                                        className="rounded-sm text-sm w-full text-gray-500 px-1 py-[2px] truncate focus:bg-yellow-300/80"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <label className="w-[185px] text-sm font-semibold text-black" htmlFor="week">First day of the week:</label>
                                <select id="week" defaultValue="" className='text-gray-700 border border-gray-400 w-[150px] px-2 py-0.5 font-medium bg-gray-200/50'>
                                    <option value="" disabled hidden>Select a day</option>
                                    <option value="Sunday">Sunday</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                </select>
                            </div>

                            <div className="flex items-start space-x-2">
                                <label className="w-[185px]  text-sm font-semibold text-black" htmlFor="factor">Time Zone:</label>
                                <div className='w-[320px] space-y-3'>
                                    <div className='w-full flex items-center gap-1 border border-gray-300 px-0.5'>
                                        <input
                                            className="rounded-sm text-sm w-full text-gray-500 px-1 py-[2px]  truncate" />
                                        <PiDotsThreeOutlineFill className='w-5 h-5 border border-gray-300 p-0.5 text-white font-bold bg-gray-300' />
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <input className='w-5 h-5' type='checkbox' />
                                        <p>Active</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}


                {/* <!-- Access area --> */}

                {toggleTabs === "Access" && (
                    <div className="p-3 bg-white min-h-[520px]">

                        <form>
                            <fieldset className='border border-gray-400 p-2'>
                                <legend className='font-semibold'>User type</legend>
                                <div className='space-y-1 text-sm'>
                                    <div className='flex items-center space-x-1'>
                                        <input type='radio' className='w-5 h-5' />
                                        <label className='font-semibold'>Regular User</label>
                                    </div>
                                    <div className='flex items-center space-x-1'>
                                        <input type='radio' className='w-5 h-5' disabled />
                                        <label className='font-semibold text-gray-500'>Administrator</label>
                                    </div>
                                    <div className='flex items-center space-x-1'>
                                        <input type='radio' className='w-5 h-5' />
                                        <label className='font-semibold'>Employee</label>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset className='border border-gray-400 p-2'>
                                <legend className='font-semibold'>Profile</legend>
                                <div className='space-y-1 text-sm'>
                                    <div className='flex items-center space-x-1'>
                                        <label className='font-semibold w-[180px]'>Security profile:</label>
                                        <div className='border-2 border-gray-400 flex items-center px-0.5'>
                                            <input type='text' className='w-[300px] px-2 py-1  focus:outline-0' />
                                            <PiDotsThreeBold className='w-6 h-6 border border-gray-400 p-1 bg-gray-200' />
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-1'>
                                        <label className='font-semibold w-[180px]'>Employee filter profile:</label>
                                        <div className='border-2 border-gray-400 flex items-center px-0.5'>
                                            <input type='text' className='w-[300px] px-2 py-1 border-gray-400 focus:outline-0' />
                                            <PiDotsThreeBold className='w-6 h-6 border border-gray-400 p-1 bg-gray-200' />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset className='border border-gray-400 p-2'>
                                <legend className='font-semibold'>Secondary</legend>
                                <div className='space-y-1 text-sm'>
                                    <div className='flex items-center space-x-1'>
                                        <label className='font-semibold w-[180px]'>Login ID:</label>
                                        <input type='text' className='w-[300px] px-2 py-1 border-2 border-gray-400 focus:outline-0' />
                                    </div>
                                    <div className='flex items-center space-x-1'>
                                        <label className='font-semibold w-[180px]'>New Password:</label>
                                        <input type='text' className='w-[150px] px-2 py-1 border-2 border-gray-400 focus:outline-0' />
                                    </div>
                                    <div className='flex items-center space-x-1'>
                                        <label className='font-semibold w-[180px]'>Confirm Password:</label>
                                        <input type='text' className='w-[150px] px-2 py-1 border-2 border-gray-400 focus:outline-0' />
                                    </div>
                                </div>
                            </fieldset>


                            <fieldset className='border border-gray-400 p-2 h-[130px]'>
                                <legend className='font-semibold'>Employee</legend>
                                <div className='space-y-1 text-sm'>
                                    <div className='flex items-center space-x-1'>
                                        <div className='border-2 border-gray-400 flex items-center px-0.5'>
                                            <input type='text' className='w-[500px] px-2 py-1 focus:bg-yellow-300/80 focus:outline-0' />
                                            <PiDotsThreeBold className='w-6 h-6 border border-gray-400 p-1 bg-gray-200' />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>

                    </div>
                )}

            </div >
        </div >
    )
}
