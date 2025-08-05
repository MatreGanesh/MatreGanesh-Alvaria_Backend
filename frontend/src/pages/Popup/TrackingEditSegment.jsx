import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsThreeDots } from "react-icons/bs";
import { useStateContext } from '../../StateContext';

export default function TrackingEditSegment() {
    const {
        showTrackingEditSegment,
        selectedEmployee,
    } = useStateContext();

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [startTime, setStartTime] = useState('');
    const [stopTime, setStopTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            employeeId: selectedEmployee,
            startDate: startDate ? startDate.toISOString().split('T')[0] : '',
            endDate: endDate ? endDate.toISOString().split('T')[0] : '',
            shiftStart: startTime,
            shiftStop: stopTime,
        };
        console.log("payload", payload);

        try {
            const response = await fetch('http://localhost:5000/api/schedule/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Schedule updated:', result);
                showTrackingEditSegment(false);
            } else {
                console.error('Failed to update schedule');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex items-center justify-center max-h-[90vh] font-sans">
            <div
                className="min-w-[480px] border border-gray-300 bg-white shadow-md shadow-black"
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialog-title"
            >
                {/* Title bar */}
                <div className="flex items-center justify-between border-b border-gray-300 px-3 py-1 select-none">
                    <h1 id="dialog-title" className="text-[13px] font-normal text-black leading-none">
                        Edit Segment
                    </h1>
                    <button
                        aria-label="Close"
                        className="w-6 h-6 flex items-center space-y-2 text-[14px] justify-center text-black hover:bg-gray-300 rounded"
                        onClick={() => showTrackingEditSegment(false)}
                    >
                        ×
                    </button>
                </div>

                <div className='bg-[#fbf8f8] p-2 pb-0'>
                    <form className="space-y-3 p-2 border-[1px] bg-white text-[13px] text-black" onSubmit={handleSubmit}>
                        {/* Employee Field */}
                        <fieldset className="border border-gray-300 rounded p-3 space-y-2">
                            <legend className="text-[13px] font-semibold text-black px-1">
                                Employee
                            </legend>
                            <div className="flex">
                                <input
                                    id="employee"
                                    type="text"
                                    value={selectedEmployee}
                                    className="flex-grow border border-gray-400 rounded-l px-2 py-1 text-[13px] text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    aria-label="Employee"
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="border border-l-0 bg-gray-100 border-gray-400 rounded-r px-2 flex items-center justify-center text-[13px] text-black hover:bg-gray-200"
                                    aria-label="More options"
                                >
                                    <BsThreeDots />
                                </button>
                            </div>
                        </fieldset>

                        {/* Nominal Date Range */}
                        <fieldset className="border border-gray-300 rounded p-3 space-y-2">
                            <legend className="text-[13px] font-semibold text-black px-1">
                                Nominal date range
                            </legend>
                            <div className="flex items-center space-x-2">
                                <label htmlFor="date-range" className="w-[100px] text-[13px] font-semibold text-gray-700">
                                    Date Range:
                                </label>
                                <DatePicker
                                    id="date-range"
                                    selectsRange
                                    startDate={startDate}
                                    endDate={endDate}
                                    onChange={(update) => {
                                        setDateRange(update);
                                    }}
                                    isClearable={true}
                                    className="border border-gray-400 rounded px-1 py-0.5 text-[13px] text-black min-w-[200px] appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                            </div>
                        </fieldset>

                        {/* Shift Times */}
                        <div className='border-[1px] rounded-md p-2 space-y-3'>
                            <div className="flex items-center">
                                <label htmlFor="start-time" className="min-w-[55px] text-[13px] font-semibold text-black">
                                    Start:
                                </label>
                                <input
                                    id="start-time"
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    step="60"
                                    className="border border-gray-400 rounded px-2 py-1 text-[13px] text-black min-w-[100px]"
                                    aria-label="Start time"
                                    required
                                />
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="stop-time" className="min-w-[55px] text-[13px] font-semibold text-black">
                                    Stop:
                                </label>
                                <input
                                    id="stop-time"
                                    type="time"
                                    value={stopTime}
                                    onChange={(e) => setStopTime(e.target.value)}
                                    step="60"
                                    className="border border-gray-400 rounded px-2 py-1 text-[13px] text-black min-w-[100px]"
                                    aria-label="Stop time"
                                    required
                                />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-2 p-1 border-t border-gray-300">
                            <button
                                type="submit"
                                className="border min-w-[80px] border-gray-400 rounded text-[13px] text-black px-4 py-1 hover:border-2 hover:border-blue-500 bg-gray-200 hover:bg-white"
                            >
                                OK
                            </button>
                            <button
                                type="button"
                                className="border min-w-[80px] border-gray-400 rounded text-[13px] text-black px-4 py-1 hover:border-2 hover:border-blue-500 bg-gray-200 hover:bg-white"
                                onClick={() => showTrackingEditSegment(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
