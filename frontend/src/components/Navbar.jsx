
import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoIosSave, IoMdArrowDropdown } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { TbHierarchy2 } from "react-icons/tb";
import { VscTypeHierarchy } from "react-icons/vsc";
import { HiPencilSquare } from "react-icons/hi2";
import { FcBinoculars } from "react-icons/fc";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { FaQuestionCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { BsCalendarWeekFill } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { useStateContext } from '../StateContext';
import { BsEraserFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  const [showSaveClose, setShowSaveClose] = useState(false);

  const [MontlyPatternSaveClose, setMontlyPatternSaveClose] = useState(false);

  const { showDWM, setShowDateWeekMonth, showDateWeekMonth, toggleSideBar, setToggleSideBar,
    timeZone, requestSave, requestMontlyPatternSave, resetMontlyPatternRequestSave
  } = useStateContext();

  const handleBack = () => {
    navigate(-1);
    setToggleSideBar(false)
  };

  const handleNext = () => {
    navigate(+1);
    setToggleSideBar(false)
  };


  useEffect(() => {
    const isVisible = localStorage.getItem('isMontlyPatternVisible') === 'true';
    setMontlyPatternSaveClose(isVisible);
  }, []);

  useEffect(() => {
    const isVisible = localStorage.getItem('showSaveClose') === 'true';
    setShowSaveClose(isVisible);
  }, []);

  const handleTabClick = (view) => {
    setShowDateWeekMonth(view);
  };

  return (
    <>
      <div className='h-[9vh] flex flex-col'>
        {/* menu section */}
        <div className='bg-gradient-to-l font-thin to-blue-300 from-blue-200 flex  flex-grow'>
          <ul className='flex items-center font-semibold text-sm py-1 gap-5 px-4'>
            <li className='cursor-pointer'>File</li>
            <li className='cursor-pointer'>Edit</li>
            <li className='cursor-pointer'>View</li>
            <li className='cursor-pointer'>Go</li>
            <li className='cursor-pointer'>Shortcuts</li>
            <li className='cursor-pointer'>Tools</li>
            <li className='cursor-pointer'>Window</li>
            <li className='cursor-pointer'>Help</li>
          </ul>
        </div>

        {/* Second menu with icons and inputbox */}
        <div className='bg-gradient-to-b font-thin to-blue-300 from-blue-100 flex  flex-grow'>
          <ul className='flex items-center font-semibold text-sm gap-3 py-1 px-4'>

            {MontlyPatternSaveClose && (
              <li
                className='cursor-pointer flex items-center gap-1 hover:text-blue-700'
                onClick={() => {
                  resetMontlyPatternRequestSave();
                  requestMontlyPatternSave();  // trigger global save flag
                }}
              >
                <IoIosSave className='w-5 h-5 text-blue-500' /> Save & Close
              </li>
            )}

            {showSaveClose && (
              <li
                className='cursor-pointer flex items-center gap-1 hover:text-blue-700'
                onClick={() => {
                  requestSave(); // trigger global save flag
                }}
              >
                <IoIosSave className='w-5 h-5 text-blue-500' /> Save & Close
              </li>
            )}


            <li className='cursor-pointer flex items-center gap-1 hover:text-blue-700' onClick={handleBack}>
              <FaArrowAltCircleLeft className='w-5 h-5 text-green-500 bg-white rounded-full p-[.4px]' /> Back
            </li>

            <li className='cursor-pointer flex items-center gap-1'>
              <IoMdArrowDropdown className='w-5 h-5 text-gray-50' />
              <FaArrowAltCircleRight className='w-5 h-5 text-green-500 bg-white rounded-full p-[.4px]' onClick={handleNext} />
              <IoMdArrowDropdown className='text-gray-100 w-5 h-5' />
            </li>
            <li className='cursor-pointer'><TbHierarchy2 className='rotate-90 w-5 h-5 text-blue-500' /></li>
            <li className='cursor-pointer'><VscTypeHierarchy className='rotate-90 w-5 h-5 text-gray-600' /></li>
            <li className='cursor-pointer'><HiPencilSquare className='w-5 h-5 text-gray-500' /></li>
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

            <li className='cursor-pointer'><FcBinoculars className='w-5 h-5' /></li>
            <li className='cursor-pointer'><IoDocumentAttachSharp className='w-5 h-5' /></li>
            <li className='cursor-pointer'><HiOutlineDocumentCheck className='w-5 h-5' /></li>

            {toggleSideBar &&
              <li className='cursor-pointer'><BsEraserFill className='w-7 h-7 rounded-md bg-yellow-200 p-1 text-green-600' /></li>
            }

            {
              showDWM &&
              <>
                <li className={`${showDateWeekMonth === 'days' ? 'bg-orange-500 border-[1px]' : ''} cursor-pointer  border-black`}
                  onClick={() => handleTabClick('days')}>
                  <span className='px-2 py-1 flex items-center gap-1'><FaCalendarDays className='w-5 h-5 text-blue-600' />Days</span>
                </li>
                <li className={`${showDateWeekMonth === 'weeks' ? 'bg-orange-500 border-[1px]' : ''} cursor-pointer  border-black`}
                  onClick={() => handleTabClick('weeks')}>
                  <span className='px-2 py-1 flex items-center gap-1'><BsCalendarWeekFill className='w-5 h-5 text-blue-600' />Week</span>
                </li>
                <li className={`${showDateWeekMonth === 'months' ? 'bg-orange-500 border-[1px]' : ''}  cursor-pointer hover:border-[1px] border-black`}
                  onClick={() => handleTabClick('months')}>
                  <span className='px-2 py-1 flex items-center gap-1'><IoCalendarNumberSharp className='w-5 h-5 text-blue-600' />Month</span>
                </li>
              </>
            }


            <li className="cursor-pointer relative">
              <input
                type="text"
                placeholder="(UTC+00:00) Dublin, Edinburgh, Lisbon, London"
                className="w-full min-w-[500px] py-1 px-3 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Time zone input"
                defaultValue={timeZone.label}
              />
              <div
                className="absolute top-1/2 right-0 transform -translate-y-1/2 border-2 border-gray-400 px-[5px] py-[6px] cursor-pointer"
                aria-label="More options"
                onClick={() => navigate('/timeZone')}
              >
                <BsThreeDots />
              </div>
            </li>

            <li className='cursor-pointer'>
              <FaQuestionCircle className='w-6 h-6 text-blue-500 border-gray-100 border-2 rounded-full' />
            </li>
          </ul>
        </div>
      </div >
    </>
  )
}

