'use client'
import React, { useRef } from 'react'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import image1 from '../../../public/homepage/rightChoice/rightChoice1.webp'
import image2 from '../../../public/homepage/rightChoice/rightChoice2.webp'
import image3 from '../../../public/homepage/rightChoice/rightChoice3.webp'
import image4 from '../../../public/homepage/rightChoice/rightChoice4.webp'
import image5 from '../../../public/homepage/rightChoice/rightChoice5.webp'
import image6 from '../../../public/homepage/rightChoice/rightChoice6.webp'
import { StaticImageData } from 'next/image'

const images = [
    {
        id: 1,
        url: image1,
        title: 'image 1'
    },
    {
        id: 2,
        url: image2,
        title: 'image 2'
    },
    {
        id: 3,
        url: image3,
        title: 'image 3'
    },
    {
        id: 4,
        url: image4,
        title: 'image 4'
    },
    {
        id: 5,
        url: image5,
        title: 'image 5'
    },
    {
        id: 6,
        url: image6,
        title: 'image 6'
    },
];

export default function ParallaxGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <div ref={containerRef} className="relative h-[400vh] md:mx-20">
            <div className="sticky top-0 h-screen flex">
                {/* Fixed content on the left */}
                <div className="sticky top-0 h-screen flex flex-col lg:flex-row">
                    <div className="w-full lg:w-[60%] p-6 lg:h-full flex flex-col justify-center lg:px-12">
                        <h2 className="text-[24px] leading-8 md:text-[60px] md:leading-[64px] font-base">
                            What makes us the <span className="text-[#e42217] italic font-bold">right choice</span> for you?
                        </h2>
                        <p className="text-[16px] leading-6 md:text-[22px] md:leading-[25.78px] text-[#616161] mt-4 md:mt-6 md:w-[80%]">
                            We don&apos;t just source good candidates and throw them over the fence. We build recruitment structures that fuel growth and long-term success.
                        </p>
                        <div className='w-[134px] h-[33.42px] md:w-[150.38px] md:h-[45.42px] mt-10 md:mt-20'>
                            <CustomButton cta="Contact Us" href="contact-us" asChild={true} />
                        </div>
                    </div>

                    {/* Stacking images on the right */}
                    <div className="w-full lg:w-2/3 h-[70vh] lg:h-full relative">
                        {images.map((image, index) => (
                            <StackingImage
                                key={image.id}
                                {...image}
                                index={index}
                                progress={scrollYProgress}
                                total={images.length}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface StackingImageProps {
    url: StaticImageData;
    title: string;
    index: number;
    progress: MotionValue<number>;
    total: number;
}

function StackingImage({ url, title, index, progress, total }: StackingImageProps) {
    const progressPerImage = 1 / total;
    const imageStart = index * progressPerImage;
    const imageEnd = imageStart + progressPerImage;

    const opacity = useTransform(
        progress,
        [imageStart, imageStart + 0.1, imageEnd - 0.1, imageEnd],
        [0, 1, 1, 1]
    );

    const scale = useTransform(
        progress,
        [imageStart, imageStart + 0.1, imageEnd - 0.1, imageEnd],
        [1.2, 1, 1, 1]
    );

    const translateY = useTransform(
        progress,
        [imageStart, imageStart + 0.1, imageEnd - 0.1, imageEnd],
        [100, 0, 0, 0]
    );

    return (
        <motion.div
            style={{
                opacity,
                scale,
                translateY,
            }}
            className="absolute inset-0 flex items-center justify-end md:mt-24 p-12"
        >
            <div className="relative w-full h-full max-w-3xl mx-auto">
                <Image
                    src={url}
                    alt={title}
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 1280px) 67vw, 50vw"
                    width={645.6} // Set the desired width
                    height={359.2} // Set the desired height
                    priority={index === 0}
                />
            </div>
        </motion.div>
    );
}