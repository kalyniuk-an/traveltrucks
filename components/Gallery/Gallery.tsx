'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/thumbs';
import type { CamperImage } from '@/types/camper';
import css from './Gallery.module.css';

interface GalleryProps {
  images: CamperImage[];
  alt: string;
}

export default function Gallery({ images, alt }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.gallery}>
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        spaceBetween={16}
        className={css.slider}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id} className={css.slide}>
            <Image
              src={image.original}
              alt={`${alt}, photo ${index + 1}`}
              fill
              sizes="638px"
              preload={index === 0}
              className={css.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={32}
        watchSlidesProgress
        className={css.slider}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className={css.thumb}>
            <Image src={image.thumb} alt="" fill sizes="136px" className={css.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}