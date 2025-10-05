// Dashboard.jsx
import React from 'react';
import StatsCard from '../components/Layout/Dashboard/StatsCard';
import MealCard from '../components/Layout/Dashboard/MealCard';
import QuickAccessCard from '../components/Layout/Dashboard/QuickAccessCard';
import Calendar from '../components/Layout/Dashboard/Calender';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Kids"
          value="450"
          color="bg-orange-100 text-orange-600"
        />
        <StatsCard
          title="Total Teachers"
          value="12"
          color="bg-orange-100 text-orange-600"
        />
        <StatsCard
          title="Total Class"
          value="7"
          color="bg-orange-100 text-orange-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Meal */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Today Meal</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MealCard
                type="Breakfast"
                items={['Bread', 'Daal Curry']}
              />
              <MealCard
                type="Snaks"
                items={['Bread', 'Daal Curry']}
              />
              <MealCard
                type="Lunch"
                items={['Bread', 'Daal Curry']}
              />
            </div>
          </div>
        </div>

        {/* Monthly Fees Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Kids Fees</h3>
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#f3f4f6"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#f97316"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={`${85 * 2.51} 251.2`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">85%</span>
              </div>
            </div>
            <div className="w-full space-y-2">
              <div className="bg-orange-500 text-white px-4 py-2 rounded text-center">
                <div className="text-sm">Revenue</div>
                <div className="font-semibold">Rs. 200,000</div>
              </div>
              <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded text-center">
                <div className="text-sm">Pending</div>
                <div className="font-semibold">Rs. 340,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Access</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <QuickAccessCard title="Student Manage" />
          <QuickAccessCard title="Teacher Manage" />
          <QuickAccessCard title="Attendance" />
          <QuickAccessCard title="Finance" />
          <QuickAccessCard title="Events & Activities" />
          <QuickAccessCard title="Media & Gallery" />
          <QuickAccessCard title="Meal" />
          <QuickAccessCard title="Messages" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Event & Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Event & Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border border-orange-200 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Book Fair</p>
                <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet...</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-orange-200 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Book Fair</p>
                <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet...</p>
              </div>
            </div>
          </div>
        </div>

        {/* School Calendar */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;











