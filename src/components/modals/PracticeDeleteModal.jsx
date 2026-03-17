import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const PracticeDeleteModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white rounded-3xl p-10 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-orange-400" strokeWidth={1.5} />
          </div>

          <h3 className="text-2xl font-semibold text-gray-700">Alert</h3>

          <p className="text-gray-400 text-[15px] leading-relaxed max-w-[320px]">
            Are you sure want to delete this Practice ID? all the users will get deleted and this action can not be undone
          </p>

          <div className="flex w-full gap-4 mt-4">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1 h-12 bg-[#157395] hover:bg-[#126280] border-none text-white rounded-lg font-medium text-base shadow-none"
            >
              Cancel
            </Button>
            <Button 
              className="flex-1 h-12 bg-orange-50 hover:bg-orange-100/80 text-orange-400 border-none rounded-lg font-medium text-base shadow-none"
              onClick={onDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PracticeDeleteModal;
