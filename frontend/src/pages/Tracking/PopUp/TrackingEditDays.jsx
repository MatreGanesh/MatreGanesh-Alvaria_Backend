import React, { useEffect, useState } from 'react';

export default function TrackingEditDays({ selectedMonth }) {
  const [dayData, setDayData] = useState(null);

  useEffect(() => {
    setDayData(selectedMonth);
  }, [selectedMonth]);

  // Helper to calculate top offset for shift time
  const getShiftTopOffset = (timeString) => {
    if (!timeString) return 0;
    const [hourStr, minuteStr] = timeString.split(':');
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    // Adjust for 12-hour format if necessary
    if (hour < 8) hour += 12;

    const offset = ((hour - 8) * 48) + ((minute / 60) * 48);
    return offset;
  };

  const shiftTime = dayData?.[0]?.shiftStart;
  const shiftTop = getShiftTopOffset(shiftTime);

  return (
    <>
      <div className="w-full min-w-[900px] min-h-[90vh] mx-auto border border-gray-300">
        {/* Top Blue Header */}
        <div className="bg-gradient-to-b from-[#0a3a8c] to-[#1e5dbf] h-10 flex items-center px-4">
          <div className="flex-1"></div>
          <div className="text-white text-sm font-normal">{dayData?.[0]?.name}</div>
          <div className="flex-1"></div>
        </div>

        {/* Date Bar */}
        <div className="bg-[#d9e6f6] border-b border-gray-300 text-center text-xs font-normal text-[#333] py-1">
          {dayData?.[0]?.date}
        </div>

        {/* Cyan Bar */}
        <div className="bg-[#00c8d7] border border-black text-center text-xs font-normal text-black py-1">
          {dayData?.[0]?.title}
        </div>

        <div className="flex border border-black border-t-0 max-h-full">
          {/* Left Time Column */}
          <div className="w-16 border-r-4 border-blue-900 bg-white flex flex-col justify-start text-right text-xs font-bold text-black select-text">
            {[
              "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"
            ].map((hr, index) => {
              const hourInt = parseInt(hr, 10);
              const shiftHour = parseInt(shiftTime?.split(':')[0], 10);
              const isShiftHour = shiftHour === hourInt || (shiftHour === 0 && hourInt === 12);
              return (
                <div
                  key={hr}
                  className={`flex items-center border-b border-gray-300 h-[48px] pr-2 ${isShiftHour ? 'bg-yellow-200' : ''}`}
                >
                  <span className={hr === "4" ? "text-orange-600" : ""}>{hr}</span>
                  <span className="text-[8px] align-top">
                    {(hr === "12") ? "pm" : "00"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Left Green Block (Static — Preserved) */}
          <div className="flex-1 border border-black border-l-0 bg-green-700 text-[10px] text-yellow-200 p-1 font-sans">
            SHIFT - Shift (container) ({shiftTime})
          </div>

          {/* Right Pale Yellow Background (Dynamic Area) */}
          <div className="w-96 bg-[#fff9d6] relative">
            {/* Dynamically Positioned SHIFT block */}
            {shiftTime && (
              <div
                className="absolute left-2 right-2 h-[24px] border border-black bg-green-700 text-[10px] text-yellow-200 flex items-center shadow-md"
                style={{ top: `${shiftTop}px`, boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="w-1 h-full bg-blue-900"></div>
                <div className="pl-1">
                  SHIFT - Shift (container) ({shiftTime})
                </div>
              </div>
            )}

            {/* Break 1 */}
            <div
              className="absolute top-[96px] left-2 right-2 h-[24px] border border-black bg-green-700 text-[10px] text-black flex items-center shadow-md"
              style={{ boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}
            >
              <div className="w-1 h-full bg-blue-900"></div>
              <div className="pl-1">
                10:00am-10:15am BREAK1 - Break 1 / Personal time (0:15)
              </div>
            </div>

            {/* Lunch */}
            <div
              className="absolute top-[192px] left-2 right-2 h-[24px] border border-black bg-green-700 text-[10px] text-black flex items-center shadow-md"
              style={{ boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}
            >
              <div className="w-1 h-full bg-blue-900"></div>
              <div className="pl-1">LUNCH - Unpaid Lunch (0:30)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
