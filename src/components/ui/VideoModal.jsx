import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const VideoModal = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  description,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <AnimatePresence>
          {isOpen && (
            <>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50"
                />
              </Dialog.Overlay>

              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                >
                  <div className="relative w-full max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <Dialog.Title className="text-white text-xl md:text-2xl font-semibold">
                        {title}
                      </Dialog.Title>
                      <button
                        onClick={onClose}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-200 backdrop-blur-sm"
                      >
                        <ArrowLeft size={20} />
                        <span className="hidden sm:inline">Trở về</span>
                      </button>
                    </div>

                    {/* Video Container */}
                    <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                      <video
                        src={videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        poster=""
                      />
                    </div>

                    {/* Description */}
                    {description && (
                      <div className="mt-4 text-white/80 text-sm md:text-base">
                        {description}
                      </div>
                    )}
                  </div>
                </motion.div>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
