import React from 'react';

const ReviewApplications = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Review Freelancer Applications</h2>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium">Project: Web Development</h3>
          <p className="text-gray-600">Applicant: John Doe</p>
          <p className="text-gray-600">Skills: React, Node.js, MongoDB</p>
          <div className="mt-2 flex gap-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Accept
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Reject
            </button>
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-medium">Project: UI/UX Design</h3>
          <p className="text-gray-600">Applicant: Jane Smith</p>
          <p className="text-gray-600">Skills: Figma, Adobe XD, UI Design</p>
          <div className="mt-2 flex gap-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Accept
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewApplications; 