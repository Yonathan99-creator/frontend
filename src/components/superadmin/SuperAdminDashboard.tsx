import React, { useState } from 'react';
import { Shield, Users, BarChart3, Settings, TrendingUp, Activity, Clock, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Star, Eye, Bookmark, CheckCircle, AlertCircle, XCircle, Calendar, DollarSign, UserCheck, UserX, Database, Server, Globe, Lock } from 'lucide-react';
import { useAuth } from '../../contexts/auth/AuthContext';
import Navbar from '../shared/Navbar';

const SuperAdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3, color: 'from-blue-500 to-cyan-600' },
    { id: 'users', label: 'User Management', icon: Users, color: 'from-green-500 to-emerald-600' },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp, color: 'from-purple-500 to-pink-600' },
    { id: 'system', label: 'System', icon: Settings, color: 'from-orange-500 to-red-600' }
  ];

  const systemStats = [
    {
      label: 'Total Users',
      value: '12,847',
      change: '+12% this month',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      trend: 'up'
    },
    {
      label: 'Active Professionals',
      value: '3,421',
      change: '+8% this month',
      icon: UserCheck,
      color: 'from-green-500 to-emerald-600',
      trend: 'up'
    },
    {
      label: 'Total Revenue',
      value: '$847,230',
      change: '+23% this month',
      icon: DollarSign,
      color: 'from-purple-500 to-pink-600',
      trend: 'up'
    },
    {
      label: 'System Uptime',
      value: '99.9%',
      change: 'Excellent',
      icon: Server,
      color: 'from-orange-500 to-red-600',
      trend: 'up'
    }
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'Maria Garcia',
      email: 'maria@email.com',
      role: 'professional',
      status: 'active',
      joinDate: '2025-01-20',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'David Chen',
      email: 'david@email.com',
      role: 'client',
      status: 'active',
      joinDate: '2025-01-19',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      email: 'lisa@email.com',
      role: 'professional',
      status: 'pending',
      joinDate: '2025-01-18',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const systemHealth = [
    { name: 'Database', status: 'healthy', uptime: '99.9%', color: 'text-green-500' },
    { name: 'API Server', status: 'healthy', uptime: '99.8%', color: 'text-green-500' },
    { name: 'Payment Gateway', status: 'healthy', uptime: '99.7%', color: 'text-green-500' },
    { name: 'Email Service', status: 'warning', uptime: '98.2%', color: 'text-yellow-500' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* System Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group animate-in slide-in-from-bottom-4 duration-1000"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-400">
                          {stat.change}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* System Health */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">System Health</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {systemHealth.map((service, index) => (
                  <div
                    key={service.name}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900 dark:text-white">{service.name}</h4>
                      <div className={`w-3 h-3 rounded-full ${service.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`}></div>
                    </div>
                    <p className={`text-sm font-medium ${service.color}`}>{service.status}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Uptime: {service.uptime}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h2>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Add New User
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Users</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentUsers.map((user, index) => (
                  <div
                    key={user.id}
                    className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 animate-in slide-in-from-right-4 duration-1000"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">{user.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          user.role === 'professional' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        }`}>
                          {user.role}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          user.status === 'active'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {user.status}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(user.joinDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {tabs.find(tab => tab.id === activeTab)?.label}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              This section is under development
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navbar userRole="superadmin" />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 animate-in slide-in-from-top-4 duration-1000">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
                <Shield className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                  Super Admin Dashboard
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                  System administration and platform oversight
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-2 mb-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden ${
                      isActive
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    } animate-in slide-in-from-bottom-4 duration-1000`}
                    style={{ animationDelay: `${index * 100 + 300}ms` }}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="font-bold">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-400">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;