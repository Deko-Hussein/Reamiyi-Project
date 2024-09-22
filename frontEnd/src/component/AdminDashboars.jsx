import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="flex">
      <aside className="w-64 bg-green-600 text-white h-screen p-4">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <Link to="/admin/users" className="hover:text-gray-400">Users</Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/farms" className="hover:text-gray-400">Farms</Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/reports" className="hover:text-gray-400">Reports</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-grow p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold mb-4">Welcome to the Admin Dashboard</h1>
        <Outlet /> 
      </main>
    </div>
  );
}

export default AdminDashboard;
