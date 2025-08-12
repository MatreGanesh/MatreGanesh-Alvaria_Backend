import React, { useState } from 'react'
import { BiSolidFile } from 'react-icons/bi'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaQuestionCircle } from 'react-icons/fa'
import { FcLineChart } from 'react-icons/fc'
import { HiMiniMinus } from 'react-icons/hi2'
import { ImUndo2 } from "react-icons/im";
import { IoIosSave } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { PiDotsThreeOutlineFill } from 'react-icons/pi'
import { VscChromeMaximize } from 'react-icons/vsc'

export default function HolidayFactorsGeneralHoliday({ setShowPopUp, selectedGroup, refreshHolidayFactors }) {

    // console.log("selectedGroup", selectedGroup.forecastGroup_Code)

    // const [selectedDate, setSelectedDate] = useState('');
    const [weekday, setWeekday] = useState('select'); // default value
    const [formData, setFormData] = useState({
        forecastGroup_Code: selectedGroup.forecastGroup_Code,
        ForecastGroup_Description: selectedGroup.ForecastGroup_Description,
        Date: '',
        Factor: '1.0000',
        Legal: false,
        Description: '',
        Memo: '',
        Weekday: 'select'
    });


    const today = new Date().toISOString().split("T")[0];
    const handleDateChange = (e) => {
        const dateValue = e.target.value;
        // setSelectedDate(dateValue);
        const day = new Date(dateValue).toLocaleDateString('en-US', { weekday: 'short' });
        setWeekday(day);
        setFormData(prev => ({ ...prev, Date: dateValue, Weekday: day }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSaveAndClose = async () => {

        // Validation: Check if required fields are filled
        if (!formData.Date || !formData.Description || !formData.Factor) {
            alert("Please fill in all mandatory fields: Date, Description, and Factor.");
            return;
        }


        const payload = {
            forecastGroup_Code: selectedGroup.forecastGroup_Code,
            groups: [{
                ForecastGroup_Description: selectedGroup.ForecastGroup_Description, // optional or set actual description if available
                Date: formData.Date,
                Factor: parseFloat(formData.Factor),
                Legal: formData.Legal ? 'Yes' : 'No',
                Description: formData.Description,
                Memo: formData.Memo,
                Weekday: formData.Weekday
            }]
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/forecasting/holiday-factors`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert("Holiday Factor saved successfully");
                refreshHolidayFactors(); // Refresh main list
                setShowPopUp(false);     // Close popup
            } else {
                const errorData = await response.json();
                alert(`Failed to save: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Save error:", error);
            alert("Error saving Holiday Factor");
        }
    };


    return (
        <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  shadow-md shadow-black bg-white">
            {/* <TrackingEdit /> */}
            <div className="border border-gray-300 w-[700px] max-w-full mx-auto shadow-sm">
                {/* <!-- Title bar --> */}
                <div className="flex items-center justify-between border-b border-gray-400 px-2 py-2 select-text">
                    <div className="text-sm flex items-center gap-2 font-semibold text-black truncate font-[Segoe UI]">
                        <FcLineChart className='w-5 h-4 border border-gray-400 p-0.5' />
                        Holiday Factor (First Monday of June + 4)
                    </div>
                    <div className="flex gap-8">
                        <HiMiniMinus className='w-4 h-4' onClick={() => setShowPopUp(false)} />
                        <VscChromeMaximize className='w-4 h-4' />
                        <IoClose className='w-4 h-4' onClick={() => setShowPopUp(false)} />
                    </div>
                </div>
                {/* <!-- Menu bar --> */}
                <div className='bg-gradient-to-l font-thin to-blue-300 from-blue-200 flex  flex-grow'>
                    <ul className='flex items-center font-semibold text-sm py-1 gap-4 px-2'>
                        <li className='cursor-pointer'>File</li>
                        <li className='cursor-pointer'>Edit</li>
                        <li className='cursor-pointer'>View</li>
                        <li className='cursor-pointer'>Tools</li>
                        <li className='cursor-pointer'>Window</li>
                        <li className='cursor-pointer'>Help</li>
                    </ul>
                </div>
                {/* <!-- Toolbar --> */}
                <div className="flex items-center space-x-1 bg-blue-100 border-b border-gray-400 px-1 select-none">
                    <ul className='flex items-center font-semibold text-sm gap-2 py-1'>
                        <li
                            className='cursor-pointer flex items-center gap-1 hover:text-blue-700' onClick={handleSaveAndClose}>
                            <IoIosSave className='w-5 h-5 text-blue-500' /> Save & Close
                        </li>
                        <li className='cursor-pointer'>
                            <IoIosSave className='w-5 h-5 text-blue-500' />
                        </li>
                        <li className='cursor-pointer'>
                            <ImUndo2 className='w-5 h-5 text-gray-500' />
                        </li>
                        <li className='cursor-pointer flex items-center gap-1 hover:text-blue-700'>
                            <FaArrowAltCircleLeft className='w-5 h-5 text-green-500 bg-white rounded-full p-[.4px]' />
                        </li>
                        <li className='cursor-pointer flex items-center gap-1'>
                            <FaArrowAltCircleRight className='w-5 h-5 text-green-500 bg-white rounded-full p-[.4px]' />
                        </li>
                        <li className='cursor-pointer'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                shapeRendering="geometricPrecision"
                                textRendering="geometricPrecision"
                                imageRendering="optimizeQuality"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                viewBox="0 0 512 508.33"
                                width="2vw"  // or any other size
                                height="2vh" // or any other size
                            >
                                <path
                                    fill="#EB0100"
                                    d="M317.99 323.62c-17.23-19.89-35.3-40.09-54.23-60.09-62.06 59.35-119.53 126.18-161.12 201.73-51.02 92.68-126.31 16.84-92.15-50.33 27.46-61.28 98.07-146.3 182.94-220.07-46.74-41.72-97.97-79.34-154.08-107.07C-42.76 47.2 19.97-20.82 79.37 6.16c50.04 19.82 119.09 70.85 182.26 134.32 63.11-45.86 129.55-81.8 189.45-95.87 13-3.06 50.95-11.33 59.69 1.04 3.29 4.67-.33 11.68-7.08 19.29-22.99 25.96-84.78 67.12-114.72 90.82-21.61 17.11-43.55 34.99-65.37 53.71 23.2 28.81 43.94 58.64 60.47 88.17 14.37 25.66 25.55 51.1 32.42 75.46 3.14 11.13 11.75 43.64 1.38 51.66-3.91 3.03-10.11.16-16.95-5.38-23.34-18.89-61.29-70.77-82.93-95.76z"
                                />
                            </svg>
                        </li>
                        <li
                            className='cursor-pointer gap-1 hover:text-green-300'>
                            <BiSolidFile className='w-5 h-5 text-blue-500' />
                        </li>
                        <li className='cursor-pointer'>
                            <FaQuestionCircle className='w-5 h-5 text-blue-500 border-gray-100 border-2 rounded-full' />
                        </li>
                    </ul>
                </div>
                {/* <!-- Tab bar --> */}
                <div className="flex bg-gradient-to-tr from-blue-100 to-blue-200 text-black select-text pt-1">
                    <button className="border border-b-0 text-xs border-gray-400 bg-white px-3 py-1 font-semibold">
                        General
                    </button>
                </div>
                {/* <!-- Content area --> */}
                <div className="p-3 bg-white min-h-[320px]">
                    <form className="space-y-3 max-w-[560px]">
                        <div className="flex items-center space-x-2">
                            <label className="w-[110px] text-sm font-semibold text-black" htmlFor="forecastGroup">Forecast group:</label>
                            <div className='w-[320px] flex items-center gap-1 border border-gray-300 px-0.5'>
                                <input
                                    className="rounded-sm text-sm w-full text-gray-500 px-1 py-[2px]  truncate"
                                    disabled value={selectedGroup?.forecastGroup_Code || ''} />
                                <PiDotsThreeOutlineFill className='w-5 h-5 border border-gray-300 p-0.5 text-white font-bold bg-gray-300' />
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <label className="w-[110px] text-sm font-semibold text-black" htmlFor="date">Date:</label>
                            <input
                                id="date"
                                type="date"
                                min={today}  // <-- disable past dates
                                value={formData.Date}
                                onChange={handleDateChange}
                                className="border border-gray-400 rounded-sm text-sm px-1 py-[2px] w-[110px]"
                            />
                            <button className="border border-gray-400 rounded-sm text-sm px-2 py-[2px] bg-white hover:bg-gray-100" type="button">
                                {weekday}
                            </button>
                        </div>

                        <div className="flex items-center space-x-2">
                            <label className="w-[110px] text-sm font-semibold text-black" htmlFor="factor">Factor:</label>
                            <input
                                className="border border-gray-400 rounded-sm text-sm px-1 py-[2px] w-[110px]"
                                id="factor"
                                name="Factor"
                                step="0.0001"
                                type="number"
                                value={formData.Factor}
                                onChange={handleChange}
                            />
                            <input id="legalHoliday" type="checkbox" name="Legal" checked={formData.Legal} onChange={handleChange} />
                            <label className="text-sm font-normal text-black" htmlFor="legalHoliday">Legal holiday</label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <label className="w-[110px] text-sm font-semibold text-black" htmlFor="description">Description:</label>
                            <input
                                className="border border-gray-400 rounded-sm text-sm px-1 py-[2px] w-[320px]"
                                id="description"
                                name="Description"
                                value={formData.Description}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>

                <div className='p-1'>
                    <fieldset className="px-2 py-1 border border-gray-400">
                        <legend className='text-sm font-semibold'>Memo</legend>
                        <textarea
                            aria-label="Memo"
                            name="Memo"
                            className="w-full resize-y px-2 py-1 text-sm border border-gray-300 font-normal text-black"
                            rows="5"
                            value={formData.Memo}
                            onChange={handleChange}
                        />
                    </fieldset>
                </div>
            </div>
        </div>
    )
}
