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
} from "./index";

export type IconName =
  | "dashboard"
  | "timeline"
  | "vault"
  | "crm"
  | "calendar"
  | "support"
  | "settings"
  | "theme"
  | "download"
  | "chevron-left"
  | "chevron-right"
  | "eventzr-logo"
  | "eventzr-logo-collapsed"
  | "my-zars"
  | "my-rfps"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "twitter-x"
  | "telegram"
  | "search"
  | "chevron-down"
  | "message-circle"
  | "home"
  | "user-plus-custom"
  | "bell-custom"
  | "box"
  | "heart-custom"
  | "shopping-bag-custom"
  | "check-custom"
  | "user-switch"
  | "global"
  | "dollar"
  | "clock"
  | "home2"
  | "users3"
  | "briefcase"
  | "news"
  | "call"
  | "phone-app"
  | "job-search"
  | "ai-chip"
  | "magic-wand"
  | "building"
  | "sun"
  | "moon"
  | "app-store"
  | "play-store"
  | "edit"
  | "paperclip"
  | "send"
  | "mic";

interface IconProps {
  name: IconName;
  className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
  switch (name) {
    case "dashboard":
      return <DashboardIcon className={className} />;
    case "timeline":
      return <TimelineIcon className={className} />;
    case "vault":
      return <VaultIcon className={className} />;
    case "crm":
      return <CrmIcon className={className} />;
    case "calendar":
      return <CalendarIcon className={className} />;
    case "support":
      return <SupportIcon className={className} />;
    case "settings":
      return <SettingsIcon className={className} />;
    case "theme":
      return <ThemeIcon className={className} />;
    case "download":
      return <DownloadIcon className={className} />;
    case "chevron-left":
      return <ChevronLeftIcon className={className} />;
    case "chevron-right":
      return <ChevronRightIcon className={className} />;
    case "eventzr-logo":
      return <EventzrLogo className={className} />;
    case "eventzr-logo-collapsed":
      return <EventzrLogoCollapsed className={className} />;
    case "my-zars":
      return <MyZarsIcon className={className} />;
    case "my-rfps":
      return <MyRfpsIcon className={className} />;
    case "whatsapp":
      return <WhatsAppIcon className={className} />;
    case "instagram":
      return <InstagramIcon className={className} />;
    case "facebook":
      return <FacebookIcon className={className} />;
    case "twitter-x":
      return <TwitterXIcon className={className} />;
    case "telegram":
      return <TelegramIcon className={className} />;
    case "search":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      );
    case "chevron-down":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      );
    case "message-circle":
      return (
        <svg
          className={className}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 10.125H12M6 6.375H9"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.57411 14.25C3.59903 14.1541 2.86857 13.8612 2.37868 13.3713C1.5 12.4926 1.5 11.0784 1.5 8.25V7.875C1.5 5.04657 1.5 3.63236 2.37868 2.75368C3.25736 1.875 4.67157 1.875 7.5 1.875H10.5C13.3284 1.875 14.7426 1.875 15.6213 2.75368C16.5 3.63236 16.5 5.04657 16.5 7.875V8.25C16.5 11.0784 16.5 12.4926 15.6213 13.3713C14.7426 14.25 13.3284 14.25 10.5 14.25C10.0797 14.2594 9.74485 14.2914 9.41595 14.3663C8.51717 14.5732 7.68489 15.0331 6.8624 15.4342C5.69047 16.0056 5.1045 16.2913 4.73677 16.0238C4.03327 15.4999 4.7209 13.8764 4.875 13.125"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    case "home":
      return <HomeIcon className={className} />;
    case "user-plus-custom":
      return <UserPlusIcon className={className} />;
    case "bell-custom":
      return <BellIcon className={className} />;
    case "box":
      return <BoxIcon className={className} />;
    case "heart-custom":
      return <HeartIcon className={className} />;
    case "shopping-bag-custom":
      return <ShoppingBagIcon className={className} />;
    case "check-custom":
      return <CheckIcon className={className} />;
    case "user-switch":
      return <UserSwitchIcon className={className} />;
    case "global":
      return <GlobalIcon className={className} />;
    case "dollar":
      return <DollarIcon className={className} />;
    case "clock":
      return <ClockIcon className={className} />;
    case "home2":
      return <Home2Icon className={className} />;
    case "users3":
      return <Users3Icon className={className} />;
    case "briefcase":
      return <BriefcaseIcon className={className} />;
    case "news":
      return <NewsIcon className={className} />;
    case "call":
      return <CallIcon className={className} />;
    case "phone-app":
      return <PhoneIcon className={className} />;
    case "job-search":
      return <JobSearchIcon className={className} />;
    case "ai-chip":
      return <AiChipIcon className={className} />;
    case "magic-wand":
      return <MagicWandIcon className={className} />;
    case "building":
      return <BuildingIcon className={className} />;
    case "sun":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "moon":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
    case "app-store":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      );
    case "play-store":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
      );
    case "edit":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      );
    case "paperclip":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          />
        </svg>
      );
    case "send":
      return (
        <svg
          className={className}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0667 2.3037L5.37784 4.52592C0.881541 6.02963 0.881541 8.48148 5.37784 9.97778L7.36302 10.637L8.02228 12.6222C9.51858 17.1185 11.9778 17.1185 13.4741 12.6222L15.7038 5.94074C16.6964 2.94074 15.0667 1.3037 12.0667 2.3037ZM12.3038 6.28889L9.48895 9.11852C9.37784 9.22963 9.2371 9.28148 9.09636 9.28148C8.95562 9.28148 8.81487 9.22963 8.70376 9.11852C8.48895 8.9037 8.48895 8.54815 8.70376 8.33333L11.5186 5.5037C11.7334 5.28889 12.0889 5.28889 12.3038 5.5037C12.5186 5.71852 12.5186 6.07407 12.3038 6.28889Z"
            fill="#292D32"
          />
        </svg>
      );
    case "mic":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      );
    default:
      return null;
  }
};
