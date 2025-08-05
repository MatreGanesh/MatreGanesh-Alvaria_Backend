import React, { useEffect, useRef, useState } from "react";
import { BsTriangle } from "react-icons/bs";
import { LiaShareAltSquareSolid } from "react-icons/lia";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRectangleXmark, FaRegSquareMinus } from "react-icons/fa6";
import { FiPlusSquare } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import ForcastingScenarioIDP from "./PopUp/ForcastingScenarioIDP";
import { useNavigate } from "react-router-dom";


export default function ForcastingScenario() {

    const [forecastData, setForecastData] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [selectedRow, setSelectedRow] = useState({ groupName: null, index: null });
    const [idpVisible, setIdpVisible] = useState(false);
    const [topToggle, setTopToggle] = useState(false);
    const [rowUserId, setRowUserId] = useState(null)
    const [groupName, setGroupName] = useState(null)
    const [user_Id, setUser_Id] = useState(null)
    const navigate = useNavigate();

    const tableRef = useRef(null);
    const popupRef = useRef(null);
    const dropdownRef = useRef(null);


    const handelToggle = (tab) => {
        setToggle((prevTab) => (prevTab === tab ? null : tab))
    }

    const handleDoubleClick = (_id, groupName, index, Updated_By) => {
        setSelectedRow({ groupName, index });
        setIdpVisible(false);
        navigate('/forecasting-forcasting-scenario/Fiscal_Volumes', {
            state: {
                _id, groupName, index, Updated_By
            },
        }
        )
    };

    const handleRightClick = (e, _id, groupName, index, Updated_By) => {
        e.preventDefault();

        // Only open popup if the row is already selected
        if (selectedRow.groupName === groupName && selectedRow.index === index) {
            setIdpVisible(true);
            setUser_Id(_id);
            setGroupName(groupName);
            setRowUserId(Updated_By);
        }
    };



    // useEffect(() => {
    //     localStorage.setItem('showSaveClose', 'false');

    //     return () => {
    //         localStorage.removeItem('showSaveClose');
    //     };
    // }, []);

    useEffect(() => {

        // localStorage.setItem('Component', 'forcastingScenario');

        const handleClickOutside = (event) => {
            const outsideTable = tableRef.current && !tableRef.current.contains(event.target);
            const outsidePopup = popupRef.current && !popupRef.current.contains(event.target);

            if (idpVisible && outsidePopup && outsideTable) {
                setIdpVisible(false);
            }

            if (selectedRow !== null && outsideTable) {
                setSelectedRow({ groupName: null, index: null }); // Clear blue background on outside click
            }

            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setTopToggle(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [idpVisible, selectedRow]);


    //Fetch the Forcasting Group data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/forecasting/get-forecasting-scenarios-group`);


                // Check if response is OK (status code 200–299)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                // Check if 'data' key exists and is an array
                if (!result || !Array.isArray(result.data)) {
                    throw new Error('Invalid data format received from server.');
                }

                setForecastData(result.data);
            } catch (err) {
                console.error('Error fetching forecasting data:', err);
                alert(`Failed to fetch data: ${err.message}`);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('forecastingGroupName');
        localStorage.removeItem('selectedScenarioId');
    }, [])


    return (
        <>
            <div className="w-full h-[90vh] bg-gray-100 overflow-auto mx-auto flex flex-col">
                <div className="min-w-full min-h-[90vh] flex flex-col">
                    <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                        <h1 className="font-semibold">Forecasting Scenarios</h1>
                    </div>
                    <div className="bg-gray-100 shadow-md flex-grow flex flex-col">
                        <div className="flex items-center justify-between p-1 m-2 w-full md:w-2/6 lg:w-1/6 text-sm font-semibold bg-white" >
                            Forecast Group Code
                            <span className="flex items-center gap-1">
                                <BsTriangle className="text-gray-500" onClick={() => setTopToggle(!topToggle)} />
                                <LiaShareAltSquareSolid className="-rotate-90 text-blue-500 w-5 h-5" />
                            </span>
                            {topToggle &&
                                <div ref={dropdownRef} className="border absolute p-1 translate-x-[12vw] top-[16svh] border-gray-700 bg-white 
                                                shadow-md shadow-black  max-w-[200px] max-h-[500px] overflow-y-scroll">
                                    <div className="px-1 py-1 text-xs font-sans text-black space-y-2 font-semibold  ">
                                        <label className="flex items-center gap-2 space-x-1">
                                            <input type="checkbox" />  (All)
                                        </label>
                                        <label className="flex items-center gap-2 space-x-1">
                                            <input type="checkbox" checked /> (Custom…)
                                        </label>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="overflow-x-auto flex-grow">
                            <table ref={tableRef} className="min-w-full bg-white">

                                <thead className="bg-white border-b border-gray-200">
                                    <tr>
                                        <th className="px-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Forecast Group
                                        </th>
                                        <th
                                            className="px-2 text-center text-sm font-semibold border-x-2 border-gray-200"
                                            colSpan={7}
                                        >
                                            Scenario
                                        </th>
                                        <th
                                            className="px-2 text-center text-sm font-semibold border-x-2 border-gray-200"
                                            colSpan={2}
                                        >
                                            Updated
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Description
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Default
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Code
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Description
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Forecasting Basis
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Staffing Basis
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Multi-Channel Staffing Basis
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Fiscal Calendar
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Updated By
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Updated On
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {forecastData.length === 0 ? (
                                        <tr>
                                            <td colSpan={10} className="text-center text-gray-500 font-semibold py-8">
                                                Data is not available
                                            </td>
                                        </tr>
                                    ) : (forecastData.map((item) => (
                                        <React.Fragment key={item._id}>
                                            <tr className={`${toggle === item.name ? 'bg-blue-600 text-white' : ''} text-blue-600`}>
                                                <td
                                                    colSpan="11"
                                                    className="px-2 pt-5  text-sm border-2 border-gray-200 font-semibold"
                                                >
                                                    <span className="flex items-center gap-1"
                                                        onClick={() => handelToggle(item.name)}>
                                                        {toggle === item.name ?
                                                            (<FiPlusSquare />) : (<FaRegSquareMinus />)}
                                                        Forecast Group Code : {item.name}_({item.groups.length})
                                                    </span>
                                                </td>
                                            </tr>

                                            {
                                                toggle === item.name && item.groups.map((scenario, index) => {
                                                    const isSelected =
                                                        selectedRow.groupName === item.name && selectedRow.index === index;
                                                    return (
                                                        <tr key={scenario._id} className={`border-b border-gray-200 
                                                    ${isSelected ? 'bg-blue-500 text-white' : 'bg-yellow-100'}`}
                                                            onDoubleClick={() => handleDoubleClick(item._id, item.name, index, scenario.Updated_By,)}
                                                            onClick={() => setSelectedRow({ groupName: item.name, index })}
                                                            onContextMenu={(e) => handleRightClick(e, item._id, item.name, index, scenario.Updated_By)}
                                                        >
                                                            <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                                {scenario.ForecastGroup_Description}
                                                            </td>
                                                            <td className="px-2 py-1 text-sm border-2 border-gray-200 text-center">
                                                                {scenario.Default ? (
                                                                    <FaCheck className="text-green-500 w-4 h-4 mx-auto" />
                                                                ) : (
                                                                    ''
                                                                )}
                                                            </td>
                                                            <td className="px-2 py-1 text-sm border-2 border-gray-200">{scenario.Code}</td>
                                                            <td className="px-2 py-1 text-sm border-2 border-gray-200">{scenario.Scenario_Description}</td>
                                                            <td className="px-2 py-1 text-sm border-2 border-gray-200">{scenario.Forecasting_Basis}</td>
                                                            <td className="px-2 py-1 text-sm border-2 border-gray-200">{scenario.Staffing_Basis}</td>
                                                            <td className="px-2 py-1 text-sm border-2 border-gray-200">{scenario.Multi_Channel_Staffing_Basis}</td>
                                                            <td className="px-2 py-1 text-sm border-2 border-gray-200 uppercase">{scenario.Fiscal_Calendar}</td>
                                                            <td className="px-2 py-1 text-sm border-2 border-gray-200 uppercase">{scenario.Updated_By}</td>
                                                            <td className="px-2 py-1 text-sm border-2 border-gray-200">{scenario.Updated_On}</td>
                                                        </tr>
                                                    );
                                                })}
                                        </React.Fragment>
                                    )))}
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
                                {selectedRow !== null ? `1 of 1 items Selected` : '0 of 1 items Selected'}
                            </p>
                        </div>
                    </div>
                </div>

                {idpVisible && (
                    <div ref={popupRef}>
                        <ForcastingScenarioIDP rowUserId={rowUserId} groupName={groupName} user_Id={user_Id} />
                    </div>
                )}

            </div >
        </>
    );
};

