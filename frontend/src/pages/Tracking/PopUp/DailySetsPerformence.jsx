import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { PiTriangleThin } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";


export default function DailySetsPerformence() {

    const [toggleCheckList, setToggleCheckList] = useState(null);

    const handleCheckList = (tab) => {
        setToggleCheckList((prevTab) => prevTab === tab ? null : tab);
    }



    const check = <FaCheck className="w-5 h-5 text-green-400" />;

    const formatTo12Hour = (hour, minute) => {
        const h = hour % 12 || 12;
        const period = hour < 12 ? "AM" : "PM";
        const min = minute.toString().padStart(2, '0');
        return `${h}:${min} ${period}`;
    };

    const timeSlots = Array.from({ length: 40 }, (_, i) => {
        const hour = Math.floor(i / 2);
        const minute = i % 2 === 0 ? 0 : 30;
        return formatTo12Hour(hour, minute);
    });

    console.log(timeSlots);


    const columnGroups = [
        "TFFR.GEUSRV.DCSFRC_",
        "TFFR.GEUSRV.DCSFRV_",
        "TFFR.GEUSRV.DCSFRX_",
        "Grand Total",
    ];

    const subHeadings = ['FC VOL', 'Offered', '%to Plan'];

    const heading1 = [
        'FC VOL', 'Offered', '%to Plan',
        'FC VOL', 'Offered', '%to Plan',
        'FC VOL', 'Offered', '%to Plan',
        'FC VOL', 'Offered', '%to Plan',
    ];

    // Example data with some entries
    const data = {
        "9:30 AM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': 0, '%to Plan': '0.00' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': 1, '%to Plan': '0.25' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 0, 'Offered': 1, '%to Plan': '0.00' },
            "Grand Total": { 'FC VOL': 1, 'Offered': 0, '%to Plan': '0.17' },
        },
        "10:00 AM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': 0, '%to Plan': '0.00' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': 1, '%to Plan': '0.60' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': 0, '%to Plan': '0.00' },
            "Grand Total": { 'FC VOL': 1, 'Offered': 1, '%to Plan': '0.30' },
        },
        "10:30 AM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': 0, '%to Plan': '0.00' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': 1, '%to Plan': '0.17' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': 0, '%to Plan': '0.00' },
            "Grand Total": { 'FC VOL': 1, 'Offered': 1, '%to Plan': '0.18' },
        },
        "11:00 AM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': 0, '%to Plan': '0.00' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': 1, '%to Plan': '0.50' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': 0, '%to Plan': '0.00' },
            "Grand Total": { 'FC VOL': 1, 'Offered': 1, '%to Plan': '0.20' },
        },
        "11:30 AM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "12:00 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "12:30 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "1:00 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "1:30 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "2:00 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "2:30 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "3:00 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "3:30 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "4:00 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "4:30 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "5:00 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
        "5:30 PM": {
            "TFFR.GEUSRV.DCSFRC_": { 'FC VOL': 0, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRV_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "TFFR.GEUSRV.DCSFRX_": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
            "Grand Total": { 'FC VOL': 1, 'Offered': '', '%to Plan': '' },
        },
    };

    return (
        <div className="w-full h-[100vh] overflow-auto mx-auto flex flex-col">
            <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                <h1 className="font-bold">Performance</h1>
            </div>
            <div className='space-y-0.5'>
                <div className='bg-gray-400'>
                    <div className='flex items-center space-x-3 p-2'>

                        <div className='relative flex items-center space-x-3 rounded-sm border px-1 py-0.5 bg-white'>
                            <p className='font-semibold'>Open</p>
                            <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'
                                onClick={() => handleCheckList('Open')}>
                                <FaChevronDown className='w-3 h-3 text-gray-500' />
                            </button>

                            {toggleCheckList === 'Open' &&
                                <div className="bg-white flex items-center justify-center absolute top-7 -left-4 z-10">
                                    <div className="border-2 border-blue-500 w-[250px] h-[250px] select-none font-sans flex flex-col">
                                        <form className="flex-grow flex flex-col space-y-2 ">
                                            <div className='flex-grow'>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5' />
                                                    <span className="italic text-gray-700 rounded-md px-1 border-2 border-dotted border-gray-700 w-full">(Show All)</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">No</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">Yes</span>
                                                </label>
                                            </div>
                                            <div className="flex justify-end space-x-4 border-t-2 border-gray-600 p-1">
                                                <button
                                                    type="submit"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    OK
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className='relative flex items-center space-x-3 rounded-sm border px-1 py-0.5 bg-white'>
                            <p className='font-semibold'>Day Of Weeks</p>
                            <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'
                                onClick={() => handleCheckList('Day Of Weeks')}>
                                <FaChevronDown className='w-3 h-3 text-gray-500' />
                            </button>

                            {toggleCheckList === 'Day Of Weeks' &&
                                <div className="bg-white flex items-center justify-center absolute top-7 -left-4 z-10">
                                    <div className="border-2 border-blue-500 w-[250px] h-[250px] select-none font-sans flex flex-col">
                                        <form className="flex-grow flex flex-col space-y-2 ">
                                            <div className='flex-grow'>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5' />
                                                    <span className="italic text-gray-700 rounded-md px-1 border-2 border-dotted border-gray-700 w-full">(Show All)</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">Thursday</span>
                                                </label>
                                            </div>
                                            <div className="flex justify-end space-x-4 border-t-2 border-gray-600 p-1">
                                                <button
                                                    type="submit"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    OK
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className='relative flex items-center space-x-3 rounded-sm border px-1 py-0.5 bg-white'>
                            <p className='font-semibold'>Routing Set</p>
                            <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'
                                onClick={() => handleCheckList('Routing Set')}>
                                <FaChevronDown className='w-3 h-3 text-gray-500' />
                            </button>

                            {toggleCheckList === 'Routing Set' &&
                                <div className="bg-white flex items-center justify-center absolute top-7 -left-4 z-10">
                                    <div className="border-2 border-blue-500 w-[250px] h-[250px] select-none font-sans flex flex-col">
                                        <form className="flex-grow flex flex-col space-y-2 ">
                                            <div className='flex-grow'>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5' />
                                                    <span className="italic text-gray-700 rounded-md px-1 border-2 border-dotted border-gray-700 w-full">(Show All)</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">TFFR.GEUSRV.DMCFRM_</span>
                                                </label>
                                            </div>
                                            <div className="flex justify-end space-x-4 border-t-2 border-gray-600 p-1">
                                                <button
                                                    type="submit"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    OK
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className='relative flex items-center space-x-3 rounded-sm border px-1 py-0.5 bg-white'>
                            <p className='font-semibold'>Multiskill</p>
                            <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'
                                onClick={() => handleCheckList('Multiskill')}>
                                <FaChevronDown className='w-3 h-3 text-gray-500' />
                            </button>

                            {toggleCheckList === 'Multiskill' &&
                                <div className="bg-white flex items-center justify-center absolute top-7 -left-4 z-10">
                                    <div className="border-2 border-blue-500 w-[250px] h-[250px] select-none font-sans flex flex-col">
                                        <form className="flex-grow flex flex-col space-y-2 ">
                                            <div className='flex-grow'>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5' />
                                                    <span className="italic text-gray-700 rounded-md px-1 border-2 border-dotted border-gray-700 w-full">(Show All)</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">Yes</span>
                                                </label>
                                            </div>
                                            <div className="flex justify-end space-x-4 border-t-2 border-gray-600 p-1">
                                                <button
                                                    type="submit"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    OK
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className='relative flex items-center space-x-3 rounded-sm border px-1 py-0.5 bg-white'>
                            <p className='font-semibold'>Past / Future</p>
                            <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'
                                onClick={() => handleCheckList('Past / Future')}>
                                <FaChevronDown className='w-3 h-3 text-gray-500' />
                            </button>

                            {toggleCheckList === 'Past / Future' &&
                                <div className="bg-white flex items-center justify-center absolute top-7 -left-4 z-10">
                                    <div className="border-2 border-blue-500 w-[250px] h-[250px] select-none font-sans flex flex-col">
                                        <form className="flex-grow flex flex-col space-y-2 ">
                                            <div className='flex-grow'>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5' />
                                                    <span className="italic text-gray-700 rounded-md px-1 border-2 border-dotted border-gray-700 w-full">(Show All)</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">Past</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">Current Period</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">Future</span>
                                                </label>
                                            </div>
                                            <div className="flex justify-end space-x-4 border-t-2 border-gray-600 p-1">
                                                <button
                                                    type="submit"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    OK
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className='relative flex items-center space-x-3 rounded-sm border px-1 py-0.5 bg-white'>
                            <p className='font-semibold'>Date and Time</p>
                            <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'
                                onClick={() => handleCheckList('Date and Time')}>
                                <FaChevronDown className='w-3 h-3 text-gray-500' />
                            </button>

                            {toggleCheckList === 'Date and Time' &&
                                <div className="bg-white flex items-center justify-center absolute top-7 -left-4 z-10">
                                    <div className="border-2 border-blue-500 w-[250px] h-[250px] select-none font-sans flex flex-col">
                                        <form className="flex-grow flex flex-col space-y-2 overflow-auto">
                                            <div className='flex-grow'>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5' />
                                                    <span className="italic text-gray-700 rounded-md px-1 border-2 border-dotted border-gray-700 w-full">(Show All)</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">7/31/2025 12:00 AM</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">7/31/2025 12:30 AM</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">7/31/2025 01:00 AM</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">7/31/2025 01:30 AM</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">7/31/2025 02:00 AM</span>
                                                </label>
                                                <label className="flex items-center text-gray-800 space-x-2 p-1">
                                                    <input type="checkbox" className='w-5 h-5 ' />
                                                    <span className="">7/31/2025 02:30 AM</span>
                                                </label>
                                            </div>
                                            <div className="flex justify-end sticky bottom-0 bg-white space-x-4 border-t-2 border-gray-600 p-1">
                                                <button
                                                    type="submit"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    OK
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border border-gray-400 bg-white text-gray-800 px-3 py-0.5 text-sm font-sans focus:ring-1 focus:ring-blue-600 w-[70px]"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>

                <div className='bg-gray-400'>
                    <div className='flex items-center space-x-3 p-2'>
                        <div className=' flex items-center space-x-3 rounded-sm border px-1 py-0.5 bg-white'>
                            <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'>
                                <FaChevronDown className='w-3 h-3 text-gray-500' />
                            </button>
                        </div>
                        <div className=' flex items-center space-x-3 rounded-sm border px-1 py-0.5 bg-white'>
                            <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'>
                                <FaChevronDown className='w-3 h-3 text-gray-500' />
                            </button>
                        </div>
                        <div className=' flex items-center space-x-3 rounded-sm border px-1 py-0.5 bg-white'>
                            <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'>
                                <FaChevronDown className='w-3 h-3 text-gray-500' />
                            </button>
                        </div>
                        <div className=' flex items-center space-x-3 rounded-sm border px-1 py-0.5 bg-white'>
                            <span>Forecast Group</span>
                            <PiTriangleThin className='text-gray-400/60 w-3 h-3' />
                            <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'>
                                <FaChevronDown className='w-3 h-3 text-gray-500' />
                            </button>
                        </div>
                        <div className=' flex items-center space-x-3 rounded-sm border px-1 py-0.5 bg-white'>
                            <span>Date</span>
                            <PiTriangleThin className='text-gray-400/60 w-3 h-3' />
                            <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'>
                                <FaChevronDown className='w-3 h-3 text-gray-500' />
                            </button>
                        </div>
                        <div className='rounded-sm border px-1 py-0.5 bg-white'>
                            <span className='text-red-400 font-bold'>Data</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-auto flex-grow flex flex-col w-full md:w-3/5">
                <table className="text-nowrap text-sm text-center flex-grow">
                    <thead className="top-0 sticky">
                        <tr>
                            <th className="bg-gray-500 px-1 py-4"></th>

                            {columnGroups.map((group) => (
                                <th key={group} colSpan={subHeadings.length} className="border-x border-gray-300 px-1 py-4  bg-gray-200">
                                    {group}
                                </th>
                            ))}
                        </tr>
                        <tr>
                            <th className="bg-gray-500 p-1 sticky left-0 top-0">
                                <div className='relative flex items-center justify-between rounded-sm border px-1 py-0.5 bg-white'>
                                    <p className='font-semibold'>Time</p>
                                    <PiTriangleThin className='w-3 h-3 text-gray-400' />
                                    <button className='border border-gray-300 p-1 bg-gray-300 hover:border-blue-500 hover:bg-blue-300'>
                                        <FaChevronDown className='w-3 h-3 text-gray-500' />
                                    </button>
                                </div>
                            </th>

                            {columnGroups.flatMap((_, i) =>
                                subHeadings.map((sub, j) => (
                                    <th key={`${i}-${j}`} className="border px-1 py-2 bg-white">
                                        {sub}
                                    </th>
                                ))
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {timeSlots.map((time) => (
                            <tr key={time}>
                                <td className="border font-semibold bg-gray-100 ">{time}</td>
                                {columnGroups.flatMap((group) =>
                                    subHeadings.map((sub) => {
                                        const value = data[time]?.[group]?.[sub] ?? '';
                                        return (
                                            <td key={`${time}-${group}-${sub}`}
                                                className={`border p-1 
    ${group === 'Grand Total'
                                                        ? 'bg-gray-100 border border-gray-200'
                                                        : sub === 'FC VOL' && value !== undefined && value !== ''
                                                            ? 'bg-green-200 text-green-800 font-bold border border-gray-300'
                                                            : sub === 'Offered' && value !== undefined && value !== ''
                                                                ? 'bg-cyan-600 text-white font-bold'
                                                                : 'bg-white'
                                                    }`}>
                                                {value}
                                            </td>
                                        );
                                    })
                                )}
                            </tr>
                        ))}
                    </tbody>


                    <tfoot className="bottom-0 sticky">
                        <tr>
                            <td className="border p-1 font-bold bg-gray-200 left-0 sticky">Footer</td>
                            {heading1.map((heading, index) => (
                                <td key={index} className="border p-1 bg-gray-100">
                                    00
                                </td>
                            ))}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div >
    )
}
