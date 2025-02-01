/* eslint-disable react/no-unescaped-entities */
'use client'; // This is a client component 👈🏽
import React from 'react';
import dynamic from 'next/dynamic';
const TinySlider = dynamic(() => import('tiny-slider-react'), { ssr: false });
import Image from 'next/image';

import 'tiny-slider/dist/tiny-slider.css';

const settings = {
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    speed: 400,
    controlsText: [
        '<i class="mdi mdi-chevron-left "></i>',
        '<i class="mdi mdi-chevron-right"></i>',
    ],
    gutter: 0,
    responsive: {
        768: {
            items: 2,
        },
    },
};
export default function Review() {
    const review = [
        {
            id: '1',
            profile: '/images/client/01.jpg',
            name: 'Alex T.',
            designation: 'Restaurant Manager',
            description:
                '<strong className="font-medium">KoaCook</strong> has transformed how we manage our restaurant operations. The tools are intuitive and save us hours every day!',
        },
        {
            id: '2',
            profile: '/images/client/02.jpg',
            name: 'Maria L.',
            designation: 'Café Owner',
            description:
                'Finally, a platform that understands the needs of restaurant owners. We can’t wait for the full release!',
        },
        {
            id: '3',
            profile: '/images/client/04.jpg',
            name: 'John D.',
            designation: 'Head Chef',
            description:
                '<strong className="font-medium">KoaCook</strong> has revolutionized our workflow. It\'s user-friendly, efficient, and has made managing our restaurant so much easier!',
        },
        {
            id: '4',
            profile: '/images/client/03.jpg',
            name: 'Sarah M.',
            designation: 'Restaurant Group Owner',
            description:
                'As a multi-location restaurant owner, <strong className="font-medium">KoaCook</strong> has helped us streamline everything from inventory to staff scheduling. Highly recommended!',
        },
    ];

    return (
        <>
            {/* Review Start  */}
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="review">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-[#3b82f6] text-base font-medium uppercase mb-2">
                            Review
                        </h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                            What Our Early Adopters Say
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 mt-8 relative">
                        <div className="tiny-two-item">
                            <TinySlider settings={settings}>
                                {review.map((el, index) => (
                                    <div className="tiny-slide" key={index}>
                                        <div className="lg:flex h-full p-6 lg:p-0 relative rounded-md shadow shadow-slate-200 dark:shadow-slate-700 bg-white dark:bg-slate-900 overflow-hidden m-2">
                                            <Image
                                                className="w-24 h-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto"
                                                src={el.profile}
                                                alt=""
                                                width="384"
                                                height="512"
                                            />
                                            <div className="pt-6 lg:p-6 text-center lg:text-left space-y-4">
                                                <p
                                                    className="text-base text-slate-500 dark:text-slate-200"
                                                    dangerouslySetInnerHTML={{
                                                        __html: `"${el.description}"`,
                                                    }}
                                                ></p>

                                                <div>
                                                    <span className="text-[#3b82f6] block mb-1">
                                                        {el.name}
                                                    </span>
                                                    <span className="text-slate-400 text-sm dark:text-white/60 block">
                                                        {el.designation}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
