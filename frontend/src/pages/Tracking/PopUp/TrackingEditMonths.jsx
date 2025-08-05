import React, { useEffect, useState } from 'react';
import { RiArrowDownSFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

export default function TrackingEditMonths({ handleRightClick, selectedMonth }) {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    if (Array.isArray(selectedMonth) && selectedMonth.length > 0) {
      // Sort the selectedMonth data by date
      const sortedData = [...selectedMonth].sort((a, b) => new Date(a.date) - new Date(b.date));

      // Determine the first and last dates of the month
      const firstDate = new Date(sortedData[0].date);
      const lastDate = new Date(sortedData[sortedData.length - 1].date);

      // Calculate the start (Sunday) and end (Saturday) dates for the calendar view
      const startDate = new Date(firstDate);
      startDate.setDate(firstDate.getDate() - firstDate.getDay());

      const endDate = new Date(lastDate);
      endDate.setDate(lastDate.getDate() + (6 - lastDate.getDay()));

      // Create a map for quick lookup of schedule data by date
      const scheduleMap = {};
      sortedData.forEach(item => {
        scheduleMap[item.date] = item;
      });

      // Generate a list of all dates from startDate to endDate
      const allDates = [];
      const currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        const dateStr = currentDate.toISOString().split('T')[0];
        allDates.push({
          date: dateStr,
          ...scheduleMap[dateStr]
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }

      // Group dates into weeks
      const weeksArray = [];
      for (let i = 0; i < allDates.length; i += 7) {
        weeksArray.push(allDates.slice(i, i + 7));
      }

      setWeeks(weeksArray);
    } else {
      setWeeks([]);
    }
  }, [selectedMonth]);

  if (!weeks.length) {
    return <div className="p-4 text-center text-gray-500">No schedule data available.</div>;
  }

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="flex-1 ">
      <div className="min-w-full h-[90vh] overflow-y-auto flex flex-col bg-yellow-50 relative">
        <table className="overflow-auto border-collapse border border-blue-800 text-center text-[13px] font-sans text-black">
          <thead className='sticky top-0'>
            <tr className='bg-gray-100'>
              <td colSpan="7" className="text-[13px] font-bold py-1">
                Employee
              </td>
            </tr>
            <tr className='bg-gray-100'>
              {weekDays.map((day) => (
                <th
                  key={day}
                  className={`border-x border-blue-800 px-2 py-1 ${day === 'Saturday' || day === 'Sunday' ? 'w-[4vw]' : 'w-[11vw]'
                    }`}
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((dayData, dayIndex) => {
                  const dayName = weekDays[dayIndex];
                  // const isWeekend = dayName === 'Saturday' || dayName === 'Sunday';
                  const hasData = dayData && Object.keys(dayData).length > 1; // More than just 'date'

                  return (
                    <td key={dayIndex} className="border m-auto border-blue-800 align-top">
                      <div className="flex flex-col justify-center items-center space-y-0.5 pt-1">
                        {hasData ? (
                          <>
                            <div className="text-[11px] w-[5vw] font-normal leading-tight px-1 truncate">
                              {dayData.date}
                            </div>

                            {!false && (
                              <>
                                {dayData.title && (
                                  <div className="bg-cyan-400 w-[11vw] text-[11px] font-normal border border-black leading-tight px-1 py-[.6vh] truncate">
                                    {dayData.title}
                                  </div>
                                )}

                                {(dayData.public || dayData.Vacation || (dayData.shiftStart && dayData.shiftStop)) && (
                                  <div
                                    className={`${dayData.public || dayData.Vacation
                                      ? 'bg-red-600 flex justify-center items-center'
                                      : 'bg-green-500 flex items-center'
                                      } w-[11vw] text-[11px] font-normal leading-tight px-1 py-[.6vh] border border-black truncate text-white cursor-pointer`}
                                    onContextMenu={handleRightClick}
                                  >
                                    {dayData.public ? (
                                      <>
                                        <img
                                          alt="Red alert icon"
                                          className="mr-1"
                                          height="16"
                                          src="https://storage.googleapis.com/a1aa/image/3f2844ea-3dc9-4e5c-c45f-e0fb948355c5.jpg"
                                          width="16"
                                        />
                                        PUBLIC - Off due Public/Bank Holiday
                                      </>
                                    ) : dayData.Vacation ? (
                                      <>
                                        <img
                                          alt="Red alert icon"
                                          className="mr-1"
                                          height="16"
                                          src="https://storage.googleapis.com/a1aa/image/3f2844ea-3dc9-4e5c-c45f-e0fb948355c5.jpg"
                                          width="16"
                                        />
                                        VACA - Vacation
                                      </>
                                    ) : (
                                      <>
                                        {dayData.shiftStart} {dayData.shiftStop} SHIFT - Shift (container) (8:30)
                                      </>
                                    )}
                                  </div>
                                )}

                                <div className="bg-lime-600 text-[11px] w-[11vw] font-normal leading-tight px-1 py-[.6vh] border border-black truncate text-black">
                                  10:00am BREAK1 - Break 1 / f
                                </div>

                                <div className="flex justify-end text-xs px-1 w-[11vw]">
                                  <div className="flex justify-center border-black border px-1">
                                    <RiArrowDownSFill className="w-3 h-3" />
                                    <BsThreeDots className="w-3 h-3" />
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        ) : (
                          <div className="text-gray-400 text-[11px] italic px-1">
                            {dayData?.date || 'No data'}
                          </div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
