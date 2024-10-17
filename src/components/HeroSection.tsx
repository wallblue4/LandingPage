import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://www.youtube.com/embed/qC0vDKVPCrw?autoplay=1&mute=1&controls=0&loop=1&playlist=qC0vDKVPCrw&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Transform Your Business with Smart AI
        </h1>
        <p className="text-xl mb-8">
          Unlock the power of artificial intelligence to drive innovation and
          growth
        </p>
        <a href="#services" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
