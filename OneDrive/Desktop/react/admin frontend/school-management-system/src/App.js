import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './pages/Dashboard';
import './App.css';
import Meal from './pages/Meal'; 
import Attendance from "./pages/Attendance"; 
import Finance from "./pages/Finance";
import Message from './pages/Message';
import Teacher from './pages/Teacher';
import Kids from './pages/Kids';
import Events from './pages/Events';
import MediaGallery from './pages/MediaGallery';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            {/* Dashboard Route */}
            <Route path="/" element={<Dashboard />} />

            {/* Kids Route */}
            <Route path="/students"
             element={<Kids />} />

            {/* Teachers Route - Updated with TeachersTable */}
              <Route 
                path="/teachers" 
                element={<Teacher />} 
              /> 

            {/* Media Gallery Route */}
            <Route 
              path="/media-gallery" 
              element={<MediaGallery />} 
            />

            {/* Finance Route */}
            <Route path="/finance"
             element={<Finance />} />


            {/* Attendance Route */}
            <Route path="/attendance"
             element={<Attendance />} />

            {/* Events Route */}
            <Route path="/events"
            element={<Events />} />


            {/* Meals Route */}
            <Route path="/meals"
             element={<Meal />} />

            {/* Messages Route */}
            <Route path="/messages"
             element={<Message />} />
             

            {/* Settings Route */}
            <Route 
              path="/settings" 
              element={
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">Settings</h1>
                  <p className="text-gray-600">Settings page coming soon...</p>
                </div>
              } 
            />

            {/* Profile Route */}
            <Route 
              path="/profile" 
              element={
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">Profile</h1>
                  <p className="text-gray-600">User profile page coming soon...</p>
                </div>
              } 
            />

            {/* Logout Route */}
            <Route 
              path="/logout" 
              element={
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">Logout</h1>
                  <p className="text-gray-600">You have been logged out successfully.</p>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Back to Dashboard
                  </button>
                </div>
              } 
            />

            {/* 404 Not Found Route */}
            <Route 
              path="*" 
              element={
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                  <p className="text-gray-600 mb-4">Page not found</p>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Go to Dashboard
                  </button>
                </div>
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;