import React, { useState } from 'react';
import { ArrowLeft, Save, X, Plus, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Award, Heart, Star, Eye, Bookmark, Gift, Rocket, Diamond, Camera, Upload, DollarSign, Clock, Scissors, Palette, Brush, Wand2, Users, Calendar, CheckCircle, AlertCircle, Settings, Bell, Share2 } from 'lucide-react';
import { useApp } from '../../../../contexts/AppContext';
import AddServiceHeader from './AddServiceHeader';
import ServiceBasicInfo from './ServiceBasicInfo';
import ServicePricing from './ServicePricing';
import ServiceMedia from './ServiceMedia';
import ServiceAdvanced from './ServiceAdvanced';
import ServicePreview from './ServicePreview';

export interface ServiceFormData {
  name: string;
  description: string;
  category: string;
  duration: number;
  price: number;
  originalPrice?: number;
  isActive: boolean;
  isPremium: boolean;
  isPopular: boolean;
  tags: string[];
  images: string[];
  requirements: string[];
  benefits: string[];
  location: string;
  maxClients: number;
  preparationTime: number;
  cleanupTime: number;
  cancellationPolicy: string;
  refundPolicy: string;
  specialInstructions: string;
}

const AddServicePage: React.FC = () => {
  const { setCurrentModule } = useApp();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState<ServiceFormData>({
    name: '',
    description: '',
    category: 'haircut',
    duration: 60,
    price: 0,
    originalPrice: undefined,
    isActive: true,
    isPremium: false,
    isPopular: false,
    tags: [],
    images: [],
    requirements: [],
    benefits: [],
    location: '',
    maxClients: 1,
    preparationTime: 10,
    cleanupTime: 10,
    cancellationPolicy: '',
    refundPolicy: '',
    specialInstructions: ''
  });

  const steps = [
    { 
      id: 1, 
      title: 'Basic Information', 
      description: 'Service name, description, and category',
      icon: Scissors, 
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    { 
      id: 2, 
      title: 'Pricing & Duration', 
      description: 'Set pricing, duration, and availability',
      icon: DollarSign, 
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    { 
      id: 3, 
      title: 'Media & Gallery', 
      description: 'Add photos and showcase your work',
      icon: Camera, 
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    { 
      id: 4, 
      title: 'Advanced Settings', 
      description: 'Policies, requirements, and special instructions',
      icon: Settings, 
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    }
  ];

  const handleBack = () => {
    setCurrentModule?.('My Services');
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically save to your backend
    console.log('Saving service:', formData);
    
    setIsLoading(false);
    setCurrentModule?.('My Services');
  };

  const updateFormData = (updates: Partial<ServiceFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ServiceBasicInfo formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <ServicePricing formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <ServiceMedia formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <ServiceAdvanced formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() !== '' && formData.description.trim() !== '' && formData.category !== '';
      case 2:
        return formData.price > 0 && formData.duration > 0;
      case 3:
        return true; // Media is optional
      case 4:
        return true; // Advanced settings are optional
      default:
        return false;
    }
  };

  const completedSteps = currentStep - 1;
  const progressPercentage = (completedSteps / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-pink-500/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-indigo-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-pink-400/30 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AddServiceHeader onBack={handleBack} />

          {/* Progress Bar */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 mb-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Service Creation Progress</h2>
                  <p className="text-gray-600 dark:text-gray-400">Step {currentStep} of {steps.length}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{Math.round(progressPercentage)}%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Complete</div>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = index < currentStep - 1;
                  const isCurrent = index === currentStep - 1;
                  const isUpcoming = index > currentStep - 1;

                  return (
                    <div
                      key={step.id}
                      className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                        isCurrent ? 'scale-110' : 'scale-100'
                      } animate-in slide-in-from-bottom-4 duration-1000`}
                      style={{ animationDelay: `${index * 150 + 300}ms` }}
                    >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 transform hover:scale-110 hover:rotate-12 group relative overflow-hidden ${
                        isCompleted 
                          ? `bg-gradient-to-r ${step.color} text-white` 
                          : isCurrent 
                            ? `bg-gradient-to-r ${step.color} text-white animate-pulse` 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                        )}
                        {isCurrent && (
                          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-2xl"></div>
                        )}
                      </div>
                      <div className="text-center">
                        <p className={`text-sm font-bold transition-colors duration-300 ${
                          isCompleted || isCurrent 
                            ? 'text-gray-900 dark:text-white' 
                            : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {step.title}
                        </p>
                        <p className={`text-xs transition-colors duration-300 ${
                          isCompleted || isCurrent 
                            ? 'text-gray-600 dark:text-gray-300' 
                            : 'text-gray-400 dark:text-gray-500'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress Line */}
              <div className="absolute top-8 left-8 right-8 h-1 bg-gray-200 dark:bg-gray-700 rounded-full -z-10">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Form Content */}
            <div className="lg:col-span-3">
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-left-4 duration-1000 delay-400">
                {renderStepContent()}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Preview */}
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-right-4 duration-1000 delay-600">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Quick Preview</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">See how it looks</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowPreview(true)}
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold"
                >
                  Preview Service
                </button>
              </div>

              {/* Tips */}
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-right-4 duration-1000 delay-800">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Pro Tips</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Maximize bookings</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: Star,
                      title: 'High-Quality Photos',
                      description: 'Services with photos get 3x more bookings',
                      color: 'text-yellow-500'
                    },
                    {
                      icon: Award,
                      title: 'Detailed Descriptions',
                      description: 'Clear descriptions increase client confidence',
                      color: 'text-blue-500'
                    },
                    {
                      icon: Heart,
                      title: 'Competitive Pricing',
                      description: 'Research market rates for optimal pricing',
                      color: 'text-red-500'
                    },
                    {
                      icon: Zap,
                      title: 'Quick Response',
                      description: 'Fast booking confirmations improve ratings',
                      color: 'text-purple-500'
                    }
                  ].map((tip, index) => {
                    const Icon = tip.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-right-4 duration-1000"
                        style={{ animationDelay: `${index * 100 + 900}ms` }}
                      >
                        <Icon className={`w-5 h-5 ${tip.color} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`} />
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{tip.title}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{tip.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-right-4 duration-1000 delay-1000">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Quick Actions</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Save time</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group">
                    <Upload className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Import from Template</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group">
                    <Share2 className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Save as Template</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group">
                    <Bell className="w-5 h-5 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Set Notifications</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-1200 mt-8">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <button
                  onClick={handleBack}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 font-medium shadow-lg hover:shadow-xl"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Services</span>
                </button>
                
                {currentStep > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-105 font-medium shadow-lg hover:shadow-xl"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </button>
                )}
              </div>

              <div className="flex space-x-4">
                {currentStep < steps.length ? (
                  <button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className={`flex items-center space-x-2 px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 ${
                      isStepValid()
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <span>Next Step</span>
                    <ArrowLeft className="w-5 h-5 rotate-180" />
                  </button>
                ) : (
                  <button
                    onClick={handleSave}
                    disabled={isLoading || !isStepValid()}
                    className={`flex items-center space-x-2 px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 ${
                      isLoading
                        ? 'bg-gray-400 dark:bg-gray-600 text-white cursor-not-allowed'
                        : isStepValid()
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                          : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Creating Service...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        <span>Create Service</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Service Preview</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <ServicePreview formData={formData} />
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => setShowPreview(true)}
          className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95 group animate-bounce"
        >
          <Eye className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default AddServicePage;