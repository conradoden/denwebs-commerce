"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { hearAbout, revenueRanges, timelines } from "@/content/site";

const inputCls =
  "w-full rounded-[3px] border border-line bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus:border-ink focus:outline-none focus:ring-2 focus:ring-accent/40";
const labelCls = "mb-1.5 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink/75";

export default function ContactForm({ auditMode = false }: { auditMode?: boolean }) {
  const params = useSearchParams();
  const intent = params.get("intent") ?? "";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    data.intent = intent;
    data.auditMode = String(auditMode);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-md border border-line bg-paper-dim p-10 text-center" role="status">
        <p className="font-mono text-[12px] uppercase tracking-widest text-accent-deep">
          Received
        </p>
        <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">
          Thanks, we&apos;ve got it.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          We reply within one business day. If it&apos;s urgent, email{" "}
          <a href="mailto:hello@denwebs.com" className="text-ink underline decoration-accent decoration-2 underline-offset-4">
            hello@denwebs.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      {/* Honeypot, hidden from humans */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="company_fax" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="firstName" className={labelCls}>
          First name *
        </label>
        <input id="firstName" name="firstName" required className={inputCls} autoComplete="given-name" />
      </div>
      <div>
        <label htmlFor="lastName" className={labelCls}>
          Last name *
        </label>
        <input id="lastName" name="lastName" required className={inputCls} autoComplete="family-name" />
      </div>
      <div>
        <label htmlFor="email" className={labelCls}>
          Work email *
        </label>
        <input id="email" name="email" type="email" required className={inputCls} autoComplete="email" />
      </div>
      <div>
        <label htmlFor="company" className={labelCls}>
          Company name *
        </label>
        <input id="company" name="company" required className={inputCls} autoComplete="organization" />
      </div>
      <div>
        <label htmlFor="website" className={labelCls}>
          {auditMode ? "Store URL *" : "Website URL *"}
        </label>
        <input
          id="website"
          name="website"
          type="url"
          required
          placeholder="https://yourstore.com"
          className={inputCls}
        />
      </div>

      {auditMode && (
        <div className="sm:col-span-2">
          <span className={labelCls}>Audit type *</span>
          <div className="flex flex-wrap gap-3">
            {[
              { value: "store", label: "Shopify store audit" },
              { value: "ai", label: "AI visibility audit" },
            ].map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2 rounded-sm border border-line px-4 py-2.5 text-sm has-checked:border-ink has-checked:bg-ink has-checked:text-paper"
              >
                <input
                  type="radio"
                  name="auditType"
                  value={opt.value}
                  defaultChecked={intent === "ai-audit" ? opt.value === "ai" : opt.value === "store"}
                  className="accent-[#2f5fe0]"
                  required
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      )}

      {!auditMode && (
        <>
          <div>
            <label htmlFor="revenue" className={labelCls}>
              Monthly revenue range
            </label>
            <select id="revenue" name="revenue" className={inputCls} defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              {revenueRanges.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className={labelCls}>
              Timeline
            </label>
            <select id="timeline" name="timeline" className={inputCls} defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              {timelines.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelCls}>
          How can we help? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputCls}
          placeholder={
            intent === "discovery"
              ? "What would you like to cover on a discovery call?"
              : "Tell us about the project, the problem, or what's not working."
          }
          defaultValue={
            intent === "discovery"
              ? "I'd like to book a discovery call. "
              : intent === "ai-audit"
                ? "I'd like an AI visibility audit. "
                : ""
          }
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="hearAbout" className={labelCls}>
          How did you hear about us?
        </label>
        <select id="hearAbout" name="hearAbout" className={inputCls} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          {hearAbout.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-[3px] bg-ink px-7 py-4 font-mono text-[13px] uppercase tracking-[0.08em] text-paper transition-colors hover:bg-ink-soft disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : auditMode ? "Request audit" : "Get a quote →"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-700" role="alert">
            {errorMsg} You can also email hello@denwebs.com.
          </p>
        )}
        <p className="mt-3 text-[13px] text-muted">
          We reply within one business day. No spam and no list. Your details go to a human.
        </p>
      </div>
    </form>
  );
}
