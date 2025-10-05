import { useState } from 'react';
import { Search, SlidersHorizontal, Phone, Mail, MoreVertical, UserPlus, Edit, Trash2, Eye } from 'lucide-react';

export default function TeachersTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [showDropdown, setShowDropdown] = useState(null);

  const teachers = [
    {
      id: 1,
      name: 'Dehemi Wijesuriya',
      subject: 'Sakura',
      phone: '+94 77 123 4567',
      email: 'dehemi@school.lk',
      avatar: 'https://ui-avatars.com/api/?name=Dehemi+Wijesuriya&background=e5e7eb&color=6b7280'
    },
    {
      id: 2,
      name: 'Dehemi Wijesuriya',
      subject: 'Sakura',
      phone: '+94 77 123 4567',
      email: 'dehemi@school.lk',
      avatar: 'https://ui-avatars.com/api/?name=Dehemi+Wijesuriya&background=e5e7eb&color=6b7280'
    },
    {
      id: 3,
      name: 'Dehemi Wijesuriya',
      subject: 'Sakura',
      phone: '+94 77 123 4567',
      email: 'dehemi@school.lk',
      avatar: 'https://ui-avatars.com/api/?name=Dehemi+Wijesuriya&background=e5e7eb&color=6b7280'
    },
    {
      id: 4,
      name: 'Dehemi Wijesuriya',
      subject: 'Sakura',
      phone: '+94 77 123 4567',
      email: 'dehemi@school.lk',
      avatar: 'https://ui-avatars.com/api/?name=Dehemi+Wijesuriya&background=e5e7eb&color=6b7280'
    },
    {
      id: 5,
      name: 'Dehemi Wijesuriya',
      subject: 'Sakura',
      phone: '+94 77 123 4567',
      email: 'dehemi@school.lk',
      avatar: 'https://ui-avatars.com/api/?name=Dehemi+Wijesuriya&background=e5e7eb&color=6b7280'
    },
    {
      id: 6,
      name: 'Dehemi Wijesuriya',
      subject: 'Sakura',
      phone: '+94 77 123 4567',
      email: 'dehemi@school.lk',
      avatar: 'https://ui-avatars.com/api/?name=Dehemi+Wijesuriya&background=e5e7eb&color=6b7280'
    },
    {
      id: 7,
      name: 'Dehemi Wijesuriya',
      subject: 'Sakura',
      phone: '+94 77 123 4567',
      email: 'dehemi@school.lk',
      avatar: 'https://ui-avatars.com/api/?name=Dehemi+Wijesuriya&background=e5e7eb&color=6b7280'
    },
    {
      id: 8,
      name: 'Dehemi Wijesuriya',
      subject: 'Sakura',
      phone: '+94 77 123 4567',
      email: 'dehemi@school.lk',
      avatar: 'https://ui-avatars.com/api/?name=Dehemi+Wijesuriya&background=e5e7eb&color=6b7280'
    },
    {
      id: 9,
      name: 'Dehemi Wijesuriya',
      subject: 'Sakura',
      phone: '+94 77 123 4567',
      email: 'dehemi@school.lk',
      avatar: 'https://ui-avatars.com/api/?name=Dehemi+Wijesuriya&background=e5e7eb&color=6b7280'
    },
    {
      id: 10,
      name: 'Dehemi Wijesuriya',
      subject: 'Sakura',
      phone: '+94 77 123 4567',
      email: 'dehemi@school.lk',
      avatar: 'https://ui-avatars.com/api/?name=Dehemi+Wijesuriya&background=e5e7eb&color=6b7280'
    }
  ];

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAction = (action, teacherId) => {
    console.log(`${action} teacher:`, teacherId);
    setShowDropdown(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Teacher</h1>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <SlidersHorizontal size={18} />
              </button>
              
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>All</option>
                <option>Sakura</option>
                <option>Math</option>
                <option>Science</option>
              </select>

              <button className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium">
                <UserPlus size={18} />
                Add Teacher
              </button>
            </div>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 relative"
            >
              {/* More Options Button */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setShowDropdown(showDropdown === teacher.id ? null : teacher.id)}
                  className="p-1 hover:bg-gray-100 rounded-full transition"
                >
                  <MoreVertical size={18} className="text-gray-400" />
                </button>

                {/* Dropdown Menu */}
                {showDropdown === teacher.id && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                    <button
                      onClick={() => handleAction('view', teacher.id)}
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                    >
                      <Eye size={16} />
                      View
                    </button>
                    <button
                      onClick={() => handleAction('edit', teacher.id)}
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleAction('delete', teacher.id)}
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm text-red-600"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                )}
              </div>

              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <img
                  src={teacher.avatar}
                  alt={teacher.name}
                  className="w-20 h-20 rounded-full"
                />
              </div>

              {/* Teacher Info */}
              <div className="text-center mb-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {teacher.name}
                </h3>
                <p className="text-sm text-gray-500">{teacher.subject}</p>
              </div>

              {/* Contact Icons */}
              <div className="flex justify-center gap-4">
                <a
                  href={`tel:${teacher.phone}`}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                  title={teacher.phone}
                >
                  <Phone size={18} className="text-gray-600" />
                </a>
                <a
                  href={`mailto:${teacher.email}`}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                  title={teacher.email}
                >
                  <Mail size={18} className="text-gray-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No teachers found</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 bg-orange-500 text-white py-3 px-6 rounded-lg flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0">© 2025 made by Intake 41</p>
          <div className="flex gap-6">
            <p>Local time in Sri Lanka, LK</p>
            <p>July 28, 2025 - 12:48</p>
          </div>
        </div>
      </div>
    </div>
  );
}