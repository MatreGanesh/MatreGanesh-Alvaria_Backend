import React from 'react'
import { BsThreeDots } from "react-icons/bs";

export default function EmployeeInformation() {
    return (
        <>
            <div className="bg-gray-100">
                <div className="w-full h-[90vh] overflow-auto mx-auto flex flex-col">
                    <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                        <h1 className=" font-bold">Employee Information</h1>
                    </div>
                    <div className='bg-gradient-to-t to-indigo-50 from-indigo-100 flex-grow'>
                        <div className='px-2 border-b-2 border-gray-400 shadow-md shadow-white py-4'>
                            <p className=' px-2  font-semibold'>Specify the employee whose information you want to retrieve.</p>
                        </div>
                        <div className='border-b-2 text-sm border-gray-400 shadow-md shadow-white p-5 space-y-3'>
                            <div className='flex items-center gap-5'>
                                <label className='font-bold'>
                                    <input type='radio' /> Employee</label>
                                <div className='relative ml-[2.5em]'>
                                    <input
                                        type="text" aria-label="Time zone input"
                                        className="w-full min-w-[400px]  focus:bg-yellow-300  px-2 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 border-2 border-gray-400 px-[5px] py-[4px] cursor-pointer"
                                        aria-label="More options">
                                        <BsThreeDots />
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-3'>
                                <label className='font-bold'><input type='radio' /> ACD login ID</label>

                                <div className='space-y-2 ml-[4em]'>
                                    <div className='flex items-center  gap-5'>
                                        <p className='font-bold text-gray-400'> ACD: </p>
                                        <div className='relative w-auto ml-[2em]'>
                                            <input
                                                type="text" aria-label="Time zone input"
                                                className="w-full min-w-[400px]  focus:bg-yellow-300  px-2 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            />
                                            <div className="absolute top-1/2 bg-gray-200 right-0 transform -translate-y-1/2 border-2 border-gray-400 px-[5px] py-[4px] cursor-pointer"
                                                aria-label="More options">
                                                <BsThreeDots />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center  gap-5'>
                                        <p className='font-bold text-gray-400'> Login ID: </p>
                                        <div className='w-auto  ml-[.1em]'>
                                            <input
                                                type="text" aria-label="Time zone input"
                                                className="w-full min-w-[400px]  focus:bg-yellow-300  px-2 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <button className='border-2 border-gray-400 px-7 py-1 first-letter:underline font-semibold bg-gray-300 '>Open</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
