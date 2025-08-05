// import React, { useState } from "react";
// import { FcOpenedFolder } from "react-icons/fc";
// import { PiKeyFill } from "react-icons/pi";
// import { FaChalkboardUser } from "react-icons/fa6";
// import { MdContactPhone } from "react-icons/md";
// import { FcContacts } from "react-icons/fc";
// import { BiSolidUserPin } from "react-icons/bi";
// import { FcBusinessContact } from "react-icons/fc";
// import { FcCalendar } from "react-icons/fc";
// import { MdAutoAwesomeMotion } from "react-icons/md";
// import { LuFileSearch } from "react-icons/lu";
// import { FcDocument } from "react-icons/fc";
// import { MdAutoDelete } from "react-icons/md";
// import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
// import { IoArrowRedoCircleSharp } from "react-icons/io5";
// import { FcFolder } from "react-icons/fc";
// import { PiBuildingOfficeFill } from "react-icons/pi";
// import { FaUsers } from "react-icons/fa";
// import { WiDayCloudyGusts } from "react-icons/wi";
// import { IoLocation } from "react-icons/io5";
// import { FaMapLocationDot } from "react-icons/fa6";
// import { TbReportSearch } from "react-icons/tb";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
// import { FcConferenceCall } from "react-icons/fc";
// import { FcCollaboration } from "react-icons/fc";
// import { FcReadingEbook } from "react-icons/fc";
// import { PiChartLineDuotone } from "react-icons/pi";
// import { FaFileCircleQuestion } from "react-icons/fa6";
// import { FcPieChart } from "react-icons/fc";
// import { FcAreaChart } from "react-icons/fc";
// import { FcFinePrint } from "react-icons/fc";
// import { PiPresentationChartFill } from "react-icons/pi";
// import { PiPresentationChartDuotone } from "react-icons/pi";
// import { FaUsersCog } from "react-icons/fa";
// import { IoCalendarSharp } from "react-icons/io5";
// import { FcComboChart } from "react-icons/fc";
// import { NavLink } from "react-router-dom";
// import { useStateContext } from "../StateContext";




// export default function Sidebar() {

//   const { setShowDWM, toggleSideBar, ewfmData, setEwfmData } = useStateContext();

//   const [activeTab, setActiveTab] = useState('Administration');

//   const handleTabClick = (tab) => {
//     setActiveTab((prevTab) => (prevTab === tab ? tab : tab));
//   };

//   return (
//     <>
//       {!toggleSideBar &&
//         <div className="bg-white w-[20vw] h-[90vh] flex flex-col">
//           <div className=" border border-gray-900 select-none font-sans flex-grow flex flex-col">
//             {/* <!-- Header --> */}

//             {activeTab === 'Administration' &&
//               <>
//                 <div className="bg-gradient-to-tr md:text-sm to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 select-text flex items-center justify-between">
//                   Administration
//                   <MdKeyboardDoubleArrowLeft className="w-5 h-5" />
//                 </div>
//                 {/* <!-- Tree container with vertical scroll --> */}
//                 <div className="h-[355px] flex-grow overflow-y-auto scrollbar-thin bg-white text-xs text-gray-900 px-2 py-1.5 font-normal">
//                   {/* <!-- Access Control --> */}
//                   <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <FcOpenedFolder className="w-5 h-5 ml-1" />
//                         <span>
//                           Access Control
//                         </span>
//                       </div>
//                       <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <PiKeyFill className="w-5 h-5 text-yellow-400 ml-1" />
//                             <span>
//                               Employee Filter Profiles
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <NavLink
//                             to="/administration-security-profile"
//                             className={({ isActive }) =>
//                               `flex items-center space-x-1 text-gray-800 font-semibold text-[11px]
//                            ${isActive ? 'bg-gray-300' : 'text-gray-800'
//                               }`
//                             }
//                           >
//                             <PiKeyFill className="w-5 h-5 text-yellow-400 ml-1" />
//                             <span>Security Profiles</span>
//                           </NavLink>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <NavLink
//                             to="/administration-users"
//                             className={({ isActive }) =>
//                               `flex items-center space-x-1 text-gray-800 font-semibold text-[11px]
//                           ${isActive ?
//                                 'bg-gray-300' : 'text-gray-800'
//                               }`
//                             }
//                           >
//                             <FaChalkboardUser className="w-5 h-5 ml-1 text-blue-600" />
//                             <span>Users</span>
//                           </NavLink>
//                         </li>
//                       </ul>
//                     </li>

//                     {/* <!-- Communications --> */}
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <FcOpenedFolder className="w-5 h-5 ml-1" />
//                         <span>
//                           Communications
//                         </span>
//                       </div>
//                       <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <MdContactPhone className="w-5 h-5 text-blue-600 ml-1" />
//                             <span>
//                               Contact Definitions
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <MdContactPhone className="w-5 h-5 text-blue-600 ml-1" />
//                             <span>
//                               Contact Associations
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <FcContacts className="w-5 h-5 ml-1" />
//                             <span>
//                               Contact Directory
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <BiSolidUserPin className="w-5 h-5 ml-1 text-yellow-400" />
//                             <span>
//                               Contact Notifications
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <FcBusinessContact className="w-5 h-5 ml-1" />
//                             <span>
//                               Contextual Links
//                             </span>
//                           </div>
//                         </li>
//                       </ul>
//                     </li>
//                     {/* <!-- Date Window Sets --> */}
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <FcCalendar className="w-5 h-5 ml-1" />
//                         <span>
//                           Date Window Sets
//                         </span>
//                       </div>
//                     </li>
//                     {/* <!-- AutoRun Manager --> */}
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">

//                       <NavLink
//                         to="/administration-auto-run-manager"
//                         className={({ isActive }) =>
//                           `flex items-center space-x-1 text-gray-800 font-semibold text-[11px]
//                       ${isActive ? 'bg-gray-300' : 'text-gray-800'
//                           }`
//                         }
//                       >
//                         <MdAutoAwesomeMotion className="w-5 h-5 ml-1 text-green-500" />
//                         <span>AutoRun Manager</span>
//                       </NavLink>
//                     </li>

//                     {/* <!-- Event Viewer --> */}
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <LuFileSearch className="w-5 h-5 ml-1 text-blue-500" />
//                         <span>
//                           Event Viewer
//                         </span>
//                       </div>
//                     </li>
//                     {/* <!-- Official Segment Audit Trail --> */}
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <FcDocument className="w-5 h-5 ml-1" />
//                         <span>
//                           Official Segment Audit Trail
//                         </span>
//                       </div>
//                     </li>
//                     {/* <!-- Housekeeper --> */}
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <FcOpenedFolder className="w-5 h-5 ml-1" />
//                         <span>
//                           Housekeeper
//                         </span>
//                       </div>

//                       <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <FcOpenedFolder className="w-5 h-5 ml-1" />
//                             <span>
//                               Delete
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
//                             <span>
//                               ACD/Contact Server Data
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
//                             <span>
//                               Journal Entries
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
//                             <span>
//                               Official Schedule Data
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
//                             <span>
//                               Official Segment Cutoff
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
//                             <span>
//                               Permanent Closeout
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
//                             <span>
//                               System Cleanup
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
//                             <span>
//                               Agent Productivity Employee Data
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
//                             <span>
//                               Allocation Sets
//                             </span>
//                           </div>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                 </div>
//               </>
//             }

//             {activeTab === 'Employees' &&
//               <>
//                 <div className="bg-gradient-to-tr md:text-sm to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 select-text flex items-center justify-between">
//                   Employees
//                   <MdKeyboardDoubleArrowLeft className="w-5 h-5" />
//                 </div>
//                 {/* <!-- Tree container with vertical scroll --> */}
//                 <div className="h-[355px] flex-grow overflow-y-auto scrollbar-thin bg-white text-xs text-gray-900 px-2 py-1.5 font-normal">
//                   {/* <!-- Access Control --> */}
//                   <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <FcOpenedFolder className="w-5 h-5 ml-1" />
//                         <span>
//                           Employees
//                         </span>
//                       </div>
//                       <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <FcConferenceCall className="w-5 h-5 ml-1" />
//                             <span>
//                               Employee Records
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <FcCollaboration className="w-5 h-5 ml-1" />
//                             <span>
//                               Group Assignment
//                             </span>
//                           </div>
//                         </li>
//                       </ul>
//                     </li>
//                     {/* <!-- Communications --> */}
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <NavLink
//                         to="/employeese-employee-information"
//                         className={({ isActive }) =>
//                           `flex items-center space-x-1 text-gray-800 font-semibold text-[11px]
//                       ${isActive ? 'bg-gray-300' : ''
//                           }`
//                         }
//                       >
//                         <FcReadingEbook className="w-5 h-5 ml-1" />
//                         <span>Employees Information</span>
//                       </NavLink>
//                     </li>

//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <NavLink
//                         to="/employee-data-center"
//                         className={({ isActive }) =>
//                           `flex items-center space-x-1 text-gray-800 font-semibold text-[11px]
//                       ${isActive ? 'bg-gray-300' : ''
//                           }`
//                         }
//                       >
//                         <FcConferenceCall className="w-5 h-5 ml-1" />
//                         <span>Employees Datacenter</span>
//                       </NavLink>
//                     </li>

//                   </ul>
//                 </div>
//               </>
//             }

//             {activeTab === 'Forecasting' &&
//               <>
//                 <div className="bg-gradient-to-tr md:text-sm to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 select-text flex items-center justify-between">
//                   Forecasting
//                   <MdKeyboardDoubleArrowLeft className="w-5 h-5" />
//                 </div>
//                 {/* <!-- Tree container with vertical scroll --> */}
//                 <div className="h-[355px] flex-grow overflow-y-auto scrollbar-thin bg-white text-xs text-gray-900 px-2 py-1.5 font-normal">
//                   {/* <!-- Access Control --> */}
//                   <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <FcOpenedFolder className="w-5 h-5 ml-1" />
//                         <span>
//                           Forecast Group
//                         </span>
//                       </div>
//                       <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <FcFolder className="w-5 h-5 ml-1" />
//                             <span>
//                               Historical Patterns
//                             </span>
//                           </div>
//                           <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>
//                                   Normal NCO
//                                 </span>
//                               </div>
//                             </li>
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>
//                                   Normal AHT
//                                 </span>
//                               </div>
//                             </li>
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <NavLink
//                                 to="/forecasting-monthly-pattern-updates"
//                                 className={({ isActive }) =>
//                                   `flex items-center space-x-1 font-semibold text-[11px]
//                           ${isActive ? 'bg-gray-300' : 'text-gray-800'
//                                   }`
//                                 }
//                               >
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>Monthly Updates</span>
//                               </NavLink>
//                             </li>

//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <NavLink
//                                 to="/forecasting-holiday-factors"
//                                 className={({ isActive }) =>
//                                   `flex items-center space-x-1 font-semibold text-[11px]
//                           ${isActive ? 'bg-gray-300' : 'text-gray-800'
//                                   }`
//                                 }
//                               >
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>Holiday Factors</span>
//                               </NavLink>
//                             </li>

//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>
//                                   Cycle Cuts
//                                 </span>
//                               </div>
//                             </li>
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>
//                                   Campaign Sets
//                                 </span>
//                               </div>
//                             </li>
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>
//                                   Special NCO
//                                 </span>
//                               </div>
//                             </li>
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>
//                                   Special AHT
//                                 </span>
//                               </div>
//                             </li>
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <NavLink
//                                 to="/forecasting-daily-aht-sets"
//                                 className={({ isActive }) =>
//                                   `flex items-center space-x-1 font-semibold text-[11px]
//                           ${isActive ? 'bg-gray-300' : 'text-gray-800'
//                                   }`
//                                 }
//                               >
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>Daily AHT Sets</span>
//                               </NavLink>
//                             </li>

//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>
//                                   Outbound Campaign Patterns
//                                 </span>
//                               </div>
//                             </li>
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>
//                                   Historical Pattern Scenarios
//                                 </span>
//                               </div>
//                             </li>
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                 <span>
//                                   Automatic Updates
//                                 </span>
//                               </div>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>

//                       <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <FcFolder className="w-5 h-5 ml-1" />
//                             <span>
//                               Overrides
//                             </span>
//                           </div>
//                           <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <FcAreaChart className="w-5 h-5 ml-1 text-gray-400" />
//                                 <span>
//                                   Volume
//                                 </span>
//                               </div>
//                             </li>
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <FcAreaChart className="w-5 h-5 ml-1 text-gray-400" />
//                                 <span>
//                                   AHT
//                                 </span>
//                               </div>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>
//                       <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <NavLink
//                             to="/forecasting-forcasting-scenario"
//                             className={({ isActive }) =>
//                               `flex items-center space-x-1 font-semibold text-[11px]
//                           ${isActive ? 'bg-gray-300' : 'text-gray-800'
//                               }`
//                             }
//                           >
//                             <FcReadingEbook className="w-5 h-5 ml-1" />
//                             <span>Forecasting Scenarios</span>
//                           </NavLink>
//                         </li>

//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <FaFileCircleQuestion className="w-5 h-5 ml-1 text-gray-500" />
//                             <span>
//                               Forecast Group Forecasts
//                             </span>
//                           </div>
//                         </li>
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <FcPieChart className="w-5 h-5 ml-1" />
//                             <span>
//                               Contact Allocation Sets
//                             </span>
//                           </div>
//                         </li>
//                       </ul>
//                     </li>

//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <ul className="space-y-0.5">
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <FcOpenedFolder className="w-5 h-5 ml-1" />
//                             <span>
//                               Staff Group
//                             </span>
//                           </div>

//                           {/* <!-- Access Control --> */}
//                           <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <FcFolder className="w-5 h-5 ml-1" />
//                                 <span>
//                                   Historical Patterns
//                                 </span>
//                               </div>
//                               <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                                 <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                                   <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                     <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                     <span>
//                                       Staff Shrinkage
//                                     </span>
//                                   </div>
//                                 </li>
//                                 <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                                   <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                     <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
//                                     <span>
//                                       Staffing Overlays
//                                     </span>
//                                   </div>
//                                 </li>
//                               </ul>
//                             </li>

//                           </ul>

//                           <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                             <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                               <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                                 <FcAreaChart className="w-5 h-5 ml-1" />
//                                 <span>
//                                   Staffing Overrides
//                                 </span>
//                               </div>
//                             </li>
//                           </ul>
//                         </li>

//                       </ul>
//                     </li>
//                   </ul>
//                 </div>
//               </>
//             }

//             {
//               activeTab === 'Tracking' &&
//               <>
//                 <div className="bg-gradient-to-tr md:text-sm to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 select-text flex items-center justify-between">
//                   Tracking
//                   <MdKeyboardDoubleArrowLeft className="w-5 h-5" />
//                 </div>
//                 {/* <!-- Tree container with vertical scroll --> */}
//                 <div className="h-[355px] flex-grow overflow-y-auto scrollbar-thin bg-white text-xs text-gray-900 px-2 py-1.5 font-normal">
//                   {/* <!-- Access Control --> */}
//                   <ul className="space-y-0.5">
//                     <li>
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <span >
//                           Performance
//                         </span>
//                       </div>
//                     </li>
//                     <li>
//                       <NavLink
//                         to="/view-intra-day-performance"
//                         className={({ isActive }) =>
//                           `flex items-center space-x-1 text-gray-800 font-semibold text-[11px]
//                       ${isActive ? 'bg-gray-300' : 'text-gray-800'
//                           }`
//                         }
//                       >
//                         <FcFinePrint className="w-5 h-5" />
//                         View Intra-Day Performance
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink to="/tracking/Intra_Day_Performance"
//                         className={({ isActive }) =>
//                           `flex items-center space-x-1 text-gray-800 font-semibold text-[11px]
//                       ${isActive ? 'bg-gray-300' : 'text-gray-800'
//                           }`
//                         }
//                       >
//                         <PiPresentationChartFill className="w-5 h-5 text-green-500" />
//                         Intra-Day Performance
//                       </NavLink>
//                     </li>
//                     <li>
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <PiPresentationChartDuotone className="w-5 h-5" />
//                         <span>
//                           Multidimensional Intra-Day Performance
//                         </span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <FaUsersCog className="w-5 h-5 text-blue-600" />
//                         <span>
//                           Staff Adjustments
//                         </span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <IoCalendarSharp className="w-5 h-5 text-purple-600" />
//                         <span>
//                           Back-Office Performance
//                         </span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <FcComboChart className="w-5 h-5" />
//                         <span>
//                           Multi-Channel Performance
//                         </span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <span>
//                           Intra-Day Time Line
//                         </span>
//                       </div>
//                     </li>
//                     <li>
//                       <NavLink
//                         to="/tracking-official-schedul-editor"
//                         className={({ isActive }) =>
//                           `flex items-center space-x-1 text-gray-800 font-semibold text-[11px]
//                       ${isActive ? 'bg-gray-300' : 'text-gray-800'
//                           }`
//                         }
//                       >
//                         Official Schedule Editor
//                       </NavLink>
//                     </li>

//                     <li>
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <span>
//                           Official Segment Worksheet
//                         </span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <span>
//                           Schedule Summary
//                         </span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <span>
//                           Shrinkage Analysis
//                         </span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <span>
//                           Superstate Hours Analysis
//                         </span>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </>
//             }


//             {/* <!-- Bottom navigation --> */}
//             <div className="bg-gradient-to-b from-[#3a7bd5] to-[#00d2ff] text-white text-xs font-semibold ">
//               <ul>
//                 <li className="flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer hover:bg-blue-600">
//                   <IoArrowRedoCircleSharp className="w-5 h-5 text-green-600 bg-white rounded-full" />
//                   Shortcuts
//                 </li>
//                 <li className="flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer hover:bg-blue-600">
//                   <FcFolder className="w-5 h-5" />
//                   Configuration
//                 </li>
//                 <li className={`${activeTab === 'Administration' ? 'bg-yellow-600' : ''} flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer`}
//                   onClick={() => { handleTabClick('Administration'); setShowDWM(false); }}>
//                   <PiBuildingOfficeFill className="w-5 h-5 text-blue-600" />
//                   Administration
//                 </li>
//                 <li className={`${activeTab === 'Employees' ? 'bg-yellow-600' : ''} flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer`}
//                   onClick={() => { handleTabClick('Employees'); setShowDWM(false); }}>
//                   <FaUsers className="w-5 h-5 text-blue-800" />
//                   Employees
//                 </li>
//                 <li className={`${activeTab === 'Forecasting' ? 'bg-yellow-600' : ''} flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer`}
//                   onClick={() => { handleTabClick('Forecasting'); setShowDWM(false); }}>
//                   <WiDayCloudyGusts className="w-5 h-5 text-gray-600" />
//                   Forecasting
//                 </li>
//                 <li className="flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer hover:bg-blue-600">
//                   <FcCalendar className="w-5 h-5" />
//                   Scheduling
//                 </li>
//                 <li className={`${activeTab === 'Tracking' ? 'bg-yellow-600' : ''} flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer`}
//                   onClick={() => handleTabClick('Tracking')}>
//                   <IoLocation className="w-5 h-5 text-blue-700" />
//                   Tracking
//                 </li>
//                 <li className="flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer hover:bg-blue-600">
//                   <FaMapLocationDot className="w-5 h-5 text-blue-700" />
//                   Advanced Tracking
//                 </li>
//                 <li className="flex items-center gap-2 px-3 py-1 border-b cursor-pointer hover:bg-blue-600">
//                   <TbReportSearch className="w-5 h-5 text-gray-600" />
//                   Reports
//                 </li>
//                 <li className="px-3 py-1 cursor-pointer hover:bg-blue-600">
//                   <MdOutlineKeyboardDoubleArrowRight className="w-5 h-5 float-end" />
//                 </li>
//               </ul>
//             </div>
//           </div >
//         </div >
//       }

//       {toggleSideBar &&
//         <div className="bg-white w-[15vw] h-[90vh] flex flex-col">
//           <div className=" border border-gray-900 select-none font-sans flex-grow flex flex-col">
//             {/* <!-- Tree container with vertical scroll --> */}
//             <div className="h-[355px] flex-grow overflow-y-auto scrollbar-thin bg-white text-xs text-gray-900 px-2 py-1.5 font-normal">
//               {/* <!-- Access Control --> */}
//               <ul className="relative mt-0.5 space-y-0.5 ">
//                 <li className=" cursor-pointer space-x-2 before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                   <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                     <FcOpenedFolder className="w-5 h-5 ml-1" />
//                     <span>
//                       {ewfmData[0]?.EWFMDdeptCode}
//                     </span>
//                   </div>
//                   <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <input type="checkbox" className="ml-1.5 w-4 h-4" /><FcComboChart className="w-5 h-5 ml-1" />
//                         <span>
//                           {ewfmData[0]?.Voice}
//                         </span>
//                       </div>
//                       <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <input type="checkbox" className="ml-1.5 w-4 h-4" /><FcConferenceCall className="w-5 h-5 ml-1" />
//                             <span>

//                             </span>
//                           </div>
//                         </li>
//                       </ul>
//                     </li>
//                     <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                       <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                         <input type="checkbox" className="ml-1.5 w-4 h-4" /><FcComboChart className="w-5 h-5 ml-1" />
//                         <span>
//                           {ewfmData[0]?.Cases}
//                         </span>
//                       </div>
//                       <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
//                         <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
//                           <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
//                             <input type="checkbox" className="ml-1.5 w-4 h-4" /><FcConferenceCall className="w-5 h-5 ml-1" />
//                             <span></span>
//                           </div>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div >
//         </div>
//       }

//     </>
//   );
// }


import React, { useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { PiKeyFill } from "react-icons/pi";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { FcContacts } from "react-icons/fc";
import { BiSolidUserPin } from "react-icons/bi";
import { FcBusinessContact } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { MdAutoAwesomeMotion } from "react-icons/md";
import { LuFileSearch } from "react-icons/lu";
import { FcDocument } from "react-icons/fc";
import { MdAutoDelete } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import { FcFolder } from "react-icons/fc";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { WiDayCloudyGusts } from "react-icons/wi";
import { IoLocation } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FcConferenceCall } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { PiChartLineDuotone } from "react-icons/pi";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { FcPieChart } from "react-icons/fc";
import { FcAreaChart } from "react-icons/fc";
import { FcFinePrint } from "react-icons/fc";
import { PiPresentationChartFill } from "react-icons/pi";
import { PiPresentationChartDuotone } from "react-icons/pi";
import { FaUsersCog } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
import { FcComboChart } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../StateContext";
import { useLocation } from 'react-router-dom';





export default function Sidebar() {

  const { setShowDWM, toggleSideBar, ewfmData } = useStateContext();

  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('activeTab') || 'Administration';
  });


  const handleTabClick = (tab) => {
    localStorage.setItem('activeTab', tab);
    setActiveTab(tab);
  };




  return (
    <>
      {!toggleSideBar &&
        <div className="bg-white w-[20vw] h-[90vh] flex flex-col">
          <div className=" border border-gray-900 select-none font-sans flex-grow flex flex-col">
            {/* <!-- Header --> */}

            {activeTab === 'Administration' &&
              <>
                <div className="bg-gradient-to-tr md:text-sm to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 select-text flex items-center justify-between">
                  Administration
                  <MdKeyboardDoubleArrowLeft className="w-5 h-5" />
                </div>
                {/* <!-- Tree container with vertical scroll --> */}
                <div className="h-[355px] flex-grow overflow-y-auto scrollbar-thin bg-white text-xs text-gray-900 px-2 py-1.5 font-normal">
                  {/* <!-- Access Control --> */}
                  <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <FcOpenedFolder className="w-5 h-5 ml-1" />
                        <span>
                          Access Control
                        </span>
                      </div>
                      <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <PiKeyFill className="w-5 h-5 text-yellow-400 ml-1" />
                            <span>
                              Employee Filter Profiles
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <NavLink
                            to="/administration-security-profile"
                            className={({ isActive }) =>
                              `flex items-center space-x-1 text-green-600 font-bold text-[11px]
                           ${isActive ? 'bg-gray-300' : 'text-gray-800'
                              }`
                            }
                          >
                            <PiKeyFill className="w-5 h-5 text-yellow-400 ml-1" />
                            <span>Security Profiles</span>
                          </NavLink>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <NavLink
                            to="/administration-users"
                            className={({ isActive }) =>
                              `flex items-center space-x-1 text-green-600 font-bold text-[11px]  
                          ${isActive ?
                                'bg-gray-300' : 'text-gray-800'
                              }`
                            }
                          >
                            <FaChalkboardUser className="w-5 h-5 ml-1 text-blue-600" />
                            <span>Users</span>
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    {/* <!-- Communications --> */}
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <FcOpenedFolder className="w-5 h-5 ml-1" />
                        <span>
                          Communications
                        </span>
                      </div>
                      <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <MdContactPhone className="w-5 h-5 text-blue-600 ml-1" />
                            <span>
                              Contact Definitions
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <MdContactPhone className="w-5 h-5 text-blue-600 ml-1" />
                            <span>
                              Contact Associations
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <FcContacts className="w-5 h-5 ml-1" />
                            <span>
                              Contact Directory
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <BiSolidUserPin className="w-5 h-5 ml-1 text-yellow-400" />
                            <span>
                              Contact Notifications
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <FcBusinessContact className="w-5 h-5 ml-1" />
                            <span>
                              Contextual Links
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Date Window Sets --> */}
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <FcCalendar className="w-5 h-5 ml-1" />
                        <span>
                          Date Window Sets
                        </span>
                      </div>
                    </li>
                    {/* <!-- AutoRun Manager --> */}
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">

                      <NavLink
                        to="/administration-auto-run-manager"
                        className={({ isActive }) =>
                          `flex items-center space-x-1 text-green-600 font-bold text-[11px] 
                      ${isActive ? 'bg-gray-300' : 'text-gray-800'
                          }`
                        }
                      >
                        <MdAutoAwesomeMotion className="w-5 h-5 ml-1 text-green-500" />
                        <span>AutoRun Manager</span>
                      </NavLink>
                    </li>

                    {/* <!-- Event Viewer --> */}
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <LuFileSearch className="w-5 h-5 ml-1 text-blue-500" />
                        <span>
                          Event Viewer
                        </span>
                      </div>
                    </li>
                    {/* <!-- Official Segment Audit Trail --> */}
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <FcDocument className="w-5 h-5 ml-1" />
                        <span>
                          Official Segment Audit Trail
                        </span>
                      </div>
                    </li>
                    {/* <!-- Housekeeper --> */}
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <FcOpenedFolder className="w-5 h-5 ml-1" />
                        <span>
                          Housekeeper
                        </span>
                      </div>

                      <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <FcOpenedFolder className="w-5 h-5 ml-1" />
                            <span>
                              Delete
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
                            <span>
                              ACD/Contact Server Data
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
                            <span>
                              Journal Entries
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
                            <span>
                              Official Schedule Data
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
                            <span>
                              Official Segment Cutoff
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
                            <span>
                              Permanent Closeout
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
                            <span>
                              System Cleanup
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
                            <span>
                              Agent Productivity Employee Data
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <MdAutoDelete className="w-5 h-5 ml-1 text-blue-500" />
                            <span>
                              Allocation Sets
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </>
            }

            {activeTab === 'Employees' &&
              <>
                <div className="bg-gradient-to-tr md:text-sm to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 select-text flex items-center justify-between">
                  Employees
                  <MdKeyboardDoubleArrowLeft className="w-5 h-5" />
                </div>
                {/* <!-- Tree container with vertical scroll --> */}
                <div className="h-[355px] flex-grow overflow-y-auto scrollbar-thin bg-white text-xs text-gray-900 px-2 py-1.5 font-normal">
                  {/* <!-- Access Control --> */}
                  <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <FcOpenedFolder className="w-5 h-5 ml-1" />
                        <span>
                          Employees
                        </span>
                      </div>
                      <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <FcConferenceCall className="w-5 h-5 ml-1" />
                            <span>
                              Employee Records
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <FcCollaboration className="w-5 h-5 ml-1" />
                            <span>
                              Group Assignment
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Communications --> */}
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <NavLink
                        to="/employeese-employee-information"
                        className={({ isActive }) =>
                          `flex items-center space-x-1 text-green-600 font-bold text-[11px] 
                      ${isActive ? 'bg-gray-300' : ''
                          }`
                        }
                      >
                        <FcReadingEbook className="w-5 h-5 ml-1" />
                        <span>Employees Information</span>
                      </NavLink>
                    </li>

                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <NavLink
                        to="/employee-data-center"
                        className={({ isActive }) =>
                          `flex items-center space-x-1 text-green-600 font-bold text-[11px] 
                      ${isActive ? 'bg-gray-300' : ''
                          }`
                        }
                      >
                        <FcConferenceCall className="w-5 h-5 ml-1" />
                        <span>Employees Datacenter</span>
                      </NavLink>
                    </li>

                  </ul>
                </div>
              </>
            }

            {activeTab === 'Forecasting' &&
              <>
                <div className="bg-gradient-to-tr md:text-sm to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 select-text flex items-center justify-between">
                  Forecasting
                  <MdKeyboardDoubleArrowLeft className="w-5 h-5" />
                </div>
                {/* <!-- Tree container with vertical scroll --> */}
                <div className="h-[355px] flex-grow overflow-y-auto scrollbar-thin bg-white text-xs text-gray-900 px-2 py-1.5 font-normal">
                  {/* <!-- Access Control --> */}
                  <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <FcOpenedFolder className="w-5 h-5 ml-1" />
                        <span>
                          Forecast Group
                        </span>
                      </div>
                      <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <FcFolder className="w-5 h-5 ml-1" />
                            <span>
                              Historical Patterns
                            </span>
                          </div>
                          <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>
                                  Normal NCO
                                </span>
                              </div>
                            </li>
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>
                                  Normal AHT
                                </span>
                              </div>
                            </li>
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <NavLink
                                to="/forecasting-monthly-pattern-updates"
                                className={({ isActive }) =>
                                  `flex items-center space-x-1 text-green-600 font-bold text-[11px]
                          ${isActive ? 'bg-gray-300' : 'text-gray-800'
                                  }`
                                }
                              >
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>Monthly Updates</span>
                              </NavLink>
                            </li>

                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <NavLink
                                to="/forecasting-holiday-factors"
                                className={({ isActive }) =>
                                  `flex items-center space-x-1 text-green-600 font-bold text-[11px]
                          ${isActive ? 'bg-gray-300' : 'text-gray-800'
                                  }`
                                }
                              >
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>Holiday Factors</span>
                              </NavLink>
                            </li>

                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>
                                  Cycle Cuts
                                </span>
                              </div>
                            </li>
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>
                                  Campaign Sets
                                </span>
                              </div>
                            </li>
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>
                                  Special NCO
                                </span>
                              </div>
                            </li>
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>
                                  Special AHT
                                </span>
                              </div>
                            </li>
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <NavLink
                                to="/forecasting-daily-aht-sets"
                                className={({ isActive }) =>
                                  `flex items-center space-x-1 text-green-600 font-bold text-[11px]
                          ${isActive ? 'bg-gray-300' : 'text-gray-800'
                                  }`
                                }
                              >
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>Daily AHT Sets</span>
                              </NavLink>
                            </li>

                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>
                                  Outbound Campaign Patterns
                                </span>
                              </div>
                            </li>
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>
                                  Historical Pattern Scenarios
                                </span>
                              </div>
                            </li>
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                <span>
                                  Automatic Updates
                                </span>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>

                      <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <FcFolder className="w-5 h-5 ml-1" />
                            <span>
                              Overrides
                            </span>
                          </div>
                          <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <FcAreaChart className="w-5 h-5 ml-1 text-gray-400" />
                                <span>
                                  Volume
                                </span>
                              </div>
                            </li>
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <FcAreaChart className="w-5 h-5 ml-1 text-gray-400" />
                                <span>
                                  AHT
                                </span>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <NavLink
                            to="/forecasting-forcasting-scenario"
                            className={({ isActive }) =>
                              `flex items-center space-x-1 text-green-600 font-bold text-[11px]
                          ${isActive ? 'bg-gray-300' : 'text-gray-800'
                              }`
                            }
                          >
                            <FcReadingEbook className="w-5 h-5 ml-1" />
                            <span>Forecasting Scenarios</span>
                          </NavLink>
                        </li>

                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <FaFileCircleQuestion className="w-5 h-5 ml-1 text-gray-500" />
                            <span>
                              Forecast Group Forecasts
                            </span>
                          </div>
                        </li>
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <FcPieChart className="w-5 h-5 ml-1" />
                            <span>
                              Contact Allocation Sets
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <ul className="space-y-0.5">
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <FcOpenedFolder className="w-5 h-5 ml-1" />
                            <span>
                              Staff Group
                            </span>
                          </div>

                          {/* <!-- Access Control --> */}
                          <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <FcFolder className="w-5 h-5 ml-1" />
                                <span>
                                  Historical Patterns
                                </span>
                              </div>
                              <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                                <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                                  <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                    <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                    <span>
                                      Staff Shrinkage
                                    </span>
                                  </div>
                                </li>
                                <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                                  <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                    <PiChartLineDuotone className="w-5 h-5 ml-1 text-blue-500" />
                                    <span>
                                      Staffing Overlays
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </li>

                          </ul>

                          <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                            <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                              <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                                <FcAreaChart className="w-5 h-5 ml-1" />
                                <span>
                                  Staffing Overrides
                                </span>
                              </div>
                            </li>
                          </ul>
                        </li>

                      </ul>
                    </li>
                  </ul>
                </div>
              </>
            }

            {
              activeTab === 'Tracking' &&
              <>
                <div className="bg-gradient-to-tr md:text-sm to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 select-text flex items-center justify-between">
                  Tracking
                  <MdKeyboardDoubleArrowLeft className="w-5 h-5" />
                </div>
                {/* <!-- Tree container with vertical scroll --> */}
                <div className="h-[355px] flex-grow overflow-y-auto scrollbar-thin bg-white text-xs text-gray-900 px-2 py-1.5 font-normal">
                  {/* <!-- Access Control --> */}
                  <ul className="space-y-0.5">
                    <li>
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <span >
                          Performance
                        </span>
                      </div>
                    </li>
                    <li>
                      <NavLink
                        to="/view-intra-day-performance"
                        className={({ isActive }) =>
                          `flex items-center space-x-1 text-green-600 font-bold text-[11px]
                      ${isActive ? 'bg-gray-300' : 'text-gray-800'
                          }`
                        }
                      >
                        <FcFinePrint className="w-5 h-5" />
                        View Intra-Day Performance
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/tracking/Intra_Day_Performance"
                        className={({ isActive }) =>
                          `flex items-center space-x-1 text-green-600 font-bold text-[11px]
                      ${isActive ? 'bg-gray-300' : 'text-gray-800'
                          }`
                        }
                      >
                        <PiPresentationChartFill className="w-5 h-5 text-green-500" />
                        Intra-Day Performance
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/tracking/Multidimensional_Intra_Day_Performance"
                        className={({ isActive }) =>
                          `flex items-center space-x-1 text-green-600 font-bold text-[11px]
                      ${isActive ? 'bg-gray-300' : 'text-gray-800'
                          }`
                        }
                      >
                        <PiPresentationChartDuotone className="w-5 h-5 text-green-500" />
                        Multidimensional Intra-Day Performance
                      </NavLink>
                    </li>
                    {/* <li>
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <PiPresentationChartDuotone className="w-5 h-5" />
                        <span>
                          Multidimensional Intra-Day Performance
                        </span>
                      </div>
                    </li> */}
                    <li>
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <FaUsersCog className="w-5 h-5 text-blue-600" />
                        <span>
                          Staff Adjustments
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <IoCalendarSharp className="w-5 h-5 text-purple-600" />
                        <span>
                          Back-Office Performance
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <FcComboChart className="w-5 h-5" />
                        <span>
                          Multi-Channel Performance
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <span>
                          Intra-Day Time Line
                        </span>
                      </div>
                    </li>
                    <li>
                      <NavLink
                        to="/tracking-official-schedul-editor"
                        className={({ isActive }) =>
                          `flex items-center space-x-1 text-green-600 font-bold text-[11px] 
                      ${isActive ? 'bg-gray-300' : 'text-gray-800'
                          }`
                        }
                      >
                        Official Schedule Editor
                      </NavLink>
                    </li>

                    <li>
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <span>
                          Official Segment Worksheet
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <span>
                          Schedule Summary
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <span>
                          Shrinkage Analysis
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <span>
                          Superstate Hours Analysis
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            }


            {/* <!-- Bottom navigation --> */}
            <div className="bg-gradient-to-b from-[#3a7bd5] to-[#00d2ff] text-white text-xs font-semibold ">
              <ul>
                <li className="flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer hover:bg-blue-600">
                  <IoArrowRedoCircleSharp className="w-5 h-5 text-green-600 bg-white rounded-full" />
                  Shortcuts
                </li>
                <li className="flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer hover:bg-blue-600">
                  <FcFolder className="w-5 h-5" />
                  Configuration
                </li>
                <li className={`${activeTab === 'Administration' ? 'bg-yellow-600' : ''} flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer`}
                  onClick={() => { handleTabClick('Administration'); setShowDWM(false); }}>
                  <PiBuildingOfficeFill className="w-5 h-5 text-blue-600" />
                  Administration
                </li>
                <li className={`${activeTab === 'Employees' ? 'bg-yellow-600' : ''} flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer`}
                  onClick={() => { handleTabClick('Employees'); setShowDWM(false); }}>
                  <FaUsers className="w-5 h-5 text-blue-800" />
                  Employees
                </li>
                <li className={`${activeTab === 'Forecasting' ? 'bg-yellow-600' : ''} flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer`}
                  onClick={() => { handleTabClick('Forecasting'); setShowDWM(false); }}>
                  <WiDayCloudyGusts className="w-5 h-5 text-gray-600" />
                  Forecasting
                </li>
                <li className="flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer hover:bg-blue-600">
                  <FcCalendar className="w-5 h-5" />
                  Scheduling
                </li>
                <li className={`${activeTab === 'Tracking' ? 'bg-yellow-600' : ''} flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer`}
                  onClick={() => handleTabClick('Tracking')}>
                  <IoLocation className="w-5 h-5 text-blue-700" />
                  Tracking
                </li>
                <li className="flex items-center gap-2 px-3 py-1 border-b border-white/30 cursor-pointer hover:bg-blue-600">
                  <FaMapLocationDot className="w-5 h-5 text-blue-700" />
                  Advanced Tracking
                </li>
                <li className="flex items-center gap-2 px-3 py-1 border-b cursor-pointer hover:bg-blue-600">
                  <TbReportSearch className="w-5 h-5 text-gray-600" />
                  Reports
                </li>
                <li className="px-3 py-1 cursor-pointer hover:bg-blue-600">
                  <MdOutlineKeyboardDoubleArrowRight className="w-5 h-5 float-end" />
                </li>
              </ul>
            </div>
          </div >
        </div >
      }

      {toggleSideBar &&
        <div className="bg-white w-[15vw] h-[90vh] flex flex-col">
          <div className=" border border-gray-900 select-none font-sans flex-grow flex flex-col">
            {/* <!-- Tree container with vertical scroll --> */}
            <div className="h-[355px] flex-grow overflow-y-auto scrollbar-thin bg-white text-xs text-gray-900 px-2 py-1.5 font-normal">
              {/* <!-- Access Control --> */}
              <ul className="relative mt-0.5 space-y-0.5 ">
                <li className=" cursor-pointer space-x-2 before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                  <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                    <FcOpenedFolder className="w-5 h-5 ml-1" />
                    <span>
                      {ewfmData[0]?.EWFMDdeptCode}
                    </span>
                  </div>
                  <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <input type="checkbox" className="ml-1.5 w-4 h-4" /><FcComboChart className="w-5 h-5 ml-1" />
                        <span>
                          {ewfmData[0]?.Voice}
                        </span>
                      </div>
                      <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <input type="checkbox" className="ml-1.5 w-4 h-4" /><FcConferenceCall className="w-5 h-5 ml-1" />
                            <span>

                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                      <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                        <input type="checkbox" className="ml-1.5 w-4 h-4" /><FcComboChart className="w-5 h-5 ml-1" />
                        <span>
                          {ewfmData[0]?.Cases}
                        </span>
                      </div>
                      <ul className="relative mt-0.5 space-y-0.5 pl-2 border-l-2 border-gray-500 border-dotted">
                        <li className=" cursor-pointer space-x-2 before:content-['....']   before:absolute before:w-3 before:h-0.5  before:left-[1px]">
                          <div className="flex items-center space-x-1 text-gray-800 font-semibold text-[11px]">
                            <input type="checkbox" className="ml-1.5 w-4 h-4" /><FcConferenceCall className="w-5 h-5 ml-1" />
                            <span></span>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div >
        </div>
      }

    </>
  );
}
