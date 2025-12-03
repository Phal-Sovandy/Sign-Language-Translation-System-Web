import React from "react";
import namasteImg from "../../assets/images/signs/namaste.webp";
import cursorImg from "../../assets/images/misc/cursor.webp";
import DatasetCollage from "../../components/visuals/DatasetCollage";
import {
  DemoImage,
  SecurityIcons,
  FloatingTextBoxes,
  FeatureInfo,
} from "./components";
import { features } from "./config/features";

/**
 * FeatureShowcase Component
 * Displays feature highlights with visual demonstrations
 */
export default function FeatureShowcase() {
  return (
    <section className="relative w-screen py-48 bg-brand-background overflow-hidden">
      <div className="flex flex-col gap-72">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`relative z-10 flex flex-col items-center gap-20 px-8 lg:flex-row lg:justify-between lg:items-center lg:gap-95 max-w-[1700px] mx-auto ${
              feature.imageLeft ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Demo Image, Floating Text Boxes, Dataset Collage, or Security Icons */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              {feature.id === 2 ? (
                <FloatingTextBoxes />
              ) : feature.id === 3 ? (
                <DatasetCollage addClassName="relative w-[90vw] lg:w-[40vw] lg:mr-[-200px] max-w-[835px] h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-2xl" />
              ) : feature.id === 4 ? (
                <SecurityIcons />
              ) : (
                <DemoImage cursorImg={cursorImg} namasteImg={namasteImg} />
              )}
            </div>

            {/* Feature Info */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <FeatureInfo
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                align={feature.imageLeft ? "left" : "right"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
