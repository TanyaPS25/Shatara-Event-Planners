"use client";

import { useState } from "react";
import Link from "next/link";
import { GenericPage } from "@/components/generic-page";
import { supabase } from "@/lib/supabase";

export default function EnquirePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "Wedding Ceremony",
    location: "Lake Como, Italy",
    preferredDate: "",
    timeOfDay: "Evening (Sunset Gala)",
    aesthetic: "Poetic Mix",
    communication: "Email",
  });

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const detailsMessage = [
      `Event Type: ${formData.eventType}`,
      formData.preferredDate ? `Preferred Date: ${formData.preferredDate}` : null,
      `Time of Day: ${formData.timeOfDay}`,
    ]
      .filter(Boolean)
      .join(" | ");

    const { error } = await supabase.from("bookings").insert({
      name: formData.name,
      email: formData.email,
      location: formData.location,
      aesthetic: formData.aesthetic,
      communication: formData.communication,
      message: detailsMessage,
    });

    if (error) {
      console.error("Booking submission error:", error);
      alert(
        error.code === "42501"
          ? "Row-Level Security (RLS) error: Please add an INSERT policy on public.bookings in Supabase for anon users."
          : `Submission error: ${error.message || "Failed to submit enquiry."}`
      );
      return;
    }

    setSubmitted(true);
  };

  return (
    <GenericPage
      title="Manifest Your Extraordinary Event"
      intro="Step into the world of Shatara, where your vision meets our meticulous craftsmanship. Complete our curated intake process to begin your journey toward a truly bespoke celebration."
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        {submitted ? (
          <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 text-center ambient-shadow-gold flex flex-col items-center justify-center min-h-[400px]">
            <div className="h-16 w-16 bg-accent-sage/30 rounded-full flex items-center justify-center text-accent-sage-text text-3xl font-bold">
              ✓
            </div>
            <h3 className="font-display text-3xl font-semibold text-on-surface mt-6">Inquiry Received</h3>
            <p className="mt-4 text-body-md text-on-surface-variant max-w-md leading-relaxed">
              Thank you, {formData.name || "Sarah"}. A dedicated luxury event designer from Shatara will review your preferences and contact you via {formData.communication} within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 rounded-md bg-primary-container px-6 py-3 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition cursor-pointer"
            >
              Modify Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 ambient-shadow-gold">
            <h3 className="font-display text-2xl font-semibold text-on-surface mb-6 border-b border-outline-variant/10 pb-4">Curated Intake Form</h3>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-label-md tracking-[0.14em] text-primary-container block mb-2 font-semibold">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-on-surface text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-label-md tracking-[0.14em] text-primary-container block mb-2 font-semibold">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-on-surface text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition w-full"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="text-label-md tracking-[0.14em] text-primary-container block mb-2 font-semibold">Event Type</label>
                <select
                  id="eventType"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-on-surface text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition w-full appearance-none cursor-pointer"
                >
                  <option>Wedding Ceremony</option>
                  <option>Annual Gala</option>
                  <option>Corporate Launch</option>
                  <option>Anniversary Celebration</option>
                  <option>Bespoke Social Event</option>
                </select>
              </div>
              <div>
                <label htmlFor="location" className="text-label-md tracking-[0.14em] text-primary-container block mb-2 font-semibold">Desired Location</label>
                <select
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-on-surface text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition w-full appearance-none cursor-pointer"
                >
                  <option>Mumbai, India</option>
                  <option>Lake Como, Italy</option>
                  <option>Los Angeles, CA</option>
                  <option>London, UK</option>
                  <option>Private Island, Maldives</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredDate" className="text-label-md tracking-[0.14em] text-primary-container block mb-2 font-semibold">Preferred Date</label>
                <input
                  id="preferredDate"
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-on-surface text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition w-full cursor-pointer"
                />
              </div>
              <div>
                <label htmlFor="timeOfDay" className="text-label-md tracking-[0.14em] text-primary-container block mb-2 font-semibold">Time of Day</label>
                <select
                  id="timeOfDay"
                  value={formData.timeOfDay}
                  onChange={(e) => setFormData({ ...formData, timeOfDay: e.target.value })}
                  className="rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-on-surface text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition w-full appearance-none cursor-pointer"
                >
                  <option>Morning (Brunch)</option>
                  <option>Afternoon</option>
                  <option>Evening (Sunset Gala)</option>
                  <option>Late Night</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="aesthetic" className="text-label-md tracking-[0.14em] text-primary-container block mb-2 font-semibold">Desired Aesthetic</label>
              <select
                id="aesthetic"
                value={formData.aesthetic}
                onChange={(e) => setFormData({ ...formData, aesthetic: e.target.value })}
                className="rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-on-surface text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition w-full appearance-none cursor-pointer"
              >
                <option>Modern Minimalism</option>
                <option>Traditional Opulence</option>
                <option>Poetic & Warm Mix</option>
                <option>Editorial / Avant-Garde</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="text-label-md tracking-[0.14em] text-primary-container block mb-3 font-semibold">Preferred Communication Mode</label>
              <div className="flex flex-wrap gap-6 mt-2">
                {["Email", "Call", "WhatsApp"].map((mode) => (
                  <label key={mode} className="inline-flex items-center gap-3.5 text-body-md text-on-surface-variant cursor-pointer">
                    <input
                      type="radio"
                      name="communication"
                      value={mode}
                      checked={formData.communication === mode}
                      onChange={() => setFormData({ ...formData, communication: mode })}
                      className="h-5 w-5 border-outline-variant text-primary focus:ring-primary cursor-pointer accent-primary-container"
                    />
                    <span>{mode}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 border-t border-outline-variant/10 pt-6">
              <button
                type="submit"
                className="rounded-md bg-primary-container px-6 py-3 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition shadow-[0_4px_12px_rgba(200,155,60,0.15)] cursor-pointer"
              >
                Submit Inquiry
              </button>
              <Link
                href="/client-login"
                className="rounded-md border border-primary-container/40 px-6 py-3 text-btn font-semibold text-primary-container hover:bg-primary-container/10 transition"
              >
                Review Selections
              </Link>
            </div>
          </form>
        )}

        <div className="space-y-6">
          <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-6 ambient-shadow-gold text-center lg:text-left">
            <div className="relative mx-auto lg:mx-0 h-16 w-16 overflow-hidden rounded-full border-2 border-primary-container/20 bg-surface-container-high mb-4 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#e8ddcf] flex items-center justify-center text-primary font-display text-lg font-bold uppercase">
                C
              </div>
            </div>
            <p className="font-display text-2xl font-semibold text-on-surface">Class Montgomery</p>
            <p className="mt-2 text-body-md text-on-surface-variant leading-relaxed">
              Your dedicated planner is here to help you refine the event vision and next steps.
            </p>
          </div>

          <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-6 ambient-shadow-gold">
            <p className="text-label-md tracking-[0.14em] text-primary-container border-b border-outline-variant/10 pb-3 font-semibold">Your Progress</p>
            <div className="mt-4 space-y-4">
              {[
                ["1. Discover", "Completed", "bg-accent-sage/30 text-accent-sage-text"],
                ["2. First Call", "In Progress", "bg-primary-container/20 text-on-primary-container"],
                ["3. Design", "Pending", "bg-surface-container-high/40 text-on-surface-variant/60"],
                ["4. Production", "Pending", "bg-surface-container-high/40 text-on-surface-variant/60"],
              ].map(([step, status, badgeStyle]) => (
                <div key={step} className="flex items-center justify-between gap-4">
                  <span className="text-body-md font-medium text-on-surface">{step}</span>
                  <span className={`text-xs px-2.5 py-1 rounded font-semibold ${badgeStyle}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GenericPage>
  );
}
