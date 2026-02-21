interface ToolCardProps {
  title: string;
  description: string;
  pricing: string;
  rating: number;
  reviewCount: string;
  href: string;
  category: string;
}

export default function ToolCard({
  title,
  description,
  pricing,
  rating,
  reviewCount,
  href,
  category,
}: ToolCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300 transition-all duration-200 flex flex-col h-full">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-flex px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg uppercase tracking-wide">
          {category}
        </span>
      </div>

      {/* Title */}
      <h4 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h4>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Pricing */}
      <div className="mb-3">
        <p className="text-sm font-semibold text-gray-900">{pricing}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating) ? 'text-amber-400' : 'text-gray-200'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm text-gray-500 font-medium">
          {rating} <span className="text-gray-400">({reviewCount})</span>
        </span>
      </div>

      {/* CTA Button */}
      <a 
        href={href} 
        className="inline-flex items-center justify-center w-full px-4 h-11 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors group"
      >
        View Details
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
