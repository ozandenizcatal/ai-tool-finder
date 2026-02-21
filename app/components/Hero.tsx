export default function Hero() {
  return (
    <section className="gradient-bg py-24 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="display text-gray-900 mb-4">
            Find the Perfect AI Tool
            <br />
            in 30 Minutes
          </h1>

          {/* Subheading */}
          <p className="body-large text-gray-500 mb-10">
            Not 3-5 Hours. Curated. Simple. Fast.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <svg 
                className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
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
                placeholder='Search for a task... (e.g., "create slides")'
                className="search-bar w-full pl-14 pr-24"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-primary px-6 h-12">
                Go
              </button>
            </div>
          </div>

          {/* Browse Categories Link */}
          <p className="text-gray-500">
            Or{' '}
            <a href="#categories" className="text-blue-600 hover:text-blue-700 font-medium">
              browse by category ↓
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
