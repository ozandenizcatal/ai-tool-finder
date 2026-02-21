export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Find the Perfect AI Tool in 30 Minutes
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Not 3-5 Hours. Curated recommendations, transparent pricing, and quick-start guides for every tool.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <svg 
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
              <input
                type="text"
                placeholder="Search for a task (e.g., create presentation)"
                className="w-full h-14 pl-14 pr-28 text-base bg-white border border-gray-200 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 h-10 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Browse Categories Link */}
          <p className="text-sm text-gray-500">
            or{' '}
            <a href="#categories" className="text-gray-900 font-medium hover:underline">
              browse by category →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
