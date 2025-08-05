import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BsFillHexagonFill } from 'react-icons/bs'
import { FiMinus } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'
import { MdOutlineCropSquare } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function FiscalVolumesSelect({ setVisible, refreshFiscalVolumes, user, groupName, scenario_Id }) {

    const [fiscalPeriods, setFiscalPeriods] = useState([]);
    const navigate = useNavigate();

    //Fetching user name is stored in localstorage
    // const userId = localStorage.getItem("user");
    const userId = user;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/forecasting/forecasting-scenarios/get-selected-fiscal-periods?userId=${userId}`);
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                const result = await response.json();
                // Now handle nested response
                const nestedPeriods = result.data.flatMap(item => item.periods);
                setFiscalPeriods(nestedPeriods); // store flat list for rendering
            } catch (err) {
                console.error('Error fetching fiscal periods:', err);
            }
        };
        fetchData();
    }, [userId]);

    const handleSave = async () => {
        // const forecastingGroupName = localStorage.getItem("forecastingGroupName");
        // const scenarioId = localStorage.getItem("selectedScenarioId");
        const forecastingGroupName = groupName;
        const scenarioId = scenario_Id;

        if (!userId || !forecastingGroupName || !scenarioId) {
            alert("User, group name or scenario ID missing from localStorage.");
            return;
        }

        try {
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/forecasting/forecasting-scenarios/send-all-fiscal-volumes`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId,
                    forecastingGroupName,
                    scenarioId
                })
            });

            const result = await res.json();

            if (result.success) {
                alert("✅ Fiscal volumes added successfully.");
                refreshFiscalVolumes();
                setVisible(false);
            } else {
                alert("❌" + result.message);
            }
        } catch (err) {
            console.error("Failed to save:", err);
            alert("Save failed.");
        }
    };

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/20 font-sans">

            <div aria-labelledby="dialog-title" aria-modal="true" className="shadow-md bg-gray-100  shadow-gray-500 border border-gray-300 rounded w-auto select-none" role="dialog">
                <div className="flex items-center justify-between border-b bg-white border-gray-300 px-3 h-9 text-sm font-semibold text-gray-700" id="dialog-title">
                    <div className='flex items-center gap-2'>
                        <BsFillHexagonFill className="w-5 h-5 text-orange-600" />
                        <p className='text-gray-600 text-[1.2em] font-medium'>Select</p>
                    </div>
                    <div className='flex items-center gap-[3em]'>
                        <button aria-label="Close" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <FiMinus className="w-5 h-5 text-gray-400 hover:text-gray-700" />
                        </button>
                        <button aria-label="Maximize" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <MdOutlineCropSquare className="w-5 h-5 text-gray-400 hover:text-gray-700" />
                        </button>
                        <button aria-label="Close window" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <IoCloseSharp className="w-5 h-5 text-gray-400 hover:text-gray-700"
                                onClick={() => setVisible(false)} />
                        </button>
                    </div>
                </div>

                <div className=''>
                    <div className='bg-gray-100 p-2 shadow-[inset_.2px_.5px_4px_.1px_rgba(0,0,0,0.03)] shadow-current'>
                        <div className='border p-2 space-y-2 shadow-gray-700 shadow-sm'>
                            <fieldset className="space-y-2 border-[1.5px] border-gray-400 p-2">
                                <legend className="block text-sm font-semibold text-gray-700" htmlFor="lookup">
                                    Lookup
                                </legend>
                                <input autoComplete="off" className="min-w-[450px] border border-gray-300 rounded py-2 px-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500" id="lookup" spellCheck="false" type="text" />
                            </fieldset>

                            <fieldset className="border-[1.5px] border-gray-400 p-2">
                                <legend className="block text-sm font-semibold text-gray-700" htmlFor="selected-list">
                                    Selected (239)
                                </legend>
                                <div className="flex">
                                    <select aria-multiselectable="true" className="w-[70%] border border-gray-300 rounded text-sm text-gray-950 p-1 resize-none space-y-1 overflow-y-auto" id="selected-list" multiple="" size="15">
                                        {fiscalPeriods.map((items, index) => (

                                            <React.Fragment key={items._id || index}>
                                                <option>
                                                    ({items.from} to {items.to})
                                                </option>
                                            </React.Fragment>
                                        ))
                                        }
                                    </select>

                                    <div className="flex flex-col items-center justify-between space-y-2 w-[30%]">
                                        <div className='flex flex-col items-center space-y-2 gap-4'>
                                            <div className='flex flex-col items-center space-y-2 '>
                                                <button className="w-[120px] font-semibold px-1 py-1.5 first-letter:underline border border-gray-400 rounded text-sm text-gray-800 hover:bg-gray-100 bg-gray-200 focus:outline-none" type="button"
                                                    onClick={() => navigate('/forecasting-forcasting-scenario/Fiscal_Volumes/Fiscal_Periods', {
                                                        state: {
                                                            user_Id: userId
                                                        }
                                                    })}>
                                                    Add...
                                                </button>
                                                <button className="w-[120px] font-semibold px-1 py-1.5 border border-gray-400 rounded text-sm text-gray-800 hover:bg-gray-100 bg-gray-200 focus:outline-none" type="button">
                                                    Remove
                                                </button>
                                            </div>

                                            <div className='flex flex-col items-center space-y-2 '>
                                                <button className="w-[120px] font-semibold px-1 py-1.5 border border-gray-400 rounded text-sm text-gray-800 hover:bg-gray-100 bg-gray-200 focus:outline-none" type="button">
                                                    Move Up
                                                </button>
                                                <button className="w-[120px] font-semibold px-1 py-1.5 border border-gray-400 rounded text-sm text-gray-400 bg-gray-100 cursor-not-allowed" disabled="" type="button">
                                                    Move Down
                                                </button>
                                            </div>
                                        </div>
                                        <button className="w-[120px] font-semibold px-1 py-1.5 border border-gray-400 rounded text-sm text-gray-800 hover:bg-gray-100 bg-gray-200 focus:outline-none" type="button">
                                            Clear All
                                        </button>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-2 border-t bg-gray-100 border-gray-300 px-3 py-2">
                        <button className="w-20 h-8 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 focus:outline-none" type="button"
                            onClick={handleSave}>
                            OK
                        </button>
                        <button className="w-20 h-8 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-200 focus:outline-none" type="button"
                            onClick={() => setVisible(false)}>
                            Cancel
                        </button>
                        <button className="w-20 h-8 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-200 focus:outline-none" type="button">
                            Help
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

