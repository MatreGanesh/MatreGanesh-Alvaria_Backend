import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRectangleXmark } from "react-icons/fa6";

export default function SecurityProfile() {
    return (
        <>
            <div className="bg-gray-200">
                <div className="max-w-full h-[90vh] flex flex-col">
                    <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                        Security Profile Definitions
                    </div>
                    <div className="overflow-x-auto flex-grow">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead className="text-sm">
                                <tr className="bg-white text-gray-700 font-semibold">
                                    <th className="border border-gray-300 px-1 py-1 text-left">
                                        Code
                                    </th>
                                    <th className="border border-gray-300 px-1 py-1 text-left">
                                        Description
                                    </th>
                                    <th className="border border-gray-300 px-1 py-1 text-left">
                                        All Access
                                    </th>
                                    <th className="border border-gray-300 px-1 py-1 text-left">
                                        Updated By
                                    </th>
                                    <th className="border border-gray-300 px-1 py-1 text-left">
                                        Updated On
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-xs">
                                <tr className="bg-gray-100 font-semibold">
                                    <td className="border border-gray-300 px-1 py-1">
                                        TWAL.GEMMRD.DGQXXM_AGT
                                    </td>
                                    <td className="border border-gray-300 px-1 py-1">
                                        Global Midrange_Agent
                                    </td>
                                    <td className="border border-gray-300 px-1 py-1"></td>
                                    <td className="border border-gray-300 px-1 py-1">
                                        ABDUL_LATIF_ANSARI
                                    </td>
                                    <td className="border border-gray-300 px-1 py-1">
                                        3/14/2025 10:18:22 AM
                                    </td>
                                </tr>
                                <tr className="bg-yellow-100 hover:bg-yellow-200 font-semibold">
                                    <td className="border border-gray-300 px-1 py-1">
                                        TWAL.GEMMRD.DGQXXM_MGR
                                    </td>
                                    <td className="border border-gray-300 px-1 py-1">
                                        Global Midrange_Manager
                                    </td>
                                    <td className="border border-gray-300 px-1 py-1"></td>
                                    <td className="border border-gray-300 px-1 py-1">
                                        ABDUL_LATIF_ANSARI
                                    </td>
                                    <td className="border border-gray-300 px-1 py-1">
                                        3/14/2025 10:18:51 AM
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='flex items-center justify-between py-1 bg-gray-200'>
                        <div className=" text-gray-600 flex items-center gap-2">
                            <FaRectangleXmark className='text-red-500' />
                            <FaRegCheckSquare className='text-green-500' />
                            <p className='text-xs text-gray-700 font-semibold'>(AutoRun Description contains TMDE.IEUSTP.DCWDEM_)</p>
                        </div>
                        <div className="flex justify-end ">
                            <button className="bg-gray-200 text-gray-600 px-3 py-2 border border-gray-400 rounded-sm
                                                                    font-bold text-sm">Customize...</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between py-1 bg-blue-500'>
                        <div className=" text-gray-600 px-2 flex items-center gap-2">
                            <p className='text-sm text-white font-semibold'>
                                0 of 2 items Selected
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


