import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebard';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#F0F3F8]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 min-w-0 lg:pl-64 flex flex-col overflow-hidden relative">
        <div className="max-w-[1800px] mx-auto w-full h-full flex flex-col overflow-hidden">
          {/* Mobile hamburger - passed down via context or directly */}

          <div className="lg:hidden fixed top-4 left-4 z-30">
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-10 h-10 bg-[#171829] text-white rounded-lg flex items-center justify-center shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="h-full">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
