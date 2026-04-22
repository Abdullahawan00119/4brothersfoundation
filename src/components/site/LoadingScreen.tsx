import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const logo = "/logo.png";

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadComplete?: () => void;
}

export function LoadingScreen({ isLoading, onLoadComplete }: LoadingScreenProps) {
  const [shouldRender, setShouldRender] = useState(isLoading);
  const [hasMinTimeElapsed, setHasMinTimeElapsed] = useState(false);

  // Ensure minimum display time of 800ms
  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
      setHasMinTimeElapsed(false);
      
      const timer = setTimeout(() => {
        setHasMinTimeElapsed(true);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Only hide when both loading is complete AND minimum time has elapsed
  useEffect(() => {
    if (!isLoading && hasMinTimeElapsed) {
      // Wait for fade-out animation (200ms) before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
        onLoadComplete?.();
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isLoading, hasMinTimeElapsed, onLoadComplete]);

  const canFadeOut = !isLoading && hasMinTimeElapsed;

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo animation: fade in and scale (0-400ms) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: canFadeOut ? 0 : 1, 
                scale: canFadeOut ? 0.8 : 1 
              }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut"
              }}
              className="relative"
            >
              <img
                src={logo}
                alt="4 Brothers Welfare Trust"
                className="h-24 w-auto sm:h-32"
              />
              
              {/* Glow effect behind logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: canFadeOut ? 0 : [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 -z-10 blur-2xl bg-gold/40 rounded-full scale-150"
              />
            </motion.div>

            {/* Loading indicator animation (starts at 400ms) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: canFadeOut ? 0 : 1 }}
              transition={{ 
                delay: 0.4,
                duration: 0.3
              }}
              className="flex flex-col items-center gap-4"
            >
              {/* Animated dots */}
              <div className="flex gap-2">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.3, scale: 0.8 }}
                    animate={{
                      opacity: canFadeOut ? 0 : [0.3, 1, 0.3],
                      scale: canFadeOut ? 0.8 : [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                    className="h-2 w-2 rounded-full bg-gold"
                  />
                ))}
              </div>

              {/* Loading text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: canFadeOut ? 0 : 0.7 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="text-sm text-white/70 font-medium tracking-wide"
              >
                Loading...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
