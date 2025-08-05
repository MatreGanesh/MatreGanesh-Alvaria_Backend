import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import DailySets from './PopUp/DailySets';

export default function MultidimensionalIntraDay() {

  const [toogle, setToggle] = useState(false);

  return (
    <div className="bg-gray-100">

      {toogle &&
        <DailySets setToggle={setToggle} />
      }

      <div className="w-full h-[90vh] overflow-auto mx-auto flex flex-col">
        <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
          <h1 className="font-bold">Multidimensional Intra-Day Performance</h1>
        </div>
        <div className='bg-gradient-to-t to-indigo-50 from-indigo-100 flex-grow'>
          <div className='px-2 border-b-2 border-gray-400 shadow-md shadow-white py-4'>
            <p className=' px-2  font-semibold'>Select the groups, dates, times, and display set for viewing Intra-Day Performance forcasts.</p>
          </div>

          <div className='px-5 py-3 space-y-2'>
            <div className='flex '>
              <div className='flex items-center space-x-1'>
                <input type='radio' />
                <span className='w-[250px] font-semibold' >Forecast group set: </span>
              </div>
              <div className="flex items-center border-2 border-gray-300 bg-white px-0.5 focus-within:border-gray-400">
                <input type="text" className="w-[300px] focus:outline-none" />
                <BsThreeDots className="border border-gray-300 bg-gray-200 p-1 w-5 h-5" onClick={() => setToggle(true)} />
              </div>

            </div>

            <div className='flex '>
              <div className='flex items-center space-x-1'>
                <input type='radio' />
                <span className='w-[250px] font-semibold' >Staff group set: </span>
              </div>
              <div className="flex items-center border-2 border-gray-300 bg-white px-0.5 focus-within:border-gray-400">
                <input type="text" className="w-[300px] focus:outline-none" />
                <BsThreeDots className="border border-gray-300 bg-gray-200 p-1 w-5 h-5" />
              </div>
            </div>
          </div>

          <div className='px-5 py-3'>
            <fieldset className='border-2 border-gray-300 p-3'>
              <legend className='font-semibold'>Days</legend>

              <div className='flex items-center space-x-5'>
                <div className='flex items-center px-3'>
                  <span className='w-[250px] font-semibold'>Form:</span>
                  <div className='flex items-center'><input type='date' className='border-2 border-gray-200 px-1' />
                    <p className='border-2 px-2 py-[1px] text-sm font-semibold border-blue-400'>Thu</p>
                  </div>
                </div>
                <div className='flex items-center px-3'>
                  <span className='w-[80px] font-semibold'>To:</span>
                  <div className='flex items-center'><input type='date' className='border-2 border-gray-200 px-1' />
                    <p className='border-2 px-2 py-[1px] text-sm font-semibold border-blue-400'>Thu</p>
                  </div>
                </div>
              </div>

              <div className='flex items-center px-3 mt-3'>
                <span className='w-[250px] font-semibold'>Days of week:</span>
                <select defaultValue={''} className='w-[250px]'>
                  <option value={''} disabled hidden>Select</option>
                  <option value={'sat-sun'}>
                    Sat-Sun
                  </option>
                </select>
              </div>
            </fieldset>

            <fieldset className='border-2 border-gray-300 p-3'>
              <legend className='font-semibold'>Days</legend>

              <div className='flex items-center space-x-5'>
                <div className='flex items-center px-3'>
                  <span className='w-[250px] font-semibold'>Form:</span>
                  <div className='flex items-center w-[200px]'>
                    <input type='time' defaultValue='12:05 AM' className='border-2 border-gray-200 px-1' />
                  </div>
                </div>
                <div className='flex items-center px-3'>
                  <span className='w-[80px] font-semibold'>To:</span>
                  <div className='flex items-center'>
                    <input type='time' defaultValue='12:05 AM' className='border-2 border-gray-200 px-1' />
                  </div>
                </div>
              </div>
            </fieldset>

            <div className='py-4 space-y-2 border-b-2 border-gray-400 shadow-md shadow-white'>
              <div className='flex '>
                <div className='flex items-center space-x-1'>
                  <span className='w-[270px] font-semibold' >Display set: </span>
                </div>
                <div className="flex items-center border-2 border-gray-300 bg-white px-0.5 focus-within:border-gray-400">
                  <input type="text" className="w-[300px] focus:outline-none" />
                  <BsThreeDots className="border border-gray-300 bg-gray-200 p-1 w-5 h-5" />
                </div>

              </div>

              <div className='flex '>
                <div className='flex items-center space-x-1'>
                  <span className='w-[270px] font-semibold' >Tab: </span>
                </div>
                <div className="flex items-center border-2 border-gray-300 bg-white px-0.5 focus-within:border-gray-400">
                  <select defaultValue={''} className='w-[320px]' disabled>
                    <option value={''} disabled hidden>Select</option>
                    <option value={'sat-sun'}>
                      Sat-Sun
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='p-5'>
            <button className='border-2 border-gray-400 font-bold px-6 py-1 first-letter:underline bg-gray-200'>Open</button>
          </div>
        </div>
      </div>
    </div >
  )
}
