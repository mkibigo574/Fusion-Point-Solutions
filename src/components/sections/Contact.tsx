"use client";

import { useActionState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/ui/Section";
import GlassPanel from "@/components/ui/GlassPanel";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { STUDIO } from "@/lib/content";

const initial: ContactState = { ok: false, message: "" };

const fieldBase =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-ink-faint transition-colors focus:border-accent focus:outline-none";

export default function Contact() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — pitch + studio details */}
        <div className="lg:col-span-5">
          <Reveal from="left" distance={60}>
            <span className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-brand-red" aria-hidden />
              Start a project
            </span>
          </Reveal>
          <Reveal from="left" distance={60} delay={0.05}>
            <h2 className="mt-6 text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              Let&apos;s make
              <br />
              <span className="text-gradient">something.</span>
            </h2>
          </Reveal>
          <Reveal from="left" distance={60} delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
              Tell us what you have in mind — a shoot, a film, a site, or all
              three. We reply to every genuine enquiry.
            </p>
          </Reveal>

          <Reveal from="left" distance={60} delay={0.15} className="mt-10 space-y-5">
            <Detail label="Email">
              <a
                href={`mailto:${STUDIO.email}`}
                className="text-ink transition-colors hover:text-accent-2"
              >
                {STUDIO.email}
              </a>
            </Detail>
            <Detail label="Phone">
              <a
                href={STUDIO.phoneHref}
                className="text-ink transition-colors hover:text-accent-2"
              >
                {STUDIO.phone}
              </a>
            </Detail>
            <Detail label="Studio">
              <span className="text-ink">{STUDIO.location}</span>
            </Detail>
            <Detail label="Social">
              <span className="flex flex-wrap gap-x-4 gap-y-1">
                {STUDIO.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink transition-colors hover:text-accent-2"
                  >
                    {s.label}
                  </a>
                ))}
              </span>
            </Detail>
          </Reveal>
        </div>

        {/* Right — glass form */}
        <Reveal className="lg:col-span-7" from="right" distance={80} delay={0.1}>
          <GlassPanel className="relative overflow-hidden p-7 sm:p-10">
            {/* gradient behind glass so blur reads */}
            <div
              className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />

            <AnimatePresence mode="wait">
              {state.ok ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-accent to-brand-red text-2xl text-bg">
                    ✓
                  </span>
                  <h3 className="mt-6 text-3xl">Enquiry sent</h3>
                  <p className="mt-3 max-w-sm text-ink-muted">{state.message}</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  action={formAction}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" error={state.errors?.name}>
                      <input
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        className={fieldBase}
                      />
                    </Field>
                    <Field label="Email" error={state.errors?.email}>
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@email.com"
                        className={fieldBase}
                      />
                    </Field>
                  </div>

                  <Field label="Service interest" error={state.errors?.service}>
                    <select name="service" defaultValue="" className={fieldBase}>
                      <option value="" disabled>
                        Select a service…
                      </option>
                      <option value="photography">Photography</option>
                      <option value="videography">Videography</option>
                      <option value="it-web">IT &amp; Web</option>
                    </select>
                  </Field>

                  <Field label="Message" error={state.errors?.message}>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about the project…"
                      className={`${fieldBase} resize-none`}
                    />
                  </Field>

                  {!state.ok && state.message && (
                    <p className="text-sm text-brand-red" role="alert">
                      {state.message}
                    </p>
                  )}

                  <div className="pt-1">
                    <MagneticButton type="submit" variant="primary">
                      {pending ? "Sending…" : "Send enquiry"}
                    </MagneticButton>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassPanel>
        </Reveal>
      </div>
    </Section>
  );
}

function Detail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-line pb-4">
      <span className="eyebrow text-[0.6rem]">{label}</span>
      <span className="text-lg">{children}</span>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-ink-muted">{label}</span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs text-brand-red" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
