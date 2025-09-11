import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900 dark:dark-mode-gradient">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <MainContent />
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Action Buttons */}
        <FloatingActionButtons />
      </div>
    </div>
  );
}
