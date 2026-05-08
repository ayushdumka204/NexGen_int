import { cn } from "../lib/utils.js";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const durations = { fast: "20s", normal: "40s", slow: "80s" };
  const duration = durations[speed] ?? "40s";

  // Duplicate items once for seamless loop (done in JSX, no DOM API needed)
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        // Fade edges
        "[mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]",
        className,
      )}
    >
      <ul
        // inline style only for the two dynamic values (direction + speed)
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationDuration: duration,
        }}
        className={cn(
          "flex w-max gap-6 py-10",
          // keyframe defined in tailwind.config / globals — see note below
          "animate-infinite-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {doubled.map((item, idx) => (
          <li
            key={idx}
            aria-hidden={idx >= items.length} // hide duplicates from screen readers
            className="
              relative w-[300px] md:w-[360px] shrink-0
              rounded-2xl
              border border-[var(--color-border)]
              bg-[var(--color-card)]
              p-6
              shadow-sm
              hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-accent)]
              transition-all duration-300
              group text-black
            "
          >
            <div className="flex flex-col h-full justify-between">
              {/* Quote */}
              <p className=" text-sm md:text-base leading-relaxed font-medium mb-6">
                {item.quote}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                {/* Avatar */}
                <div
                  className="
                    h-10 w-10 rounded-lg shrink-0
                    bg-[var(--color-accent)]/10 text-[var(--color-accent)]
                    flex items-center justify-center font-bold text-sm
                    group-hover:bg-[var(--color-accent)] group-hover:text-white
                    transition-colors duration-300
                  "
                >
                  {item.name.charAt(0)}
                </div>

                {/* Name + Title */}
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold truncate">
                    {item.name}
                  </span>
                  {item.title && (
                    <span className="text-xs truncate">{item.title}</span>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
