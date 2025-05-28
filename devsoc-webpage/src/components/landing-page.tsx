import { useSwap } from "@/SwapContext";
import { SwapButton } from "./SwapButton";
import { AboutSection } from "./about-me";
import { SkilsSection } from "./skills-table";

export function LandingPage() {
    const { isFlipped, isReverseScrolling } = useSwap();
    return (
    <div
      className={`min-h-screen transition-all duration-1000 ${isFlipped ? "bg-slate-900" : "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"}`}
    >
      {/* <FloatingStars /> */}
      <SwapButton />
      {/* <HeroSection /> */}

      {/* Content Sections */}
      <div className={`transition-all duration-1000 ${isFlipped ? "bg-slate-800" : "bg-slate-900"}`}>
        <AboutSection />
        <SkilsSection />
        {/* <ExperienceSection /> */}
        {/* <PhotoGallery /> */}
        {/* <ContactSection /> */}

        {/* Scroll Indicator */}
        {isReverseScrolling && (
          <div className="fixed bottom-6 right-6 z-50">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg animate-bounce">
              <div className="text-sm font-semibold">Inverted Scrolling</div>
              <div className="text-xs">↓ Scroll down to go up ↑</div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
    )
}