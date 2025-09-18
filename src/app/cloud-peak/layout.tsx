"use client";

import config from "@/config/config.json";
import theme from "@/config/theme.json";
import TwSizeIndicator from "@/layouts/helpers/TwSizeIndicator";
import Footer from "@/layouts/partials/Footer";
import Header from "@/layouts/partials/Header";
import Providers from "@/layouts/partials/Providers";
import "@/styles/main.css";
import { GoogleTagManager } from "@next/third-parties/google";
import "aos/dist/aos.css";

export default function CloudPeakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // import google font css
  const pf = theme.fonts.font_family.primary;

  return (
    <div className="cloudpeak-layout">
      {/* Add CloudPeak specific font */}
      <style jsx global>{`
        .cloudpeak-layout {
          font-family: ${pf.replace('+', ' ')}, sans-serif;
        }
        .cloudpeak-layout * {
          font-family: inherit;
        }
      `}</style>
      
      <TwSizeIndicator />
      <Providers>
        {/* Back to Dashboard Navigation */}
        <div className="bg-primary text-white py-3 px-4 shadow-sm">
          <div className="container mx-auto flex items-center justify-between">
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity duration-200 bg-white/10 px-3 py-1 rounded-md"
            >
              <span>←</span>
              <span>Back to Dashboard</span>
            </button>
            <div className="text-sm opacity-75">CloudPeak Pages</div>
          </div>
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </Providers>
    </div>
  );
}
