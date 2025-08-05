import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import dayjs from 'dayjs';
import { useStateContext } from "../StateContext";

const timeZones = [
  {
    id: 1,
    label: "(UTC-04:00) Atlantic Time (Canada)",
    zone: "America/Halifax",
    inUse: true,
    bias : "-4:00",
  },
  {
    id: 2,
    label: "(UTC-05:00) Eastern Time (US & Canada)",
    zone: "America/New_York",
    inUse: true,
    bias : "-5:00",
  },
  {
    id: 3,
    label: "(UTC-06:00) Central Time (US & Canada)",
    zone: "America/Chicago",
    inUse: true,
    bias : "-6:00",
  },
  {
    id: 4,
    label: "(UTC-07:00) Mountain Time (US & Canada)",
    zone: "America/Denver",
    inUse: true,
    bias : "-7:00",
  },
  {
    id: 5,
    label: "(UTC-08:00) Pacific Time (US & Canada)",
    zone: "America/Los_Angeles",
    inUse: true,
    bias : "-8:00",
  },
  { id: 6, label: "(UTC-10:00) Hawaii", zone: "Pacific/Honolulu", inUse: true, bias : "-11:00", },
  {
    id: 7,
    label: "(UTC-09:00) Alaska",
    zone: "America/Anchorage",
    inUse: true,
    bias : "-9:00",
  },
  {
    id: 8,
    label: "(UTC-05:00) Indiana (East)",
    zone: "America/Indiana/Indianapolis",
    inUse: true,
    bias : "-5:00",
  },
  { id: 9, label: "(UTC-07:00) Arizona", zone: "America/Phoenix", inUse: true, bias : "-8:00", },
  {
    id: 10,
    label: "(UTC+00:00) Dublin, Edinburgh, Lisbon, London",
    zone: "Europe/London",
    bias : "0:00",
    inUse: true,
  },
  {
    id: 11,
    label: "(UTC+00:00) Monrovia, Reykjavik",
    zone: "Africa/Monrovia",
    inUse: true,
    bias : "-1:00",
  },
  {
    id: 12,
    label: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
    zone: "Europe/Paris",
    inUse: true,
    bias : "1:00",
  },
  {
    id: 13,
    label: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    zone: "Europe/Berlin",
    inUse: true,
    bias : "1:00",
  },
  {
    id: 14,
    label: "(UTC+02:00) Chisinau",
    zone: "Europe/Chisinau",
    inUse: true,
    bias : "2:00",
  },
  {
    id: 15,
    label: "(UTC+02:00) Athens, Bucharest",
    zone: "Europe/Bucharest",
    inUse: true,
    bias : "2:00",
  },
  // New time zones extracted from the HTML
  {
    id: 16,
    label: "(UTC+02:00) Jerusalem",
    zone: "Asia/Jerusalem",
    inUse: true,
    bias : "2:00",
  },
  {
    id: 17,
    label: "(UTC-03:30) Newfoundland",
    zone: "America/St_Johns",
    inUse: true,
    bias : "-3:30",
  },
  { id: 18, label: "(UTC-01:00) Azores", zone: "Atlantic/Azores", inUse: true, bias : "-1:00", },
  {
    id: 19,
    label: "(UTC-02:00) Mid-Atlantic - Old",
    zone: "Atlantic/Mid-Atlantic",
    inUse: true,
    bias : "-2:00",
  },
  {
    id: 20,
    label: "(UTC-03:00) Cayenne, Fortaleza",
    zone: "America/Cayenne",
    inUse: true,
    bias : "-5:00",
  },
  {
    id: 21,
    label: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
    zone: "America/Guyana",
    inUse: true,
    bias : "-5:00",
  },
  {
    id: 22,
    label: "(UTC-05:00) Bogota, Lima, Quito, Rio Branco",
    zone: "America/Bogota",
    inUse: true,
    bias : "-6:00",
  },
  {
    id: 23,
    label: "(UTC-06:00) Saskatchewan",
    zone: "America/Regina",
    inUse: true,
    bias : "-7:00",
  },
  {
    id: 24,
    label: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
    zone: "America/Mexico_City",
    inUse: true,
    bias : "-7:00",
  },
  {
    id: 25,
    label: "(UTC-12:00) International Date Line West",
    zone: "Etc/GMT+12",
    inUse: true,
    bias : "-13:00",
  },
  { id: 26, label: "(UTC+12:00) Fiji", zone: "Pacific/Fiji", inUse: true,bias : "11:00", },
  {
    id: 27,
    label: "(UTC+11:00) Solomon Is., New Caledonia",
    zone: "Pacific/Guadalcanal",
    inUse: true,
    bias : "10:00",
  },
  {
    id: 28,
    label: "(UTC+10:00) Hobart",
    zone: "Australia/Hobart",
    inUse: true,
    bias : "9:00",
  },
  {
    id: 29,
    label: "(UTC+10:00) Guam, Port Moresby",
    zone: "Pacific/Guam",
    inUse: true,
    bias : "9:00",
  },
  {
    id: 30,
    label: "(UTC+09:30) Darwin",
    zone: "Australia/Darwin",
    inUse: true,
    bias : "8:30",
  },
  {
    id: 31,
    label: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
    zone: "Asia/Shanghai",
    inUse: true,
    bias : "7:00",
  },
  { id: 32, label: "(UTC+06:00) Astana", zone: "Asia/Almaty", inUse: true, bias : "5:00",},
  {
    id: 33,
    label: "(UTC+05:00) Ashgabat, Tashkent",
    zone: "Asia/Tashkent",
    inUse: true,
    bias : "4:00",
  },
  { id: 34, label: "(UTC+04:30) Kabul", zone: "Asia/Kabul", inUse: true,bias : "3:30",},
  { id: 35, label: "(UTC+02:00) Cairo", zone: "Africa/Cairo", inUse: true ,bias : "2:00",},
  {
    id: 36,
    label: "(UTC+02:00) Harare, Pretoria",
    zone: "Africa/Johannesburg",
    inUse: true,
    bias : "1:00",
  },
  {
    id: 37,
    label: "(UTC+03:00) Moscow, St. Petersburg, Volgograd",
    zone: "Europe/Moscow",
    inUse: true,
    bias : "2:00",
  },
  {
    id: 38,
    label: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    zone: "Europe/Budapest",
    inUse: true,
    bias : "1:00",
  },
  { id: 39, label: "(UTC+04:00) Yerevan", zone: "Asia/Yerevan", inUse: true, bias : "4:00", },
  {
    id: 40,
    label: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
    zone: "Europe/Sarajevo",
    inUse: true,
    bias : "1:00",
  },
  { id: 41, label: "(UTC+03:00) Nairobi", zone: "Africa/Nairobi", inUse: true, bias : "2:00", },
  {
    id: 42,
    label: "(UTC+10:00) Brisbane",
    zone: "Australia/Brisbane",
    inUse: true,
    bias : "9:00",
  },
  {
    id: 43,
    label: "(UTC+05:00) Ekaterinburg",
    zone: "Asia/Yekaterinburg",
    inUse: true,
    bias : "4:00",
  },
];

const TimeZone = () => {
  const [currentTime, setCurrentTime] = useState(DateTime.now());
  const { timeZone, setTimeZone } = useStateContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(DateTime.now());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const handleRowClick = (tz) => {
    const time = currentTime.setZone(tz.zone);
    setTimeZone({
      label: tz.label,
      bias: tz.bias,
    });
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* ...Header and Title... */}
      <div className="flex justify-between items-center bg-white border-b border-gray-300 px-3 py-1">
        <div className="text-gray-700 text-[11px] font-normal">
          Alvaria Workforce
        </div>

        <div className="flex items-center space-x-2 text-gray-700 text-[11px] font-normal">
          <span>EN English (India)</span>

          <i className="fas fa-caret-down text-[10px]"></i>

          <i className="fas fa-expand-arrows-alt text-[12px]"></i>
        </div>
      </div>

      {/* Title */}

      <div className="bg-blue-800 text-white text-[11px] font-semibold px-2 py-1 border-b border-blue-900 select-text">
        Time Zones
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[30px_1fr_80px_60px_140px_50px] bg-blue-100 text-[11px] font-semibold text-gray-800 border-b border-blue-300 select-text">
        <div className="flex items-center pl-2 border-r border-blue-300">#</div>
        <div className="flex items-center pl-2 border-r border-blue-300">
          Time Zone
        </div>
        <div className="flex items-center justify-center border-r border-blue-300">
          Memo
        </div>
        <div className="flex items-center justify-center border-r border-blue-300">
          In Use
        </div>
        <div className="flex items-center justify-center border-r border-blue-300">
          Date and Time
        </div>
        <div className="flex items-center justify-center">Bias</div>
      </div>

      {/* Table Body */}
      <div className="flex-1 overflow-y-auto">
        <table className="w-full table-fixed border-collapse text-[11px]">
          <colgroup>
            <col style={{ width: "30px" }} />
            <col style={{ width: "auto" }} />
            <col style={{ width: "80px" }} />
            <col style={{ width: "60px" }} />
            <col style={{ width: "140px" }} />
            <col style={{ width: "50px" }} />
          </colgroup>
          <tbody>
            {timeZones.map((tz) => {
              const time = currentTime.setZone(tz.zone);
              const isSelected = timeZone.label === tz.label;

              return (
                <tr
                  key={tz.id}
                  onClick={() => handleRowClick(tz)}
                  className={`cursor-pointer border-b ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-700"
                      : "bg-yellow-50 border-gray-200"
                  }`}
                >
                  <td
                    className={`pl-2 border-r ${
                      isSelected ? "border-blue-700" : "border-gray-300"
                    } text-center`}
                  >
                    {tz.id}.
                  </td>
                  <td
                    className={`pl-2 border-r ${
                      isSelected
                        ? "border-blue-700 font-semibold"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    {tz.label}
                  </td>
                  <td
                    className={`border-r ${
                      isSelected ? "border-blue-700" : "border-gray-300"
                    }`}
                  ></td>
                  <td
                    className={`border-r ${
                      isSelected
                        ? "border-blue-700 text-center"
                        : "border-gray-300 text-center text-green-600"
                    }`}
                  >
                    {tz.inUse && <i className="fas fa-check"></i>}
                  </td>
                  <td
                    className={`border-r ${
                      isSelected
                        ? "border-blue-700 text-center"
                        : "border-gray-300 text-center text-gray-700"
                    }`}
                  >
                    {time.toFormat("M/d/yyyy h:mm:ss a")}
                  </td>
                  <td
                    className={`text-center ${
                      isSelected ? "" : "text-gray-700"
                    }`}
                  >
                    {tz.bias}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ...Footer and Buttons... */}
    </div>
  );
};

export default TimeZone;
