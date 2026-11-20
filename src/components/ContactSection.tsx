import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (name.trim().length < 2) {
      next.name = 'Please enter your name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (subject.trim().length < 3) {
      next.subject = 'Please include a short subject.';
    }
    if (message.trim().length < 10) {
      next.message = 'Message must be at least 10 characters long.';
    }
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Rahed,\n\n${message}\n\nBest regards,\n${name} (${email})`
  )}`;

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
            Contact
          </p>
          <h2
            className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50"
            style={{ textWrap: 'balance' }}
          >
            Let&apos;s connect on software engineering, research, or cricket tech.
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Direct Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/50 glass-panel p-6 sm:p-7 flex flex-col justify-between gap-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Direct Channels
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Open to software engineering internships, collaborative CSE projects, and conversations around European graduate programs or sports telemetry.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-zinc-200/80 dark:border-zinc-800/80">
                <div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Academic Email
                  </p>
                  <div className="mt-1.5 flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline truncate"
                    >
                      <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span className="truncate">{PROFILE.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Location
                  </p>
                  <p className="mt-1.5 inline-flex items-center gap-2 text-sm text-zinc-800 dark:text-zinc-200">
                    <MapPin className="w-4 h-4 text-zinc-500" aria-hidden="true" />
                    <span>{PROFILE.university} · {PROFILE.location}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/50 glass-panel p-6 sm:p-7"
          >
            {submitted ? (
              <div className="py-8 space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-zinc-950 dark:text-zinc-50">
                    Message validated and ready to send
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Thank you, <span className="font-semibold text-zinc-900 dark:text-zinc-100">{name}</span>. Your message has been prepared. Click below to open it directly in your mail client addressed to{' '}
                    <span className="font-mono">{PROFILE.email}</span>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 text-sm font-semibold transition-colors"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Open in Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Ayesha Rahman"
                      aria-invalid={Boolean(errors.name)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950/80 text-sm text-zinc-950 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950/80 text-sm text-zinc-950 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    placeholder="Internship opportunity / Project collaboration"
                    aria-invalid={Boolean(errors.subject)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950/80 text-sm text-zinc-950 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  {errors.subject && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Share details about your project, role, or inquiry..."
                    aria-invalid={Boolean(errors.message)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950/80 text-sm text-zinc-950 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 text-sm font-semibold transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Send Message</span>
                  </button>

                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                  >
                    Or email directly at{' '}
                    <span className="font-mono underline">{PROFILE.email}</span>
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
