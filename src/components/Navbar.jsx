import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="font-orbitron font-bold text-2xl bg-gradient-to-r 
              from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            VK
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium text-foreground",
                  "hover:text-neon-blue transition-colors duration-300",
                  "relative group"
                )}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 
                  bg-gradient-to-r from-neon-blue to-neon-purple 
                  group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-foreground"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Icon */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
         <motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: "auto" }}
  exit={{ opacity: 0, height: 0 }}
 // className="md:hidden overflow-hidden w-full bg-black/60 backdrop-blur-lg border-t border-white/10"

            transition={{ duration: 0.25 }}
           className="md:hidden overflow-hidden bg-card/60 backdrop-blur-lg border-t border-white/10"


          >
            <div className="px-4 py-3 space-y-2">
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-foreground 
                    hover:bg-white/10 hover:text-neon-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 8 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
