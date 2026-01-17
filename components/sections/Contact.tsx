'use client';

import FadeIn from '../FadeIn';
import { useState } from 'react';
import { useLanguage } from '../LanguageProvider';
import SectionReveal from '../motion/SectionReveal';

export default function Contact() {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const company = formData.company.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus({
        type: 'error',
        message: content.contact.status.error
      });
      return;
    }

    const subject = encodeURIComponent(
      `${content.contact.mailto.subjectPrefix} ${name}${company ? ` | ${company}` : ''}`
    );
    const body = encodeURIComponent(
      `${content.contact.mailto.nameLabel}: ${name}\n` +
        `${content.contact.mailto.emailLabel}: ${email}\n` +
        `${content.contact.mailto.companyLabel}: ${company || content.contact.mailto.companyFallback}\n\n` +
        `${content.contact.mailto.messageLabel}:\n${message}`
    );

    window.location.href = `mailto:contact@textile-company.com?subject=${subject}&body=${body}`;
    setStatus({
      type: 'success',
      message: content.contact.status.success
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-neutral-50">
      <SectionReveal className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn>
            <div>
              <div className="inline-block px-4 py-2 bg-white text-sm font-medium text-neutral-700 mb-6">
                {content.contact.badge}
              </div>
              <h2 className="heading-xl mb-8">
                {content.contact.titleLine1}
                <br />
                {content.contact.titleLine2}
              </h2>
              <p className="body-base mb-12">
                {content.contact.description}
              </p>

              <div className="space-y-8">
                <div>
                  <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    {content.contact.emailLabel}
                  </div>
                  <a href="mailto:contact@textile-company.com" className="text-xl text-neutral-900 hover:text-accent-stone transition-colors">
                    contact@textile-company.com
                  </a>
                </div>

                <div>
                  <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    {content.contact.phoneLabel}
                  </div>
                  <a href="tel:+902121234567" className="text-xl text-neutral-900 hover:text-accent-stone transition-colors">
                    +90 212 123 45 67
                  </a>
                </div>

                <div>
                  <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    {content.contact.addressLabel}
                  </div>
                  <address className="text-xl text-neutral-900 not-italic">
                    {content.contact.addressLine1}
                    <br />
                    {content.contact.addressLine2}
                  </address>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status && (
                  <div
                    className={`rounded border px-4 py-3 text-sm ${
                      status.type === 'success'
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                        : 'border-rose-200 bg-rose-50 text-rose-900'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {status.message}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    {content.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    {content.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                    {content.contact.form.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    {content.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    autoComplete="off"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full button-primary"
                >
                  {content.contact.form.submit}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </SectionReveal>
    </section>
  );
}
