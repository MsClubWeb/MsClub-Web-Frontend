"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import { RetroGrid } from "@/components/magicui/retro-grid";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="mx-auto w-full relative rounded-xl overflow-hidden"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
    >
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <RetroGrid />
      </div>
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 5000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children],
    );

    useEffect(() => {
      if (childrenArray.length <= 1) return;

      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray.length, delay]);

    const currentItem = childrenArray[index];

    return (
      <div
        className={cn("flex flex-col items-center", className)}
        {...props}
      >
        <AnimatePresence mode="wait">
          <AnimatedListItem key={(currentItem as React.ReactElement).key}>
            {currentItem}
          </AnimatedListItem>
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";
