import React from 'react';
import ProfileHero from './ProfileHero';
import ProfileSettings from './ProfileSettings';
import ProfileStats from './ProfileStats';
import ProfilePreferences from './ProfilePreferences';

interface ProfilesPageProps {
  onNavigate?: (page: string) => void;
}

const ProfilesPage: React.FC<ProfilesPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-all duration-500">
      <ProfileHero />
      <ProfileStats />
      <ProfileSettings />
      <ProfilePreferences />
    </div>
  );
};

export default ProfilesPage;