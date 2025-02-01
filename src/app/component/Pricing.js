import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';

export default function Pricing() {
    const pricing = [
        {
            id: 1,
            title: 'Starter',
            price: 0, // Free plan
            user: 1, // One location
            features: [
                'Basic order management',
                'Dashboards and analytics',
                'One location support',
            ],
        },
        {
            id: 2,
            title: 'Pro',
            price: 49, // Monthly price
            user: 10, // One location
            features: [
                'All Starter features',
                'Advanced inventory',
                'Staff scheduling and tracking',
            ],
        },
    ];

    return (
        <>
            {/* Start */}

            <section className="relative md:py-24 py-16" id="pricing">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-[#3b82f6] text-base font-medium uppercase mb-2">
                            Pricing
                        </h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                            Choose A Plan That Fits Your Restaurant’s Needs
                        </h3>

                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
                            Whether you're just starting out or running multiple locations, we have
                            a flexible solution for you. Prices are subject to change, but we’re
                            here to help you find the perfect fit.
                        </p>
                    </div>

                    <div className="flex flex-wrap">
                        {pricing.map((item, key) => (
                            <div className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-3 mt-8" key={key}>
                                <div className="flex flex-col pt-8 pb-8 bg-zinc-50 hover:bg-white dark:bg-gray-800 dark:hover:bg-black rounded-md shadow shadow-slate-200 dark:shadow-slate-700 transition duration-500">
                                    <div className="px-8 pb-8">
                                        <h3 className="mb-6 text-lg md:text-xl font-semibold dark:text-white">
                                            {item.title}
                                        </h3>
                                        <div className="mb-6 dark:text-white/70">
                                            <span className="relative -top-5 text-2xl">$</span>
                                            <span className="text-5xl font-semibold dark:text-white">
                                                {item.price}
                                            </span>
                                            <span className="inline-block ms-1">/ month</span>
                                        </div>
                                        <p className="mb-6 text-slate-430 dark:text-slate-300">
                                            Basic features for up to {item.user} users.
                                        </p>
                                        <Link
                                            href="#contact"
                                            className="btn bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md w-full"
                                        >
                                            Started Now
                                        </Link>
                                    </div>
                                    <div className="border-b border-slate-200 dark:border-slate-700"></div>
                                    <ul className="self-start px-8 pt-8">
                                        {item.features.map((subitem, index) => (
                                            <li
                                                className="flex items-center my-1 text-slate-400 dark:text-slate-300"
                                                key={index}
                                            >
                                                <Unicons.UilCheckCircle
                                                    width="18px"
                                                    className="text-lg text-green-600 me-1"
                                                />
                                                <span>{subitem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-3 mt-8">
                            <div className="flex flex-col pt-8 pb-8 bg-zinc-50 hover:bg-white dark:bg-gray-800 dark:hover:bg-black rounded-md shadow shadow-slate-200 dark:shadow-slate-700 transition duration-500 h-full">
                                <div className="px-8 pb-8">
                                    <h3 className="mb-6 text-lg md:text-xl font-semibold dark:text-white">
                                        Enterprise
                                    </h3>
                                    <div className="mb-6 dark:text-white/70">
                                        <span className="text-5xl font-semibold dark:text-white">
                                            Contact Us
                                        </span>
                                    </div>
                                    <p className="mb-6 text-slate-430 dark:text-slate-300 opacity-0">
                                        c
                                    </p>
                                    <Link
                                        href="#contact"
                                        className="btn bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md w-full"
                                    >
                                        Started Now
                                    </Link>
                                </div>
                                <div className="border-b border-slate-200 dark:border-slate-700"></div>
                                <ul className="self-start px-8 pt-8">
                                    <li className="flex items-center my-1 text-slate-400 dark:text-slate-300">
                                        <Unicons.UilCheckCircle
                                            width="18px"
                                            className="text-lg text-green-600 me-1"
                                        />
                                        <span>Includes all Starter features</span>
                                    </li>
                                    <li className="flex items-center my-1 text-slate-400 dark:text-slate-300">
                                        <Unicons.UilCheckCircle
                                            width="18px"
                                            className="text-lg text-green-600 me-1"
                                        />
                                        <span>Includes all Pro features</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-slate-400 dark:text-slate-300 mt-2">
                        <span className="text-[#3b82f6]">*</span>No credit card required
                    </div>
                </div>
            </section>
        </>
    );
}
