import React from 'react';


const QuickAccessCard = ({ items = [] }) => {


  const defaultItems = [
    { name: 'Students', icon: '👥', path: '/students', color: 'bg-blue-100 text-blue-600' },
    { name: 'Teachers', icon: '👨‍🏫', path: '/teachers', color: 'bg-green-100 text-green-600' },
    { name: 'Classes', icon: '📚', path: '/classes', color: 'bg-purple-100 text-purple-600' },
    { name: 'Attendance', icon: '✓', path: '/attendance', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Exams', icon: '📝', path: '/exams', color: 'bg-red-100 text-red-600' },
    { name: 'Reports', icon: '📊', path: '/reports', color: 'bg-indigo-100 text-indigo-600' }
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Access</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayItems.map((item, index) => (
          <button
            key={index}
            onClick={() => item.path && (item.path)}
            className={`${item.color} p-4 rounded-lg hover:shadow-md transition-all transform hover:scale-105 text-center`}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="font-semibold text-sm">{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickAccessCard;