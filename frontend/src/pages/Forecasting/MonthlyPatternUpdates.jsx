import React, { useEffect, useRef, useState } from 'react'
import { BsTriangle } from "react-icons/bs";
import { LiaShareAltSquareSolid } from "react-icons/lia";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRectangleXmark } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";
import { FiPlusSquare } from 'react-icons/fi';
import MonthlyPatternUpdatesIDP from './PopUp/MonthlyPatternUpdatesIDP';
import { useNavigate } from 'react-router-dom';


export default function MonthlyPatternUpdates() {

    const [monthlyPattern, setMonthlyPattern] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [idpVisible, setIdpVisible] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const [selectedRowData, setSelectedRowData] = useState(null); // full row object
    const popupRef = useRef(null); // ⬅️ Ref for IDP popup
    const tableRef = useRef(null); // For detecting outside of table
    const navigate = useNavigate();

    //Fetch Group Name and Group Details
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/forecasting/get-monthly-pattern-updates`);


                // Check if response is OK (status code 200–299)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                // console.log("MonthlyPatternUpdates :", result.data)

                // Check if 'data' key exists and is an array
                if (!result || !Array.isArray(result.data)) {
                    throw new Error('Invalid data format received from server.');
                }

                setMonthlyPattern(result.data);
            } catch (err) {
                console.error('Error fetching forecasting data:', err);
                alert(`Failed to fetch data: ${err.message}`);
            }
        };

        fetchData();
    }, [])

    //handel toogle by Group Code
    const handelToggle = (tab) => {
        setToggle((prevTab) => (prevTab === tab ? null : tab))
    }

    const handleDoubleClick = (group, groupCode, scenarioId) => {

        // ✅ Set visibility flag to false before navigating
        localStorage.setItem('isMontlyPatternVisible', 'false');

        setSelectedRowId(group._id);
        navigate('/forecasting/Monthly-Pattern-Updates/General', {
            state: {
                userId: group.UpdatedBy,
                groupName: groupCode,
                scenarioId: scenarioId,
                ForecastGroup_Description: group.ForecastGroup_Description,
                month: group.Month
            },
        });
    };

    const handleRowClick = (group, groupCode, scenarioId) => {
        setSelectedRowId(group._id);
        setSelectedRowData({
            userId: group.UpdatedBy,
            groupName: groupCode,
            scenarioId: scenarioId,
            ForecastGroup_Description: group.ForecastGroup_Description,
            month: group.Month
        });
    };


    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedOutsidePopup = popupRef.current && !popupRef.current.contains(event.target);
            const clickedOutsideTable = tableRef.current && !tableRef.current.contains(event.target);

            // Close the popup if clicked outside it
            if (idpVisible && clickedOutsidePopup) {
                setIdpVisible(false);
            }

            // Deselect row if clicked outside the table
            if (clickedOutsideTable) {
                setSelectedRowId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [idpVisible]);

    return (
        <>
            <div className="w-full bg-blue-50 overflow-auto h-[90vh] flex flex-col mx-auto">
                <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                    <h1 className="font-bold">Monthly Pattern Updates</h1>
                </div>
                <div className="bg-gray-200 shadow-md rounded-b-md flex-grow flex flex-col">
                    <div className="flex items-center ">
                        <div className="flex items-center justify-between p-1 m-2 w-full lg:w-1/6 md:w-2/6 text-sm font-semibold bg-white">
                            Forecast Group &raquo; Code
                            <span className="flex items-center gap-1">
                                <BsTriangle className="text-gray-500" />
                                <LiaShareAltSquareSolid className="-rotate-90 text-blue-500 w-5 h-5" />
                            </span>
                        </div>
                    </div>
                    <div className="overflow-x-auto bg-white flex-grow" >
                        <table className="w-full table-auto" ref={tableRef}>
                            <thead className="bg-white">
                                <tr className='text-center font-bold'>
                                    <th className="px-6 py-1 border-r-2 text-sm text-gray-500 tracking-wider">
                                        Forecast Group
                                    </th>
                                    <th
                                        className="px-6 py-1 border-r-2 text-sm text-gray-500 tracking-wider"
                                        colSpan={2}
                                    >
                                        Monthly Update
                                    </th>
                                    <th
                                        className="px-6 py-1 border-r-2 text-sm text-gray-500 tracking-wider"
                                        colSpan={2}
                                    >
                                        Updated
                                    </th>
                                </tr>
                                <tr className='font-semibold text-sm'>
                                    <th className="px-2 py-2 border-r-2 border-gray-200 text-left text-gray-500 tracking-wider">
                                        Description
                                    </th>
                                    <th className="px-2 py-2 border-r-2 border-gray-200 text-left text-gray-500 tracking-wider">
                                        Month
                                    </th>
                                    <th className="px-2 py-2 border-r-2 border-gray-200 text-right text-gray-500 tracking-wider">
                                        Year
                                    </th>
                                    <th className="px-2 py-2 border-r-2 border-gray-200 text-left text-gray-500 tracking-wider">
                                        Updated By
                                    </th>
                                    <th className="px-2 py-2 border-r-2 border-gray-200 text-left text-gray-500 tracking-wider">
                                        Updated On
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">

                                {
                                    monthlyPattern.length === 0 ? (
                                        <tr>
                                            <td colSpan={10} className="text-center text-gray-500 font-semibold py-8">
                                                Data is not available
                                            </td>
                                        </tr>
                                    ) : (
                                        monthlyPattern.map((item, index) => (
                                            <React.Fragment key={item._id || index}>
                                                {/* Group Header Row */}
                                                <tr
                                                    className={`${toggle === item.forecastGroup_Code ? 'bg-gray-100 text-black font-semibold' : 'font-bold text-blue-500'}`}
                                                >
                                                    <td colSpan={5} className="px-2 pt-5 text-sm border-2 border-gray-200">
                                                        <span className="flex items-center gap-1"
                                                            onClick={() => handelToggle(item.forecastGroup_Code)}>
                                                            {toggle === item.forecastGroup_Code ? (<FiPlusSquare />) : (<FaRegSquareMinus />)}
                                                            Forecast Group Code : {item.forecastGroup_Code}_({item.groups.length})
                                                        </span>
                                                    </td>
                                                </tr>

                                                {/* Group Detail Rows */}
                                                {toggle === item.forecastGroup_Code && [...item.groups].reverse().map((group, i) => {
                                                    const isSelected = selectedRowId === group._id;

                                                    return (
                                                        <tr
                                                            key={group._id || i}
                                                            className={`${isSelected ? 'bg-blue-500 text-white' : i % 2 === 0 ? 'bg-yellow-100' : 'bg-white'} text-sm font-bold cursor-pointer`}
                                                            onDoubleClick={() => handleDoubleClick(group, item.forecastGroup_Code, item._id)}
                                                            onClick={() => handleRowClick(group, item.forecastGroup_Code, item._id)}
                                                            onContextMenu={(e) => {
                                                                e.preventDefault();
                                                                if (selectedRowId === group._id) {
                                                                    setIdpVisible(true);
                                                                }
                                                            }}
                                                        >

                                                            <td className="px-2 py-1 whitespace-nowrap border border-gray-400">
                                                                {group.ForecastGroup_Description}
                                                            </td>
                                                            <td className="px-2 py-1 whitespace-nowrap border border-gray-400">
                                                                {group.Month}
                                                            </td>
                                                            <td className="px-2 py-1 whitespace-nowrap border border-gray-400 text-right">
                                                                {group.Year}
                                                            </td>
                                                            <td className="px-2 py-1 whitespace-nowrap border border-gray-400 uppercase">
                                                                {group.UpdatedBy}
                                                            </td>
                                                            <td className="px-2 py-1 whitespace-nowrap border border-gray-400">
                                                                {new Date(group.UpdatedOn).toLocaleString()}
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </React.Fragment>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex items-center justify-between py-1 bg-gray-200'>
                    <div className=" text-gray-600 flex items-center gap-2">
                        <FaRectangleXmark className='text-red-500' />
                        <FaRegCheckSquare className='text-green-500' />
                        <p className='text-xs text-gray-700 font-semibold'>
                            (Forecast Group &raquo; Code contains {toggle || 'None'})
                        </p>
                    </div>
                    <div className="flex justify-end ">
                        <button className="bg-gray-200 text-gray-600 px-3 py-2 border border-gray-400 rounded-sm
                                                                                           font-bold text-sm">Customize...</button>
                    </div>
                </div>
                <div className='flex items-center justify-between py-1 bg-blue-500'>
                    <div className=" text-gray-600 px-2 flex items-center gap-2">
                        <p className='text-sm text-white font-semibold'>
                            {selectedRowId ? '1 of 1 items Selected' : '0 of 1 items Selected'}
                        </p>
                    </div>
                </div>

                {idpVisible &&
                    <div ref={popupRef}>
                        <MonthlyPatternUpdatesIDP selectedRowData={selectedRowData} />
                    </div>
                }


            </div >
        </>
    )
}
