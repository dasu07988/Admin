import React from 'react';

const MealCard = ({ meals = [] }) => {
  const defaultMeals = [
    { time: 'Breakfast', menu: 'Milk, Bread & Butter, Eggs', hours: '7:00 AM - 8:00 AM' },
    { time: 'Lunch', menu: 'Rice, Curry, Salad, Juice', hours: '12:00 PM - 1:00 PM' },
    { time: 'Snack', menu: 'Fruits, Cookies, Tea', hours: '3:00 PM - 4:00 PM' },
    { time: 'Dinner', menu: 'Pasta, Vegetables, Dessert', hours: '6:00 PM - 7:00 PM' }
  ];

  const displayMeals = meals.length > 0 ? meals : defaultMeals;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Meal Schedule</h3>
      <div className="space-y-4">
        {displayMeals.map((meal, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-gray-800">{meal.time}</h4>
              <span className="text-sm text-gray-500">{meal.hours}</span>
            </div>
            <p className="text-sm text-gray-600">{meal.menu}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealCard;