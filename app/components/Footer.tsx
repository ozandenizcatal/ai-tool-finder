export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="/about" className="hover:text-blue-600 transition-colors">
              About
            </a>
            <span className="text-gray-300">•</span>
            <a href="/how-it-works" className="hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <span className="text-gray-300">•</span>
            <a href="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy
            </a>
            <span className="text-gray-300">•</span>
            <a href="/terms" className="hover:text-blue-600 transition-colors">
              Terms
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2026 AI Tool Finder
          </p>
        </div>
      </div>
    </footer>
  );
}
