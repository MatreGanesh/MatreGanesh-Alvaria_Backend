import React, { useState } from 'react'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FiMinusSquare } from "react-icons/fi";
import { FaCheck } from 'react-icons/fa';
import UserRightClickMenu from './PopUp/UserRightClickMenu';
import User_General_Access from './PopUp/User_General_Access';

const check = <FaCheck />

const userData = [
    {
        "Employee": "Employee",
        "Users": [
            {
                "User Name": "DEPEI_ZHANG",
                "Alternate User Name": "",
                "Active": check,
                "Logged In": "",
                "First Day of the Week": "Saturday",
                "First Name": "De Pei",
                "Last Name": "Zhang",
                "Time Zone": "(UTC+0...",
                "Secondary Login ID": "…",
                "ID": "",
                "Active (Icon)": check,
                "Code 1": "CCC...",
                "Description 1": "CCC ESG T...",
                "Code 2": "CC...",
                "Description 2": "For age..."
            },
            {
                "User Name": "DEPREM1",
                "Alternate User Name": "",
                "Active": check,
                "Logged In": "",
                "First Day of the Week": "Saturday",
                "First Name": "Michel",
                "Last Name": "Deprez",
                "Time Zone": "(UTC+1...",
                "Secondary Login ID": "…",
                "ID": "",
                "Active (Icon)": check,
                "Code 1": "TS",
                "Description 1": "All Tech Su...",
                "Code 2": "HE...",
                "Description 2": "Generic"
            },
            {
                "User Name": "DIPANJANA...",
                "Alternate User Name": "",
                "Active": check,
                "Logged In": "",
                "First Day of the Week": "Saturday",
                "First Name": "Dipanjana",
                "Last Name": "Kundu",
                "Time Zone": "(UTC+1...",
                "Secondary Login ID": "…",
                "ID": "",
                "Active (Icon)": check,
                "Code 1": "SHR...",
                "Description 1": "Owned by ...",
                "Code 2": "AN...",
                "Description 2": "ANZ SA ..."
            },
            {
                "User Name": "DUPONS",
                "Alternate User Name": "",
                "Active": check,
                "Logged In": "",
                "First Day of the Week": "Saturday",
                "First Name": "Sylvain",
                "Last Name": "Dupont",
                "Time Zone": "(UTC+0...",
                "Secondary Login ID": "…",
                "ID": "",
                "Active (Icon)": check,
                "Code 1": "TW...",
                "Description 1": "Global Pow...",
                "Code 2": "T...",
                "Description 2": "Global P..."
            }
        ]
    },
    {
        "Employee": "Regular_User",
        "Users": [
            {
                "User Name": "DEPEI_ZHANG",
                "Alternate User Name": "",
                "Active": check,
                "Logged In": "",
                "First Day of the Week": "Saturday",
                "First Name": "De Pei",
                "Last Name": "Zhang",
                "Time Zone": "(UTC+0...",
                "Secondary Login ID": "…",
                "ID": "",
                "Active (Icon)": check,
                "Code 1": "CCC...",
                "Description 1": "CCC ESG T...",
                "Code 2": "CC...",
                "Description 2": "For age..."
            },
        ]
    },
]

export default function Users() {

    const [openRows, setOpenRows] = useState({});

    const handleToggle = (index) => {
        setOpenRows((prev) => ({
            ...prev,
            [index]: !prev[index] // toggle only that index
        }));
    };

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
                                <button className="bg-gray-200 border-2 border-gray-300  rounded-sm px-6 py-1 focus:border-2 focus:border-blue-500">
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
                                <tbody className='text-sm '>
                                    {userData.map((dataObj, i) => (
                                        <React.Fragment key={i}>

                                            {/* First, display the Forecasting_Code */}
                                            <tr className='border-b-2 border-blue-500'>
                                                <td colSpan={15} className="border border-gray-300 p-2" onClick={() => handleToggle(i)}>
                                                    <div className='flex items-center space-x-4 text-blue-500 font-bold pt-4'>
                                                        <div className='flex items-center text-blue-500 font-bold'>
                                                            {
                                                                openRows[i] ? <FiMinusSquare className='w-4 h-4' /> : <FaRegSquarePlus className='w-4 h-4' />
                                                            }
                                                        </div>
                                                        <div className='flex items-center space-x-2 text-blue-500 font-bold'>
                                                            User
                                                            <MdOutlineKeyboardDoubleArrowRight className='w-4 h-4' />
                                                            Type : {dataObj.Employee} ({dataObj.Users.length})
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* Then map through the Users array */}
                                            {openRows[i] && dataObj.Users.map((user, j) => (
                                                <tr key={j} className={`text-left  ${j % 2 == 0 ? "bg-yellow-100" : ""} hover:bg-gray-200 `}>
                                                    {Object.entries(user).map(([key, value], k) => (
                                                        <td key={k} className={`${value === check ? 'text-green-500' : ''} border border-gray-300 px-2 py-1`}>
                                                            {value}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}

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
            </div >

            {/* <UserRightClickMenu /> */}
            <User_General_Access />
        </>
    )
}
