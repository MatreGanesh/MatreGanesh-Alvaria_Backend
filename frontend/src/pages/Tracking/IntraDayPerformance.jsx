import React, { useState, useEffect, useRef } from 'react'
import { BsTriangle } from "react-icons/bs";
import { FiMinusSquare } from "react-icons/fi";
import { FiPlusSquare } from "react-icons/fi";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRectangleXmark } from "react-icons/fa6";
import IntraDayCustomeFilter from './PopUp/IntraDayCustomeFilter';
import CustomFilterDropdown from './DropDown/CustomFilterDropdown'
import CustomIntraDayIdp from './PopUp/CustomIntraDayIdp';

export default function IntraDayPerformance() {
  const [routingSets, setRoutingSets] = useState([]);
  const [topToggle, setTopToggle] = useState(false); // for 'toggle_129128'
  const [mainToggle, setMainToggle] = useState(null); // for 'toggle_129128'
  const [subToggle, setSubToggle] = useState(null);   // for 'toggle_1827'
  const [hide, setHide] = useState(null);
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, data: null });
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedCaseDetail, setSelectedCaseDetail] = useState(null);

  const openContextMenu = (e, caseDetail) => {
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      data: caseDetail,
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contextMenu.visible && !e.target.closest('.context-menu')) {
        setContextMenu({ ...contextMenu, visible: false });
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [contextMenu.visible]);

  useEffect(() => {
    fetch('http://localhost:5000/api/ewfm/fetchallroutingset')
      .then((res) => res.json())
      .then((data) => setRoutingSets(data))
      .catch((err) => console.error('Error fetching routing sets:', err));
  }, []);



  const handleMainToggle = (tab) => {
    setMainToggle((prev) => (prev === tab ? null : tab));
  };

  const handleSubToggle = (tab) => {
    setSubToggle((prev) => (prev === tab ? null : tab));
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTopToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getDayOfWeek = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString('en-IN', { weekday: 'long', timeZone: 'Asia/Kolkata' });
  };

  const handleEdit = (caseDetail) => {
    setSelectedCaseDetail(caseDetail); // Store the selected case detail
    setIsEditOpen(true); // Open the edit modal
  };


  return (
    <div className="w-full h-[90vh] bg-gray-100 overflow-auto mx-auto flex flex-col">
      {hide &&
        < IntraDayCustomeFilter setHide={setHide} />
      }

      <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
        <h1 className="font-bold">Intra-Day Performance</h1>
      </div>
      <div className='flex-grow bg-white flex flex-col overflow-auto'>
        <div className="bg-gray-100">
          <div className="flex relative items-center justify-between p-1 m-2 w-3/6 md:w-1/6 text-sm font-semibold bg-white" >
            Routing Set &#62;&#62; MultiSkills
            <span className="flex items-center gap-1" onClick={() => setTopToggle(!topToggle)}>
              <BsTriangle className="text-gray-500 rotate-180 cursor-pointer" />
            </span>
            {topToggle &&
              <div ref={dropdownRef} className="border absolute p-1 translate-x-[12vw] top-[4svh] border-gray-700 bg-white w-[200px] 
                        shadow-md shadow-black  h-[500px] overflow-y-scroll">
                <div className="px-1 py-1 text-xs font-sans text-black space-y-2 font-semibold  ">
                  <label className="flex items-center px-4 space-x-1"> (All)</label>
                  <label className="flex items-center px-4 space-x-1">(Custom…)</label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>06_SSQ</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>06TFED</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.BCUOOW.SKLENV_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.CCSCOR.SKLENC_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.CCSCOR.SKLENE_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.CCSCOR.SKLENV_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.CCSRET.SKLENV_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.CCUOOW.SKLENE_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GCSCOR.SKLENC_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GCSCOR.SKLENE_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GCSCOR.SKLENV_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GCUCPS.DBGENE_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GCUCPS.DBGENC_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GCUCPS.DMSENE_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GCUCDS.DSYENM_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GCUOOW.SKLENE_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GEMESG.DBGENV_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GESSRV.SPUENV_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GEUSRV.DSYENV_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.GEUSTP.DSYENM_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TAAU.HCUEUC.DSYENV_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TBBR.CCSCOR.SSBRPV_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TBBR.CCSCOR.YBQPRC_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TBBR.CCSCOR.ISLPRV_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TBBR.CCUOOS.ISLPRE_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TBBR.CCUOOW.ISLPRV_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TBBR.GCSCOR.ISLPRC_</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>TBBR.GCSCOR.ISLPRE_</span>
                  </label>
                </div>
              </div>
            }
          </div>
          <div className="flex ml-[14vw] items-center justify-between p-1 m-2 w-3/6 md:w-1/6 text-sm font-semibold bg-white"
            onClick={() => setHide(true)}>
            Routing Set &#62;&#62; Code
            <span className="flex items-center gap-1">
              <BsTriangle className="text-gray-500" />
            </span>
          </div>
        </div>
        <div className="overflow-auto flex-grow">
          <table className="min-w-full bg-white table-auto">
            <thead>
              <tr className="bg-white text-gray-700 text-center">
                <th className="border-r font-semibold border-gray-300 px-1 py-1">
                  Routing Set
                </th>
                <th colSpan={6} className="font-semibold px-1 py-1">
                  Intra-Day Performance
                </th>
              </tr>
              <tr className="bg-white text-gray-700 text-center">
                <th className="border-r font-semibold border-gray-300 px-1 py-1"></th>
                <th colSpan={2} className="border-r font-semibold border-gray-300 px-1 py-1">
                  Start
                </th>
                <th colSpan={2} className="border-r font-semibold border-gray-300 px-1 py-1">
                  Stop
                </th>
                <th colSpan={2} className="border-r font-semibold border-gray-300 px-1 py-1">
                  Created
                </th>
              </tr>
              <tr className="bg-white text-gray-700">
                <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                  Description
                </th>
                <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                  Date and Time
                </th>
                <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                  Day of Week
                </th>
                <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                  Date and Time
                </th>
                <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                  Day of Week
                </th>
                <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                  On
                </th>
                <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                  By
                </th>
              </tr>
            </thead>
            <tbody>
              {routingSets.map((routingSet, index) => {
                const mainId = `toggle_${index}`;
                return (
                  <React.Fragment key={mainId}>
                    {/* Parent Row */}
                    <tr className={`font-semibold border-b-2 ${mainToggle === mainId ? 'bg-blue-500 border-blue-500 text-white' : 'text-blue-600'}`}>
                      <td
                        className="text-sm px-1 pt-6 flex items-center gap-1 cursor-pointer"
                        onClick={() => handleMainToggle(mainId)}
                      >
                        {mainToggle === mainId ? (
                          <FiMinusSquare className="w-5 h-5 " />
                        ) : (
                          <FiPlusSquare className="w-5 h-5 " />
                        )}
                        Routing Set » Code : {routingSet.RoutingSet}
                      </td>
                      <td colSpan={6}></td>
                    </tr>

                    {/* Toggled Child Row */}
                    {mainToggle === mainId && (
                      <>
                        <tr className="border-2">
                          <td className="px-2 pt-6">
                            <span
                              className="flex items-center gap-2 text-blue-500 font-bold text-sm cursor-pointer"
                              onClick={() => handleSubToggle(mainId)}
                            >
                              {subToggle === mainId ? (
                                <FiMinusSquare className="w-5 h-5 text-blue-500" />
                              ) : (
                                <FiPlusSquare className="w-5 h-5 text-blue-500" />
                              )}
                              Routing Set » Code : {routingSet.RoutingSet}
                            </span>
                          </td>
                          <td colSpan={6}></td>
                        </tr>

                        {subToggle === mainId &&
                          routingSet.cases_detail.map((caseDetail, idx) => (
                            <tr key={idx} className={`${idx % 2 === 0 ? 'bg-yellow-100' : ''} text-xs font-semibold`}
                              onContextMenu={(e) => {
                                e.preventDefault();
                                openContextMenu(e, caseDetail);
                              }}
                            >
                              <td className="border border-blue-500 px-1 py-0.5">
                                {caseDetail.EWFMDdeptName}
                                {/* {caseDetail.RoutingSet} */}
                              </td>
                              <td className="border border-blue-500 px-1 py-0.5">
                                {formatDate(caseDetail.start_date)}
                              </td>
                              <td className="border border-blue-500 px-1 py-0.5">
                                {getDayOfWeek(caseDetail.start_date)}
                              </td>
                              <td className="border border-blue-500 px-1 py-0.5">
                                {formatDate(caseDetail.end_date)}
                              </td>
                              <td className="border border-blue-500 px-1 py-0.5">
                                {getDayOfWeek(caseDetail.end_date)}
                              </td>
                              <td className="border border-blue-500 px-1 py-0.5">
                                {formatDate(caseDetail.created_date)}
                              </td>
                              <td className="border border-blue-500 px-1 py-0.5">
                                {caseDetail.created_by}
                              </td>
                            </tr>
                          ))}
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex items-center justify-between py-1 bg-gray-200'>
        <div className=" text-gray-600 flex items-center gap-2">
          <FaRectangleXmark className='text-red-500' />
          <FaRegCheckSquare className='text-green-500' />
          <p className='text-xs text-gray-700 font-semibold'>
            (Intra-Day Performance » Created » By = CHETAN_PALIWAL)
          </p>
        </div>
        <div className="flex justify-end ">
          <button className="bg-gray-200 text-gray-600 px-3 py-2 border border-gray-400 rounded-sm
                                                                           font-bold text-sm">Customize...</button>
        </div>
      </div>
      <div className='flex items-center justify-between py-1 bg-blue-500'>
        <div className=" text-gray-600 px-2 flex items-center gap-2">
          <p className='text-sm text-white font-semibold'>
            0 of 1 items Selected
          </p>
        </div>
      </div>
      {isEditOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40" onClick={() => setIsEditOpen(false)} />
      )}
      {isEditOpen && (
        <CustomIntraDayIdp
          caseDetail={selectedCaseDetail}
          onClose={() => setIsEditOpen(false)}
        />
      )}
      {contextMenu.visible && (
        <CustomFilterDropdown
          x={contextMenu.x}
          y={contextMenu.y}
          data={contextMenu.data}
          onClose={() => setContextMenu({ ...contextMenu, visible: false })}
          // onEdit={() => {
          //   setSelectedCaseDetail(contextMenu.data);
          //   setIsEditOpen(true);
          //   setContextMenu({ ...contextMenu, visible: false });
          // }}
          onEdit={handleEdit}
        />
      )}

    </div >
  )
}
