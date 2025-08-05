import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FiscalVolumesSelect from './FiscalVolumesSelect';
import { useStateContext } from '../../../StateContext';

export default function FiscalVolumes() {
    const [isVisible, setVisible] = useState(false);
    const [fiscalVolumes, setFiscalVolumes] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const { _id, groupName, Updated_By } = location.state || {};
    // console.log("Scenrao_Id", _id, "GroupName", groupName, "User", Updated_By)

    const { triggerSave, resetSave } = useStateContext();

    useEffect(() => {
        localStorage.setItem('showSaveClose', 'true');
        return () => {
            localStorage.removeItem('showSaveClose');
        };
    }, []);

    const fetchFiscalVolumes = async () => {
        try {
            // const userId = localStorage.getItem('user');
            const userId = Updated_By;
            const response = await fetch(
                `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/forecasting/forecasting-scenarios/get-fiscal-volumes?userId=${userId}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            // console.log("Fetched Fiscal Volumes:", result.data);

            if (result.success && result.data.length) {
                setFiscalVolumes(result.data);
            } else {
                console.warn("❌ No fiscal volume data found for user:", userId);
            }
        } catch (err) {
            console.error("Error fetching fiscal volumes:", err);
        }
    };

    useEffect(() => {
        fetchFiscalVolumes();
    }, []);

    const saveUpdatedVolumes = async () => {
        // const userId = localStorage.getItem('user');
        const userId = Updated_By;
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/forecasting/forecasting-scenarios/update-supplied-volumes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, volumes: fiscalVolumes }),
            });

            const result = await response.json();
            if (!result.success) {
                alert("Failed to save volumes");
            } else {
                console.log("✅ Fiscal volumes updated");
            }
        } catch (err) {
            console.error("Error updating volumes:", err);
        }
    };

    useEffect(() => {
        if (triggerSave) {
            (async () => {
                alert('✅ Fiscal volumes updated successfully!');
                await saveUpdatedVolumes();
                resetSave();
                navigate('/forecasting-forcasting-scenario');
            })();
        }
    }, [triggerSave]);

    const handlePaste = (e, startIndex) => {
        e.preventDefault();
        const clipboardData = e.clipboardData.getData('Text');
        const pastedValues = clipboardData
            .split(/\r?\n|\t/)
            .map(val => val.trim())
            .filter(val => val !== '');

        const updated = [...fiscalVolumes];
        const usableCount = Math.min(pastedValues.length, updated.length - startIndex);

        for (let i = 0; i < usableCount; i++) {
            updated[startIndex + i].supplied_volume = Number(pastedValues[i]) || 0;
        }

        setFiscalVolumes(updated);
    };

    return (
        <div className='flex flex-col h-[91vh]'>

            {isVisible && (
                <FiscalVolumesSelect
                    setVisible={setVisible}
                    refreshFiscalVolumes={fetchFiscalVolumes}
                    user={Updated_By}
                    groupName={groupName}
                    scenario_Id={_id}

                />
            )}

            {/* Top Nav Tabs */}
            <div className='bg-gradient-to-l font-thin to-blue-200 from-blue-100'>
                <ul className='flex items-center group font-semibold text-sm px-1'>
                    {['General', 'Fiscal', 'Revenue', 'Cyclic', 'Intra-Day', 'Daily AHT', 'Service', 'Multi-Channel'].map((tab, i) => (
                        <li
                            key={i}
                            className={`cursor-pointer px-2.5 py-1 border border-gray-300 ${tab === 'Fiscal' ? 'bg-white border-b-0' : 'bg-gray-200'} hover:bg-white hover:border-b-0`}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Table + Side Buttons */}
            <div className="flex h-full overflow-hidden px-2">
                <div className="flex flex-col w-full overflow-hidden border-x border-gray-700">
                    <div className="flex-1 overflow-auto">
                        <table className="w-full table-fixed border-collapse font-normal text-black shadow-gray-500 shadow-md border-x">
                            <thead className='text-sm text-right top-0 sticky bg-white'>
                                <tr>
                                    <th
                                        colSpan={3}
                                        className="bg-gradient-to-tr md:text-lg text-left to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold"
                                    >
                                        Fiscal Volumes
                                    </th>
                                </tr>
                                <tr>
                                    <th className="border-r p-1">Start Date</th>
                                    <th className="border-r p-1">Stop Date</th>
                                    <th className="p-1">Supplied Volume</th>
                                </tr>
                            </thead>
                            <tbody className='font-semibold text-sm'>
                                {fiscalVolumes.length > 0 ? (
                                    fiscalVolumes.map((vol, index) => (
                                        <tr key={index} className="bg-[#fffde7] hover:bg-blue-500 hover:text-white">
                                            <td className="border border-[#d4d0c8] p-1">{vol.start_date || 'N/A'}</td>
                                            <td className="border border-[#d4d0c8] p-1">{vol.stop_date || 'N/A'}</td>
                                            <td className="border border-[#d4d0c8] p-1 text-right">
                                                <input
                                                    type="text"
                                                    value={vol.supplied_volume || '0'}
                                                    onChange={(e) => {
                                                        const updated = [...fiscalVolumes];
                                                        updated[index].supplied_volume = Number(e.target.value);
                                                        setFiscalVolumes(updated);
                                                    }}
                                                    onPaste={(e) => handlePaste(e, index)}
                                                    className="text-right bg-transparent outline-none"
                                                />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="text-center py-2 text-gray-500">
                                            No Fiscal Volume data found for this user.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="sticky bottom-0 z-10">
                        <table className="w-full table-fixed">
                            <tfoot>
                                <tr>
                                    <th
                                        colSpan={3}
                                        className="bg-gradient-to-tr text-left md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold"
                                    >
                                        0 of {fiscalVolumes.length} Items Selected, 0 of 1 Columns Selected, 0 Cells Selected
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Right-side Buttons */}
                <div className="flex flex-col space-y-2 p-2 w-[10%]">
                    <button
                        className="bg-[#f1eee9] hover:border-blue-600 hover:border-2 border border-[#808080] rounded-sm px-2 py-1 text-[11px] font-normal text-black hover:bg-[#e0e0e0]"
                        onClick={() => setVisible(true)}
                    >
                        Select...
                    </button>
                    <button
                        className="bg-[#f1eee9] hover:border-blue-600 hover:border-2 border border-[#808080] rounded-sm px-2 py-1 text-[11px] font-normal text-black hover:bg-[#e0e0e0]"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}


