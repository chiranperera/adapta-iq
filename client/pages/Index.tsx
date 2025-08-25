import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-adaptaiq-blue-500 to-adaptaiq-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-adaptaiq-blue-500 to-adaptaiq-blue-600 rounded"></div>
                </div>
              </div>
              <div>
                <div className="text-2xl font-normal text-adaptaiq-gray-500">
                  Adapta<span className="text-adaptaiq-blue-500 font-normal">IQ</span>
                </div>
                <div className="text-xs font-bold text-adaptaiq-blue-200 tracking-wide">
                  PERSONALIZED.INTELLIGENT. EFFORTLESS.
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-adaptaiq-gray-600 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors">
                Home
              </a>
              <a href="#" className="text-adaptaiq-gray-500 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors">
                About
              </a>
              <a href="#" className="text-adaptaiq-gray-600 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors">
                Why
              </a>
              <a href="#" className="text-adaptaiq-gray-500 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors">
                Early Access
              </a>
              <Button className="bg-adaptaiq-blue-500 hover:bg-adaptaiq-blue-600 text-adaptaiq-blue-100 font-bold px-6 py-2 rounded-full border border-adaptaiq-blue-300">
                Join Waitlist
                <svg className="ml-2 w-4 h-3" viewBox="0 0 32 17" fill="none">
                  <path d="M24 8.5L32 0.5L24 16.5M0 8.5H31" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen hero-gradient dot-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/95 to-blue-900/90"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-normal text-white mb-6 leading-tight">
              The Future of Learn<span className="text-adaptaiq-blue-200">ing</span>
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Adapts to You.
            </h2>
            <p className="text-xl md:text-2xl text-adaptaiq-blue-200 font-bold mb-12 max-w-4xl mx-auto leading-relaxed">
              AdaptaIQ builds intelligence that learns you, evolving with every<br />
              person, every interaction, every goal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-adaptaiq-blue-500 hover:bg-adaptaiq-blue-600 text-adaptaiq-blue-100 font-bold px-8 py-4 rounded-full text-lg border border-adaptaiq-blue-400">
                Join Early Access
                <svg className="ml-3 w-5 h-4" viewBox="0 0 32 17" fill="none">
                  <path d="M24 8.5L32 0.5L24 16.5M0 8.5H31" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </Button>
              <Button variant="outline" className="bg-black/60 border-adaptaiq-blue-800 text-adaptaiq-blue-400 hover:bg-black/80 font-bold px-8 py-4 rounded-full text-lg">
                Learn More
                <svg className="ml-3 w-5 h-4" viewBox="0 0 32 17" fill="none">
                  <path d="M24 8.5L32 0.5L24 16.5M0 8.5H31" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="relative">
                <div className="absolute -left-16 top-0 w-48 h-48 bg-gradient-to-br from-adaptaiq-blue-100 to-adaptaiq-blue-200 rounded-full opacity-20"></div>
                <h2 className="text-4xl md:text-6xl font-normal text-adaptaiq-gray-800 mb-4">
                  What We're
                </h2>
                <h3 className="text-4xl md:text-6xl font-bold text-adaptaiq-gray-400 mb-8">
                  Building
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg font-bold text-adaptaiq-gray-700 leading-relaxed">
                  Learning has always been one size fits all. We are changing that.
                </p>
                <p className="text-lg text-adaptaiq-gray-600 leading-relaxed">
                  AdaptaIQ is an adaptive intelligence engine that understands the person behind the screen. By building a living profile through onboarding and interaction, it delivers experiences shaped to the way each human learns best.
                </p>
              </div>
            </div>

            {/* Right Content - Quote */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-12 shadow-lg relative">
                <div className="absolute -top-6 -left-6 w-16 h-12 flex items-center justify-center">
                  <svg className="w-16 h-12 text-adaptaiq-blue-200" viewBox="0 0 76 60" fill="currentColor">
                    <path d="M17 0C7.6 0 0 7.6 0 17v26c0 9.4 7.6 17 17 17h9V43H17c-4.4 0-8-3.6-8-8V17c0-4.4 3.6-8 8-8h9V0h-9zm42 0c-9.4 0-17 7.6-17 17v26c0 9.4 7.6 17 17 17h9V43h-9c-4.4 0-8-3.6-8-8V17c0-4.4 3.6-8 8-8h9V0h-9z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-adaptaiq-gray-800 italic mb-4">
                    "Because <span className="text-adaptaiq-blue-500">intelligence</span>
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-adaptaiq-gray-800 italic">
                    should adapt to us, not the other way around."
                  </p>
                </div>
                <div className="absolute -bottom-6 -right-6 w-16 h-12 flex items-center justify-center rotate-180">
                  <svg className="w-16 h-12 text-adaptaiq-blue-200" viewBox="0 0 76 60" fill="currentColor">
                    <path d="M17 0C7.6 0 0 7.6 0 17v26c0 9.4 7.6 17 17 17h9V43H17c-4.4 0-8-3.6-8-8V17c0-4.4 3.6-8 8-8h9V0h-9zm42 0c-9.4 0-17 7.6-17 17v26c0 9.4 7.6 17 17 17h9V43h-9c-4.4 0-8-3.6-8-8V17c0-4.4 3.6-8 8-8h9V0h-9z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-96 h-96 rounded-full opacity-10">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#51B7FE" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <circle cx="200" cy="200" r="180" fill="url(#grid)" opacity="0.3"/>
                  <circle cx="200" cy="200" r="120" fill="#51B7FE" opacity="0.1"/>
                  <circle cx="200" cy="200" r="60" fill="#51B7FE" opacity="0.2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes AdaptaIQ Different Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-adaptaiq-gray-900 mb-4">
              What Makes
            </h2>
            <h3 className="text-4xl md:text-6xl font-normal text-adaptaiq-gray-400">
              AdaptaIQ Different
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Learns You Card */}
            <div className="bg-white border border-gray-100 p-8 rounded-none relative group hover:shadow-lg transition-shadow">
              <div className="absolute top-6 right-6 w-6 h-6 border-2 border-gray-200 rounded-full"></div>
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <svg viewBox="0 0 101 111" className="w-full h-full">
                    <defs>
                      <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#51B7FE"/>
                        <stop offset="100%" stopColor="#4DAEE9"/>
                      </linearGradient>
                    </defs>
                    <path d="M50.5 111C78.1 111 101 86.1 101 55.5S78.1 0 50.5 0 0 24.9 0 55.5 22.9 111 50.5 111z" fill="url(#brain-gradient)" opacity="0.2"/>
                    <circle cx="30" cy="40" r="8" fill="#51B7FE"/>
                    <circle cx="70" cy="40" r="8" fill="#51B7FE"/>
                    <circle cx="50" cy="70" r="6" fill="#4DAEE9"/>
                    <path d="M25 60 Q50 45 75 60" stroke="#51B7FE" strokeWidth="3" fill="none"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-normal text-adaptaiq-gray-800 mb-4 text-center">
                Learns You
              </h4>
              <p className="text-lg text-adaptaiq-gray-600 text-center leading-relaxed">
                Builds a living profile and adapts in real time.
              </p>
            </div>

            {/* Redefines Learning Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 relative group hover:shadow-lg transition-shadow">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <svg viewBox="0 0 126 94" className="w-full h-full">
                    <defs>
                      <linearGradient id="learn-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6AC2FE"/>
                        <stop offset="100%" stopColor="#51B7FE"/>
                      </linearGradient>
                    </defs>
                    <rect x="10" y="10" width="80" height="60" rx="8" fill="url(#learn-gradient)" opacity="0.3"/>
                    <rect x="20" y="20" width="20" height="4" fill="#6AC2FE"/>
                    <rect x="50" y="20" width="30" height="4" fill="#6AC2FE"/>
                    <rect x="20" y="30" width="40" height="4" fill="#51B7FE"/>
                    <rect x="20" y="40" width="25" height="4" fill="#4DAEE9"/>
                    <circle cx="100" cy="30" r="15" fill="#6AC2FE" opacity="0.2"/>
                    <path d="M95 30 L105 30 M100 25 L100 35" stroke="#6AC2FE" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-adaptaiq-blue-500 mb-4 text-center">
                Redefines Learning
              </h4>
              <p className="text-lg text-adaptaiq-gray-600 text-center leading-relaxed">
                Moves beyond static content to create truly personal experiences.
              </p>
            </div>

            {/* Built to Evolve Card */}
            <div className="bg-white border border-gray-100 p-8 rounded-none relative group hover:shadow-lg transition-shadow">
              <div className="absolute top-4 right-4 w-6 h-6 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 border border-gray-300 rounded"></div>
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <svg viewBox="0 0 103 106" className="w-full h-full">
                    <defs>
                      <linearGradient id="evolve-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#51B7FE"/>
                        <stop offset="100%" stopColor="#4398CC"/>
                      </linearGradient>
                    </defs>
                    <path d="M20 20 Q51.5 0 83 20 Q103 51.5 83 83 Q51.5 103 20 83 Q0 51.5 20 20 Z" fill="url(#evolve-gradient)" opacity="0.2"/>
                    <circle cx="30" cy="30" r="4" fill="#51B7FE"/>
                    <circle cx="70" cy="30" r="4" fill="#51B7FE"/>
                    <circle cx="50" cy="50" r="6" fill="#4398CC"/>
                    <circle cx="30" cy="70" r="4" fill="#4DAEE9"/>
                    <circle cx="70" cy="70" r="4" fill="#4DAEE9"/>
                    <path d="M30 30 L50 50 M70 30 L50 50 M50 50 L30 70 M50 50 L70 70" stroke="#51B7FE" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-adaptaiq-gray-800 mb-4 text-center">
                Built to Evolve
              </h4>
              <p className="text-lg text-adaptaiq-gray-600 text-center leading-relaxed">
                A system that grows smarter with every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-24 vision-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-900/95"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-normal text-white mb-2">
              Our <span className="text-adaptaiq-gray-400 font-bold">Vision</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-adaptaiq-blue-400 to-transparent mx-auto"></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-adaptaiq-blue-200 mb-8 leading-relaxed">
            We are testing the limits of what AI can do for human learning.
          </p>
          
          <p className="text-2xl md:text-3xl text-adaptaiq-blue-200 mb-12 leading-relaxed max-w-4xl mx-auto">
            AdaptaIQ is more than technology. It is a shift toward intelligence that grows with people, unlocking potential we have never seen before.
          </p>
          
          <div className="inline-block bg-gradient-to-r from-adaptaiq-blue-600 to-adaptaiq-blue-700 rounded-full px-12 py-4 mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              This is where a new era begins.
            </h3>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-adaptaiq-gray-800 mb-4">
            Be part of the first wave shaping adaptive intelligence.
          </h2>
          <p className="text-3xl md:text-4xl font-normal text-adaptaiq-gray-400 mb-12">
            Sign up for exclusive early access.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-full p-2 border border-gray-200 shadow-lg">
              <Input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-none bg-transparent text-lg placeholder:text-adaptaiq-gray-400 focus-visible:ring-0 px-6"
                required
              />
              <Button
                type="submit"
                className="bg-adaptaiq-blue-500 hover:bg-adaptaiq-blue-600 text-adaptaiq-blue-100 font-bold px-8 py-4 rounded-full text-lg border border-adaptaiq-blue-300 whitespace-nowrap"
              >
                Count Me In
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-br from-adaptaiq-blue-500 to-adaptaiq-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-adaptaiq-blue-500 to-adaptaiq-blue-600 rounded"></div>
                </div>
              </div>
              <div>
                <div className="text-3xl font-normal text-adaptaiq-gray-400">
                  Adapta<span className="text-adaptaiq-blue-500 font-normal">IQ</span>
                </div>
                <div className="text-xs text-adaptaiq-blue-800 tracking-wide">
                  PERSONALIZED. INTELLIGENT. EFFORTLESS.
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-right">
              <div className="flex items-center justify-end space-x-3 mb-4">
                <svg className="w-5 h-5 text-adaptaiq-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-lg text-adaptaiq-gray-400">hello@adaptaiq.com</span>
              </div>
              <div className="flex items-center justify-end space-x-3">
                <div className="w-10 h-10 bg-adaptaiq-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-adaptaiq-blue-300">in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-adaptaiq-gray-400">
              <p>© 2025 AdaptaIQ. All Rights Reserved.</p>
              <p>Privacy Policy and Terms Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
