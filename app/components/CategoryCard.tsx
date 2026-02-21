interface CategoryCardProps {
  icon: string;
  title: string;
  toolCount: number;
  href: string;
}

export default function CategoryCard({ icon, title, toolCount, href }: CategoryCardProps) {
  return (
    <a href={href} className="card block text-center h-40 flex flex-col items-center justify-center group">
      {/* Icon */}
      <div className="text-5xl mb-4 transition-transform group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-gray-900 mb-2">
        {title}
      </h4>

      {/* Tool Count */}
      <p className="body-small text-gray-500">
        {toolCount} tools
      </p>
    </a>
  );
}
