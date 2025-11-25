// PartnersBanner.tsx
import { PARTNERS } from "../constants";

export function PartnersBanner() {
  // Duplicate array for seamless loop
  const slide = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-10 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <h4 className="text-center text-sm font-semibold text-gray-500 mb-6">
          Trusted by leading insurers
        </h4>

        {/* Wrapping container */}
        <div className="relative overflow-hidden">
          {/* Track that slides */}
          <div className="flex animate-slide w-max hover:pause">
            {slide.map((p, i) => (
              <a
                key={i}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-2 whitespace-nowrap"
                aria-label={p.name}
              >
                <img
                  src={p.domain}
                  alt={p.name}
                  className="h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition"
                  onError={(e) => {
                    // Fallback if external image fails
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDQwQzMxLjA0NTcgNDAgNDAgMzEuMDQ1NyA0MCAyMEM0MCA4Ljk1NDMgMzEuMDQ1NyAwIDIwIDBTMCA4Ljk1NDMgMCAyMEMwIDMxLjA0NTcgOC45NTQzIDQwIDIwIDQwWiIgZmlsbD0iI0Q0QUYzNyIvPgo8L3N2Zz4K";
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}