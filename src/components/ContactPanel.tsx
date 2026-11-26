"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import CalBooking from "@/components/CalBooking";
import { site } from "@/content/site";

type Tab = "message" | "book";

export default function ContactPanel({ auditMode = false }: { auditMode?: boolean }) {
  const params = useSearchParams();
  const intent = params.get("intent") ?? "";
  const [tab, setTab] = useState<Tab>(intent === "discovery" ? "book" : "message");

  useEffect(() => {
    if (intent === "discovery") setTab("book");
  }, [intent]);

  useEffect(() => {
    function syncHash() {
      if (window.location.hash === "#book") setTab("book");
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
          aria-selected={tab === "message"}
          onClick={() => setTab("message")}
          className={`flex-1 rounded-[2px] px-4 py-2.5 font-mono text-[11.5px] uppercase tracking-[0.1em] transition-colors ${
            tab === "message"
              ? "bg-ink text-paper"
              : "text-muted hover:text-ink"
          }`}
        >
          Send a message
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "book"}
          onClick={() => setTab("book")}
          className={`flex-1 rounded-[2px] px-4 py-2.5 font-mono text-[11.5px] uppercase tracking-[0.1em] transition-colors ${
            tab === "book"
              ? "bg-ink text-paper"
              : "text-muted hover:text-ink"
          }`}
        >
          Book a call
        </button>
      </div>

      {tab === "message" ? (
        <ContactForm auditMode={auditMode} />
      ) : (
        <div id="book">
          <p className="mb-6 text-[15px] leading-relaxed text-muted">
            Pick a 30-minute discovery slot. Confirmed bookings go to your Google Calendar
            for ct@denwebs.com.
          </p>
          <CalBooking />
          <p className="mt-4 text-center font-mono text-[11px] text-muted">
            Prefer the full page?{" "}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Open Cal.com
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
