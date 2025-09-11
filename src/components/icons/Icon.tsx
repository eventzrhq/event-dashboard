import {
  DashboardIcon,
  TimelineIcon,
  VaultIcon,
  CrmIcon,
  CalendarIcon,
  SupportIcon,
  SettingsIcon,
  ThemeIcon,
  DownloadIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EventzrLogo,
  EventzrLogoCollapsed,
  MyZarsIcon,
  MyRfpsIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterXIcon,
  TelegramIcon,
  HomeIcon,
  UserPlusIcon,
  BellIcon,
  BoxIcon,
  HeartIcon,
  ShoppingBagIcon,
  CheckIcon,
  UserSwitchIcon,
  GlobalIcon,
  DollarIcon,
  ClockIcon,
  Home2Icon,
  Users3Icon,
  BriefcaseIcon,
  NewsIcon,
  CallIcon,
  PhoneIcon,
  JobSearchIcon,
  AiChipIcon,
  MagicWandIcon,
  BuildingIcon,
} from './index';

export type IconName = 
  | 'dashboard'
  | 'timeline'
  | 'vault'
  | 'crm'
  | 'calendar'
  | 'support'
  | 'settings'
  | 'theme'
  | 'download'
  | 'chevron-left'
  | 'chevron-right'
  | 'eventzr-logo'
  | 'eventzr-logo-collapsed'
  | 'my-zars'
  | 'my-rfps'
  | 'whatsapp'
  | 'instagram'
  | 'facebook'
  | 'twitter-x'
  | 'telegram'
  | 'search'
  | 'chevron-down'
  | 'message-circle'
  | 'home'
  | 'user-plus-custom'
  | 'bell-custom'
  | 'box'
  | 'heart-custom'
  | 'shopping-bag-custom'
  | 'check-custom'
  | 'user-switch'
  | 'global'
  | 'dollar'
  | 'clock'
  | 'home2'
  | 'users3'
  | 'briefcase'
  | 'news'
  | 'call'
  | 'phone-app'
  | 'job-search'
  | 'ai-chip'
  | 'magic-wand'
  | 'building'
  | 'sun'
  | 'moon'
  | 'app-store'
  | 'play-store';

interface IconProps {
  name: IconName;
  className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
  switch (name) {
    case 'dashboard':
      return <DashboardIcon className={className} />;
    case 'timeline':
      return <TimelineIcon className={className} />;
    case 'vault':
      return <VaultIcon className={className} />;
    case 'crm':
      return <CrmIcon className={className} />;
    case 'calendar':
      return <CalendarIcon className={className} />;
    case 'support':
      return <SupportIcon className={className} />;
    case 'settings':
      return <SettingsIcon className={className} />;
    case 'theme':
      return <ThemeIcon className={className} />;
    case 'download':
      return <DownloadIcon className={className} />;
    case 'chevron-left':
      return <ChevronLeftIcon className={className} />;
    case 'chevron-right':
      return <ChevronRightIcon className={className} />;
    case 'eventzr-logo':
      return <EventzrLogo className={className} />;
    case 'eventzr-logo-collapsed':
      return <EventzrLogoCollapsed className={className} />;
    case 'my-zars':
      return <MyZarsIcon className={className} />;
    case 'my-rfps':
      return <MyRfpsIcon className={className} />;
    case 'whatsapp':
      return <WhatsAppIcon className={className} />;
    case 'instagram':
      return <InstagramIcon className={className} />;
    case 'facebook':
      return <FacebookIcon className={className} />;
    case 'twitter-x':
      return <TwitterXIcon className={className} />;
    case 'telegram':
      return <TelegramIcon className={className} />;
    case 'search':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case 'chevron-down':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    case 'message-circle':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case 'home':
      return <HomeIcon className={className} />;
    case 'user-plus-custom':
      return <UserPlusIcon className={className} />;
    case 'bell-custom':
      return <BellIcon className={className} />;
    case 'box':
      return <BoxIcon className={className} />;
    case 'heart-custom':
      return <HeartIcon className={className} />;
    case 'shopping-bag-custom':
      return <ShoppingBagIcon className={className} />;
    case 'check-custom':
      return <CheckIcon className={className} />;
    case 'user-switch':
      return <UserSwitchIcon className={className} />;
    case 'global':
      return <GlobalIcon className={className} />;
    case 'dollar':
      return <DollarIcon className={className} />;
    case 'clock':
      return <ClockIcon className={className} />;
    case 'home2':
      return <Home2Icon className={className} />;
    case 'users3':
      return <Users3Icon className={className} />;
    case 'briefcase':
      return <BriefcaseIcon className={className} />;
    case 'news':
      return <NewsIcon className={className} />;
    case 'call':
      return <CallIcon className={className} />;
    case 'phone-app':
      return <PhoneIcon className={className} />;
    case 'job-search':
      return <JobSearchIcon className={className} />;
    case 'ai-chip':
      return <AiChipIcon className={className} />;
    case 'magic-wand':
      return <MagicWandIcon className={className} />;
    case 'building':
      return <BuildingIcon className={className} />;
    case 'sun':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'moon':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      );
    case 'app-store':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      );
    case 'play-store':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
        </svg>
      );
    default:
      return null;
  }
};
