import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { IconBrandGithub } from "@tabler/icons-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  img: string[]; // Array of image URLs
  repo: string; // URL for the repository
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  img,
  repo,
}) => {
  return (
    <>
      <CardHeader className="pt-4 pb-2 px-5">
        <div className="flex justify-between items-center">
          <div className="pr-12"> {/* Add space for the button */}
            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {title}
            </CardTitle>
          </div>
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:block"
          >
            <a href={repo} target="_blank" rel="noopener noreferrer" className="transition-all">
              <IconBrandGithub size={24} className="text-white hover:text-blue-400" />
            </a>
          </motion.div>
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="h-auto w-full flex flex-col gap-4">
          {img && img.length > 0 ? (
            <div className="relative rounded-lg overflow-hidden border border-gray-700 shadow-xl">
              <Swiper
                slidesPerView={1}
                navigation={true}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                effect="fade"
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                className="rounded-lg h-auto w-full cursor-pointer"
              >
                {img.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[350px] md:h-[400px] lg:h-[450px] border-b border-gray-700">
                      <Image
                        src={src}
                        className="w-full h-full object-contain bg-black/80"
                        width={900}
                        height={600}
                        alt={`${title} - Screenshot ${index + 1}`}
                        priority={index === 0}
                      />
                      <div className="absolute bottom-0 right-0 bg-black/70 px-3 py-1 text-xs text-gray-300 rounded-tl-md">
                        {index + 1}/{img.length}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="h-48 flex items-center justify-center bg-gray-900/50 rounded-lg border border-gray-700">
              <p className="text-gray-400 italic">No screenshots available</p>
            </div>
          )}
          
          <div className="prose prose-invert max-w-none">
            <div className="text-base text-gray-200 leading-relaxed">
              {/* Only show the first two sentences */}
              {description.split('.').slice(0, 2).join('.')}
              {description.split('.').length > 2 ? '...' : '.'}
            </div>
          </div>
        </div>
      </CardContent>
    </>
  );
};
