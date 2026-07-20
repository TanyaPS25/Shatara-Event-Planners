"use client";

import { useState } from "react";

type AvailabilityCalendarProps = {
  onContinue: (date: string, venue: string, eventType: string) => void;
  initialEventType?: string;
  initialVenue?: string;
};

// Simulated mock data for July 2026
const DAYS_IN_MONTH = 31;
const START_DAY_OF_WEEK = 3; // Wednesday (July 1st 2026 is a Wednesday)

// 0: unavailable/past, 1: available, 2: limited slots, 3: fully booked
const getAvailability = (day: number) => {
  if (day < 5) return 0; // Past or unavailable
  if ([20, 23].includes(day)) return 2; // Limited slots
  if (day === 21) return 1; // Available
  if (day === 24) return 1; // Available
  if (day > 25) return 1; // Available
  return 0; // Unavailable
};

export function AvailabilityCalendar({ onContinue, initialEventType, initialVenue }: AvailabilityCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [eventType, setEventType] = useState(initialEventType || "Wedding Ceremony");
  const [venue, setVenue] = useState(initialVenue || "Taj Mahal Palace, Mumbai");
  const [teamSize, setTeamSize] = useState("Standard Team (₹15,000)");

  const days = Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: START_DAY_OF_WEEK }, (_, i) => i);

  const handleContinue = () => {
    if (selectedDate) {
      const dateString = `2026-07-${selectedDate.toString().padStart(2, '0')}`;
      onContinue(dateString, venue, eventType);
    }
  };

  return (
    <div className="flex flex-col h-full bg-surface-container-lowest w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-outline-variant/20">
      
      {/* Header section */}
      <div className="bg-[#fff8f2] text-[#1f1b14] p-8 relative border-b border-outline-variant/20">
        <h2 className="font-display text-3xl font-semibold">Check Live Availability</h2>
        <p className="mt-2 text-[#1f1b14]/70 text-sm">Select your event type & venue to see real-time open dates — no back-and-forth needed.</p>
        
        {/* Dropdowns */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="text-[0.65rem] font-bold uppercase tracking-widest text-[#1f1b14]/70 block mb-2">Event Type</label>
            <select 
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full bg-white border border-outline-variant/40 rounded-md px-4 py-2.5 text-[#1f1b14] focus:outline-none focus:border-primary-container transition font-medium"
            >
              <option className="bg-white">Wedding Ceremony</option>
              <option className="bg-white">Annual Gala</option>
              <option className="bg-white">Corporate Launch</option>
              <option className="bg-white">Anniversary Celebration</option>
              <option className="bg-white">Bespoke Social Event</option>
              <option className="bg-white">Birthday Celebration</option>
              <option className="bg-white">Baby Shower</option>
            </select>
          </div>
          <div>
            <label className="text-[0.65rem] font-bold uppercase tracking-widest text-[#1f1b14]/70 block mb-2">Venue</label>
            <select 
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="w-full bg-white border border-outline-variant/40 rounded-md px-4 py-2.5 text-[#1f1b14] focus:outline-none focus:border-primary-container transition font-medium"
            >
              <option className="bg-white">Taj Mahal Palace, Mumbai</option>
              <option className="bg-white">Umaid Bhawan Palace, Jodhpur</option>
              <option className="bg-white">Rambagh Palace, Jaipur</option>
              <option className="bg-white">Taj Exotica, Goa</option>
              <option className="bg-white">Own Venue / Custom Location</option>
            </select>
          </div>
          <div>
            <label className="text-[0.65rem] font-bold uppercase tracking-widest text-[#1f1b14]/70 block mb-2">Team Size Needed</label>
            <select 
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="w-full bg-white border border-outline-variant/40 rounded-md px-4 py-2.5 text-[#1f1b14] focus:outline-none focus:border-primary-container transition font-medium"
            >
              <option className="bg-white">Standard Team (₹15,000)</option>
              <option className="bg-white">Large Team (₹25,000)</option>
              <option className="bg-white">Premium Dedicated (₹45,000)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Calendar Area */}
      <div className="p-8 bg-surface-container-lowest flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl font-semibold text-on-surface">July 2026</h3>
          <div className="flex gap-2">
            <button className="h-8 w-8 rounded border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition">←</button>
            <button className="h-8 w-8 rounded border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition">→</button>
          </div>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 gap-3 mb-3 text-center text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant/60">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-7 gap-3 mb-6">
          {emptyDays.map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square rounded-md bg-transparent" />
          ))}
          {days.map((day) => {
            const avail = getAvailability(day);
            const isPast = day < 5;
            const isSelected = selectedDate === day;
            
            let bgClass = isPast 
              ? "bg-surface-container-high border-transparent text-on-surface-variant/40 cursor-not-allowed" // Past/unavailable entirely
              : "bg-surface-container-high border-outline-variant/20 text-on-surface-variant hover:border-outline-variant/40 hover:shadow-sm cursor-pointer"; // Fully booked but selectable
              
            let content = null;

            if (avail === 1) { // Available
              bgClass = "bg-white border-outline-variant/30 text-on-surface hover:border-gold-400 hover:shadow-md cursor-pointer";
            } else if (avail === 2) { // Limited
              bgClass = "bg-[#fdf6ec] border-[#f2d8b3] text-[#a57218] hover:shadow-md cursor-pointer";
              content = <span className="text-[0.6rem] block mt-1 text-[#a57218]/70">2 left</span>;
            }

            if (isSelected) {
              bgClass = "bg-[#1f1b14] border-[#1f1b14] text-white shadow-lg cursor-pointer";
              if (avail === 2) {
                content = <span className="text-[0.6rem] block mt-1 text-gold-400">2 left</span>;
              } else if (avail === 0) {
                content = <span className="text-[0.6rem] block mt-1 text-white/50">Booked</span>;
              }
            }

            return (
              <div 
                key={day} 
                onClick={() => !isPast && setSelectedDate(day)}
                className={`aspect-[4/3] rounded-md border flex flex-col items-center justify-center transition-all duration-200 ${bgClass}`}
              >
                <span className="font-medium text-sm">{day}</span>
                {content}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-6 items-center text-xs font-medium text-on-surface-variant mb-8">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm border border-outline-variant/40 bg-white"></div>
            Available
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm border border-[#f2d8b3] bg-[#fdf6ec]"></div>
            Limited slots
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-surface-container-high"></div>
            Fully booked
          </div>
        </div>

        {/* Summary Card */}
        {selectedDate && (
          <div className="mt-auto rounded-lg border border-[#f2d8b3] bg-[#fcf8f2] p-6 animate-in slide-in-from-bottom-4 fade-in duration-300">
            {getAvailability(selectedDate) === 1 ? (
              <>
                <h4 className="font-bold text-lg text-on-surface flex items-center gap-2">
                  <span className="text-gold-600">✓</span> 
                  {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(2026, 6, selectedDate))}, {selectedDate} July 2026 is available
                </h4>
                <p className="mt-1 text-on-surface-variant text-sm">
                  {venue} is open for your {eventType.toLowerCase()} on this date.
                </p>
                <p className="mt-1 text-[#a57218] text-xs font-medium">
                  Team confirms within 4 hours. Est. {teamSize}.
                </p>
                <button 
                  onClick={handleContinue}
                  className="mt-5 rounded bg-[#1f1b14] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2a251c] hover:-translate-y-0.5 shadow-md flex items-center gap-2 w-fit"
                >
                  Continue to Enquiry Form <span className="text-gold-400">→</span>
                </button>
              </>
            ) : getAvailability(selectedDate) === 2 ? (
              <>
                <h4 className="font-bold text-lg text-on-surface flex items-center gap-2">
                  <span className="text-[#a57218]">⚠️</span> 
                  {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(2026, 6, selectedDate))}, {selectedDate} July 2026 has limited slots
                </h4>
                <p className="mt-1 text-on-surface-variant text-sm">
                  {venue} has very limited availability for this date.
                </p>
                <p className="mt-1 text-[#a57218] text-xs font-medium">
                  Fast confirmation recommended. Est. {teamSize}.
                </p>
                <button 
                  onClick={handleContinue}
                  className="mt-5 rounded bg-[#1f1b14] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2a251c] hover:-translate-y-0.5 shadow-md flex items-center gap-2 w-fit"
                >
                  Secure Remaining Slot <span className="text-gold-400">→</span>
                </button>
              </>
            ) : (
              <>
                <h4 className="font-bold text-lg text-on-surface flex items-center gap-2">
                  <span className="text-red-800">✕</span> 
                  {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(2026, 6, selectedDate))}, {selectedDate} July 2026 is fully booked
                </h4>
                <p className="mt-1 text-on-surface-variant text-sm">
                  {venue} is currently fully booked for this date.
                </p>
                <p className="mt-1 text-[#a57218] text-xs font-medium">
                  Cancellations happen. Join the waitlist or inquire anyway.
                </p>
                <button 
                  onClick={handleContinue}
                  className="mt-5 rounded bg-surface-container-high border border-outline-variant/40 px-6 py-2.5 text-sm font-semibold text-on-surface transition-all duration-300 hover:bg-surface-container-highest hover:-translate-y-0.5 shadow-sm flex items-center gap-2 w-fit"
                >
                  Join Waitlist / Inquire Anyway <span className="text-on-surface-variant">→</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
