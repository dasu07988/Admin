import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import Footer from '../components/Footer';
import { Plus, Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const events = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: '2025-10-15',
      time: '08:00 AM',
      location: 'School Playground',
      description: 'Annual sports day with various competitions',
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      date: '2025-10-10',
      time: '02:00 PM',
      location: 'Main Hall',
      description: 'Quarterly parent-teacher meeting',
      status: 'Upcoming'
    },
    {
      id: 3,
      title: 'Science Exhibition',
      date: '2025-09-28',
      time: '09:00 AM',
      location: 'Science Lab',
      description: 'Student science project exhibition',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Art & Craft Workshop',
      date: '2025-10-20',
      time: '10:00 AM',
      location: 'Art Room',
      description: 'Creative art and craft workshop for all grades',
      status: 'Upcoming'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header breadcrumbs={['Events']} />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Events Management</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Plus size={20} />
                Create Event
              </button>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      event.status === 'Upcoming'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
                    <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition-colors">
                      Edit Event
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Events;