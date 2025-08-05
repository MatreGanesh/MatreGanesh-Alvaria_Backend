import React, { useState } from 'react'
import { RiArrowDownSFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";


export default function TrackingEditMonths({ handleRightClick }) {

    const [monthlyData, setMonthlyData] = useState(() => {
        const storedData = localStorage.getItem('employeeScheduleData');
        return storedData ? JSON.parse(storedData) : [];
    });

    return (
        <>
            <div className="flex-1 ">
                <div className="min-w-full h-[90vh] overflow-y-auto flex flex-col bg-yellow-50 relative">

                    <table className=" h-screen border-collapse border border-blue-800 text-center text-[13px]
                 font-sans text-black">
                        <thead className='sticky top-0'>
                            <tr className='bg-gray-100'>
                                <td colSpan="7" className="text-[13px] font-normal py-1">
                                    Wiatrowski, Michael (389363)
                                </td>
                            </tr>
                            <tr className='bg-gray-100'>
                                <th className="border-x border-blue-800 px-2 py-1">Monday</th>
                                <th className="border-x border-blue-800 px-2 py-1">Tuesday</th>
                                <th className="border-x border-blue-800 px-2 py-1">Wednesday</th>
                                <th className="border-x border-blue-800 px-2 py-1">Thursday</th>
                                <th className="border-x border-blue-800 px-2 py-1">Friday</th>
                                <th className="border-x border-blue-800 px-2 py-1">Saturday</th>
                                <th className="border-x border-blue-800 px-2 py-1">Sunday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Iterate over each week */}
                            {monthlyData.monthly.reduce((acc, item, index) => {
                                const weekIndex = Math.floor(index / 7);
                                if (!acc[weekIndex]) acc[weekIndex] = [];
                                acc[weekIndex].push(item);
                                return acc;
                            }, []).map((week, weekIndex) => (
                                <tr key={weekIndex}>
                                    {/* Iterate over each day of the week */}
                                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, dayIndex) => {
                                        const dayData = week[dayIndex] || {};
                                        return (
                                            <td key={dayIndex} className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                                <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                                    {dayData.date}
                                                </div>
                                                <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                                    {dayData.title}
                                                </div>
                                                <div className={`${dayData.public || dayData.Vacation ? 'bg-red-600 flex justify-center items-center ' : 'bg-green-500 flex items-center'} text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white`}
                                                    onContextMenu={handleRightClick}>
                                                    {dayData.public ? (
                                                        <>
                                                            <img alt="Red alert icon" className="mr-1" height="16" src="https://storage.googleapis.com/a1aa/image/3f2844ea-3dc9-4e5c-c45f-e0fb948355c5.jpg" width="16" />
                                                            PUBLIC - Off due Public/Bank Holiday
                                                        </>
                                                    ) : dayData.Vacation ? (
                                                        <>
                                                            <img alt="Red alert icon" className="mr-1" height="16" src="https://storage.googleapis.com/a1aa/image/3f2844ea-3dc9-4e5c-c45f-e0fb948355c5.jpg" width="16" />
                                                            VACA - Vacation
                                                        </>
                                                    ) : dayData.shiftStart && dayData.shiftStop ? (
                                                        <>
                                                            {dayData.shiftStart} {dayData.shiftStop} SHIFT - Shift (container) (8:30)
                                                        </>
                                                    ) : (
                                                        <>No specific information</>
                                                    )}
                                                </div>
                                                <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                                    10:00am BREAK1 - Break 1 / f
                                                </div>
                                                <div className="flex justify-end text-xs px-1">
                                                    <div className='flex justify-center border-black border px-1'>
                                                        <RiArrowDownSFill className='w-3 h-3' />
                                                        <BsThreeDots className='w-3 h-3' />
                                                    </div>
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>



                    {/* <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        25
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        26
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        27
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        28
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        29
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        30
                                    </div>
                                </td> */}

                    {/* </tr> */}

                    {/* <!-- Week 2 --> */}
                    {/* <tr>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        31
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        April, 1
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        2
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        3
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        4
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        5
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        6
                                    </div>
                                </td>
                            </tr> */}

                    {/* <!-- Week 3 --> */}
                    {/* <tr>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        7
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        8
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        9
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        10
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        11
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        12
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        13
                                    </div>
                                </td>
                            </tr> */}

                    {/* <!-- Week 4 --> */}
                    {/* <tr>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        14
                                    </div>
                                    <div className="bg-red-600 text-[11px] font-normal  border-[1px] border-blackleading-tight px-1 py-[.6vh] truncate text-white flex items-center gap-1">
                                        <i className="far fa-file-alt"></i> VACA - Vacation
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal leading-tight px-1 py-[.6vh]  border-[1px] border-blacktruncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black] truncate text-white">
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        15
                                    </div>
                                    <div className="bg-red-600 text-[11px] font-normal  border-[1px] border-blackleading-tight px-1 py-[.6vh] truncate text-white flex items-center gap-1">
                                        <i className="far fa-file-alt"></i> VACA - Vacation
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal leading-tight px-1 py-[.6vh]  border-[1px] border-blacktruncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black] truncate text-white">
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        16
                                    </div>
                                    <div className="bg-red-600 text-[11px] font-normal  border-[1px] border-blackleading-tight px-1 py-[.6vh] truncate text-white flex items-center gap-1">
                                        <i className="far fa-file-alt"></i> VACA - Vacation
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal leading-tight px-1 py-[.6vh]  border-[1px] border-blacktruncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black] truncate text-white">
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        17
                                    </div>
                                    <div className="bg-red-600 text-[11px] font-normal  border-[1px] border-blackleading-tight px-1 py-[.6vh] truncate text-white flex items-center gap-1">
                                        <i className="far fa-file-alt"></i> VACA - Vacation
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal leading-tight px-1 py-[.6vh]  border-[1px] border-blacktruncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black] truncate text-white">
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        18
                                    </div>
                                    <div className="bg-red-600 text-[11px] font-normal  border-[1px] border-blackleading-tight px-1 py-[.6vh] truncate text-white flex items-center gap-1">
                                        <i className="far fa-file-alt"></i> PUBLIC - Off due Public/Bank
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal leading-tight px-1 py-[.6vh]  border-[1px] border-blacktruncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black] truncate text-white">
                                        9:30am SHIFT - Shift (contai
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        19
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        20
                                    </div>
                                </td>
                            </tr> */}

                    {/* <!-- Week 5 --> */}
                    {/* <tr>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        21
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-red-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] t border-[1px] border-blackruncate text-white">
                                        PUBLIC - Off due Public/Bank
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black] truncate text-white">
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        22
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        23
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        24
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        25
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        26
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        27
                                    </div>
                                </td>
                            </tr> */}

                    {/* <!-- Week 6 --> */}
                    {/* <tr>
                                <td className="border border-blue-800 px-1 pt-1 space-y-0.5 align-top">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        28
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        29
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        30
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        May, 1
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        2
                                    </div>
                                    <div className="bg-cyan-400 text-[11px] font-normal border-[1px] border-black leading-tight px-1 py-[.6vh] truncate">
                                        TMDE.LEUSHI.DHLXXV_- EMI
                                    </div>
                                    <div className="bg-green-700 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-white"
                                        onContextMenu={handleRightClick}>
                                        8:00am SHIFT - Shift (contai
                                    </div>
                                    <div className="bg-lime-600 text-[11px] font-normal leading-tight px-1 py-[.6vh] border-[1px] border-black truncate text-black">
                                        10:00am BREAK1 - Break 1 / f
                                    </div>
                                    <div className="flex justify-end text-xs px-1">
                                        <div className='flex justify-center border-black border px-1'>
                                            <RiArrowDownSFill className='w-3 h-3' />
                                            <BsThreeDots className='w-3 h-3' />
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        3
                                    </div>
                                </td>
                                <td className="border border-blue-800 px-1 text-[12px] font-normal">
                                    <div className="text-[11px] font-normal leading-tight px-1 truncate">
                                        4
                                    </div>
                                </td>
                            </tr> */}

                </div>
            </div>
        </>
    )
}
