import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const PracticeActions = ({ onCreate }) => {
  return (
    <div className="flex justify-end mb-6">
      <Button 
        onClick={onCreate}
        className="bg-white hover:bg-gray-50 text-[#157395] border border-gray-100 px-6 h-12 rounded-lg font-medium flex items-center gap-2 shadow-sm transition-all"
      >
        <div className="w-5 h-5 rounded-full bg-[#157395] flex items-center justify-center">
          <Plus className="w-3 h-3 text-white" strokeWidth={3} />
        </div>
        Practice Creation
      </Button>
    </div>
  );
};

export default PracticeActions;
