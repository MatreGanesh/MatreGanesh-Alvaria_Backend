import React, { useEffect, useState } from 'react'
import { BsTriangle } from "react-icons/bs";
import { LiaShareAltSquareSolid } from "react-icons/lia";
import { FiPlusSquare } from "react-icons/fi";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRectangleXmark, FaRegSquareMinus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import HolidayFactorsGeneralHoliday from './PopUp/HolidayFactorsGeneralHoliday';


export default function HolidayFactors() {

    const [holidayFactors, setHolidayFactors] = useState([])
    const [toggle, setToggle] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);


    //Fetch Group Name and Group Details
    const fetchData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/forecasting/get-holiday-factors`);


            // Check if response is OK (status code 200–299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            // console.log("setHolidayFactors :", result.data)

            // Check if 'data' key exists and is an array
            if (!result || !Array.isArray(result.data)) {
                throw new Error('Invalid data format received from server.');
            }

            setHolidayFactors(result.data);
        } catch (err) {
            console.error('Error fetching forecasting data:', err);
            alert(`Failed to fetch data: ${err.message}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])


    //handel toogle by Group Code
    const handelToggle = (tab) => {
        setToggle((prevTab) => (prevTab === tab ? null : tab))
    }

    const handelPopUpShow = (forecastGroup_Code, ForecastGroup_Description) => {
        const combineData = {
            forecastGroup_Code: forecastGroup_Code,
            ForecastGroup_Description: ForecastGroup_Description
        }
        setSelectedGroup(combineData)
        setShowPopUp(true)
    }

    return (
        <>
            <div className="w-full h-[90vh] bg-gray-100 overflow-auto mx-auto flex flex-col">
                <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                    <h1 className="font-bold">Holiday Factors</h1>
                </div>
                <div className='flex-grow bg-white flex flex-col overflow-auto'>
                    <div className="flex items-center bg-gray-100">
                        <div className="flex items-center justify-between p-1 m-2 w-3/6 md:w-1/6 text-sm font-semibold bg-white">
                            Forecast Group Code
                            <span className="flex items-center gap-1">
                                <BsTriangle className="text-gray-500" />
                                <LiaShareAltSquareSolid className="-rotate-90 text-blue-500 w-5 h-5" />
                            </span>
                        </div>
                    </div>
                    <div className="overflow-auto flex-grow">
                        <table className="min-w-full bg-white">
                            <thead className='top-0 sticky'>
                                <tr className="bg-white text-gray-700 text-center">
                                    <th className="border-r font-semibold border-gray-300 px-1 py-1">
                                        Forecast Group
                                    </th>
                                    <th colSpan={5} className="border-r font-semibold border-gray-300 px-1 py-1">
                                        Holiday Factor
                                    </th>
                                </tr>

                                <tr className="bg-white text-gray-700 ">
                                    <th className="border-r border-x font-semibold border-gray-300 px-1 py-1 text-left">
                                        Description
                                    </th>
                                    <th className="border-r border-x font-semibold border-gray-300 px-1 py-1 text-left">
                                        Description
                                    </th>
                                    <th className="border-r border-x font-semibold border-gray-300 px-1 py-1 text-left">
                                        Factor
                                    </th>
                                    <th className="border-r border-x font-semibold border-gray-300 px-1 py-1 text-left">
                                        Legal
                                    </th>
                                    <th className="border-r border-x font-semibold border-gray-300 px-1 py-1 text-left">
                                        Date
                                    </th>
                                    <th className="border-r border-x font-semibold border-gray-300 px-1 py-1 text-left">
                                        Memo
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    holidayFactors.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="text-center text-gray-500 font-semibold py-8">
                                                Data is not available
                                            </td>
                                        </tr>

                                    ) : (
                                        holidayFactors.map((item, index) => (
                                            <React.Fragment key={item.forecastGroup_Code || index}>
                                                <tr
                                                    className={`${toggle === item.forecastGroup_Code ? 'bg-gray-200 text-black font-semibold' : 'font-bold text-blue-500'}`}
                                                >
                                                    <td colSpan={6} className="px-2 pt-5 text-sm border-b-2 border-blue-500">
                                                        <span className="flex items-center gap-1 cursor-pointer"
                                                            onClick={() => handelToggle(item.forecastGroup_Code)}>
                                                            {toggle === item.forecastGroup_Code ? (<FiPlusSquare />) : (<FaRegSquareMinus />)}
                                                            Forecast Group Code : {item.forecastGroup_Code}_({item.groups.length})
                                                        </span>
                                                    </td>
                                                </tr>

                                                {
                                                    toggle === item.forecastGroup_Code && [...item.groups].reverse().map((group, index) => (
                                                        <tr key={index}
                                                            onDoubleClick={() => handelPopUpShow(item.forecastGroup_Code, group.ForecastGroup_Description)}
                                                            className={`${index % 2 === 0 ? 'bg-yellow-100' : ''} font-semibold cursor-pointer`}>
                                                            <td className="text-sm border border-gray-400 px-1 py-1">{group.ForecastGroup_Description}</td>
                                                            <td className="text-sm border border-gray-400 px-1 py-1">{group.Description}</td>
                                                            <td className="text-sm border border-gray-400 px-1 py-1">{group.Factor}</td>
                                                            <td className="text-sm border border-gray-400 px-1 py-1 text-green-500">
                                                                {group.Legal === 'Yes' ? <FaCheck /> : ''}
                                                            </td>
                                                            <td className="text-sm border border-gray-400 px-1 py-1">{new Date(group.Date).toLocaleDateString()}</td>
                                                            <td className="text-sm border border-gray-400 px-1 py-1">{group.Memo}</td>
                                                        </tr>
                                                    ))
                                                }

                                            </React.Fragment>
                                        )))

                                }
                            </tbody>
                        </table>
                    </div>
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
                            0 of 1 items Selected
                        </p>
                    </div>
                </div>

                {showPopUp && selectedGroup &&
                    <HolidayFactorsGeneralHoliday setShowPopUp={setShowPopUp} selectedGroup={selectedGroup} refreshHolidayFactors={fetchData} />
                }

            </div>
        </>
    )
}
