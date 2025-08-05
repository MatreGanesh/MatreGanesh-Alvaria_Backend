import React, { useEffect, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../StateContext';

export default function OfficialSchedulEditor() {
    const { setShowDWM, selectedDate, setSelectedDate, selectedEmployee, setSelectedEmployee } = useStateContext();
    const [dayOfWeek, setDayOfWeek] = useState('Select');

    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [employeeName, setEmpoyeeName] = useState([])

    const navigate = useNavigate();

    const handleDateChange = (e) => {
        const dateStr = e.target.value;
        setSelectedDate(dateStr);

        if (!dateStr || !selectedEmployee) return;
    };


    const handleEmployeeChange = (e) => {
        setSelectedEmployee(e.target.value);
    };

    const handleOpen = () => {
        setShowDWM(true)
        navigate('/official-tracking-edit-Week')
    }

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/schedule/getschedules'); // Adjust the URL as needed
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("mmm", data)
                setSchedules(data);
                const names = data.map(schedule => schedule.name);
                setEmpoyeeName(names); // Set the employee names in state
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSchedules();
    }, []);


    return (
        <>
            <div className="bg-gray-100">
                <div className="w-full h-[90vh] overflow-auto mx-auto flex flex-col">
                    <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                        <h1 className="font-bold">Official Schedule Editor</h1>
                    </div>
                    <div className='bg-gradient-to-t to-indigo-50 from-indigo-100 flex-grow'>
                        <div className='px-2 border-b-2 border-gray-400 shadow-md shadow-white py-4'>
                            <p className=' px-2  font-semibold'>Specify the employee(s) and the date of the schedule you want to retrieve.</p>
                        </div>
                        <div className='border-b-2 text-sm border-gray-400 shadow-md shadow-white p-5 space-y-3'>
                            <div className='flex items-center gap-5'>
                                <label className='font-bold' htmlFor='singleEmployee'>
                                    <input type='radio' />Single Employee
                                </label>
                                <div className='relative ml-[2.5em]'>
                                    <select
                                        id='singleEmployee'
                                        aria-label="Employee selector"
                                        className="w-full min-w-[400px] focus:bg-yellow-300 px-2 py-1 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        onChange={handleEmployeeChange}
                                        value={selectedEmployee}
                                    >
                                        <option value="">Select Employee</option>
                                        {employeeName.map((name, index) => (
                                            <option key={index} value={name}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute z-20 top-1/2 right-0 transform -translate-y-1/2 border-2 border-gray-400 px-[5px] py-[5.5px] cursor-pointer" aria-label="More options">
                                        <BsThreeDots />
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center gap-5'>
                                <label className='font-bold' htmlFor='employeeSelector'>
                                    <input type='radio' />Employee Selector</label>
                                <div className='ml-[1.6em]' id='employeeSelector'>
                                    <button className='border-[1px]  border-slate-400 px-6 py-1 bg-gray-300 text-gray-400'>Employee Selector...</button>
                                </div>
                            </div>

                            <div className='flex items-center gap-5 pt-7' >
                                <label className='font-bold' htmlFor='nominalDate'>
                                    <input type='radio' />Nominal date:
                                </label>
                                <div className='ml-[3.6em] flex items-center gap-1'>
                                    <input
                                        id='nominalDate'
                                        type="date"
                                        aria-label="Time zone input"
                                        className="w-full focus:bg-yellow-300 px-2 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        onChange={handleDateChange}
                                        value={selectedDate}
                                    />
                                    <button className='border-[1px] text-sm font-semibold px-2 py-0.5 border-gray-500 bg-gray-400'>
                                        {dayOfWeek}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='p-3 text-sm'>
                            <button to={'/official-tracking-edit-Week'}
                                className='border-2 border-gray-400 px-7 py-1 first-letter:underline
                                 font-semibold bg-gray-300 '
                                onClick={handleOpen}>
                                Open
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
