"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ message }: { message: string | null }) {
  return (
    <div className="fixed bottom-6 left-1/2 z-[999] -translate-x-1/2">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white shadow-xl"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
