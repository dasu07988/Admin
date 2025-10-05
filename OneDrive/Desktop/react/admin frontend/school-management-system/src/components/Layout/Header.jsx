import React, { useState } from 'react';
import { Menu, Bell, Search, User, Settings, LogOut, ChevronDown } from 'lucide-react';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, text: 'New message from Mrs. Wijasuriya', time: '5 min ago', unread: true },
    { id: 2, text: 'Class schedule updated', time: '1 hour ago', unread: true },
    { id: 3, text: 'Payment received', time: '2 hours ago', unread: false }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition lg:hidden"
          >
            <Menu size={24} className="text-gray-600" />
          </button>
          
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-64">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search Icon for Mobile */}
          <button className="p-2 rounded-lg hover:bg-gray-100 transition md:hidden">
            <Search size={20} className="text-gray-600" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-lg hover:bg-gray-100 transition relative"
            >
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                        notif.unread ? 'bg-blue-50' : ''
                      }`}
                    >
                      <p className="text-sm text-gray-900">{notif.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-200">
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <img
                src="https://ui-avatars.com/api/?name=Admin+User&background=3b82f6&color=fff"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block text-sm font-medium text-gray-700">
                Admin User
              </span>
              <ChevronDown size={16} className="text-gray-600 hidden md:block" />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="font-medium text-gray-900">Admin User</p>
                  <p className="text-sm text-gray-500">admin@school.com</p>
                </div>
                <a
                  href="/profile"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700"
                >
                  <User size={18} />
                  <span className="text-sm">My Profile</span>
                </a>
                <a
                  href="/settings"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700"
                >
                  <Settings size={18} />
                  <span className="text-sm">Settings</span>
                </a>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-red-600 w-full">
                    <LogOut size={18} />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;