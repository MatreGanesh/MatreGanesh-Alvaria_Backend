import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { useStateContext } from '../../StateContext';
import { useNavigate } from 'react-router-dom';

export default function ViewIntraDayPerformance() {
    const { setToggleSideBar, setEwfmData } = useStateContext();
    const navigate = useNavigate();

    const [routingSet, setRoutingSet] = useState('');
    const handleRoutingSetChange = (e) => {
        setRoutingSet(e.target.value);
    };

    const handleOpen = async () => {
        if (!routingSet) {
            alert('Please select a Routing Set');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/ewfm/getewfmdata`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ routingSet }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setEwfmData(data)
            console.log('Fetched data:', data);

            setToggleSideBar(true);
            navigate('/intra-day-performance-details');
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Failed to fetch data. Please try again.');
        }
    };
    return (
        <>
            <div className="bg-gray-100">
                <div className="w-full h-[90vh] overflow-auto mx-auto flex flex-col">
                    <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                        <h1 className="font-bold">View Intra-Day Performance</h1>
                    </div>
                    <div className='bg-gradient-to-t to-indigo-50 from-indigo-100 flex-grow'>
                        <div className='px-2 border-b-2 border-gray-400 shadow-md shadow-white py-4'>
                            <p className=' px-2  font-semibold'>Specify the routing set and the date and time of the intra-day performance forecast you want to view.</p>
                        </div>
                        <div className='border-b-2 text-sm border-gray-400 shadow-md shadow-white p-5 space-y-3'>
                            <div className='flex items-center '>
                                <label className='font-bold min-w-[150px]' htmlFor='singleEmployee'>
                                    Routing set:
                                </label>
                                <div className='relative'>
                                    <select
                                        id='routingSet'
                                        value={routingSet}
                                        onChange={handleRoutingSetChange}
                                        aria-label="Routing set selector"
                                        className="appearance-none w-full min-w-[400px] focus:bg-yellow-300 px-1 py-1 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        <option value="">Select Routing Set</option>
                                        <option value="MGB.LEUSHI.DCWXXM_">MGB.LEUSHI.DCWXXM_</option>
                                        <option value="MFR.LEUSHI.DMPXXM_">MFR.LEUSHI.DMPXXM_</option>
                                        <option value="MDE.LEUSHI.DHLXXM_">MDE.LEUSHI.DHLXXM_</option>
                                        <option value="MGB.LEUSMS.DCWXXM_">MGB.LEUSMS.DCWXXM_</option>
                                        <option value="MFR.LEUSMS.DMPXXM_">MFR.LEUSMS.DMPXXM_</option>
                                        <option value="MDE.LEUSMS.DHLXXM_">MDE.LEUSMS.DHLXXM_</option>
                                    </select>
                                    <div className="absolute z-20 top-1/2 right-0 transform -translate-y-1/2 border-2 border-gray-400 px-[5px] py-[6px] cursor-pointer" aria-label="More options">
                                        <BsThreeDots />
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center' >
                                <label className='font-bold min-w-[150px]' htmlFor='nominalDate'>
                                    Date:
                                </label>
                                <div className='flex items-center gap-1'>
                                    <input
                                        id='nominalDate'
                                        type="date"
                                        aria-label="Time zone input"
                                        className="w-full focus:bg-yellow-300 px-2 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                    <button className='border-[1px] text-sm font-semibold px-2 py-0.5 border-gray-500 bg-gray-400'>
                                        Thusday
                                    </button>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label className='font-bold min-w-[150px]' htmlFor='time'>
                                    Time</label>
                                <div className='flex items-center gap-1'>
                                    <input
                                        id='time'
                                        type="time"
                                        aria-label="Time zone input"
                                        className="w-full focus:bg-yellow-300 px-2 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                </div>
                            </div>
                        </div>
                        <div className='p-3 text-sm'>
                            <button className='border-2 border-gray-400 px-7 py-1 first-letter:underline
                                 font-semibold bg-gray-300 '
                                onClick={handleOpen}
                            >
                                Open
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

