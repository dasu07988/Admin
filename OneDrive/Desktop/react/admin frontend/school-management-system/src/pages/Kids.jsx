// Kids.jsx
import React, { useState } from 'react';
import { Plus, Search, Phone, Mail, MoreHorizontal } from 'lucide-react';
import AddKidForm from '../components/Forms/AddKidForm';

const Kids = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  // Mock data
  const kidsData = Array(8).fill().map((_, i) => ({
    id: i + 1,
    name: "Dehemi Wijesuriya Dehemi Wijesuriya",
    indexNo: "ST-25-0071",
    class: "Sakura"
  }));

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">450</h3>
          <p className="text-red-600 font-medium">Total</p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">230</h3>
          <p className="text-red-600 font-medium">Boys</p>
        </div>
        <div className="bg-orange-100 rounded-lg p-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">220</h3>
          <p className="text-red-600 font-medium">Girls</p>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
              All
            </button>
          </div>
          <button 
            onClick={() => setShowAddForm(true)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-orange-600"
          >
            <Plus className="w-4 h-4" />
            <span>Add Kids</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Index No</th>
                <th className="text-left py-3 px-4">Class</th>
                <th className="text-left py-3 px-4">Contact</th>
                <th className="text-left py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {kidsData.map((kid) => (
                <tr key={kid.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <span>{kid.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">{kid.indexNo}</td>
                  <td className="py-4 px-4">{kid.class}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-6 space-x-2">
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">
            &lt;
          </button>
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-orange-500 text-white">
                      1
                    </button>
                  </div>
                </div>
                {showAddForm && (
                  <AddKidForm onClose={() => setShowAddForm(false)} />
                )}
              </div>
            );
          };
          
          export default Kids;