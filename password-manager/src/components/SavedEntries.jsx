import React from 'react'



const SavedEntries = () => {
  return (
      <div className="overflow-x-auto p-20">
        <table className="min-w-full bg-white">
          
          <thead className="bg-gray-800 whitespace-nowrap">
            <tr>
              <th className="p-4 text-left text-sm font-medium text-white">
                Website
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Username or Email
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Password
              </th>
            </tr>
          </thead>

          <tbody className="whitespace-nowrap">
            <tr className="even:bg-blue-50">
              <td className="p-4 text-sm text-slate-900 font-medium">
                John Doe
              </td>
              <td className="p-4 text-sm text-slate-600 font-medium">
                john@example.com
              </td>
              <td className="p-4 text-sm text-slate-600 font-medium">
                Admin
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default SavedEntries
