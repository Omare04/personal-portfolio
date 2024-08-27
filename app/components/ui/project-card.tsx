import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IconCircleChevronRight } from "@tabler/icons-react";
import "swiper/css";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

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
    <Card className="w-[900px] bg-black border-gray-600">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <SocialIcon url={repo} className="h-9 w-9" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-auto w-full gap-4 flex flex-col">
          <Swiper
            slidesPerView={1}
            navigation
            modules={[Navigation]}
            className="rounded-lg h-auto w-full cursor-pointer"
          >
            {img &&
              img.length > 0 &&
              img.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[460px]">
                    <Image
                      src={src}
                      className="w-full h-full object-cover rounded-lg"
                      width={460}
                      height={460}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="flex flex-col space-y-1.5">{description}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};
