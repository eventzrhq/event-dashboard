import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import FloatingActionButtons from "./FloatingActionButtons";

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Layout = ({ children, currentPage = "dashboard", onNavigate }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900 dark:dark-mode-gradient">
      {/* Sidebar */}
      <Sidebar onNavigate={onNavigate} currentPage={currentPage} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <Header />
        
        {/* Dynamic Content */}
        <div className="flex-1 overflow-hidden relative">
          {children}
        </div>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Action Buttons */}
        <FloatingActionButtons />
      </div>
    </div>
  );
};

export default Layout;
