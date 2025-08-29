'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

const coverPhoto: string[] = [
    "/CoverPhotos/IMG1.jpeg",
    "/CoverPhotos/IMG2.jpg",
];

const coverText: string[] = [
    "Nafis with a jacket - suited up and ready to code the future! 💼✨",
    "Nafis laughing out loud - because debugging finally worked! 😂🚀",
];

const HeroSection = () => {
    const [coverPhotoId, setCoverPhotoId] = useState<number>(1);
    
    return (
        <div id="hero" className="flex flex-col md:flex-row w-full h-[500px] bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20">
            <div className="hidden md:flex justify-center items-center h-full w-[40%] px-8">
                <p className="text-4xl md:text-5xl text-white w-[85%] h-[85%] flex items-center" style={{fontFamily: 'var(--font-fredericka)'}}>
                    {coverText[coverPhotoId]}
                </p>
            </div>

            <div className="relative h-[80%] md:h-full w-full md:w-[60%] overflow-hidden">
                <Image 
                    className="h-full w-full object-cover object-top" 
                    src={coverPhoto[coverPhotoId]} 
                    alt="the cover photo" 
                    height={500} 
                    width={500}
                    priority
                />
            </div>
        
            <div className="flex justify-center items-center md:hidden w-full h-[25%] bg-black/50">
                <p className="text-2xl md:text-3xl text-white w-[85%] h-[85%] flex items-center" style={{fontFamily: 'var(--font-fredericka)'}}>
                    {coverText[coverPhotoId]}
                </p>
            </div>
        </div>
    );
}

export default HeroSection;