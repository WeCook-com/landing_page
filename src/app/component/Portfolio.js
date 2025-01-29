import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Link from 'next/link';
import Image from 'next/image';
import * as Unicons from '@iconscout/react-unicons';

const images = [
    '/images/portfolio/1.jpg',
    '/images/portfolio/2.jpg',
    '/images/portfolio/3.jpg',
    '/images/portfolio/4.jpg',
    '/images/portfolio/5.jpg',
    '/images/portfolio/6.jpg',
    '/images/portfolio/7.jpg',
    '/images/portfolio/8.jpg',
];

/**
 * Portfolio section
 */
export default function Portfolio() {
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);

    const handleCLick = index => {
        setActiveIndex(index);
        setOpen(true);
    };

    const projectList = [
        {
            image: '/images/portfolio/1.jpg',
            title: 'Mockup Collection',
            subtext: 'Branding',
        },
        {
            image: '/images/portfolio/2.jpg',
            title: 'Mockup Collection',
            subtext: 'Designing',
        },
        {
            image: '/images/portfolio/3.jpg',
            title: 'Abstract images',
            subtext: 'Abstract',
        },
        {
            image: '/images/portfolio/4.jpg',
            title: 'Yellow bg with Books',
            subtext: 'Books',
        },
        {
            image: '/images/portfolio/5.jpg',
            title: 'Company V-card',
            subtext: 'V-card',
        },
        {
            image: '/images/portfolio/6.jpg',
            title: 'Mockup box with paints',
            subtext: 'Photography',
        },
        {
            image: '/images/portfolio/7.jpg',
            title: 'Coffee cup',
            subtext: 'Cups',
        },
        {
            image: '/images/portfolio/8.jpg',
            title: 'Pen and article',
            subtext: 'Article',
        },
    ];
    return (
        <>
            {/* Project Start  */}
            <section
                className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 active"
                id="portfolio"
            >
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-[#3b82f6] text-base font-medium uppercase mb-2">
                            Portfolio
                        </h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white ">
                            Our Works &amp; Projects
                        </h3>

                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
                            Launch your campaign and benefit from our expertise on designing and
                            managing conversion centered Tailwind CSS html page.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                        {projectList.map((item, index) => (
                            <div
                                className="relative rounded-md shadow-sm overflow-hidden group"
                                key={index}
                            >
                                <Image
                                    src={item.image}
                                    className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                                    alt="workimage"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                />
                                <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                                <div className="content">
                                    <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                                        <Link
                                            href="#"
                                            onClick={() => handleCLick(index)}
                                            className="btn bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white btn-icon rounded-full lightbox"
                                        >
                                            <Unicons.UilCamera width="17px" />
                                        </Link>
                                    </div>
                                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                                        <Link
                                            href="#"
                                            className="h6 text-md font-medium text-white hover:text-[#3b82f6] transition duration-500"
                                        >
                                            {item.title}
                                        </Link>
                                        <p className="text-slate-100 tag mb-0">{item.subtext}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setOpen(false)}
                            onMovePrevRequest={() =>
                                setActiveIndex((photoIndex + images.length - 1) % images.length)
                            }
                            onMoveNextRequest={() =>
                                setActiveIndex((photoIndex + 1) % images.length)
                            }
                        />
                    )}
                </div>
            </section>
            {/* Project End  */}
            <section
                style={{ backgroundImage: `url(${'/images/bg/cta.png'})` }}
                className="py-24 w-full table relative bg-center bg-cover"
            >
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl text-white font-medium">
                            Ready to start your next web project now?
                        </h3>

                        <p className="text-white opacity-50 max-w-xl mx-auto">
                            Launch your campaign and benefit from our expertise on designing and
                            managing conversion centered Tailwind CSS html page.
                        </p>

                        <div className="relative mt-10">
                            <Link
                                href="#"
                                className="btn bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md"
                            >
                                Get Started !
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
