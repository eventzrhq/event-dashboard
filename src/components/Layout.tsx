"use client";

import { useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900 dark:dark-mode-gradient">
      {/* Desktop Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block">
        <Sidebar onNavigate={onNavigate} currentPage={currentPage} />
      </div>
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Sidebar */}
          <div className="fixed top-0 left-0 z-50 h-full w-64 lg:hidden animate-in slide-in-from-left duration-300 ease-out">
            <Sidebar 
              onNavigate={(page) => {
                onNavigate?.(page);
                setIsMobileMenuOpen(false);
              }} 
              currentPage={currentPage} 
            />
          </div>
        </>
      )}
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative w-full lg:w-auto">
        {/* Header */}
        <Header onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        
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
