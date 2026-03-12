import React from 'react';
import { 
  Search, 
  UserMinus, 
  Download 
} from 'lucide-react';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const EmployeeFilters = () => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-lg mb-5 shadow-sm space-y-4 sticky">
      {/* Top row: Search + Deleted User History */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 bg-[#F0F3F8] border-gray-300 h-11"
          />
        </div>

        {/* Deleted User History */}
        <Button 
          variant="destructive" 
          className="bg-red-50 text-red-500 hover:bg-red-100 border-red-200 h-11 gap-2.5 px-5 font-medium shadow-none outline-none"
        >
          <UserMinus className="w-5 h-5" />
          Deleted User History
        </Button>
      </div>

      {/* Bottom row: Filters */}
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-end gap-4 pt-2">
        {/* Role */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-[160px]">
          <Label className="text-xs font-medium text-gray-500">Role</Label>
          <Select>
            <SelectTrigger className="h-10 bg-white border-gray-200 focus:ring-[#157395]/20 focus:border-[#157395]">
              <SelectValue placeholder="See All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">See All</SelectItem>
              <SelectItem value="frontend">Frontend Developer</SelectItem>
              <SelectItem value="backend">Backend Developer</SelectItem>
              <SelectItem value="designer">Designer</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Team */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-[160px]">
          <Label className="text-xs font-medium text-gray-500">Team</Label>
          <Select>
            <SelectTrigger className="h-10 bg-white border-gray-200 focus:ring-[#157395]/20 focus:border-[#157395]">
              <SelectValue placeholder="All Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Location</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="office">Office</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Export */}
        <Button 
          variant="outline" 
          className="h-10 border-[#157395]/20 text-[#157395] hover:bg-[#157395]/5 px-5 font-medium gap-2"
        >
          <Download className="w-5 h-5" />
          Export
        </Button>

        {/* Show Entries */}
        <div className="flex items-center gap-3 sm:ml-auto">
          <span className="text-sm text-gray-500 whitespace-nowrap">Show Entries</span>
          <Select defaultValue="100">
            <SelectTrigger className="h-10 w-[80px] bg-white border-gray-200 focus:ring-[#157395]/20 focus:border-[#157395]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="25">25</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default EmployeeFilters;