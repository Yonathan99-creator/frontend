import React, { useState } from 'react';
import { CreditCard, Plus, Edit, Trash2, Shield, CheckCircle, AlertCircle, Star, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Eye, Bookmark, Gift, Rocket, Diamond } from 'lucide-react';

const PaymentMethods: React.FC = () => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const paymentMethods = [
    {
      id: 1,
      type: 'Visa',
      lastFour: '4242',
      expiryDate: '12/25',
      isDefault: true,
      cardholderName: 'Sarah Johnson',
      brand: 'visa',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      type: 'Mastercard',
      lastFour: '8888',
      expiryDate: '08/26',
      isDefault: false,
      cardholderName: 'Sarah Johnson',
      brand: 'mastercard',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 3,
      type: 'American Express',
      lastFour: '1005',
      expiryDate: '03/27',
      isDefault: false,
      cardholderName: 'Sarah Johnson',
      brand: 'amex',
      color: 'from-green-500 to-green-600'
    }
  ];

  const handleSetDefault = (cardId: number) => {
    console.log('Setting default card:', cardId);
  };

  const handleDeleteCard = (cardId: number) => {
    console.log('Deleting card:', cardId);
  };

  const getCardIcon = (brand: string) => {
    switch (brand) {
      case 'visa':
        return '💳';
      case 'mastercard':
        return '💳';
      case 'amex':
        return '💳';
      default:
        return '💳';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Methods</h2>
              <p className="text-gray-600 dark:text-gray-400">Manage your saved payment methods</p>
            </div>
          </div>
          
          <button
            onClick={() => setShowAddCard(true)}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold"
          >
            <Plus className="w-5 h-5" />
            <span>Add New Card</span>
          </button>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paymentMethods.map((method, index) => (
            <div
              key={method.id}
              className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-in slide-in-from-bottom-4 duration-1000 ${
                selectedCard === method.id ? 'ring-2 ring-green-500 ring-offset-2' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedCard(selectedCard === method.id ? null : method.id)}
            >
              {/* Card Design */}
              <div className={`h-48 bg-gradient-to-br ${method.color} p-6 text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                </div>
                
                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl">{getCardIcon(method.brand)}</div>
                    {method.isDefault && (
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                        Default
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <div className="text-xl font-mono font-bold mb-2 tracking-wider">
                      •••• •••• •••• {method.lastFour}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/80">CARDHOLDER</p>
                        <p className="font-medium">{method.cardholderName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/80">EXPIRES</p>
                        <p className="font-medium">{method.expiryDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{method.type}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ending in {method.lastFour}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">Verified</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {!method.isDefault && (
                    <button
                      onClick={() => handleSetDefault(method.id)}
                      className="flex-1 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-105 font-medium text-sm"
                    >
                      Set Default
                    </button>
                  )}
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteCard(method.id)}
                    className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-200 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-105"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-700/50">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-green-600 dark:text-green-400 animate-pulse" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Payment Security</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: CheckCircle,
                title: 'Secure Storage',
                description: 'Your payment information is encrypted and securely stored',
                color: 'text-green-500'
              },
              {
                icon: Shield,
                title: 'Fraud Protection',
                description: '24/7 monitoring and fraud detection for all transactions',
                color: 'text-blue-500'
              },
              {
                icon: Award,
                title: 'PCI Compliant',
                description: 'We meet the highest security standards for payment processing',
                color: 'text-purple-500'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className={`w-5 h-5 ${feature.color} mt-1 group-hover:scale-110 transition-transform duration-300`} />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Card Modal */}
        {showAddCard && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-md w-full animate-in slide-in-from-bottom-4 duration-500">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Add Payment Method</h3>
                    <p className="text-gray-600 dark:text-gray-400">Add a new card for secure payments</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="flex space-x-3 mt-8">
                  <button
                    onClick={() => setShowAddCard(false)}
                    className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowAddCard(false)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
                  >
                    Add Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PaymentMethods;