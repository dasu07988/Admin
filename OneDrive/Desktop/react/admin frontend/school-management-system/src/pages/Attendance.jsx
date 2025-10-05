import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import Footer from '../components/Footer';
import { Calendar, Download } from 'lucide-react';

const Attendance = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const attendanceData = [
    { id: 1, name: 'Ishani Wijasuriya', class: 'Grade 5', status: 'Present', time: '08:30 AM' },
    { id: 2, name: 'Amal Perera', class: 'Grade 4', status: 'Present', time: '08:25 AM' },
    { id: 3, name: 'Saman Silva', class: 'Grade 6', status: 'Absent', time: '-' },
    { id: 4, name: 'Nimal Fernando', class: 'Grade 3', status: 'Late', time: '09:15 AM' },
    { id: 5, name: 'Kasun Rajapakse', class: 'Grade 5', status: 'Present', time: '08:20 AM' }
  ];

  const stats = {
    total: 245,
    present: 230,
    absent: 10,
    late: 5
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header breadcrumbs={['Attendance']} />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Attendance Management</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-gray-600" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  <Download size={20} />
                  Export
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-600 mb-1">Total Students</div>
                <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-600 mb-1">Present</div>
                <div className="text-2xl font-bold text-green-600">{stats.present}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-600 mb-1">Absent</div>
                <div className="text-2xl font-bold text-red-600">{stats.absent}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-600 mb-1">Late</div>
                <div className="text-2xl font-bold text-yellow-600">{stats.late}</div>
              </div>
            </div>

            {/* Attendance Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Class
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Check-in Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attendanceData.map((record) => (
                      <tr key={record.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          #{record.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              src={`https://ui-avatars.com/api/?name=${record.name}&background=f97316&color=fff`}
                              alt={record.name}
                              className="w-8 h-8 rounded-full mr-3"
                            />
                            <span className="text-sm font-medium text-gray-900">{record.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {record.class}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            record.status === 'Present'
                              ? 'bg-green-100 text-green-800'
                              : record.status === 'Absent'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {record.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <select className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>
                            <option value="Late">Late</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Attendance;