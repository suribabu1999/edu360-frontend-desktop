import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TabForm = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    contactNumber: '',
    address: '',
    collegeName: '',
    affiliatedWithUniversity: false,
    universityName: '',
    idNo: '',
    course: '',
    year: '',
    interests: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const tabs = [
    { id: 'personal', label: 'Personal Tab' },
    { id: 'university', label: 'University' },
    { id: 'interest', label: 'Interest Tab' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6 h-[100px]">
      <div className="bg-white rounded-lg shadow-sm">
   
        <div className="flex border-b">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`flex-1 px-4 py-3 text-center text-sm transition-colors relative
                ${activeTab === tab.id ? 'text-black' : 'text-gray-600'}
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
              )}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Personal Tab */}
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          )}

          {/* University Tab */}
          {activeTab === 'university' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">College Name</label>
                <div className="relative">
                  <select
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select College</option>
                    <option value="college1">College 1</option>
                    <option value="college2">College 2</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="affiliatedWithUniversity"
                    checked={formData.affiliatedWithUniversity}
                    onChange={handleInputChange}
                    className="rounded text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-sm">Affiliated with the University</span>
                </label>
              </div>
              <div>
                <label className="block text-sm mb-1">University Name</label>
                <div className="relative">
                  <select
                    name="universityName"
                    value={formData.universityName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select University</option>
                    <option value="university1">University 1</option>
                    <option value="university2">University 2</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">ID No.</label>
                <input
                  type="text"
                  name="idNo"
                  value={formData.idNo}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Course</label>
                <div className="relative">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Course</option>
                    <option value="course1">Course 1</option>
                    <option value="course2">Course 2</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Year</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {/* Interest Tab */}
          {activeTab === 'interest' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Interests</label>
                <div className="relative">
                  <select
                    name="interests"
                    value={formData.interests}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Interests</option>
                    <option value="interest1">Interest 1</option>
                    <option value="interest2">Interest 2</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                />
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50"
                  onClick={() => setFormData({})}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Create
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TabForm;