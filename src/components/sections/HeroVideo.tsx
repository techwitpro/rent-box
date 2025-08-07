"use client"

import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Button from '../ui/Button';
import Container from '../ui/Container';

const HeroVideo: React.FC = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
    };

    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    {/* Top Content Area */}
                    <div className="mb-12">
                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                            Simplify Every Single Move
                        </h1>

                        {/* Tagline/Description */}
                        <p className="text-lg md:text-xl text-black/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Better than cardboard—our bins are stronger, cleaner, and ready to move when you are
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Button
                                variant="outline"
                                className='w-2/3'
                                size="lg"
                                icon={HiArrowRight}
                                iconPosition="right"
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Rent Now
                            </Button>
                        </div>
                    </div>

                    {/* Bottom Video Player Section */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                            {/* Video Container */}
                            <div className="relative aspect-video bg-gray-200">
                                {isVideoPlaying ? (
                                    // YouTube Video Embed (replace with your video ID)
                                    <iframe
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
                                        title="Moving bins in action"
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    // Video Thumbnail with Play Button
                                    <div className="relative w-full h-full">
                                        {/* Video Thumbnail */}
                                        <div className="w-full h-full bg-gradient-to-br from-green/50 to-light-green/50 flex items-center justify-center">
                                            {/* Placeholder for video thumbnail - you can replace this with an actual image */}
                                            <div className="text-center">
                                                <div className="text-6xl mb-4"></div>
                                                <p className="text-black/60 text-sm mt-36">Video: People using our green moving bins</p>
                                            </div>
                                        </div>

                                        {/* Play Button */}
                                        <button
                                            onClick={handlePlayVideo}
                                            className="absolute inset-0 flex items-center justify-center group"
                                        >
                                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <div className="w-0 h-0 border-l-[24px] border-l-green-600 border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent ml-1"></div>
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroVideo; 