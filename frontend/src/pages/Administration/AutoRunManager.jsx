import React from 'react'
import { IoIosSave } from "react-icons/io";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRectangleXmark } from "react-icons/fa6";


export default function AutoRunManager() {
    return (
        <>
            <div className="bg-gray-200 max-w-[80vw] min-w-[90vh]  overflow-auto">
                <div className="max-h-[90vh] min-h-[90vh] flex flex-col">
                    <div className="bg-gradient-to-tr flex items-center justify-between md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                        <h1 className="font-bold">AutoRun Manager</h1>
                        <IoIosSave />
                    </div>
                    <div className="border overflow-auto bg-gray-100 h-screen flex flex-col">
                        <input
                            className="w-full focus:bg-white text-gray-400 px-2 py-1 bg-gray-200 border-x-2 border-gray-300"
                            placeholder="Drag a column header and drop it here to group by that column"
                            type="text"
                        />
                        <div className="overflow-x-auto flex-grow">
                            <table className="min-w-full divide-y divide-gray-200 border-collapse border border-gray-300">
                                <thead className="bg-gray-50">
                                    <tr className='text-center font-bold text-xs'>
                                        <th colSpan={9} className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">AutoRun</th>
                                        <th colSpan={5} className="px-2 py-1 border-x-2 text-gray-500 tracking-wider"></th>
                                        <th colSpan={3} className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">AutoRun Queue</th>
                                        <th colSpan={2} className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Regional Setting</th>
                                    </tr>
                                    <tr className='text-left font-bold text-xs'>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Description</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Next Run</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Active</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Frequency</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Interval</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Days</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">From</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">To</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">User Name</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Last Day Of Month</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Canceled</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Start Time</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Process</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Memo</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Code</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Description</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Status</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Code</th>
                                        <th className="px-2 py-1 border-x-2 text-gray-500 tracking-wider">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y text-xs  divide-gray-200">
                                    <tr className='hover:bg-gray-100'>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Create IDP.TMDE.IEUSTP.DCWDEM_</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">3/22/2023</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"><i className="fas fa-check text-green-500"></i></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Daily</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Sat</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">ABDU_LATIF_ANS...</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Cre...</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">QUEUE5</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Queue 5</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Act...</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                    </tr>
                                    <tr className='bg-yellow-100 hover:bg-gray-100'>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Daily NCO TMDE.IEUSTP.DCWDEM_V</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">3/22/2023</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"><i className="fas fa-check text-green-500"></i></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Daily</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Sun</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">ABDU_LATIF_ANS...</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Aut...</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">QUEUE7</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Queue 7</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Act...</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                    </tr>
                                    <tr className='hover:bg-gray-100'>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Daily NCO TMDE.IEUSTP.DCWDEM_X</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">3/22/2023</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"><i className="fas fa-check text-green-500"></i></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Daily</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Sun</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">ABDU_LATIF_ANS...</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Aut...</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">QUEUE7</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Queue 7</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Act...</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                    </tr>
                                    <tr className='bg-yellow-100 hover:bg-gray-100'>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">EXTRACT-TMDE.IEUSTP.DCWDEM_</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">3/23/2023</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"><i className="fas fa-check text-green-500"></i></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Daily</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Sun</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">M_SAJID_ALI</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Rep...</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">QUEUE5</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Queue 5</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900">Act...</td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                        <td className="px-2 py-2 whitespace-nowrap text-gray-900"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex items-center justify-between py-1 bg-gray-200'>
                        <div className="bg-gray-100 text-gray-600 flex items-center gap-2">
                            <FaRectangleXmark className='text-red-500' />
                            <FaRegCheckSquare className='text-green-500' />
                            <p className='text-xs text-gray-700 font-semibold'>(AutoRun Description contains TMDE.IEUSTP.DCWDEM_)</p>
                        </div>
                        <div className="flex justify-end ">
                            <button className="bg-gray-200 text-gray-600 px-3 py-2 border border-gray-400 rounded-md
                            font-bold text-sm">Customize...</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
