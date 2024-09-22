import React from 'react';

function AdminFarms() {
  const farms = [
    { id: 1, name: 'Farm A', location: 'Shabeellaha Hoose', type: 'Vegetable' },
    { id: 2, name: 'Farm B', location: 'Shabeellaha Dhexe', type: 'Livestock' },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Farms</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Farm Name</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {farms.map(farm => (
            <tr key={farm.id}>
              <td className="border px-4 py-2">{farm.id}</td>
              <td className="border px-4 py-2">{farm.name}</td>
              <td className="border px-4 py-2">{farm.location}</td>
              <td className="border px-4 py-2">{farm.type}</td>
              <td className="border px-4 py-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminFarms;
