import React from 'react';
import { 
  Search, 
  UserMinus, 
  Download 
} from 'lucide-react';

const EmployeeFilters = () => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-lg mb-5 shadow-sm space-y-4 sticky">
      {/* Top row: Search + Deleted User History */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search */}
        <div className="bg-[#F0F3F8] border border-gray-300 px-4 py-2.5 rounded-md w-full sm:w-96 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm text-gray-600 placeholder-gray-400"
          />
        </div>

        {/* Deleted User History */}
        <button className="flex items-center justify-center gap-2.5 bg-red-50 text-red-500 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-red-100 transition-colors border border-red-200 whitespace-nowrap">
          <UserMinus className="w-5 h-5" />
          Deleted User History
        </button>
      </div>

      {/* Bottom row: Filters */}
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-end gap-4">
        {/* Role */}
        <div className="flex flex-col gap-1 flex-1 min-w-[160px]">
          <label className="text-xs font-medium text-gray-500">Role</label>
          <select className="bg-white border border-gray-200 px-4 py-2 rounded-md text-sm text-gray-600 outline-none focus:border-[#157395] transition-colors cursor-pointer">
            <option>See All</option>
          </select>
        </div>

        {/* Team */}
        <div className="flex flex-col gap-1 flex-1 min-w-[160px]">
          <label className="text-xs font-medium text-gray-500">Team</label>
          <select className="bg-white border border-gray-200 px-4 py-2 rounded-md text-sm text-gray-600 outline-none focus:border-[#157395] transition-colors cursor-pointer">
            <option>All Location</option>
          </select>
        </div>

        {/* Export */}
        <button className="flex items-center justify-center gap-2 text-[#157395] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#157395]/5 transition-colors border border-[#157395]/20">
          <Download className="w-5 h-5" />
          Export
        </button>

        {/* Show Entries */}
        <div className="flex items-center gap-3 sm:ml-auto">
          <span className="text-sm text-gray-500 whitespace-nowrap">Show Entries</span>
          <select className="border border-gray-200 px-3 py-1.5 rounded-md text-sm text-gray-600 outline-none focus:border-[#157395] cursor-pointer">
            <option>100</option>
            <option>50</option>
            <option>25</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EmployeeFilters;