import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

const ExportModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white rounded-3xl p-10 text-center">
        <DialogHeader className="relative flex justify-center">
          <DialogTitle className="text-2xl font-semibold text-gray-700 mb-6">
            Export
          </DialogTitle>
          <button 
            onClick={onClose}
            className="absolute right-0 top-0 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
            <Download className="w-6 h-6 text-[#157395]" />
          </div>

          <p className="text-gray-400 text-sm">
            Your file will be downloaded after generating link
          </p>

          <Button 
            className="w-full h-12 bg-[#157395] hover:bg-[#126280] rounded-lg font-medium text-base shadow-none mt-2"
          >
            Generating Download Link
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExportModal;
