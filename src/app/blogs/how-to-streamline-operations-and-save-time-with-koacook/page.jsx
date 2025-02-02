import Image from 'next/image';
import * as Unicons from '@iconscout/react-unicons';
import Blog from '@/app/component/Blog';
import Link from 'next/link';

const BlogDetails = () => {
    return (
        <div>
            <section className="py-28 w-full table relative bg-[url('/images/bg/auth.jpg')] bg-top bg-no-repeat">
                <div className="absolute inset-0 bg-slate-950/80"></div>

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <div className="mb-3 font-medium leading-normal text-3xl mt-10 text-white">
                            How to Streamline Operations and Save Time with KoaCook
                        </div>

                        <ul className="list-none mt-6">
                            <li className="inline-block text-white/50 mx-5">
                                <span className="text-white block">Author:</span>
                                <span className="block">KoaCook</span>
                            </li>
                            <li className="inline-block text-white/50 mx-5">
                                <span className="text-white block">Date:</span>
                                <span className="block">30th January 2025</span>
                            </li>
                            <li className="inline-block text-white/50 mx-5">
                                <span className="text-white block">Time:</span>
                                <span className="block">7 Min Read</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                                <Image
                                    src="/images/blog/2.jpg"
                                    className="rounded-md"
                                    alt=""
                                    width={688}
                                    height={430}
                                />

                                <div className="mt-6">
                                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        How to Streamline Operations and Save Time with KoaCook
                                    </h1>
                                    <p className="text-slate-400 mb-4">
                                        In today’s fast-paced restaurant industry, managing
                                        operations efficiently can make all the difference in
                                        providing a seamless customer experience and boosting
                                        profitability. With the increasing need for restaurant
                                        management systems, KoaCook stands out as a powerful tool
                                        that helps restaurant owners streamline their daily
                                        operations. Whether it’s managing orders, inventory, or
                                        staff, KoaCook simplifies these processes and saves valuable
                                        time.
                                    </p>

                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                                        Automated Order Management
                                    </h2>
                                    <p className="text-slate-400 mt-3">
                                        One of the most significant ways KoaCook helps save time is
                                        by automating order management. Instead of manually entering
                                        orders and tracking them on paper or spreadsheets, KoaCook
                                        allows restaurant staff to manage orders through an
                                        intuitive digital platform. This feature helps reduce human
                                        error, speeds up order processing, and ensures smooth
                                        communication between kitchen and front-of-house staff.
                                    </p>

                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                                        Inventory Tracking & Alerts
                                    </h2>
                                    <p className="text-slate-400 mt-3">
                                        KoaCook’s inventory management system provides real-time
                                        tracking of your stock, automatically updating levels with
                                        each sale. This makes it easier to avoid stock-outs or
                                        overstocking. Additionally, KoaCook sends you alerts when
                                        items are running low, ensuring that you never run out of
                                        essential ingredients during service hours.
                                    </p>

                                    <div className="italic border-x-4 border-[#3b82f6] rounded-ss-xl rounded-ee-xl mt-6 p-4">
                                        <p className="text-slate-400">
                                            "In the restaurant business, time is money. By using
                                            KoaCook, I’ve been able to automate tasks that
                                            previously took up to an hour each day, allowing me to
                                            focus more on delivering an exceptional customer
                                            experience."
                                        </p>
                                    </div>

                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                                        Efficient Staff Scheduling
                                    </h2>
                                    <p className="text-slate-400 mt-3">
                                        KoaCook’s staff management feature allows you to create and
                                        manage shift schedules with ease. You can assign shifts,
                                        track hours worked, and ensure that you have the right team
                                        on duty during peak times. This feature saves time by
                                        eliminating the need for manual scheduling and reduces the
                                        chance of scheduling conflicts.
                                    </p>

                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                                        Customer Engagement & Marketing
                                    </h2>
                                    <p className="text-slate-400 mt-3">
                                        KoaCook also enables you to build deeper customer
                                        relationships by offering tailored promotions and loyalty
                                        programs. The system tracks customer preferences, allowing
                                        you to send personalized messages or discounts, increasing
                                        repeat business and customer satisfaction. This not only
                                        saves time but helps drive more sales.
                                    </p>

                                    <p className="text-slate-400 mt-3">
                                        With these features, KoaCook has proven itself as a
                                        must-have tool for modern restaurants looking to enhance
                                        efficiency, save time, and ultimately, boost their bottom
                                        line. By automating routine tasks and streamlining
                                        operations, restaurant owners can focus on what matters most
                                        – providing excellent food and service to customers.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                                <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                                <form className="mt-8">
                                    <div className="grid lg:grid-cols-12 gap-6">
                                        <div className="lg:col-span-6">
                                            <input
                                                name="name"
                                                id="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="Name:"
                                            />
                                        </div>

                                        <div className="lg:col-span-6">
                                            <input
                                                name="email"
                                                id="email"
                                                type="email"
                                                className="form-input"
                                                placeholder="Email:"
                                            />
                                        </div>

                                        <div className="lg:col-span-12">
                                            <textarea
                                                name="comments"
                                                id="comments"
                                                className="form-input textarea h-28"
                                                placeholder="Message:"
                                            ></textarea>
                                        </div>

                                        <div className="lg:col-span-12">
                                            <button
                                                type="submit"
                                                id="submit"
                                                name="send"
                                                className="btn bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md h-11 justify-center flex items-center"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="sticky top-20">
                                <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
                                    Author
                                </h5>
                                <div className="text-center mt-8">
                                    <Image
                                        src="/images/logo_no_text.png"
                                        className="h-24 w-24 mx-auto rounded-full shadow mb-4"
                                        alt=""
                                        width={96}
                                        height={96}
                                    />

                                    <div className="text-lg font-medium transition-all duration-500 ease-in-out h5">
                                        KoaCook
                                    </div>
                                </div>

                                <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                                    Social sites
                                </h5>
                                <ul className="list-none text-center mt-8 gap-1 flex justify-center">
                                    <li className="inline">
                                        <a
                                            href="https://www.linkedin.com/company/koacookofficial/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-[#3b82f6] hover:text-white hover:bg-[#3b82f6]"
                                        >
                                            <Unicons.UilLinkedin className="h-5 w-5" />
                                        </a>
                                    </li>
                                    <li className="inline">
                                        <a
                                            href="https://x.com/koacookofficial"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-[#3b82f6] hover:text-white hover:bg-[#3b82f6]"
                                        >
                                            <Unicons.UilTwitter className="h-5 w-5" />
                                        </a>
                                    </li>
                                    <li className="inline">
                                        <a
                                            href="https://www.instagram.com/koacookofficial"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-[#3b82f6] hover:text-white hover:bg-[#3b82f6]"
                                        >
                                            <Unicons.UilInstagram className="h-5 w-5" />
                                        </a>
                                    </li>
                                    <li className="inline">
                                        <a
                                            href="https://www.facebook.com/koacookofficial"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-[#3b82f6] hover:text-white hover:bg-[#3b82f6]"
                                        >
                                            <Unicons.UilFacebookF className="h-5 w-5" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Blog />

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl font-medium">
                            Have Question? Get in touch!
                        </h3>

                        <p className="text-slate-400 max-w-xl mx-auto">
                            This is just a simple text made for this unique and awesome template,
                            you can replace it with any text.
                        </p>

                        <div className="mt-6">
                            <Link
                                href="/#contact"
                                className="py-2 px-5 inline-flex items-center font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md"
                            >
                                <Unicons.UilEnvelope className="inline-block mr-1" /> Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetails;
