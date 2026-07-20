"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { GenericPage } from "@/components/generic-page";
import { AvailabilityCalendar } from "@/components/availability-calendar";

export default function EnquirePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "Wedding Ceremony",
    location: "Mumbai, Maharashtra",
    preferredDate: "",
    timeOfDay: "Evening (Sunset Gala)",
    aesthetic: "Poetic Mix",
    communication: "Email",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <form ref={formRef} onSubmit={handleSubmit} className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 ambient-shadow-gold">
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
                  <option>Mumbai, Maharashtra</option>
                  <option>Udaipur, Rajasthan</option>
                  <option>Goa, India</option>
                  <option>Jaipur, Rajasthan</option>
                  <option>Kerala, India</option>
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
                  className="rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-on-surface text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition w-full cursor-pointer h-[46px]"
                />
              </div>

              {/* Small trigger box */}
              <div>
                <label className="text-label-md tracking-[0.14em] text-primary-container block mb-2 font-semibold">Check Openings</label>
                <div 
                  onClick={() => setShowCalendar(true)}
                  className="rounded-md border border-primary-container/40 bg-[#fdf6ec] px-4 py-3 cursor-pointer hover:border-primary-container hover:shadow-sm transition flex items-center justify-between group h-[46px]"
                >
                  <span className="text-primary-container text-body-md font-medium">Live Availability</span>
                  <span className="text-primary-container transition-transform group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </span>
                </div>
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

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl hide-scrollbar relative bg-surface-container-lowest">
            <button 
              onClick={() => setShowCalendar(false)}
              className="absolute top-6 right-6 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white z-10"
            >
              ✕
            </button>
            <AvailabilityCalendar 
              onContinue={(date, venue, eventType) => {
                setFormData({ ...formData, preferredDate: date, location: venue, eventType });
                setShowCalendar(false);
                formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              initialEventType={formData.eventType}
              initialVenue={formData.location}
            />
          </div>
        </div>
      )}
    </GenericPage>
  );
}
