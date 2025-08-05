import React from "react";
import { FaCheck } from "react-icons/fa";

const check = <FaCheck className="w-5 h-5 text-green-400" />;

const formatTo12Hour = (hour, minute) => {
    const h = hour % 12 || 12;
    const period = hour < 12 ? "AM" : "PM";
    const min = minute.toString().padStart(2, '0');
    return `${h}:${min} ${period}`;
};

const timeSlots = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = i % 2 === 0 ? 0 : 30;
    return formatTo12Hour(hour, minute);
});

console.log(timeSlots);


const headings = [
    'Open', 'Past', 'Orig Calls', 'Rev Calls', 'Rev-Act %Dev', '% to Plan',
    'Act Offered', 'Act Ans', 'Act Abn', 'Orig AHT', 'Rev AHT', 'Act AHT',
    'Rev Req', 'Act Req', 'Rev Sch', 'Rev Net', 'Act Net', 'Act Staff', 'Rev SL',
    'Act SL', 'Rev Delay', 'Act Delay'
];

// Example data with some entries
const data = {
    "8:00 AM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "8:30 AM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "9:00 AM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "9:30 AM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "10:00 AM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "10:30 AM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "11:00 AM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "11:30 AM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "12:00 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "12:30 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "1:00 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "1:30 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "2:00 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "2:30 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "3:00 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "3:30 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "4:00 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "4:30 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "5:00 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
    "5:30 PM": {
        'Open': check, 'Past': check, ['Orig Calls']: '0', ['Rev Calls']: '0', ['Rev-Act %Dev']: '0', ['% to Plan']: '0.00',
        ['Act Offered']: '0', ['Act Ans']: '0', ['Act Abn']: '0', ['Orig AHT']: '0', ['Rev AHT']: '0', ['Act AHT']: '0',
        ['Rev Req']: '0.0', ['Act Req']: '0.0', ['Rev Sch']: '0.0', ['Rev Net']: '0.00', ['Act Net']: '0.00', ['Act Staff']: '0.00', ['Rev SL']: '0.0',
        ['Act SL']: '0.0', ['Rev Delay']: '0', ['Act Delay']: '0'
    },
};


export default function IntraDayPerformenceDetails() {
    return (
        <>
            <div className="w-[85vw] h-[90vh] overflow-auto mx-auto flex flex-col">
                <div className="overflow-auto flex-grow">
                    <table className="text-nowrap w-full h-full text-sm text-center">
                        <thead className="top-0 sticky">
                            <tr>
                                <th className="border p-1 bg-gray-200 left-0 top-0 sticky">Time Period</th>
                                {headings.map((heading) => (
                                    <th key={heading} className="border p-1 bg-gray-200">
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {timeSlots.map((time) => (
                                <tr key={time}>
                                    <td className="border p-1 font-semibold bg-gray-100 left-0 sticky">{time}</td>
                                    {headings.map((heading) => {
                                        const cellData = data[time]?.[heading];

                                        // Determine background class
                                        let bgClass = "";
                                        if (cellData) {
                                            switch (heading) {
                                                case "Orig Calls":
                                                case "Orig AHT":
                                                    bgClass = "bg-orange-600";
                                                    break;
                                                case 'Rev Calls':
                                                case 'Rev-Act %Dev':
                                                case '% to Plan':
                                                case 'Rev AHT':
                                                case 'Rev Req':
                                                case 'Rev Sch':
                                                case 'Rev SL':
                                                case 'Rev Delay':
                                                    bgClass = "bg-[#5bc0be]";
                                                    break;
                                                case "Act Offered":
                                                case "Act AHT":
                                                case "Rev Net":
                                                    bgClass = "bg-[#7db600]";
                                                    break;
                                                // Add more cases as needed
                                                default:
                                                    bgClass = "bg-white"; // Default color for other data
                                                    break;
                                            }
                                        }

                                        return (
                                            <td key={heading} className={`border p-1 font-semibold ${bgClass}`}>
                                                {cellData || ""}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}


                        </tbody>
                        <tfoot className="bottom-0 sticky">
                            <tr>
                                <td className="border p-1 font-bold bg-gray-200 left-0 sticky">Footer</td>
                                {headings.map((heading) => (
                                    <td key={heading} className="border p-1 bg-gray-100">
                                        00
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div >
        </>
    )
}


