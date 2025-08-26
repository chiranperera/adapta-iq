import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
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
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc5814c5d11f14bad955f8b51830da316%2F3fef1a08a8ea447d91f73194ffdcce42?format=webp&width=800"
                alt="AdaptaIQ Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-adaptaiq-blue-500 font-bold text-sm hover:text-adaptaiq-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-adaptaiq-gray-500 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors"
              >
                About
              </Link>
              <Link
                to="/why"
                className="text-adaptaiq-gray-600 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors"
              >
                Why
              </Link>
              <Link
                to="/early-access"
                className="text-adaptaiq-gray-500 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors"
              >
                Early Access
              </Link>
              <Button className="bg-adaptaiq-blue-500 hover:bg-adaptaiq-blue-600 text-adaptaiq-blue-100 font-bold px-6 py-2 rounded-full border border-adaptaiq-blue-300">
                Join Waitlist
                <svg className="ml-2 w-4 h-3" viewBox="0 0 32 17" fill="none">
                  <path
                    d="M24 8.5L32 0.5L24 16.5M0 8.5H31"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen hero-gradient dot-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/95 to-blue-900/90"></div>
        <div
          className="relative z-10 h-full flex items-center justify-center"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fc5814c5d11f14bad955f8b51830da316%2Fa32ebde21fec4c1dab6e666e3b2c2637)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-normal text-white mb-6 leading-tight">
              The Future of Learn
              <span className="text-adaptaiq-blue-200">ing</span>
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Adapts to You.
            </h2>
            <p className="text-xl md:text-2xl text-adaptaiq-blue-200 font-bold mb-12 max-w-4xl mx-auto leading-relaxed">
              AdaptaIQ builds intelligence that learns you, evolving with every
              <br />
              person, every interaction, every goal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-8">
              <Button className="bg-adaptaiq-blue-500 hover:bg-adaptaiq-blue-600 text-adaptaiq-blue-100 font-bold px-8 py-6 rounded-full text-lg border border-adaptaiq-blue-400">
                Join Early Access
                <svg className="ml-3 w-5 h-4" viewBox="0 0 32 17" fill="none">
                  <path
                    d="M24 8.5L32 0.5L24 16.5M0 8.5H31"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </Button>
              <Button
                variant="outline"
                className="bg-black/60 border-adaptaiq-blue-800 text-adaptaiq-blue-400 hover:bg-black/80 font-bold px-8 py-6 rounded-full text-lg"
              >
                Learn More
                <svg className="ml-3 w-5 h-4" viewBox="0 0 32 17" fill="none">
                  <path
                    d="M24 8.5L32 0.5L24 16.5M0 8.5H31"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
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
                  Learning has always been one size fits all. We are changing
                  that.
                </p>
                <p className="text-lg text-adaptaiq-gray-600 leading-relaxed">
                  AdaptaIQ is an adaptive intelligence engine that understands
                  the person behind the screen. By building a living profile
                  through onboarding and interaction, it delivers experiences
                  shaped to the way each human learns best.
                </p>
              </div>
            </div>

            {/* Right Content - AdaptaIQ Visual */}
            <div className="relative flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc5814c5d11f14bad955f8b51830da316%2F8ade0503a2594401ad4780c210b4bfc2?format=webp&width=800"
                alt="AdaptaIQ Intelligence Visualization"
                className="w-full max-w-md h-auto mx-auto rounded-full shadow-lg"
                style={{ backgroundColor: 'transparent', mixBlendMode: 'multiply' }}
              />
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <div className="relative bg-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="absolute -top-4 -left-4 text-6xl text-adaptaiq-blue-400">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                </svg>
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold text-adaptaiq-gray-800 italic">
                "Because{" "}
                <span className="text-adaptaiq-blue-500">intelligence</span>{" "}
                should adapt to us, not the other way around."
              </blockquote>
              <div className="absolute -bottom-4 -right-4 text-6xl text-adaptaiq-gray-400 rotate-180">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14,17H17L19,13V7H13V13H8L6,17Z" />
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
            <div className="bg-white border border-gray-200 rounded-2xl p-8 relative group hover:shadow-xl hover:border-adaptaiq-blue-300 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-6 right-6 w-6 h-6 border-2 border-gray-200 rounded-full"></div>
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc5814c5d11f14bad955f8b51830da316%2F7d729f6a2c9a4aeb8b2feb62f15454b1?format=webp&width=800"
                    alt="Learns You Icon"
                    className="w-full h-full object-contain"
                  />
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
            <div className="bg-white border border-gray-200 rounded-2xl p-8 relative group hover:shadow-xl hover:border-adaptaiq-blue-300 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc5814c5d11f14bad955f8b51830da316%2F6ebe89430f354839a1d2f5dacc17c9f5?format=webp&width=800"
                    alt="Redefines Learning Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-adaptaiq-blue-500 mb-4 text-center">
                Redefines Learning
              </h4>
              <p className="text-lg text-adaptaiq-gray-600 text-center leading-relaxed">
                Moves beyond static content to create truly personal
                experiences.
              </p>
            </div>

            {/* Built to Evolve Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 relative group hover:shadow-xl hover:border-adaptaiq-blue-300 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-6 h-6 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 border border-gray-300 rounded"></div>
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc5814c5d11f14bad955f8b51830da316%2Fd68cecd24ea44aa0aa57b6cb7a646552?format=webp&width=800"
                    alt="Built to Evolve Icon"
                    className="w-full h-full object-contain"
                  />
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
              Our{" "}
              <span className="text-adaptaiq-gray-400 font-bold">Vision</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-adaptaiq-blue-400 to-transparent mx-auto"></div>
          </div>

          <p className="text-2xl md:text-3xl text-adaptaiq-blue-200 mb-8 leading-relaxed">
            We are testing the limits of what AI can do for human learning.
          </p>

          <p className="text-2xl md:text-3xl text-adaptaiq-blue-200 mb-12 leading-relaxed max-w-4xl mx-auto">
            AdaptaIQ is more than technology. It is a shift toward intelligence
            that grows with people, unlocking potential we have never seen
            before.
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
            <div className="flex items-center mb-8 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc5814c5d11f14bad955f8b51830da316%2F3fef1a08a8ea447d91f73194ffdcce42?format=webp&width=800"
                alt="AdaptaIQ Logo"
                className="h-16 w-auto filter brightness-200"
              />
            </div>

            {/* Contact Info */}
            <div className="text-right">
              <div className="flex items-center justify-end space-x-3 mb-4">
                <svg
                  className="w-5 h-5 text-adaptaiq-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-lg text-adaptaiq-gray-400">
                  hello@adaptaiq.com
                </span>
              </div>
              <div className="flex items-center justify-end space-x-3">
                <div className="w-10 h-10 bg-adaptaiq-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-adaptaiq-blue-300">
                    in
                  </span>
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
