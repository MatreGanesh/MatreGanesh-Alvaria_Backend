import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { useStateContext } from '../../StateContext';

export default function TrackingEdit() {

    const { showTrackingEditSegment } = useStateContext();

    return (
        <div className="flex items-center justify-center max-h-[90vh]">
            <div
                className="min-w-[18vw] bg-[#fff] shadow-md shadow-black border border-blue-600 text-[13px] font-sans text-black select-none"
            >
                <ul className="">
                    <li className="relative group">
                        <button
                            className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                            type="button"
                        >
                            <span>View</span>
                            <span className="text-black text-xs font-bold"><IoMdArrowDropright /></span>
                        </button>
                    </li>
                    <li className="relative group">
                        <button
                            className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                            type="button"
                        >
                            <span>Go To</span>
                            <span className="text-black text-xs font-normal"><IoMdArrowDropright /></span>
                        </button>
                    </li>
                    <li className="relative group">
                        <button
                            className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                            type="button"
                        >
                            <span>Employees</span>
                            <span className="text-black text-xs font-normal"><IoMdArrowDropright /></span>
                        </button>
                    </li>
                    <li className="px-3 py-1.5">Settings...</li>
                    <li>
                        <hr className="border-t border-blue-600 m-0" />
                    </li>
                    <li className="px-3 py-1.5 flex justify-between items-center">
                        <span className="flex items-center gap-1">
                            Cut
                        </span>
                        <span className="text-xs font-normal">Ctrl+X</span>
                    </li>
                    <li className="px-3 py-1.5 flex justify-between items-center">
                        <span className="flex items-center gap-1">
                            Copy
                        </span>
                        <span className="text-xs font-normal">Ctrl+C</span>
                    </li>
                    <li className="px-3 py-1.5 flex justify-between items-center">
                        <span className="flex items-center gap-1">
                            Select All
                        </span>
                        <span className="text-xs font-normal">Ctrl+A</span>
                    </li>
                    <li>
                        <hr className="border-t border-blue-600 m-0" />
                    </li>
                    <li className="px-3 py-1.5 cursor-pointer"
                        onClick={() => showTrackingEditSegment(true)}>Edit...</li>
                    <li className="px-3 py-1.5 flex justify-between items-center">
                        Delete
                        <span className="text-xs font-normal">Ctrl+Del</span>
                    </li>
                    <li className="px-3 py-1.5 flex justify-between items-center">
                        Decrement Nominal Date
                        <span className="text-xs font-normal">Ctrl+D</span>
                    </li>
                    <li className="px-3 py-1.5 flex justify-between items-center">
                        Increment Nominal Date
                        <span className="text-xs font-normal">Ctrl+I</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
