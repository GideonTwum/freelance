import React from 'react';

const ManageProjects = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Manage Active Projects</h2>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium">E-commerce Website Development</h3>
          <p className="text-gray-600">Status: In Progress</p>
          <p className="text-gray-600">Freelancer: Sarah Johnson</p>
          <p className="text-gray-600">Due Date: 2024-03-15</p>
          <div className="mt-2 flex gap-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Progress
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              Extend Deadline
            </button>
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-medium">Mobile App Design</h3>
          <p className="text-gray-600">Status: Review Phase</p>
          <p className="text-gray-600">Freelancer: Mike Wilson</p>
          <p className="text-gray-600">Due Date: 2024-02-28</p>
          <div className="mt-2 flex gap-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Progress
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              Extend Deadline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProjects; 