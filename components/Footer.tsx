export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="/how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Terms
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2026 AI Tool Finder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
