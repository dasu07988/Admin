import React, { useState } from 'react';

const Calendar = ({ events = [] }) => {
  const [currentDate] = useState(new Date());
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const defaultEvents = [
    { date: 5, title: 'Parent Meeting', type: 'meeting' },
    { date: 12, title: 'Sports Day', type: 'event' },
    { date: 20, title: 'Mid-term Exam', type: 'exam' },
    { date: 25, title: 'School Holiday', type: 'holiday' }
  ];

  const displayEvents = events.length > 0 ? events : defaultEvents;

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="p-2"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const hasEvent = displayEvents.find(e => e.date === day);
    const isToday = day === currentDate.getDate();
    
    days.push(
      <div
        key={day}
        className={`p-2 text-center border border-gray-200 relative ${
          isToday ? 'bg-blue-100 font-bold' : ''
        } ${hasEvent ? 'bg-yellow-50' : ''}`}
      >
        <span className="text-sm">{day}</span>
        {hasEvent && (
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
      </h3>
      <div className="grid grid-cols-7 gap-1 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold text-gray-600 text-sm p-2">
            {day}
          </div>
        ))}
        {days}
      </div>
      <div className="mt-4 space-y-2">
        <h4 className="font-semibold text-gray-700 text-sm mb-2">Upcoming Events</h4>
        {displayEvents.slice(0, 3).map((event, index) => (
          <div key={index} className="flex items-center text-sm">
            <span className="w-8 text-gray-600 font-medium">{event.date}</span>
            <span className="text-gray-700">{event.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;