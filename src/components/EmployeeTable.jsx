// import React from 'react';
// import { 
//   SquarePen, 
//   Trash2, 
//   Eye 
// } from 'lucide-react';

// const sampleEmployees = [
//   {
//     id: 1,
//     name: 'Rahul Sharma',
//     email: 'rahul.sharma@sparkz.com',
//     phone: '+91 98765 43210',
//     role: 'Frontend Developer',
//     empCode: 'EMP-001',
//   },
//   {
//     id: 2,
//     name: 'Priya Patel',
//     email: 'priya.patel@sparkz.com',
//     phone: '+91 87654 32109',
//     role: 'UI/UX Designer',
//     empCode: 'EMP-002',
//   },
//   {
//     id: 3,
//     name: 'Amit Kumar',
//     email: 'amit.kumar@sparkz.com',
//     phone: '+91 76543 21098',
//     role: 'Backend Developer',
//     empCode: 'EMP-003',
//   },
//   {
//     id: 4,
//     name: 'Sneha Reddy',
//     email: 'sneha.reddy@sparkz.com',
//     phone: '+91 65432 10987',
//     role: 'Project Manager',
//     empCode: 'EMP-004',
//   },
//   {
//     id: 5,
//     name: 'Vikram Singh',
//     email: 'vikram.singh@sparkz.com',
//     phone: '+91 54321 09876',
//     role: 'QA Engineer',
//     empCode: 'EMP-005',
//   },
//   {
//     id: 6,
//     name: 'Ananya Gupta',
//     email: 'ananya.gupta@sparkz.com',
//     phone: '+91 43210 98765',
//     role: 'HR Manager',
//     empCode: 'EMP-006',
//   },
//   {
//     id: 7,
//     name: 'Karan Mehta',
//     email: 'karan.mehta@sparkz.com',
//     phone: '+91 32109 87654',
//     role: 'DevOps Engineer',
//     empCode: 'EMP-007',
//   },
//   {
//     id: 8,
//     name: 'Divya Nair',
//     email: 'divya.nair@sparkz.com',
//     phone: '+91 21098 76543',
//     role: 'Full Stack Dev',
//     empCode: 'EMP-008',
//   },
// ];

// const columns = ['Full Name', 'Email Id', 'Phone Number', 'Role', 'Emp-Code', 'Detail', 'Action'];

// const EmployeeTable = ({ onDelete }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//       {/* Scrollable table wrapper for mobile */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left min-w-[1000px]">
//           <thead>
//             <tr className="border-b border-gray-200">
//               <th className="p-4 w-12 text-center">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 accent-[#157395] rounded cursor-pointer"
//                 />
//               </th>
//               {columns.map((col) => (
//                 <th
//                   key={col}
//                   className={`py-4 px-3 text-sm font-semibold whitespace-nowrap ${
//                     col === 'Full Name' ? 'text-[#157395]' : 'text-gray-500'
//                   }`}
//                 >
//                   {col}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {sampleEmployees.map((emp) => (
//               <tr
//                 key={emp.id}
//                 className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
//               >
//                 <td className="p-4 text-center">
//                   <input
//                     type="checkbox"
//                     className="w-4 h-4 accent-[#157395] rounded cursor-pointer"
//                   />
//                 </td>
//                 <td className="py-4 px-3 text-sm text-gray-800 font-medium whitespace-nowrap">
//                   {emp.name}
//                 </td>
//                 <td className="py-4 px-3 text-sm text-gray-600 whitespace-nowrap">
//                   {emp.email}
//                 </td>
//                 <td className="py-4 px-3 text-sm text-gray-600 whitespace-nowrap">
//                   {emp.phone}
//                 </td>
//                 <td className="py-4 px-3 text-sm text-gray-600 whitespace-nowrap">
//                   {emp.role}
//                 </td>
//                 <td className="py-4 px-3 text-sm text-gray-600 font-mono">
//                   {emp.empCode}
//                 </td>
//                 <td className="py-4 px-3">
//                   <button className="flex items-center gap-1.5 text-[#157395] text-sm hover:underline font-medium">
//                     <Eye className="w-4 h-4" />
//                     View
//                   </button>
//                 </td>
//                 <td className="py-4 px-3">
//                   <div className="flex items-center gap-3">
//                     <button className="w-10 h-10 bg-[#f0f7ff] text-[#157395] rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors border border-blue-100/50">
//                       <SquarePen className="w-5 h-5" />
//                     </button>
//                     <button 
//                       onClick={onDelete}
//                       className="w-10 h-10 bg-[#fff1f1] text-red-500 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors border border-red-100/50"
//                     >
//                       <Trash2 className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmployeeTable;



import React from "react";
import {
  SquarePen,
  Trash2,
  Eye
} from "lucide-react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from "@tanstack/react-table";

const sampleEmployees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@sparkz.com",
    phone: "+91 98765 43210",
    role: "Frontend Developer",
    empCode: "EMP-001",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@sparkz.com",
    phone: "+91 87654 32109",
    role: "UI/UX Designer",
    empCode: "EMP-002",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit.kumar@sparkz.com",
    phone: "+91 76543 21098",
    role: "Backend Developer",
    empCode: "EMP-003",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha.reddy@sparkz.com",
    phone: "+91 65432 10987",
    role: "Project Manager",
    empCode: "EMP-004",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@sparkz.com",
    phone: "+91 54321 09876",
    role: "QA Engineer",
    empCode: "EMP-005",
  },
  {
    id: 6,
    name: "Ananya Gupta",
    email: "ananya.gupta@sparkz.com",
    phone: "+91 43210 98765",
    role: "HR Manager",
    empCode: "EMP-006",
  },
  {
    id: 7,
    name: "Karan Mehta",
    email: "karan.mehta@sparkz.com",
    phone: "+91 32109 87654",
    role: "DevOps Engineer",
    empCode: "EMP-007",
  },
  {
    id: 8,
    name: "Divya Nair",
    email: "divya.nair@sparkz.com",
    phone: "+91 21098 76543",
    role: "Full Stack Dev",
    empCode: "EMP-008",
  },
];

const EmployeeTable = ({ onDelete }) => {

  const columns = [
    {
      header: "Full Name",
      accessorKey: "name",
    },
    {
      header: "Email Id",
      accessorKey: "email",
    },
    {
      header: "Phone Number",
      accessorKey: "phone",
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "Emp-Code",
      accessorKey: "empCode",
    },
    {
      header: "Detail",
      cell: () => (
        <button className="flex items-center gap-1.5 text-[#157395] text-sm hover:underline font-medium">
          <Eye className="w-4 h-4" />
          View
        </button>
      ),
    },
    {
      header: "Action",
      cell: () => (
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-[#f0f7ff] text-[#157395] rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors border border-blue-100/50">
            <SquarePen className="w-5 h-5" />
          </button>
          <button
            onClick={onDelete}
            className="w-10 h-10 bg-[#fff1f1] text-red-500 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors border border-red-100/50"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: sampleEmployees,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
      <div className="overflow-auto flex-1">
        <table className="w-full text-left min-w-[1000px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="sticky top-0 bg-white p-4 w-12 text-center z-20">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#157395] rounded cursor-pointer"
                />
              </th>

              {table.getHeaderGroups().map((headerGroup) =>
                headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`sticky top-0 bg-white z-20 py-4 px-3 text-sm font-semibold whitespace-nowrap ${
                      header.column.columnDef.header === "Full Name"
                        ? "text-[#157395]"
                        : "text-gray-500"
                    }`}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))
              )}
            </tr>
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
              >
                <td className="p-4 text-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-[#157395] rounded cursor-pointer"
                  />
                </td>

                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="py-4 px-3 text-sm text-gray-600 whitespace-nowrap"
                  >
                    {/* {flexRender(
                     ( cell.column.columnDef.cell ??
                        cell.column.columnDef.accessorKey &&
                        row.original[cell.column.columnDef.accessorKey],
                      cell.getContext()
                    )} */}
                    {flexRender(
  cell.column.columnDef.cell ?? cell.column.columnDef.accessorFn?.(row.original),
  cell.getContext()
)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;