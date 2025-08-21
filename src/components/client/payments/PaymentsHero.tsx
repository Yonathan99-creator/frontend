import React from 'react';
import { CreditCard, Plus, Shield, TrendingUp, DollarSign, Lock, CheckCircle, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Gift, Rocket, Diamond } from 'lucide-react';

const PaymentsHero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-950 dark:via-green-950/20 dark:to-emerald-950/30 overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-20 dark:opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-400 to-teal-600 rounded-full opacity-20 dark:opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating payment elements */}
        <div className="absolute top-20 right-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/20 dark:border-gray-700/20">
            <div className="flex items-center space-x-2 mb-2">
              <CreditCard className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Secure</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">256-bit SSL</p>
          </div>
        </div>
        <div className="absolute bottom-32 left-16 animate-bounce" style={{ animationDelay: '1.5s' }}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/20 dark:border-gray-700/20">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Protected</span>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-10 animate-bounce" style={{ animationDelay: '2s' }}>
          <DollarSign className="w-12 h-12 text-green-400 opacity-60" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-8 border border-green-200/50 dark:border-green-700/50">
            <CreditCard className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 animate-pulse" />
            <span className="text-green-800 dark:text-green-300 font-medium">Secure Payment Center</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-6 leading-tight">
            Manage Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> Payments</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Secure payment processing with multiple options. Track your spending, manage payment methods, and view transaction history.
          </p>

          {/* Quick action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-lg">
              <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
              Add Payment Method
            </button>
            
            <button className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500 transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl">
              <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
              View Spending Analytics
            </button>
          </div>

          {/* Security features */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Bank-Level Security</h3>
                  <p className="text-gray-600 dark:text-gray-400">256-bit SSL encryption</p>
                </div>
                <div className="text-center">
                  <Lock className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">PCI Compliant</h3>
                  <p className="text-gray-600 dark:text-gray-400">Industry standard protection</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Fraud Protection</h3>
                  <p className="text-gray-600 dark:text-gray-400">24/7 monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentsHero;