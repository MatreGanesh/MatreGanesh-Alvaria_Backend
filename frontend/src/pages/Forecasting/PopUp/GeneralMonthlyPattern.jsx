import React, { useEffect, useRef, useState } from 'react'
import { PiDotsThreeBold } from 'react-icons/pi'
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { FaSun, FaShare } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";
import { format, startOfMonth, endOfMonth, startOfWeek, addDays, addMonths, subMonths, isSameMonth } from 'date-fns';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../../StateContext';


// Helpers
const WEEKDAYS = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function GeneralMonthlyPattern() {


    const { montlyPatternSave, resetMontlyPatternRequestSave } = useStateContext();
    const location = useLocation();
    const navigate = useNavigate();
    const hasMounted = useRef(false);
    const { userId, groupName, month, ForecastGroup_Description } = location.state || {};

    // console.log('Username:', userId, 'Group Name:', groupName, 'Group Description:', ForecastGroup_Description, 'Scenario Id:', scenarioId, 'Month:', month);

    // ---------------- STATE ----------------
    const [showTab, setShowTab] = useState('General');

    const [currentDate, setCurrentDate] = useState(() => {
        if (month) return new Date(`${month} 1, ${new Date().getFullYear()}`);
        return new Date();
    });

    const [calendarData, setCalendarData] = useState([]);

    const today = new Date();
    const isCurrentMonth = format(currentDate, 'yyyy-MM') === format(today, 'yyyy-MM');

    // ---------------- USE EFFECTS ----------------

    // Set calendar when component mounts
    useEffect(() => {
        setCalendarData(generateCalendar(currentDate));
    }, [currentDate]);


    // ---------------- HANDLERS ----------------

    const handelTab = (tab) => {
        setShowTab(tab);
    };

    // ---------------- CALENDAR GENERATOR ----------------

    const generateCalendar = () => {
        const startMonth = startOfMonth(currentDate);
        const endMonth = endOfMonth(currentDate);
        const startDate = startOfWeek(startMonth, { weekStartsOn: 6 }); // Saturday
        const endDate = addDays(endMonth, 7); // enough for a full grid
        const today = new Date();

        const dateMatrix = [];
        let day = startDate;

        while (day <= endDate) {
            const week = [];
            for (let i = 0; i < 7; i++) {
                const isPastOrToday = day <= today;
                const children = isPastOrToday
                    ? (() => {
                        const actual = Math.floor(Math.random() * 3);       // 0–2
                        const normalized = Math.floor(Math.random() * 3);   // 0–2
                        let holidayFactor = 0;

                        if (actual === 0 && normalized === 0) {
                            holidayFactor = 0;
                        } else if (actual === normalized) {
                            holidayFactor = 1;
                        } else {
                            const randomFactor = Math.random() * 2 + 1; // 1.000 - 3.000
                            holidayFactor = Math.floor(randomFactor * 100) / 100;;
                        }

                        return [actual, normalized, holidayFactor];
                    })()
                    : null;

                week.push({
                    date: new Date(day),
                    isCurrentMonth: isSameMonth(day, currentDate),
                    children,
                });

                day = addDays(day, 1);
            }
            dateMatrix.push(week);
        }

        return dateMatrix;
    };

    // ---------------- CALCULATIONS ----------------

    const dailyRows = calendarData
        .flat()
        .filter(item => item.isCurrentMonth && Array.isArray(item.children));

    const totalActual = dailyRows.reduce((sum, row) => sum + row.children[0], 0);
    const totalNormalized = dailyRows.reduce((sum, row) => sum + row.children[1], 0);

    const actualCountsByWeekday = WEEKDAYS.reduce((acc, day) => ({ ...acc, [day]: 0 }), {});

    calendarData.flat().forEach(({ date, isCurrentMonth, children }) => {
        if (!isCurrentMonth || !Array.isArray(children)) return;
        const [actual] = children;

        if (actual > 0) {
            const weekday = format(date, 'EEEE');
            actualCountsByWeekday[weekday]++;
        }
    });


    // Flag visibility for external control
    useEffect(() => {
        // Set true only when you intentionally want it
        const isVisible = localStorage.getItem('isMontlyPatternVisible') === 'true';
        if (isVisible) {
            localStorage.setItem('isMontlyPatternVisible', 'true');
        }
    }, []);

    const handleSaveAndClose = async () => {
        try {
            // const filteredData =
            //     calendarData
            //         .flat()
            //         .filter(({ isCurrentMonth, children }) => isCurrentMonth && children !== null)
            //         .map(({ date, children }) => ({
            //             day: format(date, 'yyyy-MM-dd'),
            //             actual: children[0],
            //             normalized: children[1],
            //             holidayFactor: children[2],
            //         }));

            const payload = {
                forecastGroup_Code: groupName,
                groups: [{
                    ForecastGroup_Description,
                    Month: month,
                    Year: new Date().getFullYear(),
                    UpdatedBy: userId,
                    UpdatedOn: new Date(),
                }]
            };

            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/forecasting/monthly-pattern-updates`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            // ✅ Show alerts even for non-2xx responses
            if (!response.ok) {
                const errorMessages = result?.warnings?.length
                    ? result.warnings.join('\n')
                    : result.message || 'Unknown error occurred';

                throw new Error(errorMessages);
            }

            // ✅ Show success message + any warnings
            let alertMessage = result.message || '✅ Monthly pattern saved successfully!';
            if (result.warnings?.length) {
                alertMessage += '\n⚠️ Warnings:\n' + result.warnings.join('\n');
            }

            alert(alertMessage);

            alert('✅ Monthly pattern saved successfully!');
            // resetMontlyPatternRequestSave();
            navigate('/forecasting-monthly-pattern-updates');

            return () => {
                localStorage.removeItem('isMontlyPatternVisible');
            };
        } catch (error) {
            console.error('Error :', error);
            alert(`❌ Error: ${error.message}`);
        } finally {
            // ✅ Always reset whether success or error
            resetMontlyPatternRequestSave();
            localStorage.removeItem('isMontlyPatternVisible');
        }
    };


    useEffect(() => {
        // Only run after first mount AND when user actually clicks save
        if (hasMounted.current && montlyPatternSave) {
            handleSaveAndClose();
        }

        // Mark first mount done
        if (!hasMounted.current) {
            hasMounted.current = true;
        }
    }, [montlyPatternSave]);


    return (
        <div className="bg-white text-black font-sans select-none h-[91vh] flex flex-col overflow-hidden">


            {/* <!-- Tabs --> */}
            <div className="flex pt-1.5 border-b-[1px] rounded-t-sm bg-gradient-to-br to-blue-200 from-blue-100">
                <button className={`${showTab === 'General' ? ' bg-white font-bold' : 'font-semibold text-gray-400 bg-gray-100'} px-4 py-1.5 border-b-0 border rounded-t-sm border-gray-400  text-sm`} aria-selected="true" role="tab" tabIndex="0"
                    onClick={() => handelTab('General')}>General</button>
                <button className={`${showTab === 'Calendar' ? ' bg-white font-bold' : 'font-semibold text-gray-400 bg-gray-100'} px-4 py-1.5 border-b-0 border rounded-t-sm border-gray-400  text-sm`} aria-selected="false" role="tab" tabIndex="-1"
                    onClick={() => handelTab('Calendar')}>Calendar</button>
            </div>

            {/* General Section */}
            {showTab === 'General' && (
                <div className='flex-grow flex flex-col'>
                    <div className="flex overflow-hidden flex-grow">
                        {/* <!-- Left panel --> */}
                        <div className="flex flex-col w-[18vw] p-2 text-sm leading-tight">
                            {/* <!-- Forecast group --> */}
                            <fieldset className="border border-gray-300 rounded-sm p-2 mb-2">
                                <legend htmlFor="forecast-group" className="block text-sm font-semibold mb-1">Forecast group</legend>
                                <div className='flex items-center border border-gray-300 rounded-sm focus-within:border focus-within:border-blue-500'>
                                    <input
                                        id="forecast-group"
                                        className='w-full text-sm outline-none leading-tight px-1 py-1 m-0.5 focus:bg-yellow-300'
                                        defaultValue={'TMGB.LEUSHI.DCWXXV_(EMEA Solution)'}
                                    />
                                    <PiDotsThreeBold className='border-l border-gray-300 w-7 h-7 p-1 bg-gray-200 m-0.5' />
                                </div>

                            </fieldset>

                            {/* <!-- Monthly patterns --> */}
                            <fieldset className="border border-gray-300 rounded-sm p-2 flex-grow space-y-4">
                                <legend className="block text-sm font-semibold mb-1">Monthly patterns</legend>
                                <div>
                                    <div className="flex items-start mb-2">
                                        <input type="radio" id="use-data" name="monthly-pattern" className="mt-1" />
                                        <label htmlFor="use-data" className="ml-1 text-sm leading-tight cursor-default select-none">Use data for this month -</label>
                                    </div>
                                    <div className="ml-5 mb-3">
                                        <label className="text-sm font-bold leading-tight">New growth rate will be:</label>
                                        <input type="number" step="0.01" min="-100" max="100" defaultValue="-100.00" className="w-[80px] border border-gray-300 rounded-sm text-sm leading-tight p-1 ml-2" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-start mb-2">
                                        <input type="radio" id="ignore-data" name="monthly-pattern" className="mt-1" />
                                        <label htmlFor="ignore-data" className="ml-1 text-sm leading-tight cursor-default select-none">Ignore data for this month -</label>
                                    </div>
                                    <div className="ml-5">
                                        <label className="text-sm font-bold leading-tight">Growth rate will remain:</label>
                                        <input type="number" step="0.01" min="-100" max="100" defaultValue="-100.00" className="w-[80px] border border-gray-300 rounded-sm text-sm leading-tight p-1 ml-2" />
                                    </div>
                                </div>
                            </fieldset>

                            {/* <!-- Options --> */}
                            <fieldset className="mt-2 border border-gray-300 rounded-sm p-2 text-sm leading-tight">
                                <legend className="block text-sm font-semibold mb-1">Options</legend>
                                <div className="flex items-center mb-1">
                                    <input type="checkbox" id="save-actual-volumes" className="cursor-default" />
                                    <label htmlFor="save-actual-volumes" className="ml-1 cursor-default select-none">Save actual volumes</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="save-holiday-factors" className="cursor-default" />
                                    <label htmlFor="save-holiday-factors" className="ml-1 cursor-default select-none">Save holiday factors</label>
                                </div>
                            </fieldset>
                        </div>

                        {/* <!-- Right panel --> */}
                        <div className="flex flex-col flex-grow p-2 text-sm leading-tight">
                            {/* <!-- Day-of-week factors --> */}
                            <fieldset className="border border-gray-300 rounded-sm p-2 mb-2 flex-grow ">
                                <legend className="text-sm font-semibold px-1">Day-of-week factors</legend>
                                <div className='flex flex-col justify-between h-full'>
                                    <div className="space-y-2 mt-2">
                                        <label htmlFor="week-beginning" className="text-sm font-semibold select-none">Use week beginning:</label>
                                        <div>
                                            <input type="date" id="week-beginning" className="border border-gray-300 rounded-sm text-sm leading-tight px-1 py-0.5 w-[110px]" />
                                            <button className="ml-1 border border-gray-300 rounded-sm  text-gray-600 text-sm px-2 py-0.5 cursor-not-allowed">Sun</button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-1 text-gray-400">
                                        <label className="flex items-center space-x-2 cursor-default select-none">
                                            <input type="radio" name="original-values" disabled />
                                            <span>Average actual values with original</span>
                                        </label>
                                        <label className="flex items-center space-x-2 cursor-default select-none">
                                            <input type="radio" name="original-values" disabled />
                                            <span>Replace original values</span>
                                        </label>
                                        <label className="flex items-center space-x-2 cursor-default select-none">
                                            <input type="radio" name="original-values" disabled />
                                            <span>Keep original values</span>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                            {/* <!-- New day of week factors --> */}
                            <fieldset className="border border-gray-300 rounded-sm p-2  w-full">
                                <legend className="text-sm font-semibold px-1">New day of week factors</legend>

                                {Object.entries(actualCountsByWeekday).map(([day, count]) => (
                                    <div className="grid grid-cols-[80px_90px] gap-x-[6em] gap-y-1 text-sm" key={day}>
                                        <label htmlFor="sat" className="font-bold w-[80px_90px] select-none cursor-default">{day}:</label>
                                        <input type="number" id="sat" step="0.01" defaultValue={count} className="border border-gray-300 rounded-sm px-1 py-0.5 text-sm leading-tight" />
                                    </div>
                                ))}
                            </fieldset>
                        </div>
                    </div >
                </div>
            )}

            {/* Calender Section */}
            {showTab === 'Calendar' && (
                <div className='flex-grow flex flex-col bg-gray-200 overflow-auto'>
                    <div className='flex gap-1 h-full w-full overflow-auto'>
                        <div className="w-full lg:w-2/5 border border-gray-200 bg-white flex flex-col overflow-hidden max-h-[90vh]">
                            {/* Header */}
                            <div className="bg-gradient-to-tr to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 flex items-center justify-between sticky top-0 z-10">
                                <span>Calendar</span>
                                <div className="flex items-center gap-1 space-x-1">
                                    <span>{format(currentDate, 'MMMM yyyy')}</span>
                                    <button><IoMdArrowDropleft className="w-5 h-5 cursor-pointer" onClick={() => setCurrentDate(subMonths(currentDate, 1))} /></button>
                                    <button
                                        onClick={() => {
                                            if (!isCurrentMonth) setCurrentDate(addMonths(currentDate, 1));
                                        }}
                                        disabled={isCurrentMonth}
                                    >
                                        <IoMdArrowDropright
                                            className={`w-5 h-5 ${isCurrentMonth ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'}`}
                                        />
                                    </button>
                                    <FcSearch className="w-5 h-5 rotate-90" />
                                    <FaSun className="text-yellow-400 w-5 h-5" />
                                    <FaShare className="text-green-500 w-5 h-5" />
                                </div>
                            </div>

                            {/* Weekday Header */}
                            <div className="grid grid-cols-7 text-center text-xs font-semibold sticky  bg-white z-10">
                                {['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                                    <div key={day} className="px-1 py-1 border border-gray-200">{day}</div>
                                ))}
                            </div>

                            {/* Date Grid */}
                            <div className="overflow-y-auto flex-grow grid grid-cols-7 text-xs text-center">
                                {calendarData.flat().map(({ date, isCurrentMonth, children }, idx) => {
                                    const isFuture = date > new Date();
                                    return (
                                        <div
                                            key={idx}
                                            className={`px-1 py-1 border-[1px] border-gray-600 h-25 ${isCurrentMonth ? 'bg-yellow-50' : 'bg-yellow-100'
                                                }`}
                                        >
                                            <div>{format(date, 'd')}</div>
                                            {!isFuture && children.map((val, i) => (
                                                <div key={i} className="text-left">{val}</div>
                                            ))}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="w-full border border-gray-200 bg-white flex flex-col flex-grow  overflow-auto">
                            <div className="bg-gradient-to-tr md:text-sm to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 select-text flex items-center justify-between">
                                <h2 className="font-bold ">Daily Values</h2>
                            </div>
                            <div className="overflow-auto flex-grow">
                                <table className="w-full table-auto text-sm">
                                    <thead className="sticky top-0 bg-white">
                                        <tr className="border-2 border-black">
                                            <th className="border-2 border-gray-100 p-2 font-semibold" colSpan={2}>
                                                Date
                                            </th>
                                            <th className="border-2 border-gray-100 p-2 font-semibold" colSpan={4}>
                                                Daily Value
                                            </th>
                                        </tr>
                                        <tr className="text-left border-2 border-black">
                                            <th className="border-2 border-gray-100 p-2 font-semibold">Day of Week</th>
                                            <th className="border-2 border-gray-100 p-2 font-semibold">Date</th>
                                            <th className="border-2 border-gray-100 p-2 font-semibold">Actual</th>
                                            <th className="border-2 border-gray-100 p-2 font-semibold">Normalized</th>
                                            <th className="border-2 border-gray-100 p-2 font-semibold">Holiday Factor</th>
                                            <th className="border-2 border-gray-100 p-2 font-semibold">Memo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {calendarData
                                            .flat()
                                            .filter(item => {
                                                const today = new Date();
                                                return item.isCurrentMonth && item.date <= today;
                                            })
                                            .map(({ date, children }, idx) => {
                                                const [actual, normalized, holidayFactor] = Array.isArray(children) ? children : [0, 0, 0];

                                                return (
                                                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-yellow-100/70' : ''}`}>
                                                        <td className="border px-2 py-1 bg-gray-100">{format(date, 'EEEE')}</td>
                                                        <td className="border px-2 py-1 bg-gray-100">{format(date, 'M/d/yyyy')}</td>
                                                        <td className="border px-2 py-1 text-right">{actual}</td>
                                                        <td className="border px-2 py-1 text-right">{normalized}</td>
                                                        <td className="border px-2 py-1 text-right">{Number(holidayFactor).toFixed(4)}</td>
                                                        <td className="border px-2 py-1 text-right"></td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>

                                    <tfoot className='bottom-0 sticky font-bold'>
                                        <tr className="bg-gray-100 sticky bottom-0 ">
                                            <td className="border px-2 py-1">Totals: </td>
                                            <td className="border px-2 py-1"></td>
                                            <td className="border px-2 py-1 text-right">{totalActual}</td>
                                            <td className="border px-2 py-1 text-right">{totalNormalized}</td>
                                            <td className="border px-2 py-1 text-right"></td>
                                            <td className="border px-2 py-1 text-right"></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className='flex items-center justify-between py-1 bg-blue-400'>
                                <div className=" text-gray-600 px-2 flex items-center gap-2">
                                    <p className='text-sm text-white font-semibold'>
                                        0 of 30 Items Selected, 0 of 4 Columns Selected, 0 Cell Selected
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}
