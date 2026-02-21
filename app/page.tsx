import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ToolCard from '../components/ToolCard';
import Footer from '../components/Footer';

export default function Home() {
  const categories = [
    { title: 'Presentation', toolCount: 12, href: '/category/presentation', iconName: 'presentation' },
    { title: 'Writing', toolCount: 18, href: '/category/writing', iconName: 'writing' },
    { title: 'Design', toolCount: 15, href: '/category/design', iconName: 'design' },
    { title: 'Code', toolCount: 10, href: '/category/code', iconName: 'code' },
    { title: 'Video', toolCount: 8, href: '/category/video', iconName: 'video' },
    { title: 'Data', toolCount: 14, href: '/category/data', iconName: 'data' },
    { title: 'Voice', toolCount: 6, href: '/category/voice', iconName: 'voice' },
    { title: 'Image', toolCount: 20, href: '/category/image', iconName: 'image' },
  ];

  const featuredTools = [
    {
      title: 'ChatGPT',
      description: 'Advanced conversational AI for writing, analysis, and creative tasks. Get instant answers and generate content.',
      pricing: 'Free - $20/mo',
      rating: 4.8,
      reviewCount: '2.4K',
      href: '/tools/chatgpt',
      category: 'Writing',
    },
    {
      title: 'Midjourney',
      description: 'Create stunning, high-quality images from text descriptions. Perfect for concept art and visual exploration.',
      pricing: '$10 - $60/mo',
      rating: 4.9,
      reviewCount: '1.8K',
      href: '/tools/midjourney',
      category: 'Image',
    },
    {
      title: 'Canva AI',
      description: 'Design graphics, presentations, and social media content with AI-powered templates and smart editing.',
      pricing: 'Free - $13/mo',
      rating: 4.7,
      reviewCount: '3.2K',
      href: '/tools/canva',
      category: 'Design',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Categories Section */}
        <section id="categories" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore AI tools organized by your specific needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {categories.map((category) => (
                <CategoryCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Featured Tools
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hand-picked AI tools trusted by thousands of users
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>

            <div className="text-center">
              <a 
                href="/tools" 
                className="inline-flex items-center px-6 h-12 bg-white border border-gray-200 text-gray-900 text-sm font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                View All Tools
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find and start using the right AI tool in just 30 minutes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Search Your Task
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tell us what you need to accomplish. We'll match you with the best AI tools for your specific use case.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Compare Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Review 2-3 curated recommendations with transparent pricing, user ratings, and key features side-by-side.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Start in 15 Min
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Follow our quick-start guides to get up and running. No technical expertise required.
                </p>
              </div>
            </div>

            {/* Time Comparison */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 border border-gray-200 rounded-full">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-semibold text-gray-900">
                  30 minutes vs 3-5 hours of research
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
