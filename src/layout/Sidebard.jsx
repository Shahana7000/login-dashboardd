import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings2, 
  Network, 
  MapPin, 
  Pill, 
  X 
} from 'lucide-react';

// Logo
import logo from '../assets/image.png';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Employee Details', icon: Users, path: '/employee-details' },
  { name: 'Roles & Permission', icon: Settings2, path: '/roles-permission' },
  { name: 'Team Management', icon: Network, path: '/team-management' },
  { name: 'Add Location', icon: MapPin, path: '/add-location' },
  { name: 'Practice Management', icon: Pill, path: '/practice-management' },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 min-h-screen bg-[#171829] flex flex-col flex-shrink-0 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
          <img src={logo} alt="SPARKz" className="h-10" />
          {/* Close button on mobile */}
          <button
            onClick={onClose}
            className="lg:hidden text-white/70 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col mt-8 px-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3.5 rounded-lg text-[15px] transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-200`}
                />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
     
    </>
  );
};

export default Sidebar;