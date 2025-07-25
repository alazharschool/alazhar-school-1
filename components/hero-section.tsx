"use client"

import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollingMarquee from "@/components/scrolling-marquee";

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
)

// Custom Telegram icon component (circle blue with white paper plane)
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="20" cy="20" r="20" fill="#229ED9" />
    <path d="M30.5 11.5L8.5 19.5C7.5 19.8333 7.5 20.5 8.33333 20.75L13.5 22.25L27.5 14.5C28.1667 14.1667 28.8333 14.3333 28.3333 14.8333L16.5 25.5V29.5C16.5 30.1667 17.1667 30.5 17.6667 30.1667L21.1667 27.6667L26.5 31.5C27.1667 32 28 31.6667 28 30.8333V12.5C28 11.6667 29 11.3333 29.5 12L30.5 11.5Z" fill="#fff"/>
  </svg>
)

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#f8f3eb] relative overflow-hidden">
      {/* Main Hero Content */}
      <main
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20 overflow-visible"
        style={{
          backgroundImage: "url('/islamic-pattern-new.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
            {/* Left Side Content */}
            <div className="space-y-4 sm:space-y-6 relative mt-0 sm:mt-0">
              {/* Greeting */}
              <div style={{ position: 'relative' }}>
                <p
                  className="assalam-alikom-title text-black mb-1 text-center lg:text-left text-lg sm:text-xl md:text-2xl"
                  style={{
                    fontFamily: "Noto Serif",
                    fontWeight: 900,
                  }}
                >
                  Assalam Alikom
                </p>
                <style>{`
                  .assalam-alikom-title {
                    font-size: 1.25rem !important;
                    text-shadow: 1px 1px 4px #fff !important;
                  }
                  @media (min-width: 640px) {
                    .assalam-alikom-title { font-size: 1.5rem !important; }
                  }
                  @media (min-width: 768px) {
                    .assalam-alikom-title { font-size: 2rem !important; }
                  }
                `}</style>
              </div>

              {/* Main Title */}
              <div>
                <h1
                  className="hero-main-title text-center lg:text-left text-2xl sm:text-4xl md:text-5xl font-black"
                  style={{
                    fontFamily: 'Noto Serif',
                    fontWeight: 900,
                    color: '#ffb800',
                    letterSpacing: '2px',
                    textShadow: '2px 2px 0 #000, 3px 3px 6px #000',
                    lineHeight: 1.1,
                  }}
                >
                  Al-Azhar School
                </h1>
              </div>
              <style jsx>{`
                @media (max-width: 768px) {
                  .hero-main-title {
                    font-size: 2.5rem !important;
                    line-height: 1.1 !important;
                  }
                }
              `}</style>

              {/* Subheading */}
              <div>
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                  style={{
                    fontFamily: "Tajawal, Cairo, Noto Serif, serif",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    textShadow: "1px 1px 2px #fff, 0 1px 8px #e8d5b7",
                  }}
                >
                  Learn Quran online with certified Al-Azhar teachers.<br/>
                  Flexible online Quran classes for kids and adults.<br/>
                  Study Tajweed, Hifz, and Quran recitation anytime, anywhere. Affordable private and group Quran lessons tailored for non-Arabic speakers.<br/>
                  Discover modern Quran e-learning with native Arabic tutors and build a strong connection to the Holy Quran from home.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-4">
                <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-wrap justify-center lg:justify-start">
                  {[
                    { Icon: Youtube, href: "https://www.youtube.com/@Al-AzharSchool-london", color: "#FF0000" },
                    { Icon: Facebook, href: "https://www.facebook.com/al.azhar.school.2025", color: "#1877F3" },
                    { Icon: Twitter, href: "https://x.com/AlAzharSchool19", color: "#1DA1F2" },
                    { Icon: TelegramIcon, href: "https://t.me/+SN-s-3GtM6FlMWQ0", color: "#229ED9" },
                    { Icon: Instagram, href: "https://www.instagram.com/school.alazhar/", color: "#E1306C" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/al-azhar-school-a67598332", color: "#0077B5" },
                    { Icon: TikTokIcon, href: "https://www.tiktok.com/@alazhar.school?_t=8pt46ygpr4q&_r=1", color: "#000" },
                  ].map(({ Icon, href, color }, index) => (
                    <Link
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-[#5a2600] bg-[#fde6c3] rounded-full flex items-center justify-center shadow-[0_4px_16px_#c9a063,0_1.5px_0_#fff_inset] hover:shadow-2xl hover:shadow-black/70 hover:scale-110 hover:rotate-12 active:scale-95 active:shadow-2xl transition-transform duration-200 will-change-transform animate-social-fadein"
                      style={{ color: color || '#000', animationDelay: `${index * 0.1 + 0.2}s` }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-200 hover:scale-110 hover:rotate-12" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main CTA Button */}
              <div className="flex justify-center lg:justify-start mt-2">
                <Link
                  href="/contact"
                  className="font-black px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-lg border transition-all duration-300 hover:scale-105 w-full sm:w-auto flex items-center justify-center text-white"
                  style={{
                    fontFamily: "Noto Serif",
                    fontWeight: 900,
                    background: '#ffb300',
                    color: '#fff',
                    border: '1.2px solid #8B4513',
                    boxShadow: '0 6px 24px 0 #000b',
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Right Side - Logo + Learn Quran Online + Divider */}
            <div className="flex flex-col items-center justify-center order-first lg:order-last animate-hero-fadein w-full mt-2 sm:mt-0">
                <Image
                  src="/alazhar-logo.png"
                alt="Al-Azhar School Logo"
                width={520}
                height={270}
                  className="hero-logo w-40 sm:w-[220px] md:w-[320px] lg:w-[420px] xl:w-[520px] max-w-full h-auto object-contain"
                  priority
                />
                <style jsx>{`
                  @media (max-width: 768px) {
                    .hero-logo {
                      width: 20rem !important;
                      min-width: 20rem !important;
                    }
                  }
                `}</style>
              <span
                className="hero-subtitle block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-center mt-1"
                style={{
                  fontFamily: 'Noto Serif',
                  color: '#e8b007',
                  WebkitTextStroke: '1.2px #000',
                  textStroke: '1.2px #000',
                  textShadow: '2px 2px 8px #000, 0 2px 4px #fff',
                  letterSpacing: '1px',
                  whiteSpace: 'normal',
                  margin: '0 0 4px 0',
                  display: 'block',
                }}
              >
                Learn Quran Online
              </span>
              <style jsx>{`
                @media (max-width: 768px) {
                  .hero-subtitle {
                    font-size: 1.5rem !important;
                    line-height: 1.2 !important;
                  }
                }
              `}</style>
              <img 
                src="/LINE3.svg" 
                alt="divider" 
                className="hidden sm:block"
                style={{ 
                  display: 'block', 
                  marginTop: '2px',
                  width: 'fit-content', 
                  maxWidth: '100%', 
                  height: '36px', 
                  objectFit: 'contain',
                  filter: 'brightness(1.1) sepia(1) hue-rotate(-20deg) saturate(8) contrast(1.2) drop-shadow(0 2px 2px #000)',
                  position: 'static',
                  opacity: 0,
                  animation: 'divider-fadein 1.2s cubic-bezier(0.23,1,0.32,1) 0.2s forwards',
                }} 
              />
              <style>{`
                @keyframes divider-fadein {
                  0% { opacity: 0; transform: translateY(32px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="hidden sm:block absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 border-2 border-[#e8b007]/20 rotate-45 rounded-lg animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-20 h-20 sm:w-24 sm:h-24 border-2 border-[#e8b007]/20 rotate-12 rounded-lg animate-pulse delay-1000"></div>
      <div className="hidden sm:block absolute top-1/2 left-20 w-2 h-2 bg-[#e8b007]/30 rounded-full animate-bounce delay-500"></div>
      <div className="hidden sm:block absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#e8b007]/30 rounded-full animate-bounce delay-700"></div>
    </div>
  )
}
