import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";

const UploadModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white rounded-3xl p-8">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-semibold text-center text-gray-700 mb-8">
            Upload
          </DialogTitle>
          <button 
            onClick={onClose}
            className="absolute right-0 top-0 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-600">Link Name</Label>
            <Input 
              placeholder="Enter Link Name" 
              className="h-12 bg-gray-50 border-gray-100 rounded-lg placeholder:text-gray-300"
            />
          </div>

          <div className="text-center py-4 text-gray-400 text-sm font-medium">Or</div>

          <div className="bg-white border-2 border-dashed border-blue-100 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 transition-colors hover:bg-blue-50/10">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
              <Upload className="w-6 h-6 text-gray-400" />
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-medium">Drag and drop file here</p>
              <p className="text-gray-300 text-xs mt-1">xls/csv</p>
            </div>
          </div>

          <Button 
            className="w-full h-12 bg-[#157395] hover:bg-[#126280] rounded-lg font-medium text-base shadow-none mt-4"
          >
            Upload
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;
