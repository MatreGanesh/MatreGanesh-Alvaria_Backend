import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import TrackingEditSegment from "../../Popup/TrackingEditSegment";
import { useStateContext } from "../../../StateContext";
import TrackingEditMonths from "./TrackingEditMonths";
import TrackingEditDays from "./TrackingEditDays";
import { IoMdArrowDropright } from "react-icons/io";
import { DateTime } from 'luxon';

import dayjs from '../../../common/dayjsSetup';

export default function TrackingEditWeek() {
  const {
    setTrackingEditSegment,
    showTrackingEditSegment,
    showDateWeekMonth,
    selectedDate,
    selectedEmployee,
  } = useStateContext();
  const { timeZone } = useStateContext();
  // console.log(selectedDate, selectedEmployee, "global data");
  const [editDate, setEditDate] = useState()

  const [selectedWeekData, setSelectedWeekData] = useState();
  const [selectedDayData, setSelectedDayData] = useState();
  const [selectedMonthData, setSelectedMonthData] = useState();

  const [weekData, setWeekData] = useState(() => {
    const storedData = localStorage.getItem("employeeScheduleData");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    const fetchAllSchedules = async () => {
      if (selectedDate && selectedEmployee) {
        // console.log(
        //   "Fetching all schedules for:",
        //   selectedDate,
        //   selectedEmployee
        // );
        try {
          const response = await fetch(
            `http://localhost:5000/api/schedule/all/${selectedDate}/${encodeURIComponent(
              selectedEmployee
            )}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          // console.log("All schedules data:", data);
          setSelectedDayData(data.daily);
          setSelectedWeekData(data.weekly);
          setSelectedMonthData(data.monthly);
        } catch (error) {
          console.error("Error fetching all schedules:", error);
        }
      }
    };

    fetchAllSchedules();
  }, [selectedDate, selectedEmployee]);

  // const weekdata = localStorage.getItem('weeklydata')

  const [showTrackingEdit, setShowTrackingEdit] = useState(false);
  const trackingEditRef = useRef(null);
  // Handle right-click event
  const handleRightClick = (event) => {
    // setEditDate(editDate)
    event.preventDefault(); // Prevent the default context menu
    setShowTrackingEdit(true); // Show TrackingEdit component
  };

  // Hide TrackingEdit when clicking outside of it
  const handleClickOutside = (event) => {
    if (
      trackingEditRef.current &&
      !trackingEditRef.current.contains(event.target)
    ) {
      setShowTrackingEdit(false); // Hide TrackingEdit component
    }
  };

  // Use effect to set up event listener for clicks outside
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside); // Cleanup event listener
    };
  }, []);

  // Calender
  // State to store the current month and year
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get the current month and year
  const currentMonth = currentDate.getMonth(); // 0-11 (January is 0)
  const currentYear = currentDate.getFullYear();

  // Function to go to the previous month
  const handlePrev = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  // Function to go to the next month
  const handleNext = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Function to get the name of the month
  const getMonthName = (monthIndex) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthIndex];
  };

  // Get the first day of the month and how many days it has
  const getMonthDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // 0-6 (Sunday-Saturday)
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getMonthDays();

  // Create an array of days to display in the calendar grid
  const calendarDays = [
    ...Array(firstDay).fill(null),
    ...Array(daysInMonth)
      .fill()
      .map((_, idx) => idx + 1),
  ];

  const handleEditFunction = () => {
    showTrackingEditSegment(true)
  }
  useEffect(() => {
    const test = dayjs("4:10 PM", "h:mm A", true);
    console.log("Parsed test:", test.format());
  }, []);

  return (
    <>
      {showTrackingEdit && (
        <div
          className="z-10 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ref={trackingEditRef}
        >
          {/* <TrackingEdit /> */}
          <div className="flex items-center justify-center max-h-[90vh]">
            <div
              className="min-w-[18vw] bg-[#fff] shadow-md shadow-black border border-blue-600 text-[13px] font-sans text-black select-none"
            >
              <ul className="">
                <li className="relative group">
                  <button
                    className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                    type="button"
                  >
                    <span>View</span>
                    <span className="text-black text-xs font-bold"><IoMdArrowDropright /></span>
                  </button>
                </li>
                <li className="relative group">
                  <button
                    className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                    type="button"
                  >
                    <span>Go To</span>
                    <span className="text-black text-xs font-normal"><IoMdArrowDropright /></span>
                  </button>
                </li>
                <li className="relative group">
                  <button
                    className="w-full text-left px-3 py-1.5 flex justify-between items-center"
                    type="button"
                  >
                    <span>Employees</span>
                    <span className="text-black text-xs font-normal"><IoMdArrowDropright /></span>
                  </button>
                </li>
                <li className="px-3 py-1.5">Settings...</li>
                <li>
                  <hr className="border-t border-blue-600 m-0" />
                </li>
                <li className="px-3 py-1.5 flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    Cut
                  </span>
                  <span className="text-xs font-normal">Ctrl+X</span>
                </li>
                <li className="px-3 py-1.5 flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    Copy
                  </span>
                  <span className="text-xs font-normal">Ctrl+C</span>
                </li>
                <li className="px-3 py-1.5 flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    Select All
                  </span>
                  <span className="text-xs font-normal">Ctrl+A</span>
                </li>
                <li>
                  <hr className="border-t border-blue-600 m-0" />
                </li>
                <li className="px-3 py-1.5 cursor-pointer"
                  onClick={handleEditFunction}>Edit...</li>
                <li className="px-3 py-1.5 flex justify-between items-center">
                  Delete
                  <span className="text-xs font-normal">Ctrl+Del</span>
                </li>
                <li className="px-3 py-1.5 flex justify-between items-center">
                  Decrement Nominal Date
                  <span className="text-xs font-normal">Ctrl+D</span>
                </li>
                <li className="px-3 py-1.5 flex justify-between items-center">
                  Increment Nominal Date
                  <span className="text-xs font-normal">Ctrl+I</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {setTrackingEditSegment && (
        <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <TrackingEditSegment
            editDate={editDate}
            selectedEmployee={selectedEmployee}
          />
        </div>
      )}

      <div className="min-w-full h-[90vh] overflow-y-auto flex flex-col bg-yellow-50 relative">
        <div className="flex-grow flex flex-col overflow-hidden font-sans ">
          {/* <!-- Top Blue Bar --> */}
          <div className=" bg-gradient-to-tl to-blue-400 from-blue-800 py-4 w-full relative"></div>
          <div className="flex-grow flex flex-1 overflow-hidden border border-black">
            {/* <!-- Left Main Contents --> */}

            {showDateWeekMonth === "weeks" && (
              <div className="flex-1 overflow-y-auto border-r border-black relative px-2">
                {/* <!-- User Name --> */}
                {selectedWeekData &&
                  selectedWeekData.map((item, index) => {
                    const biasHours = parseFloat(timeZone.bias); // "-4.00" → -4
                    // Try parsing with known possible formats
                    const parseTime = (timeStr) => {
                      const parsed = DateTime.fromFormat(timeStr.trim(), 'h:mm a', { locale: 'en' });
                      return parsed.isValid ? parsed : null;
                    };

                    const applyBias = (time, bias) => {
                      return time.plus({ hours: bias }); // bias can be negative or positive
                    };


                    // Usage
                    const shiftStart = parseTime(item.shiftStart);
                    const shiftStop = parseTime(item.shiftStop);

                    const adjustedStart = shiftStart ? applyBias(shiftStart, biasHours) : null;
                    const adjustedStop = shiftStop ? applyBias(shiftStop, biasHours) : null;


                    return (
                      <div key={index} className="border-b border-black pt-1">
                        <div className="flex justify-end text-xs px-1 py-1 border-b border-black">
                          {item.date}
                        </div>
                        <div className="bg-cyan-300 text-center text-xs py-1 border border-black">
                          {item.title}
                        </div>
                        <div
                          className={`${item.public || item.Vacation
                            ? "bg-red-600 flex justify-center items-center "
                            : "bg-green-500 flex items-center"
                            } text-xs text-black px-1 py-1 border border-black`}
                          onContextMenu={handleRightClick}
                        >
                          {item.public ? (
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
                          ) : item.Vacation ? (
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
                          ) : adjustedStart && adjustedStop ? (
                            <span>
                              {`${adjustedStart.toFormat("h:mma")} ${adjustedStop.toFormat("h:mma")} SHIFT - Shift (container) (8:30)`}
                            </span>
                          ) : (
                            <>No specific information</>
                          )}
                        </div>
                        <div className="flex justify-end text-xs px-1 py-1">
                          <div className="flex justify-center border-2 px-1">
                            <RiArrowDownSFill className="w-4 h-4" />
                            <BsThreeDots className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {/* <!-- Tuesday, April 22 --> */}
                {/* <div className="border-b border-black py-1">
                                        <div className="flex justify-end text-xs px-1 py-1 border-b border-black bg-slate-200">
                                            Tuesday, April 22
                                        </div>
                                        <div
                                            className="bg-cyan-300 text-center text-xs py-1 border border-black">
                                            TMDE.LEUSHI.DHLXXV_ - EMEA Solutions MS (GER)
                                        </div>
                                        <div className="bg-green-600 text-xs text-white px-1 py-1 border border-black"
                                            onContextMenu={handleRightClick}>
                                            8:00am 4:30pm SHIFT - Shift (container) (8:30)
                                        </div>
                                        <div className="flex justify-end text-xs px-1 py-1">
                                            <div className='flex justify-center border-2 px-1'>
                                                <RiArrowDownSFill className='w-4 h-4' />
                                                <BsThreeDots className='w-4 h-4' />
                                            </div>
                                        </div>
                                    </div> */}

                {/* <!-- Wednesday, April 23 --> */}
                {/* <div className="border-b border-black py-1">
                                        <div className="flex justify-end text-xs px-1 py-1 border-b border-black">
                                            Wednesday, April 23
                                        </div>
                                        <div
                                            className="bg-cyan-300 text-center text-xs py-1 border border-black">
                                            TMDE.LEUSHI.DHLXXV_ - EMEA Solutions MS (GER)
                                        </div>
                                        <div className="bg-green-600 text-xs text-white px-1 py-1 border border-black"
                                            onContextMenu={handleRightClick}>
                                            8:00am 4:30pm SHIFT - Shift (container) (8:30)
                                        </div>
                                        <div className="flex justify-end text-xs px-1 py-1">
                                            <div className='flex justify-center border-2 px-1'>
                                                <RiArrowDownSFill className='w-4 h-4' />
                                                <BsThreeDots className='w-4 h-4' />
                                            </div>
                                        </div>
                                    </div> */}

                {/* <!-- Thursday, April 24 --> */}
                {/* <div className="border-b border-black py-1">
                                        <div className="flex justify-end text-xs px-1 py-1 border-b border-black bg-slate-200">
                                            Thursday, April 24
                                        </div>
                                        <div
                                            className="bg-cyan-300 text-center text-xs py-1 border border-black">
                                            TMDE.LEUSHI.DHLXXV_ - EMEA Solutions MS (GER)
                                        </div>
                                        <div className="bg-green-600 text-xs text-white px-1 py-1 border border-black"
                                            onContextMenu={handleRightClick}>
                                            8:00am 4:30pm SHIFT - Shift (container) (8:30)
                                        </div>
                                        <div className="flex justify-end text-xs px-1 py-1">
                                            <div className='flex justify-center border-2 px-1'>
                                                <RiArrowDownSFill className='w-4 h-4' />
                                                <BsThreeDots className='w-4 h-4' />
                                            </div>
                                        </div>
                                    </div> */}

                {/* <!-- Friday, April 25 --> */}
                {/* <div className="border-b border-black py-1">
                                        <div className="flex justify-end text-xs px-1 py-1 border-b border-black">
                                            Friday, April 25
                                        </div>
                                        <div
                                            className="bg-cyan-300 text-center text-xs py-1 border border-black">
                                            TMDE.LEUSHI.DHLXXV_ - EMEA Solutions MS (GER)
                                        </div>
                                        <div className="bg-green-600 text-xs text-white px-1 py-1 border border-black"
                                            onContextMenu={handleRightClick}>
                                            8:00am 4:30pm SHIFT - Shift (container) (8:30)
                                        </div>
                                        <div className="flex justify-end text-xs px-1 py-1">
                                            <div className='flex justify-center border-2 px-1'>
                                                <RiArrowDownSFill className='w-4 h-4' />
                                                <BsThreeDots className='w-4 h-4' />
                                            </div>
                                        </div>
                                    </div> */}

                {/* <!-- Saturday, April 26 --> */}
                {/* <div className="border-b border-black py-1">
                                        <div className="flex justify-end text-xs px-1 py-1 ">
                                            Saturday, April 26
                                        </div>
                                    </div> */}

                {/* <!-- Sunday, April 27 --> */}
                {/* <div className="border-b border-black py-1">
                                        <div className="flex justify-end text-xs px-1 py-1 ">
                                            Sunday, April 27
                                        </div>
                                    </div> */}
              </div>
            )}

            {showDateWeekMonth === "months" && (
              <TrackingEditMonths
                handleRightClick={handleRightClick}
                selectedMonth={selectedMonthData}
              />
            )}

            {showDateWeekMonth === "days" && <TrackingEditDays selectedMonth={selectedDayData} />}

            {/* <!-- Right Sidebar --> */}
            <div className="w-56 flex flex-col border-l border-black bg-white">
              {/* <!-- Calendar --> */}
              <div className="border border-black m-1 p-1 select-none">
                <div className="flex justify-between items-center text-xs font-semibold mb-1">
                  <button
                    aria-label="Previous month"
                    className="text-black font-bold"
                    onClick={handlePrev}
                  >
                    <MdArrowLeft className="w-5 h-5" />
                  </button>
                  <div>{`${getMonthName(currentMonth)} ${currentYear}`}</div>
                  <button
                    aria-label="Next month"
                    className="text-black font-bold"
                    onClick={handleNext}
                  >
                    <MdArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-700 select-none">
                  <div>S</div>
                  <div>S</div>
                  <div>M</div>
                  <div>T</div>
                  <div>W</div>
                  <div>T</div>
                  <div>F</div>
                </div>
                <div className="grid grid-cols-7 text-center text-xs font-normal">
                  {calendarDays.map((day, idx) => (
                    <div
                      key={idx}
                      className={`${day ? "font-bold" : "text-gray-400"} ${day &&
                        currentMonth === new Date().getMonth() &&
                        currentYear === new Date().getFullYear() &&
                        new Date().getDate() === day
                        ? "bg-blue-600 text-white"
                        : ""
                        }`}
                    >
                      {day || ""}
                    </div>
                  ))}
                </div>
              </div>

              {/* <!-- Employees Section --> */}
              <div className=" m-1 flex-grow  border-[1px] border-black text-white font-bold  select-none">
                <div className="bg-gradient-to-b p-1  from-blue-700 to-blue-600">
                  Employees
                </div>
                <div className=" text-white bg-blue-500 m-1 text-xs px-2 py-1 select-text">
                  {selectedEmployee}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
