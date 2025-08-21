import React, { useState } from 'react';
import { Settings, Globe, Clock, Bell, Eye, Heart, Star, Calendar, MapPin, Phone, Mail, Shield, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Gift, Rocket, Diamond, CheckCircle, AlertCircle, Info, MessageCircle, Edit, Activity } from 'lucide-react';

const ProfilePreferences: React.FC = () => {
  const [preferences, setPreferences] = useState({
    language: 'English',
    timezone: 'America/New_York',
    currency: 'USD',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12-hour',
    weekStart: 'Sunday',
    autoBooking: false,
    instantNotifications: true,
    emailDigest: 'weekly',
    smsReminders: true,
    calendarSync: true,
    publicProfile: true,
    showReviews: true,
    allowMessages: true,
    shareActivity: false
  });

  const [communicationPrefs, setCommunicationPrefs] = useState({
    preferredContactMethod: 'email',
    appointmentReminders: '24-hours',
    marketingEmails: false,
    productUpdates: true,
    securityAlerts: true,
    reviewRequests: true
  });

  const handlePreferenceChange = (key: string, value: any) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleCommunicationChange = (key: string, value: any) => {
    setCommunicationPrefs(prev => ({ ...prev, [key]: value }));
  };

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'Spanish', label: 'Español' },
    { value: 'French', label: 'Français' },
    { value: 'German', label: 'Deutsch' },
    { value: 'Italian', label: 'Italiano' }
  ];

  const timezoneOptions = [
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
    { value: 'Europe/London', label: 'Greenwich Mean Time (GMT)' }
  ];

  const currencyOptions = [
    { value: 'USD', label: 'US Dollar ($)' },
    { value: 'EUR', label: 'Euro (€)' },
    { value: 'GBP', label: 'British Pound (£)' },
    { value: 'CAD', label: 'Canadian Dollar (C$)' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* General Preferences */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-500 animate-in slide-in-from-left-4 duration-1000">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">General Preferences</h2>
                <p className="text-gray-600 dark:text-gray-400">Customize your experience</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Language & Region */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Language
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={preferences.language}
                      onChange={(e) => handlePreferenceChange('language', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    >
                      {languageOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Timezone
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={preferences.timezone}
                      onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    >
                      {timezoneOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Currency & Format */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Currency
                  </label>
                  <select
                    value={preferences.currency}
                    onChange={(e) => handlePreferenceChange('currency', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  >
                    {currencyOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date Format
                  </label>
                  <select
                    value={preferences.dateFormat}
                    onChange={(e) => handlePreferenceChange('dateFormat', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  >
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>
              </div>

              {/* Toggle Preferences */}
              <div className="space-y-4">
                {[
                  { key: 'autoBooking', label: 'Auto-booking for recurring appointments', icon: Calendar },
                  { key: 'instantNotifications', label: 'Instant notifications', icon: Bell },
                  { key: 'calendarSync', label: 'Sync with external calendar', icon: Clock },
                  { key: 'publicProfile', label: 'Public profile visibility', icon: Eye }
                ].map((pref, index) => {
                  const Icon = pref.icon;
                  return (
                    <div key={pref.key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                        <span className="font-medium text-gray-900 dark:text-white">{pref.label}</span>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange(pref.key, !preferences[pref.key as keyof typeof preferences])}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          preferences[pref.key as keyof typeof preferences] ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            preferences[pref.key as keyof typeof preferences] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Communication Preferences */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-500 animate-in slide-in-from-right-4 duration-1000 delay-200">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Communication</h2>
                <p className="text-gray-600 dark:text-gray-400">How you want to be contacted</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'email', label: 'Email', icon: Mail },
                    { value: 'phone', label: 'Phone', icon: Phone },
                    { value: 'sms', label: 'SMS', icon: MessageCircle }
                  ].map((method) => {
                    const Icon = method.icon;
                    const isSelected = communicationPrefs.preferredContactMethod === method.value;
                    return (
                      <button
                        key={method.value}
                        onClick={() => handleCommunicationChange('preferredContactMethod', method.value)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                          isSelected
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                        }`}
                      >
                        <Icon className="w-6 h-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">{method.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reminder Settings */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Appointment Reminders
                </label>
                <select
                  value={communicationPrefs.appointmentReminders}
                  onChange={(e) => handleCommunicationChange('appointmentReminders', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 transition-all duration-300"
                >
                  <option value="none">No reminders</option>
                  <option value="1-hour">1 hour before</option>
                  <option value="24-hours">24 hours before</option>
                  <option value="48-hours">48 hours before</option>
                  <option value="1-week">1 week before</option>
                </select>
              </div>

              {/* Communication Toggles */}
              <div className="space-y-4">
                {[
                  { key: 'marketingEmails', label: 'Marketing emails and promotions', icon: Mail },
                  { key: 'productUpdates', label: 'Product updates and new features', icon: Sparkles },
                  { key: 'securityAlerts', label: 'Security alerts and notifications', icon: Shield },
                  { key: 'reviewRequests', label: 'Review requests after appointments', icon: Star }
                ].map((comm, index) => {
                  const Icon = comm.icon;
                  return (
                    <div key={comm.key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300" />
                        <span className="font-medium text-gray-900 dark:text-white">{comm.label}</span>
                      </div>
                      <button
                        onClick={() => handleCommunicationChange(comm.key, !communicationPrefs[comm.key as keyof typeof communicationPrefs])}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          communicationPrefs[comm.key as keyof typeof communicationPrefs] ? 'bg-green-600' : 'bg-gray-200 dark:bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            communicationPrefs[comm.key as keyof typeof communicationPrefs] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-500 animate-in slide-in-from-right-4 duration-1000 delay-200">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy & Security</h2>
                <p className="text-gray-600 dark:text-gray-400">Control your privacy settings</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Privacy Toggles */}
              <div className="space-y-4">
                {[
                  { key: 'publicProfile', label: 'Make profile publicly visible', icon: Eye, description: 'Allow professionals to see your profile' },
                  { key: 'showReviews', label: 'Show my reviews publicly', icon: Star, description: 'Display your reviews on professional profiles' },
                  { key: 'allowMessages', label: 'Allow direct messages', icon: MessageCircle, description: 'Let professionals contact you directly' },
                  { key: 'shareActivity', label: 'Share activity status', icon: Activity, description: 'Show when you\'re online or active' }
                ].map((setting, index) => {
                  const Icon = setting.icon;
                  return (
                    <div key={setting.key} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300" />
                          <span className="font-medium text-gray-900 dark:text-white">{setting.label}</span>
                        </div>
                        <button
                          onClick={() => handlePreferenceChange(setting.key, !preferences[setting.key as keyof typeof preferences])}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                            preferences[setting.key as keyof typeof preferences] ? 'bg-red-600' : 'bg-gray-200 dark:bg-gray-600'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                              preferences[setting.key as keyof typeof preferences] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 ml-8">{setting.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Security Actions */}
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 dark:text-white">Security Actions</h4>
                <button className="w-full flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 hover:scale-105 group border border-red-200/50 dark:border-red-700/50">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <span className="font-medium text-red-800 dark:text-red-300">Change Password</span>
                  </div>
                  <Edit className="w-4 h-4 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300" />
                </button>
                
                <button className="w-full flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all duration-300 hover:scale-105 group border border-orange-200/50 dark:border-orange-700/50">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    <span className="font-medium text-orange-800 dark:text-orange-300">Download My Data</span>
                  </div>
                  <Eye className="w-4 h-4 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center space-x-3 px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-lg">
            <CheckCircle className="w-6 h-6" />
            <span>Save All Preferences</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePreferences;