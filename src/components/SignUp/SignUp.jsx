import React, { useState } from "react";
import leftArrowIcon from "../../assets/icons/left-circle-arrow.svg";
import cameraIcon from "../../assets/icons/camera-icon.svg";
import { ChevronDown } from "lucide-react";
import nextIcon from "../../assets/icons/nexticon.png";
const FormField = ({ label, required, children }) => (
  <div className="relative">
    <div className="absolute -top-2 left-3 px-1 bg-white">
      <span className="text-sm text-gray-600">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
    </div>
    {children}
  </div>
);

const SignUp = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [progress, setProgress] = useState(33);

  const tabs = [
    { id: "personal", label: "Personal Tab" },
    { id: "university", label: "University" },
    { id: "interest", label: "Interest Tab" },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    contactNumber: "",
    address: "",
    collegeName: "",
    affiliatedWithUniversity: false,
    universityName: "",
    idNo: "",
    course: "",
    year: "",
    interests: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNextButton = () => {
    if (activeTab === "personal") {
      setActiveTab("university");
      setProgress(33);
    } else if (activeTab === "university") {
      setActiveTab("interest");
      setProgress(100);
    } else {
      setProgress(66);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    if (tab.id === "university") {
      setProgress(66);
    } else if (tab.id === "interest") {
      setProgress(100);
    } else {
      setProgress(33);
    }
  };

  return (
    <div className="border-[1px] shadow-login border-black rounded-[7px] h-[600px] w-[1003px] bg-white">
      <div className="w-full h-[10px] bg-gray-200 flex rounded-[7px] -z-10">
        <div
          className="bg-[#50A8D5] rounded-tl-[5.1px]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="setup-virtual-id flex items-center space-x-2 p-3">
        <img src={leftArrowIcon} className="h-5" alt="" />
        <p className="font-medium text-sm">Set up your Virtual ID</p>
      </div>
      <div className="main-content flex pl-10 pr-10 pb-10 space-x-5">
        <div className="id-card h-[460px] rounded-lg bg-gradient-to-b from-[#4EA3C908] to-[#3E586412] shadow-lg">
          <div className="camera-icon h-[120px] w-[300px] border border-[#50A9D499] flex justify-center items-center rounded-lg bg-white">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Uploaded"
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <img src={cameraIcon} alt="Camera Icon" className="w-1/2 h-1/2" />
            )}
          </div>
          <div className="p-4">
            <div className="font-medium text-[#50A9D4] underline text-[16px] leading-3">
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="imageUpload"
              className="text-blue-500 underline cursor-pointer text-sm flex relative left-0"
            >
              Upload Picture
            </label>
            </div>
            <p className="text-[#00111A] font-medium mt-5">
              Full Name: {formData.fullName}
            </p>
            <p className="text-[#00111A] font-medium mt-5">
              Email: {formData.email}
            </p>
            <p className="text-[#00111A] font-medium mt-5">
              Gender: {formData.gender}
            </p>
            <p className="text-[#00111A] font-medium mt-5">
              Contact Number: {formData.contactNumber}
            </p>
            <p className="text-[#00111A] font-medium mt-5">
              Address: {formData.address}
            </p>
          </div>
        </div>
        <div className="w-full min-h-[460px]">
          <div className="w-full max-w-2xl border rounded-lg border-gray-200 ">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex border-b border-gray-200">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    className={`
                flex-1 px-4 py-2.5 text-center text-sm relative border-r last:border-r-0 
                ${
                  activeTab === tab.id
                    ? "text-black border-b-2 border-b-blue-500 -mb-[1px]"
                    : "text-gray-600 border-b border-b-gray-200"
                }
                ${index === 0 ? "border-l" : ""}
                border-t border-gray-200
              `}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                {/* Personal Tab */}
                {activeTab === "personal" && (
                  <div className="space-y-6">
                    <FormField label="Full Name" required>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded mt-1"
                        required
                      />
                    </FormField>

                    <FormField label="Email" required>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded mt-1"
                        required
                      />
                    </FormField>

                    <FormField label="Gender" required>
                      <input
                        type="text"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded mt-1"
                        required
                      />
                    </FormField>

                    <FormField label="Contact Number" required>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded mt-1"
                        required
                      />
                    </FormField>

                    <FormField label="Address" required>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded mt-1"
                        required
                      />
                    </FormField>
                  </div>
                )}

                {activeTab === "university" && (
                  <div className="space-y-6">
                    <FormField label="College Name">
                      <select
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded appearance-none mt-1"
                      >
                        <option value="college1">College 1</option>
                        <option value="college2">College 2</option>
                      </select>
                      <ChevronDown
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </FormField>

                    <div className="mt-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="affiliatedWithUniversity"
                          checked={formData.affiliatedWithUniversity}
                          onChange={handleInputChange}
                          className="rounded text-blue-500"
                        />
                        <span className="text-sm">
                          Affiliated with the University
                        </span>
                      </label>
                    </div>

                    <FormField label="University Name">
                      <select
                        name="universityName"
                        value={formData.universityName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded appearance-none mt-1"
                      >
                        <option value="">Select University</option>
                        <option value="university1">University 1</option>
                        <option value="university2">University 2</option>
                      </select>
                      <ChevronDown
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </FormField>

                    <FormField label="ID No.">
                      <input
                        type="text"
                        name="idNo"
                        value={formData.idNo}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded mt-1"
                      />
                    </FormField>

                    <FormField label="Course">
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded appearance-none mt-1"
                      >
                        <option value="">Select Course</option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                      </select>
                      <ChevronDown
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </FormField>

                    <FormField label="Year">
                      <input
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded mt-1"
                      />
                    </FormField>
                  </div>
                )}

                {activeTab === "interest" && (
                  <div className="space-y-6">
                    <FormField label="Interests">
                      <select
                        name="interests"
                        value={formData.interests}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded appearance-none mt-1"
                      >
                        <option value="">Select Interests</option>
                        <option value="interest1">Interest 1</option>
                        <option value="interest2">Interest 2</option>
                      </select>
                      <ChevronDown
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </FormField>

                    <FormField label="Description">
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-200 rounded mt-1 h-32"
                      />
                    </FormField>

                    <div className="flex justify-center space-x-4 pt-4">
                      <button
                        type="button"
                        className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50"
                        onClick={() => setFormData({})}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-gradient-to-b from-[#50A8D5] to-[#3C88AE] text-white py-2 px-4 rounded"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
          {(activeTab === "personal" || activeTab === "university") && (
            <div
              className="flex justify-end mt-5 cursor-pointer"
              onClick={handleNextButton}
            >
              <img src={nextIcon} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
