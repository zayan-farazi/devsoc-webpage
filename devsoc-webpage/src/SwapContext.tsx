"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

interface SwapContextType {
  isFlipped: boolean;
  toggleSwap: () => void;
  scrollY: number;
  setScrollY: (value: number) => void;
  isReverseScrolling: boolean;
}

const SwapContext = createContext<SwapContextType | undefined>(undefined);

export function useSwap() {
  const context = useContext(SwapContext);
  if (context === undefined) {
    throw new Error("useSwap must be used within a SwapProvider");
  }
  return context;
}

interface SwapProviderProps {
  children: ReactNode;
}

export function RealityProvider({ children }: SwapProviderProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isReverseScrolling, setIsReverseScrolling] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const isScrollingProgrammatically = useRef(false);
  const isMounted = useRef(true);

  const toggleSwap = () => {
    setIsFlipped(!isFlipped);
    setIsReverseScrolling(!isReverseScrolling);
  };

  useEffect(() => {
    isMounted.current = true;

    const handleWheel = (e: WheelEvent) => {
      if (!isReverseScrolling || !isMounted.current) return;

      e.preventDefault();

      // Avoid infinite loops from programmatic scrolling
      if (isScrollingProgrammatically.current) return;

      const delta = e.deltaY * 1.1;
      const currentScroll = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      // Reverse the scroll direction
      const newScrollPosition = Math.max(
        0,
        Math.min(maxScroll, currentScroll - delta)
      );

      isScrollingProgrammatically.current = true;
      window.scrollTo({
        top: newScrollPosition,
        behavior: "instant",
      });

      // Reset the flag after a short delay
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        if (isMounted.current) {
          isScrollingProgrammatically.current = false;
        }
      }, 10);

      if (isMounted.current) {
        setScrollY(newScrollPosition);
      }
    };

    const handleScroll = () => {
      if (!isScrollingProgrammatically.current && isMounted.current) {
        setScrollY(window.scrollY);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isReverseScrolling || !isMounted.current) return;

      const scrollAmount = 100;
      const currentScroll = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      let newScrollPosition = currentScroll;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          newScrollPosition = Math.max(0, currentScroll - scrollAmount);
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          newScrollPosition = Math.min(maxScroll, currentScroll + scrollAmount);
          break;
        case "Home":
          e.preventDefault();
          newScrollPosition = maxScroll;
          break;
        case "End":
          e.preventDefault();
          newScrollPosition = 0;
          break;
      }

      if (newScrollPosition !== currentScroll) {
        isScrollingProgrammatically.current = true;
        window.scrollTo({
          top: newScrollPosition,
          behavior: "instant",
        });

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          if (isMounted.current) {
            isScrollingProgrammatically.current = false;
          }
        }, 10);

        if (isMounted.current) {
          setScrollY(newScrollPosition);
        }
      }
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      isMounted.current = false;
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isReverseScrolling]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMounted.current = false;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <SwapContext.Provider
      value={{
        isFlipped,
        toggleSwap,
        scrollY,
        setScrollY,
        isReverseScrolling,
      }}
    >
      {children}
    </SwapContext.Provider>
  );
}
