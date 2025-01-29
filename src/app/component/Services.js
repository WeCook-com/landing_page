import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Unicons from '@iconscout/react-unicons';

export default function Services() {
    const services = [
        {
            title: 'Order Management',
            Icon: Unicons.UilClipboardAlt,
            subtext:
                'Simplify the way you track, fulfill, and analyze customer orders with real-time updates and smart analytics.',
        },
        {
            title: 'Table Reservations',
            Icon: Unicons.UilCalendarAlt,
            subtext:
                'Manage table bookings effortlessly and provide a seamless dining experience for your guests.',
        },
        {
            title: 'Inventory Tracking',
            Icon: Unicons.UilBox,
            subtext:
                'Never run out of essential ingredients with our intuitive inventory management system.',
        },
        {
            title: 'Staff Scheduling',
            Icon: Unicons.UilUsersAlt,
            subtext: 'Organize shifts and track employee performance with ease.',
        },
        {
            title: 'Customer Insights',
            Icon: Unicons.UilChart,
            subtext:
                'Understand customer preferences and build loyalty with personalized service and promotions.',
        },
        {
            title: 'Multi-Location Support',
            Icon: Unicons.UilBuilding,
            subtext: 'Own multiple restaurants? Manage all your locations from a single dashboard.',
        },
    ];

    return (
        <>
            {/* Start */}
            <section id="features" className="relative md:py-24 py-16">
                <div className="container lg mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
                        <div>
                            <h6 className="text-[#3b82f6] text-base font-medium uppercase mb-2">
                                What We Do ?
                            </h6>
                            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white md:mb-0">
                                Perfect Solution For Your <br /> Restaurants, Café
                            </h3>
                        </div>

                        <div>
                            <p className="text-slate-400 dark:text-slate-300 max-w-xl">
                                <strong className="font-medium">KoaCook</strong> offers a complete
                                set of tools for modern restaurants, helping you streamline
                                operations, optimize workflows, and enhance customer experiences—all
                                in one platform.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                        {services.map((item, key) => {
                            const Icon = item.Icon;
                            return (
                                <div
                                    key={key}
                                    className={`features p-6 ${
                                        key % 2 === 0
                                            ? 'hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800'
                                            : 'shadow-xl shadow-slate-100 dark:shadow-slate-800'
                                    } transition duration-500 rounded-3xl mt-8`}
                                >
                                    <div className="w-20 h-20 bg-[#3b82f6]/5 text-[#3b82f6] rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                                        <Icon width="30px" height="30px" />
                                    </div>

                                    <div className="content mt-7">
                                        <Link
                                            href="#"
                                            className="text-lg hover:text-[#3b82f6] dark:text-white dark:hover:text-[#3b82f6] transition-all duration-500 ease-in-out font-medium"
                                        >
                                            {item.title}
                                        </Link>
                                        <p className="text-slate-400 mt-3">{item.subtext}</p>

                                        <Link
                                            href="#"
                                            className="mt-5 inline-flex  btn btn-link hover:text-[#3b82f6] dark:hover:text-[#3b82f6] after:bg-[#3b82f6] dark:text-white transition duration-500"
                                        >
                                            <span>Read More</span>
                                            <Unicons.UilArrowRight width="16px" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="container md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-[#3b82f6] text-base font-medium uppercase mb-2">
                            Work Process
                        </h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                            All-In-One Platform For Your BnB Business
                        </h3>

                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
                            <strong className="font-medium">KoaCook</strong> simplifies restaurant
                            management with a seamless process: personalized setup, team training,
                            and automation to keep your operations running smoothly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 mt-8">
                        <div className="timeline relative">
                            <div className="timeline-item">
                                <div className="grid sm:grid-cols-2">
                                    <div className="">
                                        <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                                            <Image
                                                src={'/images/svg/design-thinking.svg'}
                                                className="h-64 w-64"
                                                alt=""
                                                width={64}
                                                height={64}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                                            <h5 className="text-lg dark:text-white mb-1 font-medium">
                                                Set Up & Customize
                                            </h5>
                                            <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                                                We begin by fully customizing KoaCook to fit the
                                                unique needs of your restaurant. From
                                                single-location to multi-location setups, we ensure
                                                seamless integration with your existing systems and
                                                tools, preparing your restaurant for success.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item mt-5 pt-4">
                                <div className="grid sm:grid-cols-2">
                                    <div className="md:order-1 order-2">
                                        <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                                            <h5 className="text-lg dark:text-white mb-1 font-medium">
                                                Train & Automate
                                            </h5>
                                            <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                                                Once everything is set up, we provide in-depth
                                                training for your team. Our platform is designed to
                                                be intuitive, and we’ll guide your staff through
                                                managing orders, inventory, scheduling, and more.
                                                We’ll also automate repetitive tasks to save time
                                                and increase efficiency.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:order-2 order-1">
                                        <div className="duration duration-right md:ms-7 relative">
                                            <Image
                                                src={'/images/svg/coding.svg'}
                                                className="h-64 w-64"
                                                alt=""
                                                width={64}
                                                height={64}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item mt-5 pt-4">
                                <div className="grid sm:grid-cols-2">
                                    <div className="mt-4 mt-sm-0">
                                        <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                                            <Image
                                                src={'/images/svg/office-desk.svg'}
                                                className="h-64 w-64"
                                                alt=""
                                                width={64}
                                                height={64}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 mt-sm-0">
                                        <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                                            <h5 className="text-lg dark:text-white mb-1 font-medium">
                                                Monitor & Grow
                                            </h5>
                                            <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                                                With your operations running smoothly, we continue
                                                to support your growth. Our platform provides
                                                real-time analytics and insights to help you monitor
                                                performance, improve customer satisfaction, and
                                                scale your business effectively.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
