import React from 'react'



const SavedEntries = () => {
  return (
      <div class="overflow-x-auto p-20">
        <table class="min-w-full bg-white">
          
          <thead class="bg-gray-800 whitespace-nowrap">
            <tr>
              <th class="pl-4 w-8">
                <input id="checkbox" type="checkbox" class="hidden peer" />
                <label for="checkbox"
                  class="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                    <path
                      d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                      data-name="7-Check" data-original="#000000" />
                  </svg>
                </label>
              </th>
              <th class="p-4 text-left text-sm font-medium text-white">
                Website
              </th>
              <th class="p-4 text-left text-sm font-medium text-white">
                Username or Email
              </th>
              <th class="p-4 text-left text-sm font-medium text-white">
                Password
              </th>
            </tr>
          </thead>

          <tbody class="whitespace-nowrap">
            <tr class="even:bg-blue-50">
              <td class="pl-4 w-8">
                <input id="checkbox1" type="checkbox" class="hidden peer" />
                <label for="checkbox1"
                  class="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                    <path
                      d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                      data-name="7-Check" data-original="#000000" />
                  </svg>
                </label>
              </td>
              <td class="p-4 text-sm text-slate-900 font-medium">
                John Doe
              </td>
              <td class="p-4 text-sm text-slate-600 font-medium">
                john@example.com
              </td>
              <td class="p-4 text-sm text-slate-600 font-medium">
                Admin
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default SavedEntries
