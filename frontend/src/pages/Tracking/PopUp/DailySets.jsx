import React from 'react'
import { Link } from 'react-router-dom'
import { BsHexagonFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

const check = <FaCheck />;

const DisplaySets = [
    {
        "Code": "Forecast Volume",
        "Description": "Forecast vs Actual Volume",
        "Type": "Forecast-group",
        "Memo": "",
        "Default": ""
    },
    {
        "Code": "GLOMUL",
        "Description": "Global Multiskill FG Disp Set",
        "Type": "Forecast-group",
        "Memo": "",
        "Default": ""
    },
    {
        "Code": "GLOPAR",
        "Description": "Global Parent FG Display Set",
        "Type": "Forecast-group",
        "Memo": "",
        "Default": ""
    },
    {
        "Code": "MULTI",
        "Description": "Group routed to multi-skill SG",
        "Type": "Forecast-group",
        "Memo": "",
        "Default": ""
    },
    {
        "Code": "OUTBND",
        "Description": "Outbound forecast group",
        "Type": "Forecast-group",
        "Memo": "",
        "Default": ""
    },
    {
        "Code": "PARENT",
        "Description": "Group that allocates calls",
        "Type": "Forecast-group",
        "Memo": "",
        "Default": ""
    },
    {
        "Code": "SDS-GCCO-FG",
        "Description": "SDS GCCO Standard ForeGrp",
        "Type": "Forecast-group",
        "Memo": "",
        "Default": check
    },
    {
        "Code": "TestAxel",
        "Description": "For Multidimensional IDP view",
        "Type": "Forecast-group",
        "Memo": "",
        "Default": ""
    }
]


export default function DailySets({ setToggle }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/20 font-sans">
            <div className="bg-white font-sans select-none border border-gray-400">
                <div className="max-w-4xl mx-auto border border-gray-300 shadow-sm w-[900px] h-[480px] flex flex-col">
                    {/* <!-- Title bar --> */}
                    <div className="flex items-center justify-between bg-gray-100 border-b border-gray-300 px-3 h-9 select-text text-[13px] font-serif">
                        <div className="flex items-center space-x-1">
                            <div className='relative w-5 h-5 flex items-center justify-center'>
                                <BsHexagonFill className='w-5 h-5 text-orange-500' />
                                <span className='absolute text-white text-[6px] font-bold'>
                                    WP
                                </span>
                            </div>

                            <span className="font-normal">
                                Alvaria Workforce
                            </span>
                        </div>
                        <div className="flex space-x-8">
                            <button aria-label="Minimize" className="w-5 h-5 flex items-center justify-center text-gray-600 hover:bg-gray-200 text-[10px]">
                                <VscChromeMinimize className='w-4 h-4' />
                            </button>
                            <button aria-label="Maximize" className="w-5 h-5 flex items-center justify-center text-gray-600 hover:bg-gray-200 text-[10px]">
                                <RiCheckboxBlankLine className='w-4 h-4' />
                            </button>
                            <button aria-label="Close" className="w-5 h-5 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white text-[10px]">
                                <IoMdClose className='w-4 h-4' onClick={() => setToggle(false)} />
                            </button>
                        </div>
                    </div>

                    {/* <!-- Main content area --> */}
                    <div className="flex-grow p-2 flex flex-col shadow-[inset_2px_2px_2px_rgb(160,160,160)] ">
                        <div className='flex-grow flex flex-col shadow-sm shadow-current'>
                            {/* <!-- Header bar --> */}
                            <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-1 py-1 font-bold font-sans">
                                <span className='text-xl'>
                                    Display Sets
                                </span>
                            </div>
                            {/* <!-- Table container --> */}
                            <div className="overflow-auto scrollbar-thin border border-t-0 border-gray-300 flex-grow">
                                <table className="w-full table-auto border-collapse text-[13px] font-serif">
                                    <thead>
                                        <tr className="bg-gray-50 text-blue-900 border-b border-blue-300">
                                            <th className="text-left px-2 py-1 border-r border-blue-300 w-[140px]">
                                                Code
                                            </th>
                                            <th className="text-left px-2 py-1 border-r border-blue-300">
                                                Description
                                            </th>
                                            <th className="text-left px-2 py-1 border-r border-blue-300 w-[140px]">
                                                Type
                                            </th>
                                            <th className="text-left px-2 py-1 border-r border-blue-300 w-[80px]">
                                                Memo
                                            </th>
                                            <th className="text-left px-2 py-1 w-[60px]">
                                                Default
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {DisplaySets.map((sets, index) => (
                                            <tr className={`${index % 2 == 0 ? 'bg-yellow-100/50' : ''} hover:bg-blue-500 hover:text-white`} key={index}>
                                                <td className="px-2 py-0.5 border border-gray-200">
                                                    {sets.Code}
                                                </td>
                                                <td className="px-2 py-0.5 border border-gray-200">
                                                    {sets.Description}
                                                </td>
                                                <td className="px-2 py-0.5 border border-gray-200">
                                                    {sets.Type}
                                                </td>
                                                <td className="px-2 py-0.5 border border-gray-200">
                                                    {sets.Memo}
                                                </td>
                                                <td className={`${check ? 'text-green-400 text-lg' : ''} px-2 py-0.5 border border-gray-200`}>
                                                    {sets.Default}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='bg-blue-400 text-white'>
                                8 Item(s)
                            </div>
                        </div>
                    </div>
                    {/* <!-- Footer bar --> */}
                    <div className="flex items-center justify-end text-xs p-2  select-text font-serif shadow-[0px_-2px_4px_rgba(0,0,0,0.2)]">

                        <div className="flex space-x-2">
                            <Link to={'/tracking/Multidimensional_Intra_Day_Performance/Daily_Sets/Performence'}>
                                <button className="bg-gray-200 font-semibold px-6 py-2 rounded-sm border-2 border-gray-300 hover:border-blue-500 text-[13px] w-[100px]">
                                    OK
                                </button>
                            </Link>
                            <button className="bg-gray-200 font-semibold px-6 py-2 rounded-sm border-2 border-gray-300 hover:border-blue-500 text-[13px] w-[100px]"
                                onClick={() => setToggle(false)}>
                                Cancel
                            </button>
                            <button className="bg-gray-200 font-semibold px-6 py-2 rounded-sm border-2 border-gray-300 hover:border-blue-500 text-[13px] w-[100px]">
                                Help
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
