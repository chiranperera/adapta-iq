import { Link } from "react-router-dom";

export default function EarlyAccess() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header placeholder */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
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
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-adaptaiq-gray-600 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-adaptaiq-gray-600 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors">
                About
              </Link>
              <Link to="/why" className="text-adaptaiq-gray-600 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors">
                Why
              </Link>
              <Link to="/early-access" className="text-adaptaiq-blue-500 font-bold text-sm">
                Early Access
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Placeholder Content */}
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-adaptaiq-gray-900 mb-8">Early Access Program</h1>
        <div className="bg-gray-50 rounded-lg p-12 border-2 border-dashed border-gray-200">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Under Construction</h2>
          <p className="text-gray-500 mb-6">
            This page is currently being developed. Please continue the conversation to have me build out this page content.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-adaptaiq-blue-500 text-white rounded-lg hover:bg-adaptaiq-blue-600 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
