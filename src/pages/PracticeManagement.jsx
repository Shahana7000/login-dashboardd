import React, { useState } from "react";
import Topbar from "../components/Topbar";
import PracticeActions from "../components/PracticeActions";
import PracticeTable from "../components/PracticeTable";

// Modals
import PracticeCreationModal from "../components/modals/PracticeCreationModal";
import UploadModal from "../components/modals/UploadModal";
import ExportModal from "../components/modals/ExportModal";
import PracticeDeleteModal from "../components/modals/PracticeDeleteModal";

const PracticeManagement = () => {
  const [activeModal, setActiveModal] = useState(null); 
  const [selectedPractice, setSelectedPractice] = useState(null);

  const closeModal = () => {
    setActiveModal(null);
    setSelectedPractice(null);
  };

  const handleCreate = () => setActiveModal('create');
  const handleEdit = (practice) => {
    setSelectedPractice(practice);
    setActiveModal('create'); 
  };
  const handleDownload = (practice) => {
    setSelectedPractice(practice);
    setActiveModal('export');
  };
  const handleSync = (practice) => {
    setSelectedPractice(practice);
    setActiveModal('upload');
  };
  const handleDelete = (practice) => {
    setSelectedPractice(practice);
    setActiveModal('delete');
  };

  return (
    <div className="bg-[#F0F3F8] min-h-screen p-4 sm:p-6 flex flex-col overflow-hidden">
      <div className="flex flex-col flex-shrink-0">
        <Topbar />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 mb-8 gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-[#157395]">
            Practice Management
          </h1>
          
          <PracticeActions onCreate={handleCreate} />
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <PracticeTable 
          onEdit={handleEdit}
          onDownload={handleDownload}
          onSync={handleSync}
          onDelete={handleDelete}
        />
      </div>

      {/* Modals */}
      <PracticeCreationModal 
        isOpen={activeModal === 'create'} 
        onClose={closeModal} 
        data={selectedPractice}
      />
      
      <UploadModal 
        isOpen={activeModal === 'upload'} 
        onClose={closeModal} 
      />

      <ExportModal 
        isOpen={activeModal === 'export'} 
        onClose={closeModal} 
      />

      <PracticeDeleteModal 
        isOpen={activeModal === 'delete'} 
        onClose={closeModal}
        onDelete={() => {
          console.log("Deleted:", selectedPractice);
          closeModal();
        }}
      />
    </div>
  );
};

export default PracticeManagement;
