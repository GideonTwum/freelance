import React from 'react';

const TrackBudgets = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Track Project Budgets</h2>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium">E-commerce Website Development</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <p className="text-gray-600">Total Budget: $5,000</p>
              <p className="text-gray-600">Spent: $3,200</p>
              <p className="text-gray-600">Remaining: $1,800</p>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <p className="text-sm text-gray-600">Budget Usage</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '64%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">64% of budget used</p>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-medium">Mobile App Design</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <p className="text-gray-600">Total Budget: $3,000</p>
              <p className="text-gray-600">Spent: $1,500</p>
              <p className="text-gray-600">Remaining: $1,500</p>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <p className="text-sm text-gray-600">Budget Usage</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">50% of budget used</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackBudgets; 