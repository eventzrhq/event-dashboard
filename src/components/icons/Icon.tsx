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
  ShoppingBagOnHoldIcon,
  DeliveredIcon,
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
  StorageUsedIcon,
  TotalFilesIcon,
  SharedWithMeIcon,
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
  | "shopping-bag-on-hold"
  | "delivered"
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
  | "mic"
  | "plus"
  | "document"
  | "x"
  | "chart"
  | "chevron-up"
  | "camera"
  | "storage-used"
  | "total-files"
  | "shared-with-me"
  | "google-drive"
  | "dropbox"
  | "refresh"
  | "arrow-right"
  | "image"
  | "video"
  | "audio"
  | "documents";

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
    case "shopping-bag-on-hold":
      return <ShoppingBagOnHoldIcon className={className} />;
    case "delivered":
      return <DeliveredIcon className={className} />;
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
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.56656 5.97905L4.9949 10.5507C4.30656 11.239 4.30656 12.3557 4.9949 13.044V13.044C5.68323 13.7324 6.7999 13.7324 7.48823 13.044L13.5149 7.01738C14.7774 5.75488 14.7774 3.70822 13.5149 2.44572V2.44572C12.2524 1.18322 10.2057 1.18322 8.94323 2.44572L2.91656 8.47238C1.0799 10.309 1.0799 13.2857 2.91656 15.1224V15.1224C4.75323 16.959 7.7299 16.959 9.56656 15.1224L13.2241 11.4649"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
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
    case "plus":
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
            d="M12 4v16m8-8H4"
          />
        </svg>
      );
    case "document":
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "x":
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    case "chart":
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      );
    case "chevron-up":
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
            d="M5 15l7-7 7 7"
          />
        </svg>
      );
    case "camera":
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
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "storage-used":
      return <StorageUsedIcon className={className} />;
    case "total-files":
      return <TotalFilesIcon className={className} />;
    case "shared-with-me":
      return <SharedWithMeIcon className={className} />;
    case "google-drive":
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="black"/>
          <path d="M12.4979 11.8906L14.1796 14.9368C14.1161 14.9791 14.0103 15.0002 13.8623 15.0002H6.00578C5.87886 15.0002 5.77309 14.9791 5.68848 14.9368L7.43366 11.9224" fill="#2684FC"/>
          <path d="M12.4346 11.8906L14.1798 14.9368C14.3067 14.8733 14.4124 14.7675 14.4971 14.6195L15.8615 12.2079C15.9038 12.081 15.9249 11.9752 15.9249 11.8906" fill="#EA4335"/>
          <path d="M7.40586 11.9752L3.92697 11.9086C3.92206 11.8325 3.95662 11.7303 4.03066 11.602L7.95891 4.79812C8.02237 4.6882 8.09357 4.60718 8.17252 4.55506L9.91048 7.57363" fill="#00AC47"/>
          <path d="M7.4375 11.918L3.92688 11.9063C3.91838 12.0479 3.95709 12.1924 4.04302 12.3397L5.44925 14.7271C5.53802 14.8272 5.61904 14.8984 5.69232 14.9407" fill="#0066DA"/>
          <path d="M9.87949 7.52478L11.6767 4.5453C11.745 4.5791 11.8162 4.66012 11.8903 4.78836L15.8185 11.5923C15.882 11.7022 15.9165 11.8044 15.9222 11.8988L12.4391 11.8946" fill="#FFBA00"/>
          <path d="M9.91113 7.57812L11.6766 4.54369C11.5582 4.4655 11.4137 4.42679 11.2431 4.42754L8.47248 4.45169C8.34141 4.47851 8.23923 4.51307 8.16595 4.55538" fill="#00832D"/>
        </svg>
      );
    case "dropbox":
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="#0061FF"/>
          <g clipPath="url(#clip0_724_19756)">
            <path d="M6.99975 4.89062L4 6.80178L6.99975 8.71293L10 6.80178L6.99975 4.89062Z" fill="white"/>
            <path d="M13 4.89062L10 6.80195L13 8.71328L16 6.80195L13 4.89062Z" fill="white"/>
            <path d="M4 10.6221L6.99975 12.5332L10 10.6221L6.99975 8.71094L4 10.6221Z" fill="white"/>
            <path d="M13 8.71094L10 10.6223L13 12.5336L16 10.6223L13 8.71094Z" fill="white"/>
            <path d="M7 13.1768L10.0003 15.0879L13 13.1768L10.0003 11.2656L7 13.1768Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_724_19756">
              <rect width="12" height="12" fill="white" transform="translate(4 4)"/>
            </clipPath>
          </defs>
        </svg>
      );
    case "refresh":
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5007 1.66797L13.0708 3.47149C12.1377 3.04335 11.0975 2.80433 10.0007 2.80433C5.97357 2.80433 2.70898 6.02652 2.70898 10.0013C2.70898 11.3911 3.10813 12.689 3.79945 13.7892M7.50065 18.3346L6.93048 16.5311C7.86361 16.9593 8.90385 17.1983 10.0007 17.1983C14.0277 17.1983 17.2923 13.9761 17.2923 10.0013C17.2923 8.61147 16.8932 7.31365 16.2019 6.21342" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
        </svg>
      );
    case "arrow-right":
      return (
        <svg className={className} width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8327 4L1.16602 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.50003 7.33073C8.50003 7.33073 11.8333 4.87577 11.8333 3.99737C11.8333 3.11897 8.5 0.664062 8.5 0.664062" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "image":
      return (
        <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.666992 6.9974C0.666992 4.01183 0.666992 2.51905 1.59449 1.59156C2.52198 0.664062 4.01476 0.664062 7.00033 0.664062C9.98589 0.664062 11.4787 0.664062 12.4062 1.59156C13.3337 2.51905 13.3337 4.01183 13.3337 6.9974C13.3337 9.98296 13.3337 11.4757 12.4062 12.4032C11.4787 13.3307 9.98589 13.3307 7.00033 13.3307C4.01476 13.3307 2.52198 13.3307 1.59449 12.4032C0.666992 11.4757 0.666992 9.98296 0.666992 6.9974Z" stroke="currentColor"/>
          <circle cx="10" cy="4" r="1" stroke="currentColor"/>
          <path d="M9.66667 13.6654C9.25365 12.1819 8.28965 10.8535 6.91769 9.88816C5.43841 8.84733 3.58109 8.29645 1.67713 8.33381C1.45105 8.33329 1.22517 8.3405 1 8.35541" stroke="currentColor" strokeLinejoin="round"/>
          <path d="M7.66699 10.9974C8.80134 10.113 10.0233 9.65923 11.2578 9.6641C11.9578 9.66338 12.6545 9.81182 13.3337 10.1052" stroke="currentColor" strokeLinejoin="round"/>
        </svg>
      );
    case "video":
      return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.33398 7.33073C1.33398 5.13084 1.33398 4.0309 2.0174 3.34748C2.70082 2.66406 3.80076 2.66406 6.00065 2.66406H6.66732C8.86721 2.66406 9.96715 2.66406 10.6506 3.34748C11.334 4.0309 11.334 5.13084 11.334 7.33073V8.66406C11.334 10.864 11.334 11.9639 10.6506 12.6473C9.96715 13.3307 8.86721 13.3307 6.66732 13.3307H6.00065C3.80076 13.3307 2.70082 13.3307 2.0174 12.6473C1.33398 11.9639 1.33398 10.864 1.33398 8.66406V7.33073Z" stroke="currentColor"/>
          <path d="M11.334 5.93593L11.4179 5.86667C12.8284 4.70285 13.5337 4.12094 14.1005 4.40191C14.6673 4.68289 14.6673 5.6144 14.6673 7.47742V8.51998C14.6673 10.383 14.6673 11.3145 14.1005 11.5955C13.5337 11.8765 12.8284 11.2945 11.4179 10.1307L11.334 10.0615" stroke="currentColor" strokeLinecap="round"/>
          <circle cx="7.66699" cy="6.33203" r="1" stroke="currentColor"/>
        </svg>
      );
    case "audio":
      return (
        <svg className={className} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3.33333" cy="12.3333" r="2.33333" stroke="currentColor"/>
          <circle cx="11" cy="10.668" r="2" stroke="currentColor"/>
          <path d="M5.66699 12.3359L5.66699 4.66927C5.66699 4.05364 5.66699 3.74582 5.84263 3.55457C6.01826 3.36331 6.3453 3.33541 6.99938 3.2796C9.68163 3.05075 11.6063 2.17597 12.5705 1.60912C12.7676 1.49327 12.8661 1.43535 12.9332 1.47375C13.0003 1.51215 13.0003 1.62361 13.0003 1.84651V10.6693" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.66699 6.66797C9.5781 6.66797 12.1855 5.11241 13.0003 4.66797" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "documents":
      return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 7.33594V6.66927C14 4.15511 14 2.89803 13.173 2.11699C12.346 1.33594 11.015 1.33594 8.35294 1.33594L7.64706 1.33594C4.98501 1.33594 3.65399 1.33594 2.82699 2.11699C2 2.89803 2 4.15511 2 6.66927L2 9.33594C2 11.8501 2 13.1072 2.82699 13.8882C3.65399 14.6693 4.98501 14.6693 7.64706 14.6693H8" stroke="currentColor" strokeLinecap="round"/>
          <path d="M5.33398 4.66797H10.6673" stroke="currentColor" strokeLinecap="round"/>
          <path d="M5.33398 8H8.66732" stroke="currentColor" strokeLinecap="round"/>
          <path d="M14 13.7673L14 11.3359C14 10.383 13.1046 9.33594 12 9.33594C10.8954 9.33594 10 10.383 10 11.3359L10 13.6693C10 14.1891 10.4884 14.6693 11.0909 14.6693C11.6934 14.6693 12.1818 14.1891 12.1818 13.6693L12.1818 11.8457" stroke="currentColor" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
};
