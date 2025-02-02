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
                            5 Trends Shaping the Future of Restaurants in 2025
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
                                <span className="block">8 Min Read</span>
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
                                    src="/images/blog/1.jpg"
                                    className="rounded-md"
                                    alt=""
                                    width={688}
                                    height={430}
                                />

                                <div className="mt-6">
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                        5 Trends Shaping the Future of Restaurants in 2025
                                    </h1>
                                    <p className="text-slate-400 mt-4">
                                        The restaurant industry is evolving faster than ever, with
                                        technology, customer preferences, and global challenges
                                        driving innovation. As we step into 2025, here are five key
                                        trends that will redefine how restaurants operate and serve
                                        their customers.
                                    </p>

                                    {/* Trend 1 */}
                                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6">
                                        1. AI-Powered Automation & Smart Kitchens
                                    </h2>
                                    <p className="text-slate-400 mt-2">
                                        Artificial Intelligence (AI) is revolutionizing restaurant
                                        operations, from automating order-taking with AI chatbots to
                                        optimizing ingredient usage with smart inventory systems.
                                        Many restaurants are integrating robotic chefs, predictive
                                        ordering systems, and AI-driven menu suggestions to
                                        streamline efficiency and reduce food waste.
                                    </p>
                                    <p className="text-slate-400 italic border-x-4 border-blue-500 rounded-ss-xl rounded-ee-xl mt-3 p-3">
                                        "Restaurants using AI-powered kitchen assistants have
                                        reported a 30% increase in efficiency and reduced
                                        operational costs."
                                    </p>

                                    {/* Trend 2 */}
                                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6">
                                        2. Hyper-Personalized Dining Experiences
                                    </h2>
                                    <p className="text-slate-400 mt-2">
                                        With the rise of data analytics and machine learning,
                                        restaurants are offering hyper-personalized experiences to
                                        customers. AI-driven customer insights help restaurants
                                        tailor recommendations, loyalty rewards, and even meal
                                        customization based on dietary preferences and past orders.
                                    </p>
                                    <p className="text-slate-400 mt-2">
                                        Personalized marketing campaigns and smart POS systems allow
                                        restaurants to engage customers with special offers, making
                                        dining experiences more relevant and enjoyable.
                                    </p>

                                    {/* Trend 3 */}
                                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6">
                                        3. The Rise of Ghost Kitchens & Virtual Brands
                                    </h2>
                                    <p className="text-slate-400 mt-2">
                                        Ghost kitchens (delivery-only restaurants) are booming due
                                        to the increasing demand for food delivery. These kitchens
                                        operate without traditional dine-in spaces, allowing
                                        businesses to focus on efficiency and cost-effectiveness.
                                    </p>
                                    <p className="text-slate-400 mt-2">
                                        Virtual brands—restaurants that exist solely online—are
                                        leveraging social media and food delivery apps to attract
                                        customers, often experimenting with different cuisines and
                                        concepts without the risk of high overhead costs.
                                    </p>

                                    {/* Trend 4 */}
                                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6">
                                        4. Sustainable & Eco-Friendly Practices
                                    </h2>
                                    <p className="text-slate-400 mt-2">
                                        Sustainability is no longer optional; it’s a necessity.
                                        Restaurants are adopting eco-friendly practices like
                                        zero-waste cooking, biodegradable packaging, and locally
                                        sourced ingredients.
                                    </p>
                                    <p className="text-slate-400 italic border-x-4 border-blue-500 rounded-ss-xl rounded-ee-xl mt-3 p-3">
                                        "A 2025 study shows that 73% of consumers prefer dining at
                                        eco-conscious restaurants that prioritize sustainability."
                                    </p>

                                    {/* Trend 5 */}
                                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6">
                                        5. Blockchain for Food Safety & Transparency
                                    </h2>
                                    <p className="text-slate-400 mt-2">
                                        Blockchain technology is being integrated into restaurant
                                        supply chains to enhance food safety and transparency.
                                        Customers can scan QR codes to trace the origin of their
                                        food, ensuring quality and ethical sourcing.
                                    </p>
                                    <p className="text-slate-400 mt-2">
                                        This trend is especially significant in high-end restaurants
                                        and health-conscious markets, where trust and authenticity
                                        are crucial to customer decisions.
                                    </p>

                                    {/* Conclusion */}
                                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6">
                                        Final Thoughts
                                    </h2>
                                    <p className="text-slate-400 mt-2">
                                        The restaurant industry in 2025 will be more tech-driven,
                                        sustainable, and customer-focused than ever. Restaurants
                                        that embrace these trends will stay ahead of the competition
                                        and provide exceptional dining experiences.
                                    </p>
                                    <p className="text-slate-400 mt-2">
                                        What do you think about these trends? Are you ready for the
                                        future of dining? Share your thoughts in the comments!
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
