import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const NeonButton = React.forwardRef(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      isLoading = false,
      glow = true,
      className,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary: 'border-neon-blue hover:shadow-neon text-neon-blue',
      secondary: 'border-neon-purple hover:shadow-neon-purple text-neon-purple',
      accent: 'border-neon-green hover:shadow-neon-green text-neon-green',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'relative glass border rounded-lg font-poppins font-semibold',
          'transition-all duration-300 ease-out',
          'hover:bg-white/10 active:bg-white/5',
          glow && 'hover:drop-shadow-[0_0_15px_currentColor]',
          variantStyles[variant],
          sizeStyles[size],
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
            {children}
          </div>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

NeonButton.displayName = 'NeonButton';
