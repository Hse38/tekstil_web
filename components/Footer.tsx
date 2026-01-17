'use client';

import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { content } = useLanguage();
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-custom px-6 md:px-12 lg:px-16 py-10 text-sm text-neutral-600">
        © {new Date().getFullYear()} Global Textile Manufacturing. {content.footer.rights}
      </div>
    </footer>
  );
}
