import React, { useState } from 'react';
import { Settings, Users, Clock, MapPin, FileText, Shield, AlertTriangle, RefreshCw, Plus, Minus, Star, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Eye, Bookmark, Gift, Rocket, Diamond, CheckCircle, AlertCircle, Info, Calendar, DollarSign, Phone, Mail, MessageCircle } from 'lucide-react';
import { ServiceFormData } from './AddServicePage';

interface ServiceAdvancedProps {
  formData: ServiceFormData;
  updateFormData: (updates: Partial<ServiceFormData>) => void;
}

const ServiceAdvanced: React.FC<ServiceAdvancedProps> = ({ formData, updateFormData }) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showPolicyTemplates, setShowPolicyTemplates] = useState(false);

  const policyTemplates = {
    cancellation: [
      "24-hour cancellation policy. Cancellations within 24 hours may incur a 50% fee.",
      "48-hour cancellation policy. No fee for cancellations made 48+ hours in advance.",
      "Same-day cancellations incur full service fee. Reschedule anytime with 24-hour notice.",
      "Flexible cancellation up to 2 hours before appointment. Emergency exceptions considered."
    ],
    refund: [
      "Full refund for cancellations 48+ hours in advance. 50% refund for 24-48 hour cancellations.",
      "No refunds for completed services. Refunds available for cancellations 24+ hours prior.",
      "100% satisfaction guarantee. Full refund if not completely satisfied with service.",
      "Refunds processed within 5-7 business days to original payment method."
    ]
  };

  const locationOptions = [
    { id: 'salon', name: 'Salon Main Floor', icon: MapPin, color: 'from-blue-500 to-cyan-600' },
    { id: 'private', name: 'Private Suite', icon: Crown, color: 'from-purple-500 to-pink-600' },
    { id: 'color-station', name: 'Color Station', icon: Sparkles, color: 'from-yellow-500 to-orange-600' },
    { id: 'treatment-room', name: 'Treatment Room', icon: Shield, color: 'from-green-500 to-emerald-600' },
    { id: 'mobile', name: 'Mobile Service', icon: Rocket, color: 'from-red-500 to-pink-600' },
    { id: 'outdoor', name: 'Outdoor Setup', icon: Target, color: 'from-indigo-500 to-purple-600' }
  ];

  const addRequirement = (requirement: string) => {
    if (requirement.trim() && !formData.requirements.includes(requirement.trim())) {
      updateFormData({ requirements: [...formData.requirements, requirement.trim()] });
    }
  };

  const removeRequirement = (requirement: string) => {
    updateFormData({ requirements: formData.requirements.filter(req => req !== requirement) });
  };

  const addBenefit = (benefit: string) => {
    if (benefit.trim() && !formData.benefits.includes(benefit.trim())) {
      updateFormData({ benefits: [...formData.benefits, benefit.trim()] });
    }
  };

  const removeBenefit = (benefit: string) => {
    updateFormData({ benefits: formData.benefits.filter(ben => ben !== benefit) });
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
          <Settings className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Advanced Settings
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
            Configure policies, requirements, and special instructions
          </p>
        </div>
      </div>

      {/* Service Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Location Selection */}
          <div className="space-y-4">
            <label className="block text-lg font-bold text-gray-900 dark:text-white">
              Service Location
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {locationOptions.map((location, index) => {
                const Icon = location.icon;
                const isSelected = formData.location === location.id;
                
                return (
                  <button
                    key={location.id}
                    onClick={() => updateFormData({ location: location.id })}
                    className={`group p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 text-left animate-in slide-in-from-left-4 duration-1000 ${
                      isSelected
                        ? `border-transparent bg-gradient-to-r ${location.color} text-white shadow-lg`
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 ${
                        isSelected 
                          ? 'bg-white/20 backdrop-blur-sm' 
                          : `bg-gradient-to-r ${location.color}`
                      }`}>
                        <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-white'}`} />
                      </div>
                      <div>
                        <h4 className={`font-bold ${isSelected ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                          {location.name}
                        </h4>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Capacity Settings */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-600/50">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Capacity & Timing
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Max Clients
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateFormData({ maxClients: Math.max(1, formData.maxClients - 1) })}
                    className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-110"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={formData.maxClients}
                    onChange={(e) => updateFormData({ maxClients: parseInt(e.target.value) || 1 })}
                    min="1"
                    max="10"
                    className="flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-center font-bold"
                  />
                  <button
                    onClick={() => updateFormData({ maxClients: Math.min(10, formData.maxClients + 1) })}
                    className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-110"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Prep Time (min)
                </label>
                <input
                  type="number"
                  value={formData.preparationTime}
                  onChange={(e) => updateFormData({ preparationTime: parseInt(e.target.value) || 0 })}
                  min="0"
                  max="60"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-center font-bold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cleanup Time (min)
                </label>
                <input
                  type="number"
                  value={formData.cleanupTime}
                  onChange={(e) => updateFormData({ cleanupTime: parseInt(e.target.value) || 0 })}
                  min="0"
                  max="60"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-center font-bold"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Requirements */}
          <div className="space-y-4">
            <label className="block text-lg font-bold text-gray-900 dark:text-white">
              Service Requirements
            </label>
            <div className="space-y-3">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Add a requirement (e.g., Clean hair, No recent chemical treatments)"
                  className="flex-1 px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const target = e.target as HTMLInputElement;
                      addRequirement(target.value);
                      target.value = '';
                    }
                  }}
                />
                <button
                  onClick={(e) => {
                    const input = (e.target as HTMLElement).parentElement?.querySelector('input') as HTMLInputElement;
                    if (input) {
                      addRequirement(input.value);
                      input.value = '';
                    }
                  }}
                  className="px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              {formData.requirements.length > 0 && (
                <div className="space-y-2">
                  {formData.requirements.map((requirement, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200/50 dark:border-orange-600/50 animate-in slide-in-from-right-4 duration-500"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{requirement}</span>
                      <button
                        onClick={() => removeRequirement(requirement)}
                        className="p-1 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-all duration-300 hover:scale-110"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <label className="block text-lg font-bold text-gray-900 dark:text-white">
              Service Benefits
            </label>
            <div className="space-y-3">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Add a benefit (e.g., Long-lasting results, Damage-free process)"
                  className="flex-1 px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const target = e.target as HTMLInputElement;
                      addBenefit(target.value);
                      target.value = '';
                    }
                  }}
                />
                <button
                  onClick={(e) => {
                    const input = (e.target as HTMLElement).parentElement?.querySelector('input') as HTMLInputElement;
                    if (input) {
                      addBenefit(input.value);
                      input.value = '';
                    }
                  }}
                  className="px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              {formData.benefits.length > 0 && (
                <div className="space-y-2">
                  {formData.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200/50 dark:border-green-600/50 animate-in slide-in-from-right-4 duration-500"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{benefit}</span>
                      <button
                        onClick={() => removeBenefit(benefit)}
                        className="p-1 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-all duration-300 hover:scale-110"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Policies Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span>Service Policies</span>
          </h3>
          <button
            onClick={() => setShowPolicyTemplates(!showPolicyTemplates)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-105"
          >
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Templates</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cancellation Policy */}
          <div className="space-y-4">
            <label className="block text-md font-bold text-gray-800 dark:text-gray-200">
              Cancellation Policy
            </label>
            <div className="relative group">
              <div className={`absolute left-4 top-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                focusedField === 'cancellation' 
                  ? 'bg-gradient-to-r from-red-500 to-pink-600 animate-pulse' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}>
                <AlertTriangle className="w-4 h-4 text-white" />
              </div>
              <textarea
                value={formData.cancellationPolicy}
                onChange={(e) => updateFormData({ cancellationPolicy: e.target.value })}
                onFocus={() => setFocusedField('cancellation')}
                onBlur={() => setFocusedField(null)}
                placeholder="Describe your cancellation policy..."
                rows={4}
                className="w-full pl-14 pr-6 py-4 bg-gradient-to-r from-gray-50 to-red-50 dark:from-gray-700 dark:to-red-900/20 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
              />
            </div>
          </div>

          {/* Refund Policy */}
          <div className="space-y-4">
            <label className="block text-md font-bold text-gray-800 dark:text-gray-200">
              Refund Policy
            </label>
            <div className="relative group">
              <div className={`absolute left-4 top-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                focusedField === 'refund' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 animate-pulse' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}>
                <RefreshCw className="w-4 h-4 text-white" />
              </div>
              <textarea
                value={formData.refundPolicy}
                onChange={(e) => updateFormData({ refundPolicy: e.target.value })}
                onFocus={() => setFocusedField('refund')}
                onBlur={() => setFocusedField(null)}
                placeholder="Describe your refund policy..."
                rows={4}
                className="w-full pl-14 pr-6 py-4 bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-700 dark:to-green-900/20 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Policy Templates */}
        {showPolicyTemplates && (
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-600/50 animate-in slide-in-from-top-2 duration-300">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Policy Templates
            </h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Cancellation Templates</h5>
                <div className="space-y-2">
                  {policyTemplates.cancellation.map((template, index) => (
                    <button
                      key={index}
                      onClick={() => updateFormData({ cancellationPolicy: template })}
                      className="w-full text-left p-3 bg-white dark:bg-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm border border-gray-200 dark:border-gray-600"
                    >
                      {template}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Refund Templates</h5>
                <div className="space-y-2">
                  {policyTemplates.refund.map((template, index) => (
                    <button
                      key={index}
                      onClick={() => updateFormData({ refundPolicy: template })}
                      className="w-full text-left p-3 bg-white dark:bg-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm border border-gray-200 dark:border-gray-600"
                    >
                      {template}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Special Instructions */}
      <div className="space-y-4">
        <label className="block text-lg font-bold text-gray-900 dark:text-white">
          Special Instructions
        </label>
        <div className="relative group">
          <div className={`absolute left-4 top-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            focusedField === 'instructions' 
              ? 'bg-gradient-to-r from-purple-500 to-pink-600 animate-pulse' 
              : 'bg-gray-300 dark:bg-gray-600'
          }`}>
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <textarea
            value={formData.specialInstructions}
            onChange={(e) => updateFormData({ specialInstructions: e.target.value })}
            onFocus={() => setFocusedField('instructions')}
            onBlur={() => setFocusedField(null)}
            placeholder="Any special instructions for clients (e.g., what to bring, how to prepare, what to expect)"
            rows={4}
            className="w-full pl-14 pr-6 py-4 bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/20 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
          />
        </div>
      </div>

      {/* Configuration Summary */}
      <div className="bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/20 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-xl transition-all duration-500 hover:scale-105">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Configuration Summary</h3>
            <p className="text-gray-600 dark:text-gray-400">Review your advanced settings</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: 'Location',
              value: formData.location || 'Not set',
              icon: MapPin,
              color: 'from-blue-500 to-cyan-600'
            },
            {
              label: 'Max Clients',
              value: formData.maxClients.toString(),
              icon: Users,
              color: 'from-green-500 to-emerald-600'
            },
            {
              label: 'Requirements',
              value: `${formData.requirements.length} items`,
              icon: AlertTriangle,
              color: 'from-orange-500 to-red-600'
            },
            {
              label: 'Benefits',
              value: `${formData.benefits.length} items`,
              icon: Star,
              color: 'from-purple-500 to-pink-600'
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.label}</h4>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Validation Summary */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">Advanced Settings Validation</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Location Set', valid: formData.location !== '', icon: MapPin },
            { label: 'Capacity Configured', valid: formData.maxClients > 0, icon: Users },
            { label: 'Policies Defined', valid: formData.cancellationPolicy !== '' || formData.refundPolicy !== '', icon: Shield },
            { label: 'Setup Complete', valid: true, icon: CheckCircle }
          ].map((validation, index) => {
            const Icon = validation.icon;
            return (
              <div
                key={validation.label}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                  validation.valid
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                    : 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300'
                }`}
              >
                <Icon className={`w-5 h-5 ${validation.valid ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`} />
                <span className="text-sm font-medium">{validation.label}</span>
                {validation.valid ? (
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvanced;