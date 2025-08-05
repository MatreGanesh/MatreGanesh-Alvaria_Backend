import React from 'react'

export default function Users() {
    return (
        <>
            <div className="">
                <div className="max-w-full mx-auto h-[90vh] flex flex-col overflow-auto">
                    <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                        <h1 className="font-bold">Users</h1>
                    </div>
                    <div className="rounded-b shadow-md flex-grow flex flex-col h-screen">
                        <div className="bg-gradient-to-tr to-white from-blue-200 px-1">
                            <h2 className="text-sm px-3 border-b-2 border-gray-400 shadow-md shadow-white py-2">
                                Specify the user you want to retrieve.
                            </h2>
                            <div className="flex justify-between items-center w-full px-2 border-b-2 border-gray-400 shadow-md shadow-white py-2">
                                <div className='flex items-center gap-3'>
                                    <div className="flex items-center gap-[2em] space-x-2 ">
                                        <label htmlFor="username" className="text-sm font-medium">
                                            User name:
                                        </label>
                                        <input
                                            type="text"
                                            id="username"
                                            className="border min-w-[400px] border-gray-300 rounded-sm px-2 py-1 "
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <div className="flex items-center space-x-1">
                                            <input
                                                type="checkbox"
                                                id="all"
                                                className="border-gray-300 "
                                            />
                                            <label htmlFor="all" className="text-sm first-letter:underline">
                                                All
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 border-b-2 border-gray-400 shadow-md shadow-white py-2'>
                                <button className="bg-gray-200 border border-gray-300  rounded-md px-6 py-1">
                                    Retrieve
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto bg-gray-50 flex-grow">
                            <table className="min-w-full overflow-auto">
                                <thead className="md:text-xs text-xs">
                                    <tr className=' text-center'>
                                        <th colSpan={9} className="border-x-2 border-gray-300 p-2">
                                            User
                                        </th>
                                        <th colSpan={2} className="border-x-2 border-gray-300 p-2">
                                            Employee
                                        </th>
                                        <th colSpan={2} className="border-x-2 border-gray-300 p-2">
                                            Employee Filter Profile
                                        </th>
                                        <th colSpan={2} className="border-x-2 border-gray-300 p-2">
                                            Security Profile
                                        </th>
                                    </tr>
                                    <tr className='text-left'>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            User Name
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            Alternate User Name
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            Active
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            Logged In
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            First Day of the Week
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            First Name
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            Last Name
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            Time Zone
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            Secondary Login ID
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            ID
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            Active
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            Code
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            Description
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            Code
                                        </th>
                                        <th className="border-x-2 border-gray-300 p-2">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='text-sm'>
                                    <tr className='border-t-2'>
                                        <td
                                            colSpan="15"
                                            className=" p-4 text-center text-gray-500"
                                        >
                                            <p className='font-semibold text-gray-500'>
                                                No data to display
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex items-center justify-between py-1 bg-blue-500'>
                        <div className=" text-gray-600 px-2 flex items-center gap-2">
                            <p className='text-sm text-white font-semibold'>
                                0 of 2 Items Selected
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
