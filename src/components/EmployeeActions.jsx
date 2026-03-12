const EmployeeActions = ({ onRegister, onBulkRegister, onBulkUpdate }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 shadow-sm">
      <button 
        onClick={onRegister}
        className="flex-1 bg-[#157395] text-white py-3 px-6 rounded-md font-medium text-sm hover:bg-[#126280] transition-colors"
      >
        Register Employee
      </button>
      <button 
        onClick={onBulkRegister}
        className="flex-1 border border-[#157395] text-[#157395] py-3 px-6 rounded-md font-medium text-sm hover:bg-[#157395]/5 transition-colors"
      >
        Bulk Register
      </button>
      <button 
        onClick={onBulkUpdate}
        className="flex-1 border border-[#157395] text-[#157395] py-3 px-6 rounded-md font-medium text-sm hover:bg-[#157395]/5 transition-colors"
      >
        Bulk Update
      </button>
    </div>
  );
};

export default EmployeeActions;