import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Calendar, 
  DollarSign, 
  Utensils, 
  MessageSquare, 
  Settings, 
  User, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Students', path: '/students', icon: Users },
    { name: 'Teachers', path: '/teachers', icon: Users },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Finance', path: '/finance', icon: DollarSign },
    { name: 'Attendance', path: '/attendance', icon: Calendar },
    { name: 'Media Gallery', path: '/media-gallery', icon: Calendar },
    { name: 'Meals', path: '/meals', icon: Utensils },
    { name: 'Messages', path: '/messages', icon: MessageSquare }
  ];

  const bottomMenuItems = [
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Logout', path: '/logout', icon: LogOut }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 transition-transform duration-300 ease-in-out
          bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col
        `}
      >
        {/* Logo/Header */}
        <div className="mb-8 mt-12 lg:mt-0">
          <h2 className="text-2xl font-bold text-center">School Admin</h2>
          <p className="text-gray-400 text-sm text-center mt-1">Management System</p>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg 
                      flex items-center space-x-3 transition-all
                      ${isActive 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'hover:bg-gray-700 text-gray-300 hover:text-white'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Menu */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <ul className="space-y-2">
            {bottomMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg 
                      flex items-center space-x-3 transition-all
                      ${isActive 
                        ? 'bg-blue-600 text-white' 
                        : 'hover:bg-gray-700 text-gray-300 hover:text-white'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;