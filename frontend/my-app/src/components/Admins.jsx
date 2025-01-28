import React from 'react'
import "../CSS/admin.css"

const data = [
    {
        srno: "01",
        adminid: "1001",
        adminName: "Vaibhav",
        password: "1234",
        gender:"Male"
      
    }
  
];

const Admins = () => {
    return (
        
        <div className="p-4">
            <h1>Admins Database</h1>
           
            <table className="table-auto w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">Srno</th>
                        <th className="px-4 py-2 border">Admin ID</th>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Password</th>
                        <th className="px-4 py-2 border">Gender</th>
                        <th className="px-4 py-2 border">Make Changes</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="text-center">
                            <td className="px-4 py-2 border">{row.srno}</td>
                            <td className="px-4 py-2 border">{row.adminid}</td>
                            <td className="px-4 py-2 border">{row.adminName}</td>
                            <td className="px-4 py-2 border">{row.password}</td>
                            <td className="px-4 py-2 border">{row.gender}</td>
                           
                            <td className="px-4 py-2 border">
                                <td className="px-4 py-2 border">
                                    <button className="start">Update</button>
                                </td>
                                <td className="px-4 py-2 border">
                                    <button className="stop">Delete</button>
                                </td>
                               

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
      


    )
}

export default Admins
