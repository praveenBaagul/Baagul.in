"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const WHATSAPP_PHONE = "917483737014"; // Baagul official WhatsApp number

export default function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [currentTime, setCurrentTime] = useState("06:00 PM");
  const [hasInteracted, setHasInteracted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Format local time e.g. "05:57 PM"
    const now = new Date();
    const formatted = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    setCurrentTime(formatted);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const textToSend = message.trim() || "Hello Baagul team, I would like to know more about your services.";
    const targetUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
      textToSend
    )}&type=phone_number&app_absent=0`;

    window.open(targetUrl, "_blank", "noopener,noreferrer");
    setMessage("");
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <aside aria-label="WhatsApp Live Chat" className="fixed bottom-6 right-5 sm:right-8 z-50">
      {/* Chat Popover Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="WhatsApp Chat Window"
          className="mb-4 w-[340px] sm:w-[370px] max-w-[calc(100vw-32px)] bg-white rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.28)] border border-[#0E1153]/15 animate-in fade-in slide-in-from-bottom-4 duration-200 transition-all"
        >
          {/* Header */}
          <div className="bg-[#075E54] px-4 py-3.5 flex items-center justify-between text-white shadow-sm">
            <div className="flex items-center gap-3">
              {/* Avatar with Online Indicator */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white border border-[#25D366] overflow-hidden flex items-center justify-center shadow-sm relative">
                  <Image
                    src="/assets/favicon.png"
                    alt="Baagul brand logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className="w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#075E54] absolute -bottom-0.5 -right-0.5"
                  title="Online"
                />
              </div>

              <div>
                <h3 className="font-heading font-bold text-sm tracking-wide text-white leading-tight">
                  Baagul Support
                </h3>
                <span className="text-[11px] font-sans text-[#A7F3D0] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Online
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Chat Body with subtle WhatsApp pattern */}
          <div
            className="p-4 bg-[#EFEAE2] min-h-[150px] max-h-[260px] overflow-y-auto flex flex-col justify-end"
            style={{
              backgroundImage:
                "radial-gradient(#d3cabb 0.85px, transparent 0.85px)",
              backgroundSize: "14px 14px",
            }}
          >
            {/* Incoming Message Bubble */}
            <div className="flex items-end gap-2 max-w-[90%]">
              <div className="relative w-7 h-7 rounded-full bg-white border border-[#25D366] overflow-hidden flex items-center justify-center shrink-0 mb-1 shadow-xs">
                <Image
                  src="/assets/favicon.png"
                  alt="Baagul brand logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative bg-white text-[#111B21] p-3 rounded-2xl rounded-bl-xs shadow-[0_1px_1.5px_rgba(0,0,0,0.15)] text-xs sm:text-[13px] leading-relaxed">
                <p>👋 Hi! How can I help you today?</p>
                <span className="block text-[10px] font-mono text-[#667781] text-right mt-1.5 leading-none">
                  {currentTime}
                </span>
              </div>
            </div>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-[#F0F2F5] border-t border-[#E9EDEF] flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your problem here..."
              className="flex-1 px-4 py-2 text-xs sm:text-sm bg-white text-[#111B21] placeholder:text-[#8696A0] rounded-full border border-[#E9EDEF] focus:outline-none focus:ring-1 focus:ring-[#25D366] transition-all"
            />

            <button
              type="submit"
              aria-label="Send WhatsApp message"
              className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white flex items-center justify-center shadow-md transition-all cursor-pointer shrink-0"
            >
              <svg
                className="w-4 h-4 translate-x-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>

          {/* Sub-footer Branding */}
          <div className="py-1.5 px-3 bg-[#F0F2F5] border-t border-[#E9EDEF]/60 flex items-center justify-center gap-1.5 text-[11px] text-[#8696A0]">
            <svg
              className="w-3.5 h-3.5 text-[#25D366]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Powered by WhatsApp</span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center justify-end">
        {!isOpen && !hasInteracted && (
          <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] shadow-[3px_3px_0px_#FFA800] text-xs font-mono font-bold animate-bounce">
            <span>Need help? Chat with us!</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setHasInteracted(true);
          }}
          aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.5)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white relative group"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          )}

          {/* Pulse ring indicator */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
          )}
        </button>
      </div>
    </aside>
  );
}

