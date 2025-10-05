import React from 'react';

const StudentForm = ({ data, setData, photoPreview, setPhotoPreview }) => {
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
        setData({ ...data, photo: file });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="bg-orange-500 text-white px-6 py-3 font-semibold">
        Student Details
      </div>
      <div className="p-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photo <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            {photoPreview ? (
              <img src={photoPreview} alt="Preview" className="w-full h-32 object-cover rounded" />
            ) : (
              <div className="text-gray-400 text-xs">
                Drag and drop or click here to select file
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
              id="photo-upload"
            />
            <label htmlFor="photo-upload" className="cursor-pointer text-orange-500 text-xs mt-2 block hover:text-orange-600">
              Choose File
            </label>
          </div>
        </div>

        <div className="col-span-12 md:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Hinsun thethwannanage Ishani Hirundika Wijasuriya"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="row-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Notes <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="6"
              placeholder="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              value={data.specialNotes}
              onChange={(e) => setData({ ...data, specialNotes: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name with Initial
            </label>
            <input
              type="text"
              placeholder="H.I.H.I Wijasuriya"
              value={data.nameWithInitial}
              onChange={(e) => setData({ ...data, nameWithInitial: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Birth Date
              </label>
              <input
                type="date"
                value={data.birthDate}
                onChange={(e) => setData({ ...data, birthDate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <div className="flex items-center gap-4 mt-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={data.gender === 'Male'}
                    onChange={(e) => setData({ ...data, gender: e.target.value })}
                    className="text-orange-500"
                  />
                  <span className="text-sm">Male</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={data.gender === 'Female'}
                    onChange={(e) => setData({ ...data, gender: e.target.value })}
                    className="text-orange-500"
                  />
                  <span className="text-sm">Female</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height
              </label>
              <input
                type="text"
                placeholder="cm"
                value={data.height}
                onChange={(e) => setData({ ...data, height: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight
              </label>
              <input
                type="text"
                placeholder="kg"
                value={data.weight}
                onChange={(e) => setData({ ...data, weight: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;