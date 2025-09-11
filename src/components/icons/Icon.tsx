import {
  DashboardIcon,
  TimelineIcon,
  VaultIcon,
  CrmIcon,
  CalendarIcon,
  DocumentIcon,
  SupportIcon,
  SettingsIcon,
  ThemeIcon,
  DownloadIcon,
  CollapseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SunIcon,
  MoonIcon,
  AppStoreIcon,
  PlayStoreIcon,
  EventzrLogo,
  EventzrLogoCollapsed,
  MyZarsIcon,
  MyRfpsIcon,
} from './index';

export type IconName = 
  | 'dashboard'
  | 'timeline'
  | 'vault'
  | 'crm'
  | 'calendar'
  | 'document'
  | 'support'
  | 'settings'
  | 'theme'
  | 'download'
  | 'collapse'
  | 'chevron-left'
  | 'chevron-right'
  | 'sun'
  | 'moon'
  | 'app-store'
  | 'play-store'
  | 'eventzr-logo'
  | 'eventzr-logo-collapsed'
  | 'my-zars'
  | 'my-rfps';

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
    case 'document':
      return <DocumentIcon className={className} />;
    case 'support':
      return <SupportIcon className={className} />;
    case 'settings':
      return <SettingsIcon className={className} />;
    case 'theme':
      return <ThemeIcon className={className} />;
    case 'download':
      return <DownloadIcon className={className} />;
    case 'collapse':
      return <CollapseIcon className={className} />;
    case 'chevron-left':
      return <ChevronLeftIcon className={className} />;
    case 'chevron-right':
      return <ChevronRightIcon className={className} />;
    case 'sun':
      return <SunIcon className={className} />;
    case 'moon':
      return <MoonIcon className={className} />;
    case 'app-store':
      return <AppStoreIcon className={className} />;
    case 'play-store':
      return <PlayStoreIcon className={className} />;
    case 'eventzr-logo':
      return <EventzrLogo className={className} />;
    case 'eventzr-logo-collapsed':
      return <EventzrLogoCollapsed className={className} />;
    case 'my-zars':
      return <MyZarsIcon className={className} />;
    case 'my-rfps':
      return <MyRfpsIcon className={className} />;
    default:
      return null;
  }
};
