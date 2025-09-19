"use client";

import config from "@/darkrise-config/config.json";
import theme from "@/darkrise-config/theme.json";
import TwSizeIndicator from "@/darkrise-layouts/helpers/TwSizeIndicator";
import Footer from "@/darkrise-layouts/partials/Footer";
import Header from "@/darkrise-layouts/partials/Header";
import Providers from "@/darkrise-layouts/partials/Providers";
import "@/darkrise-styles/main.css";
import { GoogleTagManager } from "@next/third-parties/google";
import "aos/dist/aos.css";

export default function DarkRiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // import google font css
  const pf = theme.fonts.font_family.primary;

  return (
    <div className="darkrise-layout">
      {/* DarkRise specific font */}
      <style jsx global>{`
        .darkrise-layout {
          font-family: ${pf.replace('+', ' ')}, sans-serif;
        }
        .darkrise-layout * {
          font-family: inherit;
        }
      `}</style>
      
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
          <div className="text-sm opacity-75">DarkRise Pages</div>
        </div>
      </div>
      
      <TwSizeIndicator />
      <Providers>
        <Header />
        <main>{children}</main>
        <Footer />
      </Providers>
      
      {/* Google Tag Manager */}
      {config.google_tag_manager.enable && (
        <GoogleTagManager gtmId={config.google_tag_manager.gtm_id} />
      )}
    </div>
  );
}