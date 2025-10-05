import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import Footer from '../components/Footer';
import { Plus, Image as ImageIcon, Video, File } from 'lucide-react';

const MediaGallery = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  const mediaItems = [
    { id: 1, type: 'image', title: 'Sports Day 2025', date: '2025-09-15', thumbnail: 'https://via.placeholder.com/300x200/f97316/ffffff?text=Sports+Day' },
    { id: 2, type: 'video', title: 'Annual Function', date: '2025-08-20', thumbnail: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Annual+Function' },
    { id: 3, type: 'image', title: 'Science Exhibition', date: '2025-09-28', thumbnail: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Science+Expo' },
    { id: 4, type: 'document', title: 'School Newsletter', date: '2025-10-01', thumbnail: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Newsletter' },
    { id: 5, type: 'image', title: 'Art Workshop', date: '2025-09-10', thumbnail: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Art+Workshop' },
    { id: 6, type: 'video', title: 'School Tour', date: '2025-07-15', thumbnail: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=School+Tour' }
  ];

  const filteredMedia = activeTab === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === activeTab);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header breadcrumbs={['Media & Gallery']} />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Media & Gallery</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Plus size={20} />
                Upload Media
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'all'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All Media
              </button>
              <button
                onClick={() => setActiveTab('image')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'image'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Images
              </button>
              <button
                onClick={() => setActiveTab('video')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'video'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Videos
              </button>
              <button
                onClick={() => setActiveTab('document')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'document'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Documents
              </button>
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredMedia.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-white rounded-full text-xs font-semibold">
                        {item.type === 'image' && <ImageIcon size={14} className="inline" />}
                        {item.type === 'video' && <Video size={14} className="inline" />}
                        {item.type === 'document' && <File size={14} className="inline" />}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.date}</p>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        View
                      </button>
                      <button className="flex-1 px-3 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition-colors">
                        Download
                      </button>
                    </div>
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

export default MediaGallery;