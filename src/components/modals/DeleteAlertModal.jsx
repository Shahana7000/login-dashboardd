import React from 'react';
import { AlertTriangle } from 'lucide-react';

const DeleteAlertModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-orange-500" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2">Alert</h2>
        <p className="text-gray-600 mb-6">Do you want to delete this employee?</p>

        <div className="bg-blue-50/30 rounded-lg p-4 mb-8">
          <p className="text-xs text-[#157395] font-semibold mb-1">Note:</p>
          <p className="text-xs text-gray-500">
            The data of the employee will get deleted.<br />
            This action Cannot be undone
          </p>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 bg-[#157395] text-white py-3 rounded-lg font-semibold hover:bg-[#126280] transition-colors shadow-lg shadow-[#157395]/20"
          >
            Cancel
          </button>
          <button 
            onClick={onDelete}
            className="flex-1 bg-[#fff1f1] text-red-500 py-3 rounded-lg font-semibold hover:bg-red-100 transition-colors border border-red-100/50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAlertModal;
