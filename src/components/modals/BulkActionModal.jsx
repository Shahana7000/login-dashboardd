import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const BulkActionModal = ({ isOpen, onClose, type = 'register' }) => {
  const isRegister = type === 'register';
  const title = isRegister ? 'Bulk Register' : 'Bulk Update';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl p-0 overflow-hidden border-none shadow-2xl rounded-2xl">
        <div className="p-8 pb-10">
          <h2 className="text-xl font-semibold text-gray-700 text-center mb-10">
            {title}
          </h2>

          <div className="space-y-6">
            <div className="flex border border-gray-200 rounded-lg overflow-hidden h-14">
              <div className="flex-1 px-5 flex items-center text-gray-400 text-sm bg-white">
                {title}
              </div>
              <Button 
                variant="secondary"
                className="rounded-none h-full px-8 bg-gray-200 text-gray-600 hover:bg-gray-300 font-medium transition-colors border-l"
              >
                Browser
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-800 font-medium">
                Note: Upload File Only In xlsx Formate.{' '}
                <button className="text-[#157395] hover:underline font-semibold">Download</button>{' '}
                From Here
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                variant="secondary"
                onClick={onClose}
                className="flex-1 bg-[#F0F3F8] text-gray-600 h-12 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Cancel
              </Button>
              <Button 
                onClick={onClose}
                className="flex-1 bg-[#157395] text-white h-12 rounded-lg font-medium hover:bg-[#126280] shadow-md shadow-[#157395]/10"
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BulkActionModal;

