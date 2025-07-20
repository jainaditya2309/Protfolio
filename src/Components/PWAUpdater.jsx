import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaSync, FaTimes } from 'react-icons/fa';

const PWAUpdater = () => {
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);
  const [updateRegistration, setUpdateRegistration] = useState(null);

  useEffect(() => {
    // Listen for service worker update
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });

      navigator.serviceWorker.ready.then((registration) => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setUpdateRegistration(registration);
              setShowUpdatePrompt(true);
            }
          });
        });
      });
    }
  }, []);

  const handleUpdate = () => {
    if (updateRegistration && updateRegistration.waiting) {
      updateRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
      setShowUpdatePrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowUpdatePrompt(false);
  };

  return (
    <AnimatePresence>
      {showUpdatePrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-2xl shadow-2xl border border-green-400/20 backdrop-blur-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <FaSync className="text-white text-xl animate-pulse" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    App Update Available!
                  </h3>
                  <p className="text-white/80 text-xs mb-3">
                    A new version of the portfolio is available. Update now for the latest features.
                  </p>
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleUpdate}
                      className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-white text-xs font-medium transition-all duration-200"
                    >
                      <FaSync className="text-xs" />
                      <span>Update</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDismiss}
                      className="px-3 py-1.5 rounded-lg text-white/70 hover:text-white text-xs font-medium transition-colors duration-200"
                    >
                      Later
                    </motion.button>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDismiss}
                className="text-white/60 hover:text-white ml-2 p-1 transition-colors duration-200"
              >
                <FaTimes className="text-sm" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAUpdater;
