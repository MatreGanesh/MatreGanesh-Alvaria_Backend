import React from 'react'

export default function EmployeeDataCenter() {
    return (
        <div className="bg-gray-100">
            <div className="w-full h-[90vh] overflow-auto mx-auto flex flex-col">
                <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                    <h1 className="font-bold">Employee Datacenter</h1>
                </div>
                <div className='bg-gradient-to-t text-sm to-indigo-50 from-indigo-100 flex-grow'>
                    <div className='px-2 border-b-2 border-gray-400 shadow-md shadow-white py-4'>
                        <p className=' px-2  font-semibold'>Enter the reference date and click Open to open the Employee Datacenter window.</p>
                    </div>
                    <div className='border-b-2 border-gray-400 shadow-md shadow-white p-5 space-y-3'>
                        <div className='flex items-center gap-5'>
                            <label className='font-bold'>Date: </label>
                            <div className='ml-[2.5em] flex items-center'>
                                <input
                                    type="text"
                                    value={"3/20/25"}
                                    className="w-full max-w-[150px] px-2 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <div className="border-2 border-blue-400 px-[4px] cursor-pointer">
                                    <p>Thu</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='p-3'>
                        <button className='border-2 hover:border-blue-500 border-gray-400 px-7 py-1 first-letter:underline font-semibold bg-gray-300 '>Open</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
