import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import Footer from '../components/Footer';
import { Plus, Calendar } from 'lucide-react';

const Meal = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const mealPlan = {
    monday: { breakfast: 'Rice & Curry', lunch: 'Fried Rice', snack: 'Fruits' },
    tuesday: { breakfast: 'Bread & Butter', lunch: 'Noodles', snack: 'Biscuits' },
    wednesday: { breakfast: 'String Hoppers', lunch: 'Rice & Fish', snack: 'Cake' },
    thursday: { breakfast: 'Roti & Dhal', lunch: 'Kottu', snack: 'Juice' },
    friday: { breakfast: 'Hoppers', lunch: 'Biryani', snack: 'Ice Cream' }
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header breadcrumbs={['Meal']} />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Meal Management</h1>
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
                  <Plus size={20} />
                  Add Meal Plan
                </button>
              </div>
            </div>

            {/* Weekly Meal Plan */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-orange-500 text-white">
                <h2 className="text-lg font-semibold">Weekly Meal Plan</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Day
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Breakfast
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Lunch
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Snack
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {days.map((day) => (
                      <tr key={day} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                          {day}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {mealPlan[day].breakfast}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {mealPlan[day].lunch}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {mealPlan[day].snack}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-orange-500 hover:text-orange-600 font-medium">
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dietary Notes */}
            <div className="mt-6 bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Dietary Notes & Allergies</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Amal Perera</p>
                    <p className="text-xs text-gray-600">Allergic to peanuts</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs font-semibold rounded-full">
                    Allergy
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Saman Silva</p>
                    <p className="text-xs text-gray-600">Vegetarian diet</p>
                  </div>
                  <span className="px-2 py-1 bg-green-200 text-green-800 text-xs font-semibold rounded-full">
                    Dietary
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Meal;