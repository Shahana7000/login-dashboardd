import React from 'react';

const BulkActionModal = ({ isOpen, onClose, type = 'register' }) => {
  if (!isOpen) return null;

  const isRegister = type === 'register';
  const title = isRegister ? 'Bulk Register' : 'Bulk Update';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 p-8">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-8">{title}</h2>

        <div className="space-y-6">
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex-1 px-4 py-3 text-gray-400 text-sm">
              {title}
            </div>
            <button className="bg-gray-200 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-300 transition-colors">
              Browser
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-800 font-medium">
              Note: <span className="text-gray-600 font-normal">Upload File Only In xlsx Formate.</span>{' '}
              <button className="text-[#157395] hover:underline font-semibold">Download</button>{' '}
              From Here
            </p>
          </div>

          <div className="flex gap-4 pt-2">
            <button 
              onClick={onClose}
              className="flex-1 bg-[#F0F3F8] text-[#157395] py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={onClose}
              className="flex-1 bg-[#157395] text-white py-3 rounded-lg font-semibold hover:bg-[#126280] transition-colors shadow-lg shadow-[#157395]/20"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkActionModal;
