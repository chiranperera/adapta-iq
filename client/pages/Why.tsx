import { Link } from "react-router-dom";

export default function Why() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header placeholder */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc5814c5d11f14bad955f8b51830da316%2F3fef1a08a8ea447d91f73194ffdcce42?format=webp&width=800"
                alt="AdaptaIQ Logo"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-adaptaiq-gray-600 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-adaptaiq-gray-600 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors">
                About
              </Link>
              <Link to="/why" className="text-adaptaiq-blue-500 font-bold text-sm">
                Why
              </Link>
              <Link to="/early-access" className="text-adaptaiq-gray-500 font-bold text-sm hover:text-adaptaiq-blue-500 transition-colors">
                Early Access
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Placeholder Content */}
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-adaptaiq-gray-900 mb-8">Why AdaptaIQ?</h1>
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
