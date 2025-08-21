import React, { useState } from 'react';
import { Calendar, DollarSign, CheckCircle, AlertCircle, XCircle, Download, Eye, Filter, Search, TrendingUp, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Star, Bookmark, Gift, Rocket, Diamond, BarChart3 } from 'lucide-react';

interface Transaction {
  id: number;
  professionalName: string;
  service: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed' | 'refunded';
  paymentMethod: string;
  transactionId: string;
  receiptUrl?: string;
}

const TransactionHistory: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [showAllTransactions, setShowAllTransactions] = useState(false);

  const transactions: Transaction[] = [
    {
      id: 1,
      professionalName: 'Dr. Emily Davis',
      service: 'Cardiology Consultation',
      amount: 200,
      date: '2024-01-15',
      status: 'completed',
      paymentMethod: 'Visa ****4242',
      transactionId: 'TXN-2024-001',
      receiptUrl: '#'
    },
    {
      id: 2,
      professionalName: 'James Rodriguez',
      service: 'Legal Consultation',
      amount: 300,
      date: '2024-01-12',
      status: 'completed',
      paymentMethod: 'Mastercard ****8888',
      transactionId: 'TXN-2024-002',
      receiptUrl: '#'
    },
    {
      id: 3,
      professionalName: 'Dr. Sarah Williams',
      service: 'Therapy Session',
      amount: 150,
      date: '2024-01-10',
      status: 'completed',
      paymentMethod: 'Visa ****4242',
      transactionId: 'TXN-2024-003',
      receiptUrl: '#'
    },
    {
      id: 4,
      professionalName: 'Michael Thompson',
      service: 'Financial Planning',
      amount: 180,
      date: '2024-01-08',
      status: 'completed',
      paymentMethod: 'Amex ****1005',
      transactionId: 'TXN-2024-004',
      receiptUrl: '#'
    },
    {
      id: 5,
      professionalName: 'Dr. Lisa Chen',
      service: 'Dermatology Consultation',
      amount: 175,
      date: '2024-01-05',
      status: 'completed',
      paymentMethod: 'Visa ****4242',
      transactionId: 'TXN-2024-005',
      receiptUrl: '#'
    },
    {
      id: 6,
      professionalName: 'Robert Johnson',
      service: 'Business Consultation',
      amount: 250,
      date: '2024-01-03',
      status: 'pending',
      paymentMethod: 'Mastercard ****8888',
      transactionId: 'TXN-2024-006'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'refunded':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4" />;
      case 'failed':
        return <XCircle className="w-4 h-4" />;
      case 'refunded':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredTransactions = transactions.filter(transaction => 
    filterStatus === 'all' || transaction.status === filterStatus
  );

  const displayedTransactions = showAllTransactions ? filteredTransactions : filteredTransactions.slice(0, 5);

  const totalSpent = transactions
    .filter(t => t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Transaction History</h2>
              <p className="text-gray-600 dark:text-gray-400">View and manage your payment history</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
              <option value="refunded">Refunded</option>
            </select>
            
            <button className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-700/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Total Spent</h3>
                <p className="text-sm text-green-600 dark:text-green-400">This year</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              ${totalSpent.toLocaleString()}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">This Month</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">Current spending</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              $380
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-700/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Avg per Session</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">Average cost</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              ${Math.round(totalSpent / transactions.filter(t => t.status === 'completed').length)}
            </p>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
              <button
                onClick={() => setShowAllTransactions(!showAllTransactions)}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                {showAllTransactions ? 'Show Less' : 'View All'}
              </button>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {displayedTransactions.map((transaction, index) => (
              <div 
                key={transaction.id} 
                className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 transform group animate-in slide-in-from-right-4 duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 ${
                      transaction.status === 'completed' 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                        : transaction.status === 'pending'
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-600'
                          : transaction.status === 'failed'
                            ? 'bg-gradient-to-r from-red-500 to-pink-600'
                            : 'bg-gradient-to-r from-blue-500 to-cyan-600'
                    }`}>
                      {getStatusIcon(transaction.status)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {transaction.professionalName}
                        </h4>
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(transaction.status)}`}>
                          {getStatusIcon(transaction.status)}
                          <span className="capitalize">{transaction.status}</span>
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {transaction.service}
                      </p>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500 dark:text-gray-500">
                        <span>{formatDate(transaction.date)}</span>
                        <span>•</span>
                        <span>{transaction.paymentMethod}</span>
                        <span>•</span>
                        <span>{transaction.transactionId}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                        ${transaction.amount}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 hover:scale-110 group/btn">
                        <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      </button>
                      {transaction.receiptUrl && (
                        <button className="p-2 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-xl transition-all duration-300 hover:scale-110 group/btn">
                          <Download className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Footer */}
          <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {filteredTransactions.length} transactions
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Total: ${filteredTransactions.reduce((sum, t) => sum + t.amount, 0).toLocaleString()}
                  </p>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium">
                <Download className="w-5 h-5" />
                <span>Export All</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;