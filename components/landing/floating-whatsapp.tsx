"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl p-3 md:p-4 mb-3 md:mb-4 w-[250px] md:w-[300px]"
          >
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xs md:text-sm">Deni.KeSignature</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Typically replies within an hour</p>
                </div>
              </div>
              <button onClick={toggleOpen} className="text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>

            <div className="bg-muted p-2 md:p-3 rounded-lg mb-3 md:mb-4">
              <p className="text-xs md:text-sm">
                Hello! 👋 How can we help you today? Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>

            <a
              href="https://wa.me/2349077443815"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white rounded-full py-1.5 md:py-2 px-3 md:px-4 w-full flex items-center justify-center gap-2 hover:bg-green-600 transition-colors text-xs md:text-sm"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              <span>Start Chat</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6 md:h-8 md:w-8" /> : <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />}
      </motion.button>
    </div>
  )
}

