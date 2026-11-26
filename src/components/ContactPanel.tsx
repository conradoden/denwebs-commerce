"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

type Tab = "book" | "message";

export default function ContactPanel({ auditMode = false }: { auditMode?: boolean }) {
  const params = useSearchParams();
  const intent = params.get("intent") ?? "";
  // Book is default; only force message when intent clearly wants the form.
  const [tab, setTab] = useState<Tab>(
    intent && intent !== "discovery" ? "message" : "book",
  );
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  useEffect(() => {
    if (intent === "discovery" || !intent) setTab("book");
    else setTab("message");
  }, [intent]);

  useEffect(() => {
    function syncHash() {
      if (window.location.hash === "#book") setTab("book");
      if (window.location.hash === "#message") setTab("message");
    }
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <div className="rounded-[5px] border border-line bg-paper-dim p-6 md:p-10">
      <div
        className="mb-8 flex gap-1 rounded-[3px] border border-line bg-paper p-1"
        role="tablist"
        aria-label="Contact method"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "book"}
          onClick={() => {
            setCalendarLoaded(false);
            setTab("book");
          }}
          className={`flex-1 rounded-[2px] px-4 py-2.5 font-mono text-[11.5px] uppercase tracking-[0.1em] transition-colors ${
            tab === "book" ? "bg-ink text-paper" : "text-muted hover:text-ink"
          }`}
        >
          Book a call
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "message"}
          onClick={() => setTab("message")}
          className={`flex-1 rounded-[2px] px-4 py-2.5 font-mono text-[11.5px] uppercase tracking-[0.1em] transition-colors ${
            tab === "message" ? "bg-ink text-paper" : "text-muted hover:text-ink"
          }`}
        >
          Send a message
        </button>
      </div>

      {tab === "message" ? (
        <div id="message">
          <ContactForm auditMode={auditMode} />
        </div>
      ) : (
        <div id="book" className="space-y-6">
          <p className="text-[15px] leading-relaxed text-muted">
            Book a 30-minute discovery call. Pick a slot on the calendar page;
            it syncs to Google Calendar for {site.email}.
          </p>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-[3px] border border-ink bg-ink px-6 py-3.5 font-mono text-[13px] uppercase tracking-[0.08em] text-paper transition-all duration-200 hover:bg-ink-soft"
          >
            Open calendar booking
            <span className="arrow-slide" aria-hidden="true">
              →
            </span>
          </a>
          <div className="relative overflow-hidden rounded-[3px] border border-line bg-paper">
            {!calendarLoaded && (
              <div
                className="absolute inset-0 z-10 flex items-center justify-center bg-paper"
                aria-live="polite"
                aria-busy="true"
              >
                <span className="sr-only">Loading calendar</span>
                <span
                  className="h-9 w-9 animate-spin rounded-full border-2 border-line border-t-ink"
                  aria-hidden="true"
                />
              </div>
            )}
            <iframe
              src={`${site.bookingUrl}?embed=true`}
              title="Book a 30-minute discovery call"
              className="h-[720px] w-full border-0"
              loading="eager"
              onLoad={() => setCalendarLoaded(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
