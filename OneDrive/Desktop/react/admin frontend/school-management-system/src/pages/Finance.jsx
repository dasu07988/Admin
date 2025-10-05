import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import Footer from '../components/Footer';
import { DollarSign, TrendingUp, TrendingDown, Download } from 'lucide-react';

const Finance = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const transactions = [
    { id: 1, student: 'Ishani Wijasuriya', type: 'Tuition Fee', amount: 5000, date: '2025-10-01', status: 'Paid' },
    { id: 2, student: 'Amal Perera', type: 'Transport Fee', amount: 2000, date: '2025-10-01', status: 'Paid' },
    { id: 3, student: 'Saman Silva', type: 'Tuition Fee', amount: 5000, date: '2025-09-30', status: 'Pending' },
    { id: 4, student: 'Nimal Fernando', type: 'Meal Fee', amount: 1500, date: '2025-09-29', status: 'Paid' },
    { id: 5, student: 'Kasun Rajapakse', type: 'Tuition Fee', amount: 5000, date: '2025-09-28', status: 'Overdue' }
  ];

  const stats = {
    totalRevenue: 1250000,
    totalExpenses: 450000,
    netProfit: 800000,
    pendingPayments: 125000
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header breadcrumbs={['Finance']} />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Finance Management</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Download size={20} />
                Generate Report
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Total Revenue</div>
                  <TrendingUp className="text-green-500" size={20} />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  LKR {stats.totalRevenue.toLocaleString()}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Total Expenses</div>
                  <TrendingDown className="text-red-500" size={20} />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  LKR {stats.totalExpenses.toLocaleString()}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Net Profit</div>
                  <DollarSign className="text-blue-500" size={20} />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  LKR {stats.netProfit.toLocaleString()}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Pending Payments</div>
                  <DollarSign className="text-yellow-500" size={20} />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  LKR {stats.pendingPayments.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Transaction ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          #TXN{transaction.id.toString().padStart(4, '0')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.student}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          LKR {transaction.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            transaction.status === 'Paid'
                              ? 'bg-green-100 text-green-800'
                              : transaction.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Finance;