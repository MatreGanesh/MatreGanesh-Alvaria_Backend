import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BsFillHexagonFill } from 'react-icons/bs'
import { FiMinus } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'
import { VscChromeRestore } from 'react-icons/vsc'
import { useLocation, useNavigate } from 'react-router-dom'

export default function FiscalPeriods() {

    const [fiscalPeriods, setFiscalPeriods] = useState([]);
    const [selectedPeriods, setSelectedPeriods] = useState([]);
    const [lastSelectedIndex, setLastSelectedIndex] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const { user_Id } = location.state || {};

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/forecasting/forecasting-scenarios/get-fiscal-Periods`);

                // Check if response is OK (status code 200–299)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                setFiscalPeriods(result.data);
            } catch (err) {
                console.error('Error fetching forecasting data:', err);
                // alert(`Failed to fetch data: ${err.message}`);
            }
        };

        fetchData();
    }, [])


    const handleRowClick = (e, index) => {
        if (e.shiftKey && lastSelectedIndex !== null) {
            // Get range between last selected and current
            const [start, end] = [lastSelectedIndex, index].sort((a, b) => a - b);
            const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);
            const unique = Array.from(new Set([...selectedPeriods, ...range]));
            setSelectedPeriods(unique);
        } else {
            if (selectedPeriods.includes(index)) {
                setSelectedPeriods(selectedPeriods.filter(i => i !== index)); // deselect
            } else {
                setSelectedPeriods([...selectedPeriods, index]); // select
            }

            setLastSelectedIndex(index); // update last selected
        }
    };


    const handleSavePeriods = async () => {
        // const userId = localStorage.getItem('user');
        const userId = user_Id;

        const selectedItems = selectedPeriods.map(index => fiscalPeriods[index]);

        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/forecasting/forecasting-scenarios/send-selected-fiscal-periods`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, periods: selectedItems }),
            });


            const result = await response.json();
            if (result.success) {
                console.log('Saved!');
                navigate(-1);
            }
        } catch (err) {
            console.error('Save failed:', err);
        }
    };


    return (
        <div className='fixed inset-0 z-50 flex flex-col h-svh bg-white'>

            {/* Fiscal Periods navbar */}
            <div className='bg-white shadow-gray-500 shadow-md flex items-center justify-between px-1 py-1'>
                <div className='flex items-center gap-1 font-thin'>
                    <BsFillHexagonFill className="w-5 h-5 text-orange-500" />
                    <p className='text-gray-600 text-[1.2em] font-medium'>Alvaria Workforce</p>
                </div>

                <div className='flex items-center gap-[3em] pr-2'>
                    <button aria-label="Close" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <FiMinus className="w-5 h-5 text-gray-400 hover:text-gray-700"
                            onClick={() => navigate(-1)} />
                    </button>
                    <button aria-label="Maximize" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <VscChromeRestore className="w-5 h-5 text-gray-400 hover:text-gray-700" />
                    </button>
                    <button aria-label="Close window" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <IoCloseSharp className="w-5 h-5 text-gray-400 hover:text-gray-700"
                            onClick={() => navigate(-1)} />
                    </button>
                </div>
            </div>


            <div className="flex flex-col h-full overflow-hidden px-2">
                {/* Scrollable content */}
                <div className="flex-1 overflow-auto">
                    <table className="w-full table-auto border-collapse text-[11px] font-normal text-black shadow-gray-500 shadow-md">
                        <thead className="bg-[#fff] text-gray-800 sticky top-0 z-10 select-none">
                            <tr>
                                <th
                                    colSpan={3}
                                    className="bg-gradient-to-tr md:text-lg text-left to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold"
                                >
                                    Fiscal Periods
                                </th>
                            </tr>
                            <tr className="text-sm text-left">
                                <th className="border-r px-2 border-gray-300">Label</th>
                                <th className="border-r px-2 border-gray-300">From</th>
                                <th className="border-r px-2 border-gray-300">To</th>
                            </tr>
                        </thead>

                        <tbody className="font-semibold text-xs">
                            {
                                fiscalPeriods.map((item, index) => {
                                    const isSelected = selectedPeriods.includes(index);
                                    return (
                                        <tr key={item.from || index} className={`cursor-pointer ${isSelected ? 'bg-blue-500 text-white' : 'bg-[#fffde7]'}`}
                                            onClick={(e) => handleRowClick(e, index)}
                                        >
                                            <td className="border border-[#d4d0c8] px-2 py-[6px]">{item.from}</td>
                                            <td className="border border-[#d4d0c8] px-2 py-[6px]">{item.from}</td>
                                            <td className="border border-[#d4d0c8] px-2 py-[6px]">{item.to}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>

                {/* Sticky footer */}
                <div className="sticky bottom-0 z-10">
                    <table className="w-full table-fixed">
                        <tfoot>
                            <tr>
                                <th
                                    colSpan={3}
                                    className="bg-gradient-to-tr text-left md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold"
                                >
                                    0 of 239 Items Selected, 0 of 1 Columns Selected, 0 Cells Selected
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>




            {/* <!-- bottom side buttons --> */}
            <div className="flex items-center justify-end gap-2 p-2 w-full shadow-[0_-4px_6px_-2px_rgba(0,0,0,0.5)]">

                <button className="bg-[#f1eee9] hover:border-blue-600 border-2 md:w-24 border-[#808080] rounded-md px-4 py-1 text-sm font-semibold text-black hover:bg-[#e0e0e0]"
                    onClick={handleSavePeriods}>
                    Ok
                </button>
                <button className="bg-[#f1eee9] hover:border-blue-600 border-2 md:w-24 border-[#808080] rounded-md px-4 py-1 text-sm font-semibold text-black hover:bg-[#e0e0e0]"
                    onClick={() => navigate(-1)}>
                    Cancel
                </button>
                <button className="bg-[#f1eee9] hover:border-blue-600 border-2 md:w-24 border-[#808080] rounded-md px-4 py-1 text-sm font-semibold text-black hover:bg-[#e0e0e0]">
                    Help
                </button>
            </div>
        </div >
    )
}
