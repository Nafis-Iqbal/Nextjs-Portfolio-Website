'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

const coverPhoto: string[] = [
    "/CoverPhotos/IMG1.jpeg",
    "/CoverPhotos/IMG2.jpg",
];

const coverText: string[] = [
    "Nafis with a jacket.",
    "Nafis laughing out loud.",
];

const HeroSection = () => {
    const [coverPhotoId, setCoverPhotoId] = useState<number>(1);
    
    return (
        <div id="experience" className="flex flex-col md:flex-row w-full h-[500px] bg-gray-200 bg-opacity-30">
            <div className="hidden md:flex justify-center items-center h-full w-[40%] bg-opacity-30">
                <p className="text-5xl w-[85%] h-[85%]">{coverText[coverPhotoId]}</p>
            </div>

            <Image className="h-[80%] md:h-full w-full md:w-[60%] object-contain bg-gray-100 bg-opacity-30" src={coverPhoto[coverPhotoId]} alt="the cover photo" height={500} width={500}/>   
        
            <div className="flex justify-center items-center md:hidden w-full h-[25%] bg-opacity-30">
                <p className="text-3xl w-[85%] h-[85%]">{coverText[coverPhotoId]}</p>
            </div>
        </div>
    );
}

export default HeroSection;