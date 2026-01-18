'use client';

import { useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { motionTokens } from './motion/tokens';

type MenuItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
};

const focusableSelector =
  'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  const variants = useMemo(
    () => ({
      hidden: { x: '100%', opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: motionTokens.easeOut }
      },
      exit: {
        x: '100%',
        opacity: 0,
        transition: { duration: 0.3, ease: motionTokens.easeOut }
      }
    }),
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      ).filter((node) => !node.hasAttribute('disabled'));

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const focusTimer = window.setTimeout(() => {
      const focusable = panelRef.current?.querySelector<HTMLElement>(focusableSelector);
      focusable?.focus();
    }, 0);

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[70]" aria-modal="true" role="dialog">
          <motion.button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-neutral-900/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, ease: motionTokens.easeOut } }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: motionTokens.easeOut } }}
          />
          <motion.aside
            ref={panelRef}
            className="absolute inset-y-0 right-0 z-10 w-[88vw] max-w-[90vw] sm:w-[360px] md:w-[420px] bg-white shadow-2xl overflow-y-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <div className="px-6 pt-6 pb-8">
              <div className="flex items-center justify-between pb-5 border-b border-neutral-200">
                <span className="text-lg font-semibold text-neutral-900">Menu</span>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-10 h-10 border border-neutral-300 text-neutral-900 hover:bg-neutral-100 transition-colors"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              <nav className="flex flex-col gap-6 pt-6">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-neutral-900 hover:opacity-70 transition-opacity"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
