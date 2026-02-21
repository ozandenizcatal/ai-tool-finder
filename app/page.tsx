import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import ToolCard from '@/components/ToolCard';
import Footer from '@/components/Footer';

export default function Home() {
  const categories = [
    { icon: '📊', title: 'Presentation', toolCount: 12, href: '/category/presentation' },
    { icon: '✍️', title: 'Writing', toolCount: 18, href: '/category/writing' },
    { icon: '🎨', title: 'Design', toolCount: 15, href: '/category/design' },
    { icon: '💻', title: 'Code', toolCount: 10, href: '/category/code' },
    { icon: '🎬', title: 'Video', toolCount: 8, href: '/category/video' },
    { icon: '📈', title: 'Data', toolCount: 14, href: '/category/data' },
    { icon: '🗣️', title: 'Voice', toolCount: 6, href: '/category/voice' },
    { icon: '🖼️', title: 'Image', toolCount: 20, href: '/category/image' },
  ];

  const featuredTools = [
    {
      logo: '🤖',
      title: 'ChatGPT',
      description: 'AI writing & conversation assistant',
      pricing: 'Free - $20/mo',
      rating: 4.8,
      reviewCount: '2.4K',
      href: '/tools/chatgpt',
    },
    {
      logo: '🎨',
      title: 'Midjourney',
      description: 'AI image generation from text',
      pricing: '$10 - $60/mo',
      rating: 4.9,
      reviewCount: '1.8K',
      href: '/tools/midjourney',
    },
    {
      logo: '✨',
      title: 'Canva',
      description: 'Design made simple',
      pricing: 'Free - $13/mo',
      rating: 4.7,
      reviewCount: '3.2K',
      href: '/tools/canva',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Categories Section */}
        <section id="categories" className="py-16 md:py-20">
          <div className="container">
            <h2 className="text-center mb-8">Popular Categories</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {categories.map((category) => (
                <CategoryCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-center mb-8">Featured Tools</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>

            <div className="text-center">
              <a href="/tools" className="btn btn-secondary">
                View All Tools →
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="text-center mb-12">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="text-center">
                <div className="text-5xl mb-4">1️⃣</div>
                <h4 className="mb-3">Search Your Task</h4>
                <p className="body-small text-gray-600">
                  Tell us what you need to do
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="text-5xl mb-4">2️⃣</div>
                <h4 className="mb-3">Compare Options</h4>
                <p className="body-small text-gray-600">
                  See 2-3 curated tools that fit your needs
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="text-5xl mb-4">3️⃣</div>
                <h4 className="mb-3">Start in 15 Min</h4>
                <p className="body-small text-gray-600">
                  Follow our 15-minute quick-start guide
                </p>
              </div>
            </div>

            <p className="text-center mt-12 font-medium text-blue-600">
              30 minutes vs 3-5 hours
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
