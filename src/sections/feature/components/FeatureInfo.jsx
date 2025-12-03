import React from "react";

/**
 * FeatureInfo Component
 * Displays feature information with icon, title, and description
 */
const FeatureInfo = React.memo(
  ({ icon, title, description, align = "left" }) => {
    return (
      <div
        className={`flex flex-col gap-5 w-full lg:w-2xl ${
          align === "left"
            ? "items-center lg:items-start text-center lg:text-left"
            : "items-center lg:items-end text-center lg:text-right"
        }`}
      >
        {/* Icon */}
        <div className="text-white">{icon}</div>

        {/* Title */}
        <h3 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/70 font-sans leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    );
  }
);

FeatureInfo.displayName = "FeatureInfo";

export default FeatureInfo;
