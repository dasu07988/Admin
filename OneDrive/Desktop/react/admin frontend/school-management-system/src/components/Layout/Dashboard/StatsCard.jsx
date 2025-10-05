import React from 'react';

const StatsCard = ({ title, value, icon: Icon, trend, trendValue, bgColor = 'bg-blue-500' }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
          {trend && (
            <p className={`text-sm mt-2 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend === 'up' ? '↑' : '↓'} {trendValue}
            </p>
          )}
        </div>
        {Icon && (
          <div className={`${bgColor} p-3 rounded-full`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;