import React from "react";

const HeroSection = ({ title, backgroundImage }) => {
  return (
    <div className="relative h-[250px] overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="font-heading text-white text-4xl lg:text-5xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
