import React from 'react'

export default function Employees() {
    return (
        <>
            <div className="flex w-full h-screen gap-1 overflow-auto">
                <div className="md:w-5/6 w-screen bg-indigo-50 flex h-screen flex-col overflow-auto flex-grow">
                    <div className="container flex-grow flex flex-col">
                        <div className="bg-gradient-to-t sticky top-0 z-10 to-blue-500 from-blue-800 text-white px-2 py-1 rounded-t-md">
                            <h1 className="text-lg font-bold">Employees</h1>
                        </div>

                        <div className="overflow-x-auto flex-grow">
                            <table className="min-w-full overflow-auto bg-white border border-gray-300">
                                <thead className=''>
                                    <tr className="bg-gray-50 text-gray-600 text-sm leading-normal">
                                        <th
                                            className="px-2 border-x-2 border-gray-300"
                                            colSpan={3}
                                        >
                                            Employee
                                        </th>

                                        <th className="px-2 border-x-2 border-gray-300">
                                            Employees
                                        </th>
                                        <th className="px-2 border-x-2 border-gray-300">
                                            Extra Fields
                                        </th>
                                        <th
                                            className="px-2 border-x-2 border-gray-300"
                                            colSpan={2}
                                        >
                                            Times
                                        </th>
                                        <th className="px-2 border-x-2 border-gray-300">
                                            Work Segment
                                        </th>
                                        <th className="px-2 border-x-2 border-gray-300">
                                            General Segment
                                        </th>
                                        <th
                                            className="px-2 border-x-2 border-gray-300"
                                            colSpan={2}
                                        >
                                            Times
                                        </th>
                                    </tr>
                                    <tr className="bg-gray-50 text-gray-600 text-sm  leading-normal text-left">
                                        <th className="px-2 py-1 border-x-2 border-gray-300">ID</th>
                                        <th className="px-2 py-1 border-x-2 border-gray-300">
                                            First Name
                                        </th>
                                        <th className="px-2 py-1 border-x-2 border-gray-300">
                                            Last Name
                                        </th>
                                        <th className="px-2 py-1 border-x-2 border-gray-300">
                                            Included
                                        </th>
                                        <th className="px-2 py-1 border-x-2 border-gray-300">
                                            Manager Name
                                        </th>
                                        <th className="px-2 py-1 border-x-2 border-gray-300">Start</th>
                                        <th className="px-2 py-1 border-x-2 border-gray-300">Stop</th>
                                        <th className="px-2 py-1 border-x-2 border-gray-300">Code</th>
                                        <th className="px-2 py-1 border-x-2 border-gray-300">Code</th>
                                        <th className="px-2 py-1 border-x-2 border-gray-300">Start</th>
                                        <th className="px-2 py-1 border-x-2 border-gray-300">Stop</th>
                                        <th className="px-2 py-1 border-x-2 border-gray-300">Code</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 text-sm">
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">
                                            1363607
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">Jibola</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Agboola
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TRNGTQ
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">576214</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Bayramoglu
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Bestami
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">
                                            1069089
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">Nico</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Erdmann
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">411175</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Steffen
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Guergen
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">594226</td>
                                        <td className="px-1 py-1 border border-gray-300">Rene</td>
                                        <td className="px-1 py-1 border border-gray-300">Heilig</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">264523</td>
                                        <td className="px-1 py-1 border border-gray-300">Thomas</td>
                                        <td className="px-1 py-1 border border-gray-300">Heldt</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-red-500">
                                            EUSTPSCT
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">928289</td>
                                        <td className="px-1 py-1 border border-gray-300">Nick</td>
                                        <td className="px-1 py-1 border border-gray-300">Ile</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Wayne Mc Donald
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-yellow-500">
                                            ECTHJCW
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">
                                            1116277
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Bastian
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Kraenkel
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">997787</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Michael
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Marbach
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Wayne Mc Donald
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">
                                            1289080
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Philipp
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Passarge
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            VACA
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">992925</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Andreas
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">Penno</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-red-500">
                                            EUSTPSCT
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-yellow-500 text-white">
                                            TRNGTQ
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">411175</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Steffen
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Guergen
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">594226</td>
                                        <td className="px-1 py-1 border border-gray-300">Rene</td>
                                        <td className="px-1 py-1 border border-gray-300">Heilig</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">264523</td>
                                        <td className="px-1 py-1 border border-gray-300">Thomas</td>
                                        <td className="px-1 py-1 border border-gray-300">Heldt</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-red-500">
                                            EUSTPSCT
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">928289</td>
                                        <td className="px-1 py-1 border border-gray-300">Nick</td>
                                        <td className="px-1 py-1 border border-gray-300">Ile</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Wayne Mc Donald
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-yellow-500">
                                            ECTHJCW
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">
                                            1116277
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Bastian
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Kraenkel
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">997787</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Michael
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Marbach
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Wayne Mc Donald
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">
                                            1289080
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Philipp
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Passarge
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            VACA
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">992925</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Andreas
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">Penno</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-red-500">
                                            EUSTPSCT
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-yellow-500 text-white">
                                            TRNGTQ
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">411175</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Steffen
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Guergen
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">594226</td>
                                        <td className="px-1 py-1 border border-gray-300">Rene</td>
                                        <td className="px-1 py-1 border border-gray-300">Heilig</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">264523</td>
                                        <td className="px-1 py-1 border border-gray-300">Thomas</td>
                                        <td className="px-1 py-1 border border-gray-300">Heldt</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-red-500">
                                            EUSTPSCT
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">928289</td>
                                        <td className="px-1 py-1 border border-gray-300">Nick</td>
                                        <td className="px-1 py-1 border border-gray-300">Ile</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Wayne Mc Donald
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-yellow-500">
                                            ECTHJCW
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">
                                            1116277
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Bastian
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Kraenkel
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">997787</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Michael
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Marbach
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Wayne Mc Donald
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">
                                            1289080
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Philipp
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Passarge
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            VACA
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">992925</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Andreas
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">Penno</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-red-500">
                                            EUSTPSCT
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-yellow-500 text-white">
                                            TRNGTQ
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">411175</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Steffen
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Guergen
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">594226</td>
                                        <td className="px-1 py-1 border border-gray-300">Rene</td>
                                        <td className="px-1 py-1 border border-gray-300">Heilig</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">264523</td>
                                        <td className="px-1 py-1 border border-gray-300">Thomas</td>
                                        <td className="px-1 py-1 border border-gray-300">Heldt</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-red-500">
                                            EUSTPSCT
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">928289</td>
                                        <td className="px-1 py-1 border border-gray-300">Nick</td>
                                        <td className="px-1 py-1 border border-gray-300">Ile</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Wayne Mc Donald
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-yellow-500">
                                            ECTHJCW
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">
                                            1116277
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Bastian
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Kraenkel
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">997787</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Michael
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Marbach
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Wayne Mc Donald
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">
                                            1289080
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Philipp
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Passarge
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            VACA
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">992925</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Andreas
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">Penno</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-red-500">
                                            EUSTPSCT
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-yellow-500 text-white">
                                            TRNGTQ
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">411175</td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Steffen
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Guergen
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-1 py-1 border border-gray-300">594226</td>
                                        <td className="px-1 py-1 border border-gray-300">Rene</td>
                                        <td className="px-1 py-1 border border-gray-300">Heilig</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            8:30 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            5:00 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-1 py-1 border border-gray-300">264523</td>
                                        <td className="px-1 py-1 border border-gray-300">Thomas</td>
                                        <td className="px-1 py-1 border border-gray-300">Heldt</td>
                                        <td className="px-1 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-1 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-red-500">
                                            EUSTPSCT
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-2 py-1 border border-gray-300">928289</td>
                                        <td className="px-2 py-1 border border-gray-300">Nick</td>
                                        <td className="px-2 py-1 border border-gray-300">Ile</td>
                                        <td className="px-2 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Wayne Mc Donald
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            3:00 PM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-yellow-500">
                                            ECTHJCW
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            3:00 PM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-2 py-1 border border-gray-300">
                                            1116277
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Bastian
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Kraenkel
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-2 py-1 border border-gray-300">997787</td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Michael
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Marbach
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Wayne Mc Donald
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr className="border-b border-gray-300 bg-yellow-100">
                                        <td className="px-2 py-1 border border-gray-300">
                                            1289080
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Philipp
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Passarge
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td></td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            7:30 AM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            4:00 PM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-blue-500 text-white">
                                            VACA
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="px-2 py-1 border border-gray-300">992925</td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Andreas
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">Penno</td>
                                        <td className="px-2 py-1 border border-gray-300 text-center">
                                            <i className="fas fa-check text-green-500"></i>
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            Holger Hennig
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-blue-500 text-white">
                                            TMDE.EUSTP.DC/DEM_
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-red-500">
                                            EUSTPSCT
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            7:00 AM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            3:30 PM
                                        </td>
                                        <td className="px-2 py-1 border border-gray-300 bg-yellow-500 text-white">
                                            TRNGTQ
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="w-full sticky bottom-0">
                            <div className="bg-blue-600 text-white p-2 text-sm">
                                1 of 19 Items Selected
                            </div>
                            <div className="overflow-x-auto w-full">
                                <div className="flex bg-gray-200 text-sm text-center">
                                    <div className="px-2 py-1 border border-gray-300 w-full">
                                        Official Schedule Summary (Mon 3/24/2025)
                                    </div>
                                    <div className="px-2 py-1 border border-gray-300 w-full">
                                        Official Schedule Summary (Tue 3/25/2025)
                                    </div>
                                    <div className="px-2 py-1 border border-gray-300 w-full">
                                        Official Schedule Summary (Wed 3/26/2025)
                                    </div>
                                </div>
                                <div className="flex bg-gray-200 text-sm text-center">
                                    <div className="px-2 py-1 border border-gray-300 w-full">
                                        Official Schedule Summary (Thu 3/20/2025)
                                    </div>
                                    <div className="px-2 py-1 border border-gray-300 w-full">
                                        Official Schedule Summary (Fri 3/21/2025)
                                    </div>
                                    <div className="px-2 py-1 border border-gray-300 w-full">
                                        Official Schedule Summary (Sat 3/22/2025)
                                    </div>
                                    <div className="px-2 py-1 border border-gray-300 w-full">
                                        Official Schedule Summary (Sun 3/23/2025)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/6  bg-gray-100 flex-grow justify-center h-screen overflow-y-auto">
                    <div className="bg-white w-full shadow-lg rounded-lg flex-grow">
                        <div className='sticky top-0'>
                            <div className="bg-blue-600 text-white text-center py-2 rounded-t-lg">
                                <div className="text-sm">Thu 3/20/2025</div>
                            </div>
                            <div className="bg-blue-100 flex justify-between items-center px-2 py-1">
                                <div className="flex space-x-1">
                                    <i className="fas fa-sync-alt text-green-600"></i>
                                    <i className="fas fa-search text-red-600"></i>
                                    <i className="fas fa-cog text-gray-600"></i>
                                </div>
                                <div className="text-sm">Today</div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="mb-4">
                                <div className="bg-blue-200 text-center py-1 rounded-t-lg">
                                    March 2025
                                </div>
                                <table className="w-full text-center">
                                    <thead>
                                        <tr className="text-xs">
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr>
                                            <td className="text-gray-400">22</td>
                                            <td className="text-gray-400">23</td>
                                            <td className="text-gray-400">24</td>
                                            <td className="text-gray-400">25</td>
                                            <td className="text-gray-400">26</td>
                                            <td className="text-gray-400">27</td>
                                            <td className="text-gray-400">28</td>
                                        </tr>
                                        <tr>
                                            <td className="text-gray-400">29</td>
                                            <td className="text-gray-400">30</td>
                                            <td className="text-gray-400">1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                        </tr>
                                        <tr>
                                            <td>20</td>
                                            <td className="bg-yellow-300">21</td>
                                            <td>22</td>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                        </tr>
                                        <tr>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                            <td>30</td>
                                            <td className="text-gray-400">31</td>
                                            <td className="text-gray-400">1</td>
                                            <td className="text-gray-400">2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mb-4">
                                <div className="bg-blue-200 text-center py-1 rounded-t-lg">
                                    April 2025
                                </div>
                                <table className="w-full text-center">
                                    <thead>
                                        <tr className="text-xs">
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr>
                                            <td className="text-gray-400">30</td>
                                            <td className="text-gray-400">31</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                        </tr>
                                        <tr>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                        </tr>
                                        <tr>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                            <td>30</td>
                                            <td className="text-gray-400">1</td>
                                            <td className="text-gray-400">2</td>
                                            <td className="text-gray-400">3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mb-4">
                                <div className="bg-blue-200 text-center py-1 rounded-t-lg">
                                    May 2025
                                </div>
                                <table className="w-full text-center">
                                    <thead>
                                        <tr className="text-xs">
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr>
                                            <td className="text-gray-400">27</td>
                                            <td className="text-gray-400">28</td>
                                            <td className="text-gray-400">29</td>
                                            <td className="text-gray-400">30</td>
                                            <td className="text-gray-400">1</td>
                                            <td className="text-gray-400">2</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                        </tr>
                                        <tr>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                            <td>23</td>
                                            <td>24</td>
                                        </tr>
                                        <tr>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                            <td>30</td>
                                            <td>31</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mb-4">
                                <div className="bg-blue-200 text-center py-1 rounded-t-lg">
                                    June 2025
                                </div>
                                <table className="w-full text-center">
                                    <thead>
                                        <tr className="text-xs">
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr>
                                            <td className="text-gray-400">1</td>
                                            <td className="text-gray-400">2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                        </tr>
                                        <tr>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>22</td>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                        </tr>
                                        <tr>
                                            <td>29</td>
                                            <td>30</td>
                                            <td className="text-gray-400">1</td>
                                            <td className="text-gray-400">2</td>
                                            <td className="text-gray-400">3</td>
                                            <td className="text-gray-400">4</td>
                                            <td className="text-gray-400">5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mb-4">
                                <div className="bg-blue-200 text-center py-1 rounded-t-lg">
                                    July 2025
                                </div>
                                <table className="w-full text-center">
                                    <thead>
                                        <tr className="text-xs">
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr>
                                            <td className="text-gray-400">29</td>
                                            <td className="text-gray-400">30</td>
                                            <td className="text-gray-400">1</td>
                                            <td className="text-gray-400">2</td>
                                            <td className="text-gray-400">3</td>
                                            <td className="text-gray-400">4</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                        </tr>
                                        <tr>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                        </tr>
                                        <tr>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                            <td>30</td>
                                            <td>31</td>
                                            <td className="text-gray-400">1</td>
                                            <td className="text-gray-400">2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
