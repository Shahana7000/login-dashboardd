import React from 'react';
import { AlertTriangle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DeleteAlertModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-8 gap-0 text-center">
        <DialogHeader className="p-0 mb-4 flex flex-col items-center">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-10 h-10 text-orange-500" />
          </div>
          <DialogTitle className="text-xl font-bold text-gray-800">Alert</DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            Do you want to delete this employee?
          </DialogDescription>
        </DialogHeader>

        <div className="bg-blue-50/30 rounded-lg p-4 mb-8">
          <p className="text-xs text-[#157395] font-semibold mb-1 text-left">Note:</p>
          <p className="text-xs text-gray-500 text-left">
            The data of the employee will get deleted.<br />
            This action Cannot be undone
          </p>
        </div>

        <div className="flex gap-4">
          <Button 
            variant="default"
            onClick={onClose}
            className="flex-1 bg-[#157395] text-white h-12 rounded-lg font-semibold hover:bg-[#126280] shadow-lg shadow-[#157395]/20"
          >
            Cancel
          </Button>
          <Button 
            variant="destructive"
            onClick={onDelete}
            className="flex-1 bg-[#fff1f1] text-red-500 h-12 rounded-lg font-semibold hover:bg-red-100 border border-red-100/50"
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAlertModal;

