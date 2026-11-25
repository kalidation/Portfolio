import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { logo } from "../../assets";

const KEY = "intro-seen";

export const IntroLoader = () => {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(KEY));

  useEffect(() => {
    if (!visible) return;
    sessionStorage.setItem(KEY, "1");
    const id = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(id);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center gap-4 bg-primary"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={logo}
            alt=""
            className="h-24 w-24 object-contain"
            initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 12 }}
          />
          <motion.p
            className="text-lg font-semibold text-secondary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Welcome to my portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
