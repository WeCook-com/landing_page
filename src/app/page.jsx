import Image from 'next/image';
import Link from 'next/link';

import About from './component/About';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Pricing from './component/Pricing';
import Services from './component/Services';
import Review from './component/Testimonial';

export const metadata = {
    title: 'KoaCook - Simplify Your Restaurant Management',
    description: 'All-in-one powerful platform to manage your restaurant efficiently. 🚀',
    keywords: 'restaurant management, BnB, inventory, reservations',
    alternates: {
        canonical: 'https://koacook.com',
    },
    openGraph: {
        title: 'KoaCook - Simplify, Streamline, Succeed',
        description: 'All-in-one powerful platform to manage your restaurant efficiently. 🚀',
        url: 'https://koacook.com',
        siteName: 'KoaCook',
        images: [
            {
                url: 'https://koacook.com/images/banner.png',
                width: 800,
                height: 500,
                alt: 'KoaCook Banner',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KoaCook - Simplify, Streamline, Succeed',
        description: 'All-in-one powerful platform to manage your restaurant efficiently. 🚀',
        images: ['https://koacook.com/images/banner.png'],
    },
};

function HomePage() {
    return (
        <div>
            <h1 className="opacity-0 fixed -top-screen">KoaCook - Simplify, Streamline, Succeed</h1>
            <section
                className="py-36 md:h-auto md:py-0 flex items-center relative bg-[rgb(59_130_246/0.05)] dark:bg-[rgb(59_130_246/0.1)]"
                id="home"
            >
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-0 md:mt-12 pt-0 md:pt-12">
                        <div className="mt-28">
                            <div>
                                <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">
                                    Simplify Your Restaurant Management
                                </h4>

                                <p className="text-slate-600 dark:text-white/70 opacity-50 mb-0 max-w-2xl text-lg mx-auto">
                                    Effortlessly manage orders, inventory, and staff with an
                                    all-in-one platform designed to streamline your restaurant
                                    operations and boost efficiency. 🚀
                                </p>

                                <div className="relative mt-10">
                                    <Link
                                        href="/#contact"
                                        className="btn bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md"
                                    >
                                        Start Free Trail!
                                    </Link>
                                </div>
                            </div>
                            <Image
                                src="/images/bg/laptop1.png"
                                alt=""
                                width={1200}
                                height={700}
                                className="relative mt-16"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About section */}
            <About />

            {/* Service section */}
            <Services />

            {/* Portfolio section */}
            {/* <Portfolio /> */}

            {/* Review section */}
            <Review />

            {/* Pricing section */}
            <Pricing />

            {/* Blog section */}
            <Blog />

            {/* Contact section */}
            <Contact />
        </div>
    );
}

export default HomePage;
