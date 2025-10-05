import React, { useState } from 'react';
import Sidebar from '../Layout/Sidebar';
import Header from '../Layout/Header';
import Footer from '../../components/Footer';
import StudentForm from '../../components/StudentForm';
import ParentForm from '../../components/ParentForm';

const AddNewKid = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [photoPreview, setPhotoPreview] = useState(null);
  
  const [studentData, setStudentData] = useState({
    photo: null,
    fullName: '',
    nameWithInitial: '',
    birthDate: '',
    gender: '',
    height: '',
    weight: '',
    specialNotes: ''
  });

  const [motherData, setMotherData] = useState({
    fullName: '',
    nameWithInitial: '',
    homeAddress: '',
    email: '',
    phone: '',
    workPlace: ''
  });

  const [fatherData, setFatherData] = useState({
    fullName: '',
    nameWithInitial: '',
    homeAddress: '',
    email: '',
    phone: '',
    workPlace: ''
  });

  const [otherData, setOtherData] = useState({
    studentId: '',
    class: '',
    password: ''
  });

  const handleSubmit = () => {
    console.log('Student Data:', studentData);
    console.log('Mother Data:', motherData);
    console.log('Father Data:', fatherData);
    console.log('Other Data:', otherData);
    alert('Form submitted successfully! Check console for data.');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All data will be lost.')) {
      setStudentData({
        photo: null,
        fullName: '',
        nameWithInitial: '',
        birthDate: '',
        gender: '',
        height: '',
        weight: '',
        specialNotes: ''
      });
      setMotherData({
        fullName: '',
        nameWithInitial: '',
        homeAddress: '',
        email: '',
        phone: '',
        workPlace: ''
      });
      setFatherData({
        fullName: '',
        nameWithInitial: '',
        homeAddress: '',
        email: '',
        phone: '',
        workPlace: ''
      });
      setOtherData({
        studentId: '',
        class: '',
        password: ''
      });
      setPhotoPreview(null);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header breadcrumbs={['Kids', 'Add New Kid']} />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            <StudentForm 
              data={studentData}
              setData={setStudentData}
              photoPreview={photoPreview}
              setPhotoPreview={setPhotoPreview}
            />
            
            <ParentForm 
              title="Mother's Details"
              data={motherData}
              setData={setMotherData}
            />
            
            <ParentForm 
              title="Father's Details"
              data={fatherData}
              setData={setFatherData}
            />
            
            {/* Other Details */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="bg-orange-500 text-white px-6 py-3 font-semibold">
                Other Details
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Id
                  </label>
                  <input
                    type="text"
                    placeholder="Enter student ID"
                    value={otherData.studentId}
                    onChange={(e) => setOtherData({ ...otherData, studentId: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class
                  </label>
                  <input
                    type="text"
                    placeholder="Enter class"
                    value={otherData.class}
                    onChange={(e) => setOtherData({ ...otherData, class: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={otherData.password}
                    onChange={(e) => setOtherData({ ...otherData, password: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pb-6">
              <button
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default AddNewKid;