import React, { useState } from "react";
import EmployeeActions from '../../components/EmployeeActions'
import EmployeeFilters from "../../components/EmployeeFilters";
import EmployeeTable from "../../components/EmployeeTable";

// Modals
import RegisterEmployeeModal from '../../components/modals/RegisterEmployeeModal';
import BulkActionModal from "../../components/modals/BulkActionModal"
import DeleteAlertModal from "../../components/modals/DeleteAlertModal"

const EmployeeDetails = () => {
  const [activeModal, setActiveModal] = useState(null); // 'register', 'bulk-register', 'bulk-update', 'delete'

  const closeModal = () => setActiveModal(null);

  return (
    <div className="bg-[#F0F3F8] h-full py-4 flex flex-col overflow-hidden">
      <div className="flex flex-col flex-shrink-0">

        <h1 className="text-lg sm:text-xl font-semibold mt-6 mb-5 text-gray-800">
          Employee Details
        </h1>

        <EmployeeActions 
          onRegister={() => setActiveModal('register')}
          onBulkRegister={() => setActiveModal('bulk-register')}
          onBulkUpdate={() => setActiveModal('bulk-update')}
        />
        <EmployeeFilters />
      </div>


      {/* Table area scrolls while the header/actions stay fixed */}
      <div className="flex-1 overflow-hidden mt-4">
        <EmployeeTable 
          onDelete={() => setActiveModal('delete')}
        />
      </div>

      {/* Rendering Modals conditionaly */}
      <RegisterEmployeeModal 
        isOpen={activeModal === 'register'} 
        onClose={closeModal} 
      />
      
      <BulkActionModal 
        isOpen={activeModal === 'bulk-register'} 
        onClose={closeModal} 
        type="register"
      />
      
      <BulkActionModal 
        isOpen={activeModal === 'bulk-update'} 
        onClose={closeModal} 
        type="update"
      />

      <DeleteAlertModal 
        isOpen={activeModal === 'delete'} 
        onClose={closeModal}
        onDelete={() => {
          console.log("Deleted!");
          closeModal();
        }}
      />
    </div>
  );
};

export default EmployeeDetails;